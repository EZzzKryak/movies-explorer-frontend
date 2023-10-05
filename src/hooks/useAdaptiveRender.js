import { useEffect, useState } from "react";

export function useAdaptiveRender() {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1280);
  const [isTablet, setTablet] = useState(window.innerWidth > 768);
  const [isMobile, setMobile] = useState(window.innerWidth > 640);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 1280);
    setTablet(window.innerWidth >= 768);
    setMobile(window.innerWidth >= 320);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
}
