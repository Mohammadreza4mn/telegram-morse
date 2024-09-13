import { useTelegram } from "context/telegram";
import { ChangeEventHandler, useEffect, useState } from "react";
import {
  checkMessageExpiration,
  handleMorseCodeDecrypt,
  removeCopyright,
  translateMorseToText,
  translateTextToMorse,
} from "../helper";
import { confirmPrivateMessages, recipientKey, timerKey } from "../constants";
import getCurrentDate from "api/getCurrentDate";

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
    const morseCodeWithoutCopyright = removeCopyright(value);

    const isMessageSpecific = [recipientKey, timerKey].some((key) =>
      morseCodeWithoutCopyright.includes(key)
    );

    if (isMessageSpecific) {
      handleDisappearMessage(morseCodeWithoutCopyright);
    } else {
      handleSetMorseCode(morseCodeWithoutCopyright);
    }
  };

  const handleDisappearMessage = async (morseCode: string) => {
    const isMessageDisappear = morseCode.includes(timerKey);

    if (isMessageDisappear) {
      setIsLoading(true);

      try {
        const { datetime } = await getCurrentDate();
        const currentTimestamp = Date.parse(datetime);
        setIsLoading(false);

        const { hasExpired, validMorseCode } = checkMessageExpiration({
          morseCode,
          timestamp: currentTimestamp,
        });

        if (!hasExpired) {
          const isPrivateMessage = validMorseCode.includes(recipientKey);

          if (isPrivateMessage) {
            handlePrivateMessage(validMorseCode);
          } else {
            const { morseCodeWithoutCapsule } = handleMorseCodeDecrypt({
              morseCode,
              capsuleKey: timerKey,
            });

            handleSetMorseCode(morseCodeWithoutCapsule);
          }
        } else {
          webApp.showAlert("This message has expired");
          setMorseCode("");
        }
      } catch (error) {
        webApp.showAlert("An error occurred, please try again");
        setMorseCode("");
      } finally {
        setIsLoading(false);
      }
    } else {
      handlePrivateMessage(morseCode);
    }
  };

  const handlePrivateMessage = (morseCode: string) => {
    webApp.showConfirm(confirmPrivateMessages, (status) => {
      if (status) {
        setIsLoading(true);

        webApp.requestContact((status, { responseUnsafe }) => {
          if (status) {
            setIsLoading(false);

            const { decryptCapsule, morseCodeWithoutCapsule } =
              handleMorseCodeDecrypt({
                morseCode,
                capsuleKey: recipientKey,
              });

            const phoneNumber = responseUnsafe.contact?.phone_number?.replace(
              "98",
              "0"
            );

            const isRecipient = [phoneNumber, webApp?.username].includes(
              decryptCapsule
            );

            if (isRecipient) {
              handleSetMorseCode(morseCodeWithoutCapsule);
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
