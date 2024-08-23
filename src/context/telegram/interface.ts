import { ReactNode } from "react";

interface ITelegramContext {
  firstName: string;
  username?: string;
  onEvent: (eventType: string, callback: () => void) => void;
  showAlert: (message: string) => void;
  close: () => void;
  expand: () => void;
  MainButton: {
    setParams: (params: Partial<IMainButtonParams>) => void;
  };
  requestContact: (
    callback: (status: boolean, res: IRequestContactCallback) => void
  ) => void;
  showConfirm: (message: string, callback: (status: boolean) => void) => void;
}

interface IMainButtonParams {
  text: string;
  color: string;
  text_color: string;
  is_active: boolean;
  is_visible: boolean;
}

interface IRequestContactCallback {
  responseUnsafe: {
    contact: {
      phone_number: string;
    };
  };
}

interface ITelegramProvider {
  children: ReactNode;
}

export type { ITelegramContext, ITelegramProvider };
