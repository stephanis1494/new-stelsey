import type { ReactNode, FC } from "react";
import { cn } from "../utils/cn";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ children, className }) => (
  <button
    className={cn(
      "flex h-12 cursor-pointer flex-row items-center justify-center gap-2 rounded-lg rounded-ss-2xl rounded-ee-2xl border border-black/64 bg-white/8 px-10 transition-colors duration-150 hover:border-black hover:bg-white/16",
      className,
    )}
  >
    {children}
  </button>
);
