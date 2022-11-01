import { useState, useEffect } from "react";

//custom hook that returns if current screen width is larger than
//the width breakpoint argument or not
const useMediaQuery = (breakpoint) => {
  //current width
  const [width, setWidth] = useState(0);

  //function to update state with window's screen width
  const updateWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    //cleanup after unmounting
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  //return a destructible array that includes the boolean and the width also
  return breakpoint ? [width >= +breakpoint, width] : [width];
};

export default useMediaQuery;
