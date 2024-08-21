import { useTelegram } from "context/telegram";
import { ChangeEventHandler, useEffect, useState } from "react";
import { translateMorseToText, translateTextToMorse } from "../helper";

function useForm() {
  const webApp = useTelegram();
  const [text, setText] = useState("");
  const [morseCode, setMorseCode] = useState("");

  const handleTextToMorse: ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    const morseCode = translateTextToMorse(target.value);

    setText(target.value);
    setMorseCode(morseCode);
  };

  const handleMorseToText: ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    const text = translateMorseToText(target.value);

    setMorseCode(target.value);
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
    handleTextToMorse,
    handleMorseToText,
    handleClearTextarea,
  };
}

export default useForm;
