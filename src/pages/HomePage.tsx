import { ArrowRight, Clock, Flame, MapPin, MessageCircle, Navigation, PhoneCall, Utensils } from "lucide-react";
import type { CSSProperties } from "react";
import { Footer } from "../components/layout/Footer";
import { MobileStickyBar } from "../components/layout/MobileStickyBar";
import { Navbar } from "../components/layout/Navbar";
import { MenuCard } from "../components/menu/MenuCard";
import { ReservationForm } from "../components/reservation/ReservationForm";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { galleryItems } from "../data/gallery";
import { featuredMenu } from "../data/menu";
import { experiencePillars, heroImage, restaurant, storyImage } from "../data/restaurant";

export function HomePage() {
  return (
    <div className="min-h-screen bg-charred font-body text-cream">
      <Navbar />
      <main>
        <section className="relative min-h-[96svh] overflow-hidden">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="hero-image absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,oklch(58%_0.16_45_/0.22),transparent_28%),linear-gradient(90deg,oklch(9%_0.012_54_/0.92),oklch(10%_0.012_54_/0.56)_52%,oklch(10%_0.012_54_/0.22))]" />
          <div className="ember-wash" aria-hidden="true" />
          <Container className="relative flex min-h-[96svh] items-end pb-16 pt-36 sm:pb-20 lg:pb-24">
            <div className="hero-copy max-w-[58rem]">
              <p className="hero-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-cream/24 bg-charred/48 px-4 py-2 text-sm font-bold text-cream backdrop-blur-sm">
                <Flame aria-hidden="true" size={16} />
                Open-fire kitchen, Jakarta Selatan
              </p>
              <h1 className="max-w-5xl font-display text-[clamp(3rem,8vw,5.85rem)] leading-[0.92] text-cream text-balance">
                {restaurant.tagline}
              </h1>
              <p className="mt-6 max-w-[42rem] text-[clamp(1.05rem,2vw,1.35rem)] leading-8 text-cream/88 text-pretty">
                {restaurant.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#reserve" size="lg">
                  Reserve a Table
                  <ArrowRight aria-hidden="true" size={18} />
                </Button>
                <Button href="#menu" variant="secondary" size="lg">
                  Explore the Menu
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-band signature-section py-[4.5rem] sm:py-24 lg:py-28">
          <Container>
            <div className="signature-panel">
              <div className="signature-intro">
                <p className="signature-mark">
                  <Flame aria-hidden="true" size={17} />
                  The Ember Room
                </p>
                <h2>Built around fire, seasonality, and time at the table.</h2>
                <p>
                  The room, the menu, and the pace of service are tuned for dinner that starts with
                  smoke and ends slowly.
                </p>
                <div className="signature-proof" aria-label="Restaurant strengths">
                  <span>Market-led menu</span>
                  <span>Open-fire kitchen</span>
                  <span>Slow dinner service</span>
                </div>
              </div>

              <div className="signature-grid">
                {experiencePillars.map((pillar, index) => (
                  <article key={pillar.title} className="experience-tile">
                    <span className="tile-count" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{pillar.title}</h3>
                      <p>{pillar.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="menu" className="section-band bg-surface py-[4.5rem] sm:py-24 lg:py-28">
          <Container>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                title="A compact menu with smoke in the edges."
                text="Six current favorites show the range: flame, market produce, generous plates, and drinks that stay in the same room."
              />
              <Button href="#reserve" variant="secondary" className="w-fit">
                Book before choosing
              </Button>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {featuredMenu.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </Container>
        </section>

        <section id="story" className="section-band story-section py-[4.5rem] sm:py-28">
          <Container>
            <div className="story-grid">
              <div className="story-copy">
                <p className="story-mark">Kitchen note</p>
                <h2>Food that feels generous without getting loud.</h2>
                <p>
                  We cook around fire, seasonality, and the kind of evenings that ask you to slow down.
                  The menu changes with the market, but the idea stays the same: honest ingredients,
                  careful heat, and plates that arrive with enough detail to remember.
                </p>
              </div>

              <figure className="story-image">
                <img src={storyImage.src} alt={storyImage.alt} loading="lazy" />
              </figure>

              <aside className="story-quote">
                <blockquote>"A dining room should make time feel wider, not louder."</blockquote>
              </aside>

              <div className="story-notes" aria-label="Story details">
                <p>
                  <span>Come for</span>
                  charred beef, roasted fish, and vegetables touched by coal.
                </p>
                <p>
                  <span>Stay for</span>
                  the low room, the second drink, and a table that does not need to turn quickly.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-band room-section bg-surface py-[4.5rem] sm:py-24 lg:py-28">
          <Container>
            <div className="room-layout">
              <div className="room-copy">
                <p className="room-mark">Dining room sequence</p>
                <h2>What the room feels like before the first plate lands.</h2>
                <p>
                  Interior, fire, drinks, and the pass. The gallery stays close to the physical
                  details that make the restaurant believable.
                </p>
              </div>

              <div className="scroll-stack" aria-label="Gallery of Ember House atmosphere">
                {galleryItems.map((item, index) => (
                  <figure
                    key={item.id}
                    className="scroll-stack-card"
                    style={{ "--stack-index": index } as CSSProperties}
                  >
                    <img src={item.src} alt={item.alt} loading="lazy" />
                    <figcaption>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="reserve" className="section-band reserve-section py-[4.5rem] sm:py-28">
          <Container className="reserve-layout">
            <div className="reserve-copy">
              <SectionHeader
                title="Reserve the part of the evening that should not feel rushed."
                text="Send a reservation request through WhatsApp with the details already prepared. The team confirms availability from there."
              />
              <div className="reserve-points">
                <p>
                  <Clock aria-hidden="true" size={20} className="text-ember" />
                  <span>Earlier dinner slots are easier after 7 PM fills.</span>
                </p>
                <p>
                  <Utensils aria-hidden="true" size={20} className="text-ember" />
                  <span>For eight or more guests, add notes for the dining room.</span>
                </p>
              </div>
            </div>
            <div className="reserve-form-track">
              <ReservationForm />
            </div>
          </Container>
        </section>

        <section id="hours" className="section-band location-section py-[4.5rem] sm:py-24 lg:py-28">
          <Container className="location-layout">
            <div className="location-intro">
              <p className="location-mark">
                <MapPin aria-hidden="true" size={17} />
                Jakarta Selatan
              </p>
              <h2>Location & hours</h2>
              <p>
                Practical details stay close to the reservation path: when to arrive, where to go,
                and the fastest way to reach the dining room.
              </p>
            </div>

            <div className="location-details" aria-label="Location and opening hours">
              <div className="hours-panel">
                <div className="hours-panel-head">
                  <span>
                    <Clock aria-hidden="true" size={18} />
                    Open this week
                  </span>
                  <strong>Dinner runs late on weekends</strong>
                </div>
                <div className="hours-list">
                  {restaurant.hours.map((item) => (
                    <p key={item.days}>
                      <span>{item.days}</span>
                      <time>{item.time}</time>
                    </p>
                  ))}
                </div>
              </div>

              <div className="address-panel">
                <div className="address-copy">
                  <span className="address-icon" aria-hidden="true">
                    <Navigation size={18} />
                  </span>
                  <div>
                    <h3>Ember House</h3>
                    <p>{restaurant.address}</p>
                    <a href={restaurant.phoneHref}>{restaurant.phone}</a>
                  </div>
                </div>
                <div className="location-actions">
                  <Button href={restaurant.mapsUrl} variant="secondary" size="sm">
                    <MapPin aria-hidden="true" size={16} />
                    Open in Maps
                  </Button>
                  <Button href={`https://wa.me/${restaurant.whatsapp.replace(/\D/g, "")}`} size="sm">
                    <MessageCircle aria-hidden="true" size={16} />
                    WhatsApp
                  </Button>
                  <Button href={restaurant.phoneHref} variant="ghost" size="sm">
                    <PhoneCall aria-hidden="true" size={16} />
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
