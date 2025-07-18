import type { JSX } from "react";
import "./styles.module.css";

export const Loader = ({
  color,
  size = 16,
  ...props
}: {
  color?: string;
  size?: number | string;
} & JSX.IntrinsicAttributes) => {
  return (
    <span
      className={"Loader"}
      style={{
        width: size,
        height: size,
        color,
      }}
      aria-label="loading"
      {...props}
    />
  );
};
