import { useTelegram } from "context/telegram";
import { ChangeEventHandler, useEffect, useState } from "react";
import {
  decodeRecipientInfo,
  translateMorseToText,
  translateTextToMorse,
} from "../helper";
import { confirmPrivateMessages, secretKey } from "../constants";

function useForm() {
  const webApp = useTelegram();
  const [text, setText] = useState("");
  const [morseCode, setMorseCode] = useState("");

  const handleTextToMorse: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value },
  }) => {
    const morseCode = translateTextToMorse(value);

    setText(value);
    setMorseCode(morseCode);
  };

  const handleMorseToText: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value },
  }) => {
    if (value.includes(secretKey)) {
      handleDealingPrivateMessages(value);
    }

    handleSetMorseCode(value);
  };

  const handleDealingPrivateMessages = (morseCode: string) => {
    webApp.showConfirm(confirmPrivateMessages, (status) => {
      if (status) {
        webApp.requestContact(status, ({ responseUnsafe }) => {
          if (status) {
            const { recipientInfo, morseCodeWithoutRecipientInfo } =
              decodeRecipientInfo(morseCode);

            const isRecipient = [
              responseUnsafe.contact.phone_number,
              webApp.username,
            ].includes(recipientInfo);

            if (isRecipient) {
              handleSetMorseCode(morseCode, morseCodeWithoutRecipientInfo);
              return;
            } else {
              webApp.showAlert(
                "This message is not for you and you are not able to read it."
              );
              handleSetMorseCodeAndExit(morseCode);
            }
          } else {
            webApp.showAlert(
              "We do not have access to your phone number and without it we cannot decipher your message."
            );
            handleSetMorseCodeAndExit(morseCode);
          }
        });
      } else {
        handleSetMorseCodeAndExit(morseCode);
      }
    });
  };

  const handleSetMorseCode = (
    morseCode: string,
    morseCodeWithoutRecipientInfo?: string
  ) => {
    const text = translateMorseToText(
      morseCodeWithoutRecipientInfo || morseCode
    );

    setMorseCode(morseCode);
    setText(text);
  };

  const handleSetMorseCodeAndExit = (morseCode: string) => {
    setMorseCode(morseCode);
    return;
  };

  const handleClearTextarea = () => {
    setText("");
    setMorseCode("");
  };

  useEffect(() => {
    webApp.expand();

    const welcomeMessage = `Hello dear ${webApp.firstName}; Welcome to Morse Code Translator. I hope you will convert  pretty messages into Morse code and send them to your cool friends.`;
    const morseCode = translateTextToMorse(welcomeMessage);

    const handleCloseApp = () => webApp.close();

    setText(welcomeMessage);
    setMorseCode(morseCode);

    webApp.onEvent("mainButtonClicked", handleCloseApp);

    webApp.MainButton.setParams({
      text: "Close App",
      is_visible: true,
    });
  }, [webApp]);

  return {
    text,
    morseCode,
    handleTextToMorse,
    handleMorseToText,
    handleClearTextarea,
  };
}

export default useForm;
