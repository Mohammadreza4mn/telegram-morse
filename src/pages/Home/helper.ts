import morseTable from "constants/morseTable";
import { secretKey } from "./constants";

const translateTextToMorse = (text: string) => {
  const textArray = text.toLocaleUpperCase().split("");

  const morseCode = textArray.reduce(
    (accumulator, currentValue) =>
      accumulator + `${morseTable[currentValue] || "?"} `,
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
        accumulator + (morseTableReverse[currentValue] || "?"),
      ""
    )
    .toLowerCase();

  return text;
};

const encodeString = (text: string) => {
  const textReversed = text.split("").reverse().join("");

  return textReversed;
};

const decodeRecipientInfo = (morseCode: string) => {
  const arrayMorseCode = morseCode.split(" ");

  const { 0: indexStart, 1: indexEnd } = [
    arrayMorseCode.indexOf(secretKey),
    arrayMorseCode.lastIndexOf(secretKey),
  ];

  const arrayMorseCodeRecipient = arrayMorseCode.splice(
    indexStart,
    indexEnd - indexStart + 1
  );
  arrayMorseCodeRecipient.splice(0, 1);
  arrayMorseCodeRecipient.splice(-1, 1);
  const morseCodeRecipient = arrayMorseCodeRecipient.reverse().join(" ");
  const recipientInfo = translateMorseToText(morseCodeRecipient);

  const morseCodeWithoutRecipientInfo = arrayMorseCode.join(" ");

  return { recipientInfo, morseCodeWithoutRecipientInfo };
};

export {
  encodeString,
  decodeRecipientInfo,
  translateMorseToText,
  translateTextToMorse,
};
