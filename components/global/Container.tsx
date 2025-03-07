import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn(`mx-auto max-w-6xl xl:max-w-7xl px-8`, className)}>
      {children}
    </div>
  );
}

export default Container;
