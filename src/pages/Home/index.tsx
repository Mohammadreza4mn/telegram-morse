import { ChangeEventHandler, useEffect, useState } from "react";
import {
  ButtonCopy,
  Container,
  TextareaWrap,
  TitleWrap,
  ButtonSwap,
  ButtonClear,
} from "./styled";
import type { TTranslateMode } from "./interface";
import { useTelegram } from "context/telegram";
import { translateMorseToText, translateTextToMorse } from "./helper";
import { translateDefaultMode } from "./constants";
import { Textarea } from "components";
import { ReactComponent as Swap } from "assets/icon/swap.svg";
import { ReactComponent as Clear } from "assets/icon/clear.svg";
import { ReactComponent as Copy } from "assets/icon/copy.svg";

function Home() {
  const [morseCode, setMorseCode] = useState("");
  const [text, setText] = useState("");
  const webApp = useTelegram();

  const [translateMode, setTranslateMode] =
    useState<TTranslateMode>(translateDefaultMode);

  console.log("🚀 ~ Home,body ~ webApp:", webApp);

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

  const handleSwapTranslateMode = () =>
    setTranslateMode((previousState) =>
      previousState === translateDefaultMode ? "morseToText" : "textToMorse"
    );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        translateMode === translateDefaultMode ? morseCode : text
      );

      webApp.showAlert("Text copied to clipboard");
    } catch (error) {
      webApp.showAlert(`Failed to copy text: ${JSON.stringify(error)}`);
    }
  };

  const handleClearTextarea = () => {
    setText("");
    setMorseCode("");
  };

  const handleCloseApp = () => webApp.close();

  useEffect(() => {
    console.log("🚀 ~ Home,useEffect ~ webApp:", webApp);

    webApp.expand();

    const welcomeMessage = `Hello dear ${webApp.username}; Welcome to Morse Code Translator. I hope you will convert  pretty messages into Morse code and send them to your cool friends.`;
    const morseCode = translateTextToMorse(welcomeMessage);

    setText(welcomeMessage);
    setMorseCode(morseCode);

    webApp.onEvent("mainButtonClicked", handleCloseApp);

    webApp.MainButton.setParams({
      text: "Close App",
      is_visible: true,
    });
  }, [webApp]);

  return (
    <Container>
      <TitleWrap
        direction={
          translateMode === translateDefaultMode ? "row" : "row-reverse"
        }
      >
        <strong>Text</strong>
        <ButtonSwap
          title="swap translate mode"
          onClick={handleSwapTranslateMode}
        >
          <Swap />
        </ButtonSwap>
        <strong>Morse</strong>
      </TitleWrap>

      <TextareaWrap
        direction={
          translateMode === translateDefaultMode ? "column" : "column-reverse"
        }
      >
        <Textarea
          rows={6}
          name="text"
          customStyle={{
            textTransform: "capitalize",
          }}
          autoFocus
          value={text}
          onChange={handleTextToMorse}
          disabled={translateMode !== translateDefaultMode}
        />

        <ButtonClear
          title="clear input"
          color="errorColor"
          onClick={handleClearTextarea}
        >
          <Clear />
        </ButtonClear>

        <ButtonCopy title="copy" color="successColor" onClick={handleCopy}>
          <Copy />
        </ButtonCopy>

        <Textarea
          rows={6}
          name="morse"
          value={morseCode}
          onChange={handleMorseToText}
          disabled={translateMode === translateDefaultMode}
        />
      </TextareaWrap>
    </Container>
  );
}

export default Home;
