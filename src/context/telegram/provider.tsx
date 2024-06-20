import { FC, useEffect, useState, useMemo, useContext } from "react";
import type { ITelegramContext, ITelegramProvider } from "./interface";
import TelegramContext from "./context";
import Spinner from "components/spinner";

const useTelegram = () => {
  const context = useContext(TelegramContext);

  if (!context) {
    throw new Error("useTelegram must be used inside the TelegramProvider");
  }

  return context;
};

const TelegramProvider: FC<ITelegramProvider> = ({ children }) => {
  const [webApp, setWebApp] = useState<ITelegramContext | null>(null);

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;

    if (app) {
      console.log("🚀 ~ useEffect ~ app:", app);
      app.ready();
      setWebApp(app);
    }
  }, []);

  const value = useMemo(() => {
    console.log("🚀 ~ useMemo ~ app:", webApp);
    return webApp;
  }, [webApp]);

  console.log("🚀 ~ TelegramProvider ~ app:", webApp);

  return (
    <TelegramContext.Provider value={value}>
      {value ? children : <Spinner text="Waiting connect to Telegram" />}
    </TelegramContext.Provider>
  );
};

export { TelegramProvider, useTelegram };
