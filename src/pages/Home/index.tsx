import { useState } from "react";
import * as Styled from "./styled";
import { useCopy, useForm } from "./hooks";
import type { TTranslateMode } from "./interface";
import { ReactComponent as Swap } from "assets/icon/swap.svg";
import { ReactComponent as Copy } from "assets/icon/copy.svg";
import { ReactComponent as Clear } from "assets/icon/clear.svg";
import { translateDefaultMode } from "./constants";
import { TranslationSettings } from "./components";

function Home() {
  const [translateMode, setTranslateMode] =
    useState<TTranslateMode>(translateDefaultMode);

  const {
    text,
    morseCode,
    handleTextToMorse,
    handleMorseToText,
    handleClearTextarea,
  } = useForm();

  const {
    handleCopy,
    recipientInfo,
    handleToggleCopyright,
    handleSetRecipientInfo,
  } = useCopy({
    text,
    morseCode,
    translateMode,
  });

  const handleSwapTranslateMode = () =>
    setTranslateMode((previousState) =>
      previousState === translateDefaultMode ? "morseToText" : "textToMorse"
    );

  return (
    <Styled.Container>
      <Styled.TitleWrap
        direction={
          translateMode === translateDefaultMode ? "row" : "row-reverse"
        }
      >
        <strong>Text</strong>
        <Styled.ButtonSwap
          title="swap translate mode"
          onClick={handleSwapTranslateMode}
        >
          <Swap />
        </Styled.ButtonSwap>
        <strong>Morse</strong>
      </Styled.TitleWrap>

      <Styled.TextareaWrap
        direction={
          translateMode === translateDefaultMode ? "column" : "column-reverse"
        }
      >
        <Styled.STextarea
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

        <Styled.ButtonClear
          title="clear input"
          color="errorColor"
          onClick={handleClearTextarea}
        >
          <Clear />
        </Styled.ButtonClear>

        <Styled.STextarea
          rows={6}
          name="morse"
          value={morseCode}
          onChange={handleMorseToText}
          disabled={translateMode === translateDefaultMode}
        />

        <Styled.ButtonCopy
          title="copy"
          color="successColor"
          onClick={handleCopy}
        >
          <Copy />
        </Styled.ButtonCopy>
      </Styled.TextareaWrap>

      <TranslationSettings
        recipientInfo={recipientInfo}
        handleToggleCopyright={handleToggleCopyright}
        handleSetRecipientInfo={handleSetRecipientInfo}
      />
    </Styled.Container>
  );
}

export default Home;
