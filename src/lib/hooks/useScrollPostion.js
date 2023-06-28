import { useEffect, useState } from "react";

/**
 * This hook is used to get the value of the Y position of scroll in window
 * @returns current scroll position of Y axis
 */
const useScrollPostion = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    /**
     * Sets the scroll position
     */
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    // attach listener to window to capture the scroll
    window.addEventListener("scroll", updatePosition);

    updatePosition();

    // cleanup to ensure we do not create duplicate event listeners.
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPostion;
