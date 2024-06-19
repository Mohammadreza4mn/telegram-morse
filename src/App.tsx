import Home from "pages/Home";
import GlobalStyles from "styles/global";
import TelegramProvider from "context/telegram";
import ThemeProvider from "context/theme";

function App() {
  return (
    <TelegramProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </TelegramProvider>
  );
}

export default App;
