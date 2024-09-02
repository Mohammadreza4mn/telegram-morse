import morseTable from "constants/morseTable";
import { publicKey, robotCopyright } from "./constants";

const translateTextToMorse = (text: string) => {
  const textArray = text.toLocaleUpperCase().split("");

  const morseCode = textArray.reduce(
    (accumulator, currentValue) =>
      `${accumulator}${morseTable[currentValue] || "?"} `,
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

const makeSecretKey = (text: string) => {
  const textToArray = text.split("");

  const sumCharCode = textToArray.reduce((accumulator, currentValue) => {
    let charCode = currentValue.codePointAt(0);

    if (charCode) {
      return accumulator + charCode;
    } else {
      return accumulator;
    }
  }, 0);

  return sumCharCode;
};

const handleDecrypt = ({
  text,
  secretKey = 0,
}: {
  text: string;
  secretKey?: number;
}) => {
  const arrayCharCode = text
    .split(" ")
    .map((item: string) => +item + secretKey);

  const decrypted = String.fromCodePoint(...arrayCharCode);

  return decrypted;
};

const handleEncrypt = ({
  text,
  secretKey = 0,
}: {
  text: string;
  secretKey?: number;
}) => {
  const encrypted = text
    .split("")
    .reduce((accumulator, currentValue, currentIndex) => {
      let acc = !!currentIndex ? `${accumulator} ` : "";
      let charCode = currentValue.codePointAt(0);

      if (charCode) {
        return `${acc}${Math.abs(charCode - secretKey)}`;
      } else {
        return accumulator;
      }
    }, "");

  return encrypted;
};

const handleDecryptionMorseCodeOperation = ({
  arrayMorseCode,
  secretKey,
}: {
  arrayMorseCode: Array<string>;
  secretKey?: number;
}) => {
  const joinArray = arrayMorseCode.join(" ");
  const decrypted = handleDecrypt({
    text: translateMorseToText(joinArray),
    secretKey,
  });

  return decrypted;
};

const handleMorseCodeDecrypt = (morseCode: string) => {
  const arrayMorseCode = morseCode.split(" ");

  const { 0: indexStart, 1: indexEnd } = [
    arrayMorseCode.indexOf(publicKey),
    arrayMorseCode.lastIndexOf(publicKey),
  ];

  const arrayMorseCodeRecipient = arrayMorseCode.splice(
    indexStart,
    indexEnd - indexStart + 1
  );
  arrayMorseCodeRecipient.splice(0, 1);
  arrayMorseCodeRecipient.splice(-1, 1);

  const recipientInfoDecrypted = handleDecryptionMorseCodeOperation({
    arrayMorseCode: arrayMorseCodeRecipient,
  });

  const textDecrypted = handleDecryptionMorseCodeOperation({
    arrayMorseCode,
    secretKey: makeSecretKey(recipientInfoDecrypted),
  });

  const morseCodeWithoutRecipientInfo = translateTextToMorse(textDecrypted);
  const recipientInfoReverse = handleReverseString(recipientInfoDecrypted);

  return {
    recipientInfo: recipientInfoReverse,
    morseCodeWithoutRecipientInfo,
  };
};

const removeCopyright = (morseCode: string) =>
  morseCode.replace(robotCopyright, "");

const handleReverseString = (text: string) => {
  const textReversed = text.split("").reverse().join("");

  return textReversed;
};

export {
  handleEncrypt,
  makeSecretKey,
  removeCopyright,
  handleReverseString,
  translateMorseToText,
  translateTextToMorse,
  handleMorseCodeDecrypt,
};
