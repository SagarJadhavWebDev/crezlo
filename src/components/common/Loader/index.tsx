import type { JSX } from "react";
import "./styles.module.css";
import { useTheme } from "next-themes";

export const Loader = ({
  color,
  size = 16,
  ...props
}: {
  color?: string;
  size?: number | string;
} & JSX.IntrinsicAttributes) => {
  const { theme } = useTheme();
  return (
    <span
      className={"Loader"}
      style={{
        width: size,
        height: size,
        color: color ?? (theme === "light" ? "black" : "gray"),
      }}
      aria-label="loading"
      {...props}
    />
  );
};
