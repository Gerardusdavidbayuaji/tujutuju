import { cn } from "@/lib/utils";

interface headingProps {
  heading?: string;
  className?: string;
}

function EmptyList({ heading = "No items found.", className }: headingProps) {
  return <h2 className={cn("text-xl", className)}>{heading}</h2>;
}

export default EmptyList;
