import { TTranslateMode } from "../interface";
import { useTelegram } from "context/telegram";
import { ChangeEventHandler, useState } from "react";
import {
  handleEncrypt,
  handleReverseString,
  makeSecretKey,
  translateMorseToText,
  translateTextToMorse,
} from "../helper";
import { publicKey, robotCopyright, translateDefaultMode } from "../constants";

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

  const handleEncryptMorse = (morseCode: string) => {
    if (!recipientInfo) return morseCode;

    const recipientEncapsulation = `${publicKey} ${translateTextToMorse(
      handleEncrypt({ text: handleReverseString(recipientInfo) })
    )}${publicKey}`;

    const textEncrypted = handleEncrypt({
      text: translateMorseToText(morseCode),
      secretKey: makeSecretKey(recipientInfo),
    });

    const textToMorse = translateTextToMorse(textEncrypted);

    const arrayMorseCode = textToMorse.split(" ");
    arrayMorseCode.splice(arrayMorseCode.length / 2, 0, recipientEncapsulation);

    const arrayToString = arrayMorseCode.join(" ");

    return arrayToString;
  };

  const handleCopy = async () => {
    const entity =
      translateMode === translateDefaultMode
        ? {
            name: "Morse code",
            value: handleEncryptMorse(morseCode),
          }
        : { name: "Text", value: text };

    try {
      await navigator.clipboard.writeText(
        hasCopyright
          ? `${entity.value}
${robotCopyright}`
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
