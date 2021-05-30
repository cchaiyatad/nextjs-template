import { Navbar } from "../src/components/navbar";
import { Footer } from "../src/components/footer";
import { GlobalStyle } from "GlobalStyle";
import { ThemeProvider } from "providers/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <div className={"body-wrapper"}>
        <Navbar />
        <div className={"content-wrapper"}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
