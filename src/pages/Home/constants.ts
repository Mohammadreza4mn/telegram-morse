import { TTranslateMode } from "./interface";

const translateDefaultMode: TTranslateMode = "textToMorse";
const copyrightMessage =
  "Add the bot's address to the end of the message when you copy it.";
const messageMode = { checked: "private", unchecked: "public" };
const secretKey = "-.-.-.-.";
const confirmPrivateMessages = `This message is confidential, if you are the recipient, select ok and know that we need your phone number for decoding, and if you are not the recipient, please select cancel.
Note: Your phone number is not stored anywhere.`;

export {
  translateDefaultMode,
  copyrightMessage,
  messageMode,
  secretKey,
  confirmPrivateMessages,
};
