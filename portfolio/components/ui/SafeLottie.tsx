"use client";

export const SafeLottie = ({ height = 200, width = 400, className }: any) => {
  return (
    <img
      src="/confetti.gif"
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      className={className}
    />
  );
};
