import { Map, Menu, MessageCircle } from "lucide-react";
import { restaurant } from "../../data/restaurant";

export function MobileStickyBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-borderSoft bg-charred/96 text-cream backdrop-blur-md md:hidden"
    >
      <a href="#menu" className="mobile-action">
        <Menu aria-hidden="true" size={18} />
        Menu
      </a>
      <a href="#reserve" className="mobile-action bg-ember text-charred">
        <MessageCircle aria-hidden="true" size={18} />
        Reserve
      </a>
      <a href={restaurant.mapsUrl} className="mobile-action">
        <Map aria-hidden="true" size={18} />
        Maps
      </a>
    </nav>
  );
}
