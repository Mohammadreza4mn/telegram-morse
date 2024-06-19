import { ReactNode } from "react";

interface ITelegramContext {
  initData: string;
  initDataUnsafe: any;
  colorScheme: "light" | "dark";
}

interface ITelegramProvider {
  children: ReactNode;
}

export type { ITelegramContext, ITelegramProvider };
