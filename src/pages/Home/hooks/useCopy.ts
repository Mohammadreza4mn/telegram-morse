import { TTranslateMode } from "../interface";
import { useTelegram } from "context/telegram";
import { translateDefaultMode } from "../constants";
import { ChangeEventHandler, useState } from "react";

interface IUseCopy {
  translateMode: TTranslateMode;
  text: string;
  morseCode: string;
}

function useCopy({ translateMode, morseCode, text }: IUseCopy) {
  const webApp = useTelegram();
  const [hasCopyright, setHasCopyright] = useState(false);

  const handleChecked: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setHasCopyright(target.checked);

  const handleCopy = async () => {
    const entity =
      translateMode === translateDefaultMode
        ? { name: "Morse code", value: morseCode }
        : { name: "Text", value: text };

    try {
      await navigator.clipboard.writeText(
        hasCopyright
          ? `${entity.value}
🤖translated by @morse_code_translator_bot`
          : entity.value
      );

      webApp.showAlert(`${entity.name} copied to clipboard`);
    } catch (error) {
      webApp.showAlert(
        `Failed to copy ${entity.name}: ${JSON.stringify(error)}`
      );
    }
  };

  return { handleChecked, handleCopy };
}

export default useCopy;
