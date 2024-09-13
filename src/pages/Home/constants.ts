import { TTranslateMode } from "./interface";

const translateDefaultMode: TTranslateMode = "textToMorse";
const messageMode = { checked: "private", unchecked: "public" };
const recipientKey = process.env.REACT_APP_RECIPIENT_KEY as string;
const timerKey = process.env.REACT_APP_TIMER_KEY as string;
const robotCopyright =
  "🤖translated by https://t.me/morse_code_translator_bot/start";
const confirmPrivateMessages = `This message is confidential, if you are the recipient, select Ok and know that we need your phone number for decoding, and if you are not the recipient, please select Cancel.
Note: Your phone number is not stored anywhere.`;

export {
  timerKey,
  messageMode,
  recipientKey,
  robotCopyright,
  translateDefaultMode,
  confirmPrivateMessages,
};
