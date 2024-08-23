import { TTranslateMode } from "../interface";
import { useTelegram } from "context/telegram";
import { ChangeEventHandler, useState } from "react";
import { encodeString, translateTextToMorse } from "../helper";
import { secretKey, translateDefaultMode } from "../constants";

interface IUseCopy {
  translateMode: TTranslateMode;
  text: string;
  morseCode: string;
}

function useCopy({ translateMode, morseCode, text }: IUseCopy) {
  const webApp = useTelegram();
  const [hasCopyright, setHasCopyright] = useState(false);
  const [recipientInfo, setRecipientInfo] = useState("");

  const handleToggleCopyright: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setHasCopyright(target.checked);

  const handleSetRecipientInfo = (value: string) => setRecipientInfo(value);

  const handleAddRecipientInfoToMorse = (morseCode: string) => {
    if (!recipientInfo) return morseCode;

    const recipientEncoded = `${secretKey} ${translateTextToMorse(
      encodeString(recipientInfo)
    )}${secretKey}`;

    const arrayMorseCode = morseCode.split(" ");
    arrayMorseCode.splice(arrayMorseCode.length / 2, 0, recipientEncoded);

    const arrayToString = arrayMorseCode.join(" ");

    return arrayToString;
  };

  const handleCopy = async () => {
    const entity =
      translateMode === translateDefaultMode
        ? {
            name: "Morse code",
            value: handleAddRecipientInfoToMorse(morseCode),
          }
        : { name: "Text", value: text };

    try {
      await navigator.clipboard.writeText(
        hasCopyright
          ? `${entity.value}
🤖translated by https://t.me/morse_code_translator_bot`
          : entity.value
      );

      webApp.showAlert(`${entity.name} copied to clipboard`);
    } catch (error) {
      webApp.showAlert(
        `Failed to copy ${entity.name}: ${JSON.stringify(error)}`
      );
    }
  };

  return {
    handleCopy,
    recipientInfo,
    handleToggleCopyright,
    handleSetRecipientInfo,
  };
}

export default useCopy;
