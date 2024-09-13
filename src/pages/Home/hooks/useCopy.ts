import { TTranslateMode } from "../interface";
import { useTelegram } from "context/telegram";
import { ChangeEventHandler, useState } from "react";
import {
  handleEncrypt,
  joinEncapsulations,
  makeEncapsulation,
  makeSecretKey,
  translateMorseToText,
  translateTextToMorse,
} from "../helper";
import {
  recipientKey,
  robotCopyright,
  timerKey,
  translateDefaultMode,
} from "../constants";

interface IUseCopy {
  translateMode: TTranslateMode;
  text: string;
  morseCode: string;
}

function useCopy({ translateMode, morseCode, text }: IUseCopy) {
  const webApp = useTelegram();
  const [messageTimer, setMessageTimer] = useState(NaN);
  const [recipientInfo, setRecipientInfo] = useState("");

  const handleAddMessageTimer: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setMessageTimer(+new Date(target.value));

  const handleSetRecipientInfo = (value: string) => setRecipientInfo(value);

  const handleEncryptMorse = (morseCode: string) => {
    if (!recipientInfo && !messageTimer) return morseCode;

    const messageTimerEncapsulation = makeEncapsulation({
      data: messageTimer,
      key: timerKey,
    });

    const recipientEncapsulation = makeEncapsulation({
      data: recipientInfo,
      key: recipientKey,
    });

    const textEncrypted = handleEncrypt({
      text: translateMorseToText(morseCode),
      secretKey: makeSecretKey(recipientInfo || messageTimer + ""),
    });

    const textToMorse = translateTextToMorse(textEncrypted);

    const arrayMorseCode = textToMorse.split(" ");
    arrayMorseCode.splice(
      arrayMorseCode.length / 2,
      0,
      joinEncapsulations([recipientEncapsulation, messageTimerEncapsulation])
    );

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
      await navigator.clipboard.writeText(`${entity.value}
${robotCopyright}`);

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
    handleAddMessageTimer,
    handleSetRecipientInfo,
  };
}

export default useCopy;
