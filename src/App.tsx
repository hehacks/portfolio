import "../public/assets/scss/main.scss";
import "odometer/themes/odometer-theme-default.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import HackLoader from "./components/common/HackLoader";
import ScrollTopBehaviour from "./components/common/ScrollToTopBehaviour";
import GlobaleffectProvider from "./components/common/GlobaleffectProvider";
import { ModalUIProvider } from "./context/ModalUIContext";

// Lazy-load routes — they are only parsed/executed when navigated to
const HomePage2     = lazy(() => import("./pages/homes/index-02"));
const BlogDetailPage = lazy(() => import("./pages/blog"));

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Reduced from 1500ms → 500ms — still long enough for the animation
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoaderComplete = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
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
            autoClose={3000}
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
              {/* Suspense fallback is invisible — loader already handled above */}
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/"           element={<HomePage2 />} />
                  <Route path="/blog/:slug" element={<BlogDetailPage />} />
                </Routes>
              </Suspense>
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
