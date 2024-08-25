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
  const [isLoading, setIsLoading] = useState(false);

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
    const isMessagePrivate = value.includes(secretKey);

    if (isMessagePrivate) {
      handleDealingPrivateMessages(value);
    } else {
      handleSetMorseCode(value);
    }
  };

  const handleDealingPrivateMessages = (morseCode: string) => {
    webApp.showConfirm(confirmPrivateMessages, (status) => {
      if (status) {
        setIsLoading(true);

        webApp.requestContact((status, { responseUnsafe }) => {
          if (status) {
            setIsLoading(false);

            const { recipientInfo, morseCodeWithoutRecipientInfo } =
              decodeRecipientInfo(morseCode);

            const phoneNumber = responseUnsafe.contact?.phone_number?.replace(
              "98",
              "0"
            );

            const isRecipient = [phoneNumber, webApp?.username].includes(
              recipientInfo
            );

            if (isRecipient) {
              handleSetMorseCode(morseCodeWithoutRecipientInfo);
            } else {
              webApp.showAlert(
                "This message is not for you and you are not able to read it."
              );
              setMorseCode("");
            }
          } else {
            setIsLoading(false);

            webApp.showAlert(
              "We do not have access to your phone number and without it we cannot decipher your message."
            );
            setMorseCode("");
          }
        });
      } else {
        setMorseCode("");
      }
    });
  };

  const handleSetMorseCode = (morseCode: string) => {
    const text = translateMorseToText(morseCode);

    setMorseCode(morseCode);
    setText(text);
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
    isLoading,
    handleTextToMorse,
    handleMorseToText,
    handleClearTextarea,
  };
}

export default useForm;
