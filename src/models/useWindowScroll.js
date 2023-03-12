import { useEffect, useState } from "react";

const useWindowScroll = () => {
  const [scrolll, setScroll] = useState("stop");
  const scrollDate = {
    current: 0,
    previous: 0,
  };

  const scroll = () => {
    scrollDate.current = window.scrollY;

    if (scrollDate.current > scrollDate.previous) {
      setScroll("down");
    }
    if (scrollDate.current < scrollDate.previous) {
      setScroll("up");
    }
    // if (scrollDate.current === scrollDate.previous) {
    //   setScroll("stop");
    // }
    requestAnimationFrame(() => scroll());
    scrollDate.previous = scrollDate.current;
  };

  useEffect(() => {
    requestAnimationFrame(() => scroll());
  }, []);

  return scrolll;
};

export default useWindowScroll;
