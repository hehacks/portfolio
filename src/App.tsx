import "../public/assets/scss/main.scss";
import "odometer/themes/odometer-theme-default.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import HomePage2 from "./pages/homes/index-02";
import HackLoader from "./components/common/HackLoader";
import ScrollTopBehaviour from "./components/common/ScrollToTopBehaviour";
import GlobaleffectProvider from "./components/common/GlobaleffectProvider";
import { ModalUIProvider } from "./context/ModalUIContext";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Ensure loader shows for at least 1.5 seconds
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoaderComplete = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    // Hide loader only when both animation is complete AND minimum time has elapsed
    if (animationComplete && minTimeElapsed) {
      setShowLoader(false);
    }
  }, [animationComplete, minTimeElapsed]);

  return (
    <>
      {showLoader && <HackLoader onComplete={handleLoaderComplete} />}
      
      {!showLoader && (
        <>
          <ToastContainer
            position="bottom-left"
            // autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ height: "100vh" }}
              >
                <h2>Something went wrong.</h2>
                <pre style={{ color: "red" }}>{error.message}</pre>
                <button
                  className="btn btn-primary mt-3"
                  onClick={resetErrorBoundary}
                >
                  Try again
                </button>
              </div>
            )}
          >
            <ModalUIProvider>
              <Routes>
                <Route path="/" element={<HomePage2 />} />
              </Routes>
            </ModalUIProvider>

            <ScrollTopBehaviour />
            <GlobaleffectProvider />
          </ErrorBoundary>
        </>
      )}
    </>
  );
}

export default App;
