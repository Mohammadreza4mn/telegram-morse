import { createContext } from "react";
import type { ITelegramContext } from "./interface";

const TelegramContext = createContext<ITelegramContext | null>(null);

export { TelegramContext };
