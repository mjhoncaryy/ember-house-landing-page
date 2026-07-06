import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { restaurant } from "../../data/restaurant";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "Story", href: "#story" },
  { label: "Reserve", href: "#reserve" },
  { label: "Hours", href: "#hours" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 py-3 transition duration-500 ease-out ${
        scrolled ? "translate-y-0" : "translate-y-0"
      }`}
    >
      <Container
        className={`nav-shell flex min-h-[4.35rem] items-center justify-between transition duration-500 ${
          scrolled ? "nav-shell-scrolled" : ""
        }`}
      >
        <a href="#" className="brand-lockup" aria-label="Ember House home">
          <span className="brand-seal" aria-hidden="true">
            EH
          </span>
          <span className="brand-copy">
            <span>Ember House</span>
            <small>Wood-fired dining</small>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button href={restaurant.phoneHref} variant="ghost" size="sm">
            <Phone aria-hidden="true" size={16} />
            Call
          </Button>
          <Button href="#reserve" size="sm">
            Reserve
          </Button>
        </div>
        <button
          type="button"
          className="icon-button bg-charred/45 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>
      {open ? (
        <nav className="mobile-menu-panel md:hidden" aria-label="Mobile navigation">
          <Container className="grid gap-2 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[1.05rem] font-bold text-cream transition hover:bg-cream/10 hover:text-ember"
              >
                {item.label}
              </a>
            ))}
            <Button href={restaurant.phoneHref} variant="secondary" className="mt-2">
              Call Restaurant
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
