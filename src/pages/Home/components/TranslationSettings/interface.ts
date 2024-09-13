import { ChangeEventHandler } from "react";

interface ITranslationSettings {
  handleAddMessageTimer: ChangeEventHandler<HTMLInputElement>;
  handleSetRecipientInfo: (value: string) => void;
  recipientInfo: string;
}

export type { ITranslationSettings };
