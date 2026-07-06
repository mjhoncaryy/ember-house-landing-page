import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variants = {
  primary:
    "bg-ember text-charred shadow-[inset_0_1px_0_oklch(91%_0.045_78_/_0.28)] hover:bg-cream hover:text-charred focus-visible:shadow-focus",
  secondary:
    "border border-cream/35 bg-charred/18 text-cream hover:border-ember hover:bg-ember/12 hover:text-cream focus-visible:shadow-focus",
  ghost:
    "text-cream/88 hover:bg-cream/10 hover:text-cream focus-visible:shadow-focus",
  link: "min-h-0 rounded-none px-0 py-0 text-cream underline decoration-ember/70 underline-offset-4 hover:text-ember"
};

const sizes = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-[0.95rem]",
  lg: "min-h-12 px-6 text-base"
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className = "", ...rest } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-body font-extrabold transition duration-300 ease-out focus-visible:outline-none active:translate-y-px motion-safe:hover:-translate-y-1";
  const classes = `${base} ${variant !== "link" ? sizes[size] : ""} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
