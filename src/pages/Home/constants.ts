import { TTranslateMode } from "./interface";

const translateDefaultMode: TTranslateMode = "textToMorse";
const copyrightMessage =
  "Add the bot's address to the end of the message when you copy it.";
const messageMode = { checked: "private", unchecked: "public" };
const publicKey = "-.-.-.-.";
const robotCopyright =
  "🤖translated by https://t.me/morse_code_translator_bot/start";
const confirmPrivateMessages = `This message is confidential, if you are the recipient, select Ok and know that we need your phone number for decoding, and if you are not the recipient, please select Cancel.
Note: Your phone number is not stored anywhere.`;

export {
  publicKey,
  messageMode,
  robotCopyright,
  copyrightMessage,
  translateDefaultMode,
  confirmPrivateMessages,
};
