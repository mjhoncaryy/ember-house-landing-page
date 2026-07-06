import { formatPrice } from "../../data/menu";

export function Price({ value }: { value: number }) {
  return <span className="font-body text-base font-bold text-cream">{formatPrice(value)}</span>;
}
