import { ReactNode } from "react";

interface ITelegramContext {
  username: string;
  onEvent: Function;
  showAlert: Function;
  close: Function;
  expand: Function;
  MainButton: {
    setParams: Function;
  };
}

interface ITelegramProvider {
  children: ReactNode;
}

export type { ITelegramContext, ITelegramProvider };
