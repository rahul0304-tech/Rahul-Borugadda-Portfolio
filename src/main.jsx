import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { useEffect, useState } from 'react';
import PortfolioIntro from './components/PortfolioIntro';

function Root() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const removeTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showIntro && <PortfolioIntro fadeOut={fadeOut} />}
      {!showIntro && <App />}
    </>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
