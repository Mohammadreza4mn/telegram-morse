import morseTable from "constants/morseTable";
import { robotCopyright, timerKey } from "./constants";

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
  // eslint-disable-next-line no-new-func
  const secretKey = new Function("text", process.env.REACT_APP_SECRET_FORMULA!)(
    text
  );

  return secretKey;
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
    .map((item: string) => +item - secretKey);

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
        return `${acc}${charCode + secretKey}`;
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

const handleMorseCodeDecrypt = ({
  morseCode,
  capsuleKey,
}: {
  morseCode: string;
  capsuleKey: string;
}) => {
  const { arrayMorseCodeCapsule, arrayMorseCodeWithoutCapsule } =
    handleExtractCapsule({
      morseCode,
      capsuleKey,
    });

  const capsuleDecrypted = handleDecryptionMorseCodeOperation({
    arrayMorseCode: arrayMorseCodeCapsule,
  });

  const textDecrypted = handleDecryptionMorseCodeOperation({
    arrayMorseCode: arrayMorseCodeWithoutCapsule,
    secretKey: makeSecretKey(capsuleDecrypted),
  });

  const morseCodeWithoutCapsule = translateTextToMorse(textDecrypted);
  const decryptCapsule = handleReverseString(capsuleDecrypted);

  return {
    decryptCapsule,
    morseCodeWithoutCapsule,
  };
};

const handleExtractCapsule = ({
  morseCode,
  capsuleKey,
}: {
  morseCode: string;
  capsuleKey: string;
}) => {
  const arrayMorseCodeWithoutCapsule = morseCode.split(" ");

  const { 0: indexStart, 1: indexEnd } = [
    arrayMorseCodeWithoutCapsule.indexOf(capsuleKey),
    arrayMorseCodeWithoutCapsule.lastIndexOf(capsuleKey),
  ];

  const arrayMorseCodeCapsule = arrayMorseCodeWithoutCapsule.splice(
    indexStart,
    indexEnd - indexStart + 1
  );
  arrayMorseCodeCapsule.splice(0, 1);
  arrayMorseCodeCapsule.splice(-1, 1);

  return { arrayMorseCodeWithoutCapsule, arrayMorseCodeCapsule };
};

const checkMessageExpiration = ({
  morseCode,
  timestamp,
}: {
  morseCode: string;
  timestamp: number;
}) => {
  const {
    arrayMorseCodeCapsule: arrayMorseCodeTimestamp,
    arrayMorseCodeWithoutCapsule,
  } = handleExtractCapsule({ morseCode, capsuleKey: timerKey });

  const timestampMessage = +handleReverseString(
    handleDecryptionMorseCodeOperation({
      arrayMorseCode: arrayMorseCodeTimestamp,
    })
  );

  return {
    hasExpired: timestampMessage < timestamp,
    validMorseCode: arrayMorseCodeWithoutCapsule.join(" "),
  };
};

const removeCopyright = (morseCode: string) =>
  morseCode.replace(robotCopyright, "");

const handleReverseString = (text: string) => {
  const textReversed = text.split("").reverse().join("");

  return textReversed;
};

const makeEncapsulation = ({
  data,
  key,
}: {
  data: string | number;
  key: string;
}) => {
  if (!data) return null;

  return `${key} ${translateTextToMorse(
    handleEncrypt({ text: handleReverseString(data + "") })
  )}${key}`;
};

const joinEncapsulations = (capsule: Array<string | null>) => {
  const capsuleList = capsule.filter(Boolean);
  const capsuleJoin = capsuleList.join(" ");

  return capsuleJoin;
};

export {
  handleEncrypt,
  handleDecrypt,
  makeSecretKey,
  removeCopyright,
  makeEncapsulation,
  joinEncapsulations,
  handleReverseString,
  translateMorseToText,
  translateTextToMorse,
  handleMorseCodeDecrypt,
  checkMessageExpiration,
};
