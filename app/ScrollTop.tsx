"use client";

import NavigationIcon from "@mui/icons-material/Navigation";

function ScrollTop() {
  const componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      onClick={componentDidMount}
      className="flex justify-center font-mono text-3xl dark:text-[#3A160E]"
    >
      <NavigationIcon />
      <NavigationIcon />
      SCROLL TO TOP <NavigationIcon />
      <NavigationIcon />
    </div>
  );
}

export default ScrollTop;
