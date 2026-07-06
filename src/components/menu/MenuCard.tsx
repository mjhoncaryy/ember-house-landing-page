import type { MenuItem } from "../../data/menu";
import { Badge } from "../ui/Badge";
import { Price } from "../ui/Price";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-surfaceHigh transition duration-300 ease-out hover:-translate-y-1 hover:bg-[oklch(25%_0.026_54)]">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={`${item.name} plated at Ember House`}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06] group-hover:saturate-110"
          loading="lazy"
        />
      </div>
      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold text-ember">{item.category}</p>
            <h3 className="font-display text-[1.85rem] leading-none text-cream transition group-hover:text-[oklch(94%_0.052_78)]">
              {item.name}
            </h3>
          </div>
          {item.badge ? <Badge>{item.badge}</Badge> : null}
        </div>
        <p className="min-h-[3rem] text-base leading-6 text-taupe">{item.description}</p>
        <div className="flex items-center justify-between border-t border-borderSoft pt-4">
          <Price value={item.price} />
          {item.dietary.length ? (
            <span className="text-sm text-taupe">{item.dietary.join(", ")}</span>
          ) : (
            <span className="text-sm text-taupe">wood fire</span>
          )}
        </div>
      </div>
    </article>
  );
}
