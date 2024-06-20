import { ChangeEventHandler, useEffect, useState } from "react";
import Textarea from "components/input/Textarea";
import morseTable from "constants/morseTable";
import { Container, ButtonSwap, TextareaWrap, TitleWrap } from "./styled";
import type { TTranslateMode } from "./interface";
import { useTelegram } from "context/telegram";

function Home() {
  const [morseCode, setMorseCode] = useState("");
  const [text, setText] = useState("");
  const webApp = useTelegram();

  const [translateMode, setTranslateMode] =
    useState<TTranslateMode>("textToMorse");

  useEffect(() => {
    console.log("🚀 ~ Home,useEffect ~ webApp:", webApp);
  }, []);

  console.log("🚀 ~ Home,body ~ webApp:", webApp);

  const handleTranslateTextToMorse: ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    const textArray = target.value.toLocaleUpperCase().split("");

    const morseCode = textArray.reduce(
      (accumulator, currentValue) =>
        accumulator + `${morseTable[currentValue] || "/"} `,
      ""
    );

    setText(target.value);
    setMorseCode(morseCode);
  };

  const handleTranslateMorseToText: ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    const codeArray = target.value.trim().split(" ");

    const morseTableReverse = Object.fromEntries(
      Object.entries(morseTable)
        .filter(([key]) => key !== "\n")
        .map((item) => item.reverse())
    );

    const text = codeArray.reduce(
      (accumulator, currentValue) =>
        accumulator + (morseTableReverse[currentValue] || " "),
      ""
    );

    setMorseCode(target.value);
    setText(text);
  };

  const handleSwapTranslateMode = () =>
    setTranslateMode((previousState) =>
      previousState === "morseToText" ? "textToMorse" : "morseToText"
    );

  return (
    <Container>
      <TitleWrap
        direction={translateMode === "textToMorse" ? "row" : "row-reverse"}
      >
        <strong>Text</strong>
        <ButtonSwap
          className="titleWrap__button"
          onClick={handleSwapTranslateMode}
        />
        <strong>Morse</strong>
      </TitleWrap>

      <TextareaWrap
        direction={
          translateMode === "textToMorse" ? "column" : "column-reverse"
        }
      >
        <Textarea
          rows={8}
          name="text"
          autoFocus
          value={text}
          onChange={handleTranslateTextToMorse}
          disabled={translateMode === "morseToText"}
        />
        <Textarea
          rows={8}
          name="morse"
          value={morseCode}
          onChange={handleTranslateMorseToText}
          disabled={translateMode === "textToMorse"}
        />
      </TextareaWrap>
    </Container>
  );
}

export default Home;
