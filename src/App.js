import React, { createContext, useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Github from "./Pages/Github";
import axios from "axios";
import ErrorFallback from "./components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";
import Hero from "./components/Hero";
import { Scrollbars } from "react-custom-scrollbars-2";

export const ThemeContext = createContext("null");

function App() {
  const [theme, setTheme] = useState("dark");
  const [explode, setExplode] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <HelmetProvider>
      <title>Developer Portfolio</title>
      <meta name="description" content="Frontend Developer" />
      <link rel="canonical" href="/Portfolio" />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <section style={{ height: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "100vh",
            }}
            className="Hero bg-green-600"
            id={theme}
          >
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => setExplode(false)}
              {...{ explode }}
            >
              {/* <Navbar/>
              <Hero/> */}
              <Scrollbars style={{ width: "100%", height: "100%" }}>
                <Hero />

                <Github />
              </Scrollbars>
              <div
                style={{
                  minHeight: "100%",
                  flexGrow: "1",
                  flexDirection: "column",
                }}
              ></div>
            </ErrorBoundary>
          </div>
        </section>
      </ThemeContext.Provider>
    </HelmetProvider>
  );
}

export default App;
