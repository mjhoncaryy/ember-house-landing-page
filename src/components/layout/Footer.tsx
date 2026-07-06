import { ArrowUpRight, Clock, Flame, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { restaurant } from "../../data/restaurant";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const footerLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Story", href: "#story" },
  { label: "Reserve", href: "#reserve" },
  { label: "Hours", href: "#hours" }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="footer-lockup" aria-label="Ember House home">
              <span className="footer-seal" aria-hidden="true">
                <Flame size={21} />
              </span>
              <span>{restaurant.name}</span>
            </a>
            <p>{restaurant.description}</p>
            <div className="footer-cta">
              <Button href="#reserve" size="sm">
                Reserve a Table
                <ArrowUpRight aria-hidden="true" size={16} />
              </Button>
              <Button href={restaurant.mapsUrl} variant="secondary" size="sm">
                <MapPin aria-hidden="true" size={16} />
                Maps
              </Button>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <h2>Explore</h2>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-hours">
            <h2>
              <Clock aria-hidden="true" size={17} />
              Hours
            </h2>
            {restaurant.hours.map((item) => (
              <p key={item.days}>
                <span>{item.days}</span>
                <time>{item.time}</time>
              </p>
            ))}
          </div>

          <div className="footer-contact">
            <h2>Visit</h2>
            <p>{restaurant.address}</p>
            <div className="footer-contact-links">
              <a href={restaurant.phoneHref}>
                <Phone aria-hidden="true" size={16} />
                {restaurant.phone}
              </a>
              <a href={`mailto:${restaurant.email}`}>
                <Mail aria-hidden="true" size={16} />
                {restaurant.email}
              </a>
            </div>
            <div className="footer-socials" aria-label="Social and messaging links">
              <a href={`https://wa.me/${restaurant.whatsapp.replace(/\D/g, "")}`} aria-label="WhatsApp Ember House">
                <MessageCircle aria-hidden="true" size={18} />
              </a>
              <a href="#" aria-label="Instagram Ember House">
                <Instagram aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Wood-fired dining in Jakarta Selatan.</p>
          <p>{new Date().getFullYear()} Ember House</p>
        </div>
      </Container>
    </footer>
  );
}
