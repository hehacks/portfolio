import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// ✅ REGISTER SERVICE WORKER FOR PWA
import { registerSW } from "virtual:pwa-register";
registerSW({
  onNeedRefresh() {
    console.log("🟡 New content available. Please refresh.");
  },
  onOfflineReady() {
    console.log("✅ App is ready to work offline.");
  },
});

reportWebVitals((metric) => {
  console.log(metric);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
