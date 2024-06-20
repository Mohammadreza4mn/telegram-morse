import morseTable from "constants/morseTable";

const translateTextToMorse = (text: string) => {
  const textArray = text.toLocaleUpperCase().split("");

  const morseCode = textArray.reduce(
    (accumulator, currentValue) =>
      accumulator + `${morseTable[currentValue] || "/"} `,
    ""
  );

  return morseCode;
};

const translateMorseToText = (morse: string) => {
  const codeArray = morse.trim().split(" ");

  const morseTableReverse = Object.fromEntries(
    Object.entries(morseTable)
      .filter(([key]) => key !== "\n")
      .map((item) => item.reverse())
  );

  const text = codeArray
    .reduce(
      (accumulator, currentValue) =>
        accumulator + (morseTableReverse[currentValue] || " "),
      ""
    )
    .toLowerCase();

  return text;
};

export { translateTextToMorse, translateMorseToText };
