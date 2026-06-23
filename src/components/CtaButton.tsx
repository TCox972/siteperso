import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CtaButtonProps = {
  href?: string;
  children?: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function CtaButton({
  href = "/contact",
  children = "Discutons de votre projet",
  variant = "solid",
  className = "",
}: CtaButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const variants = {
    solid:
      "bg-primary text-white shadow-sm shadow-primary/30 hover:bg-primary-dark hover:shadow-md hover:shadow-primary/40",
    outline:
      "border border-ink/15 bg-white text-ink hover:border-primary hover:text-primary",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
