// SPA에서 페이지 이동시 스크롤이 이전 위치에 머물러 있는 것을 해결
// 작성 후 App.js에 import해 Router 안에서 사용


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}