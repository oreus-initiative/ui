import { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";

const ScrollToTop: React.FC = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return null;
};

export default ScrollToTop;
