import { useEffect, useState } from "react";
import HackLoader from "./HackLoader";

const MIN_DISPLAY_TIME = 2500; // 2.5 seconds minimum

export default function LoaderWrapper() {
  const [showLoader, setShowLoader] = useState(true);
  const [startTime] = useState(Date.now());

  const handleComplete = () => {
    const elapsed = Date.now() - startTime;
    const remaining = MIN_DISPLAY_TIME - elapsed;

    if (remaining > 0) {
      // Wait for the remaining time before hiding
      setTimeout(() => {
        setShowLoader(false);
      }, remaining);
    } else {
      // Minimum time already passed, hide immediately
      setShowLoader(false);
    }
  };

  if (!showLoader) {
    return null;
  }

  return <HackLoader onComplete={handleComplete} />;
}
