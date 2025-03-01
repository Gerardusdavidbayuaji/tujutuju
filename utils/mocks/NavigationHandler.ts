import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.png";
import hero4 from "@/public/images/hero4.jpg";

type NavigationHandler = {
  id?: string;
  href: string;
  label: string;
};

export const navigations: NavigationHandler[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/products", label: "products" },
  { href: "/favorites", label: "favorites" },
  { href: "/reviews", label: "reviews" },
  { href: "/cart", label: "cart" },
  { href: "/orders", label: "orders" },
  { href: "/admin/sales", label: "dashboard" },
];

export const adminLinks: NavigationHandler[] = [
  { id: "1", href: "/admin/sales", label: "sales" },
  { id: "2", href: "/admin/products", label: "my products" },
  { id: "3", href: "/admin/products/create", label: "create product" },
];

export const heroCarousel = [hero1, hero2, hero3, hero4];
