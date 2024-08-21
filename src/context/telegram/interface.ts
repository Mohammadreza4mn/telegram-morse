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
    status: boolean,
    callback: (res: IRequestContactCallback) => void
  ) => void;
}

interface IMainButtonParams {
  text: string;
  color: string;
  text_color: string;
  is_active: boolean;
  is_visible: boolean;
}

interface IRequestContactCallback {
  status: "cancelled" | "sent";
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
