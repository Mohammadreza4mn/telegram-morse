import { ChangeEventHandler, useEffect, useState } from "react";
import Textarea from "components/input/Textarea";
import { ButtonWrap, Container, TextareaWrap, TitleWrap } from "./styled";
import type { TTranslateMode } from "./interface";
import { useTelegram } from "context/telegram";
import { translateMorseToText, translateTextToMorse } from "./helper";
import { translateDefaultMode } from "./constants";
import Button from "components/Button";
import { ReactComponent as Swap } from "assets/icon/swap.svg";
import { ReactComponent as Clear } from "assets/icon/clear.svg";
import { ReactComponent as Paste } from "assets/icon/paste.svg";
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

  const handlePaste = async () => {
    try {
      const value = await navigator.clipboard.readText();

      if (translateMode === translateDefaultMode) {
        const morseCode = translateTextToMorse(value);

        setText(value);
        setMorseCode(morseCode);
      } else {
        const text = translateMorseToText(value);

        setText(text);
        setMorseCode(value);
      }
    } catch (error) {
      webApp.showAlert(
        `Failed to read clipboard contents: ${JSON.stringify(error)}`
      );
    }
  };

  const handleClearTextarea = () => {
    setText("");
    setMorseCode("");
  };

  const handleCopyAndCloseApp = async () => {
    await handleCopy();
    webApp.close();
  };

  useEffect(() => {
    console.log("🚀 ~ Home,useEffect ~ webApp:", webApp);

    webApp.expand();

    const welcomeMessage = `Hello dear ${webApp.username}; Welcome to Morse Code Translator. I hope you will convert  pretty messages into Morse code and send them to your cool friends.`;
    const morseCode = translateTextToMorse(welcomeMessage);

    setText(welcomeMessage);
    setMorseCode(morseCode);

    webApp.onEvent("mainButtonClicked", handleCopyAndCloseApp);

    webApp.MainButton.setParams({
      text: "Close App And Copy Value",
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
        <Button
          className="titleWrap__button"
          title="swap translate mode"
          color="secondaryText"
          onClick={handleSwapTranslateMode}
        >
          <Swap />
        </Button>
        <strong>Morse</strong>
      </TitleWrap>

      <TextareaWrap
        direction={
          translateMode === translateDefaultMode ? "column" : "column-reverse"
        }
      >
        <Textarea
          rows={8}
          name="text"
          customStyle={{
            textTransform: "capitalize",
          }}
          autoFocus
          value={text}
          onChange={handleTextToMorse}
          disabled={translateMode !== translateDefaultMode}
        />

        <Button
          className="textareaWrap__btn--clear"
          title="clear input"
          color="errorBtn"
          onClick={handleClearTextarea}
        >
          <Clear />
        </Button>

        <ButtonWrap>
          <Button title="copy" color="primaryBtn" onClick={handleCopy}>
            <Copy />
          </Button>
          <Button title="paste" color="secondaryBtn" onClick={handlePaste}>
            <Paste />
          </Button>
        </ButtonWrap>

        <Textarea
          rows={8}
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
