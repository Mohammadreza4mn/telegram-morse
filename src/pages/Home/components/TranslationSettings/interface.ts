import { ChangeEventHandler } from "react";

interface ITranslationSettings {
  handleToggleCopyright: ChangeEventHandler<HTMLInputElement>;
  handleSetRecipientInfo: (value: string) => void;
  recipientInfo: string;
}

export type { ITranslationSettings };
