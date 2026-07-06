import type { PropsWithChildren } from "react";

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-olive/60 bg-olive/20 px-3 py-1 text-xs font-bold text-cream">
      {children}
    </span>
  );
}
