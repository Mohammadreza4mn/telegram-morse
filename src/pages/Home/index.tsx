import { useState } from "react";
import * as Styled from "./styled";
import { useCopy, useForm } from "./hooks";
import type { TTranslateMode } from "./interface";
import { ReactComponent as Swap } from "assets/icon/swap.svg";
import { ReactComponent as Copy } from "assets/icon/copy.svg";
import { ReactComponent as Clear } from "assets/icon/clear.svg";
import { translateDefaultMode } from "./constants";
import { TranslationSettings } from "./components";
import { Spinner } from "components";

function Home() {
  const [translateMode, setTranslateMode] =
    useState<TTranslateMode>(translateDefaultMode);

  const {
    text,
    morseCode,
    isLoading,
    handleTextToMorse,
    handleMorseToText,
    handleClearTextarea,
  } = useForm();

  const {
    handleCopy,
    recipientInfo,
    handleAddMessageTimer,
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
      {isLoading && <Spinner text="Loading ..." />}

      <TranslationSettings
        recipientInfo={recipientInfo}
        handleAddMessageTimer={handleAddMessageTimer}
        handleSetRecipientInfo={handleSetRecipientInfo}
      />

      <Styled.TextareaWrap
        direction={
          translateMode === translateDefaultMode ? "column" : "column-reverse"
        }
      >
        <Styled.STextarea
          name="text"
          customStyle={{
            textTransform: "capitalize",
          }}
          autoFocus
          value={text}
          onChange={handleTextToMorse}
          disabled={translateMode !== translateDefaultMode}
        />

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

        <Styled.ButtonClear
          title="clear input"
          color="errorColor"
          onClick={handleClearTextarea}
        >
          <Clear />
        </Styled.ButtonClear>

        <Styled.STextarea
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
    </Styled.Container>
  );
}

export default Home;
