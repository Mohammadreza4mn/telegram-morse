import { ReactNode } from "react";

interface ITelegramContext {
  username: string;
  onEvent: Function;
  showAlert: Function;
}

interface ITelegramProvider {
  children: ReactNode;
}

export type { ITelegramContext, ITelegramProvider };
