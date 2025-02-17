import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";

// interface favoriteProps {
//   productId: string;
// }

// function FavoriteToggleButton({ productId }: favoriteProps) {
function FavoriteToggleButton() {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <HeartIcon />
    </Button>
  );
}

export default FavoriteToggleButton;
