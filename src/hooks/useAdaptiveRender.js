import { useEffect, useState } from "react";

export function useAdaptiveRender() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const [isNotebook, setNotebook] = useState(window.innerWidth >= 768);
  const [isTablet, setTablet] = useState(window.innerWidth >= 540);
  const [isMobile, setMobile] = useState(window.innerWidth < 540);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
    setNotebook(window.innerWidth >= 768);
    setTablet(window.innerWidth >= 540);
    setMobile(window.innerWidth < 540);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return {
    isDesktop,
    isNotebook,
    isTablet,
    isMobile,
  };
}
