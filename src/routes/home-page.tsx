import type { ReactElement } from "react";

type ExperienceItem = {
  title: string;
  description: string;
  icon: ReactElement;
};

type HighlightItem = {
  title: string;
  description: string;
};

const heroImage =
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=80";

const socialImage =
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80";

const venueImage =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80";

const experienceItems: ExperienceItem[] = [
  {
    title: "Morning Instruction",
    description:
      "Expert-led sessions designed for beginners with an appreciation for precision and strategy.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12 text-umber"
        aria-hidden="true"
      >
        <path
          d="M18 18.5c0-2 1.6-3.5 3.6-3.5h19.8c2 0 3.6 1.5 3.6 3.5v27c0 2-1.6 3.5-3.6 3.5H21.6A3.55 3.55 0 0 1 18 45.5v-27Z"
          fill="currentColor"
          opacity="0.16"
        />
        <path
          d="m21 18 14 7v21l-14-7V18Zm22 0-14 7v21l14-7V18Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M32 29c1.8-3.5 5.7-2.7 5.7.3 0 2-1.7 3.2-3 4.3-1 .8-1.7 1.5-2.3 2.5-.6-1-1.3-1.7-2.3-2.5-1.3-1.1-3-2.3-3-4.3 0-3 3.9-3.8 5.7-.3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Afternoon Play",
    description:
      "Supervised games in a relaxed, supportive setting to build confidence and skill.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12 text-umber"
        aria-hidden="true"
      >
        <path
          d="M18 44c0-9 6.6-15.5 15-17.5V44h-15Z"
          fill="currentColor"
          opacity="0.14"
        />
        <path
          d="M18 44c0-9 6.6-15.5 15-17.5M46 44c0-9-6.6-15.5-15-17.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M25.7 24.5c.7-1.7 2.2-2.8 3.8-2.8 2.1 0 3.9 1.6 3.9 4 0 3.6-4.2 4.6-4.2 8 0-3.4-4.2-4.4-4.2-8 0-2.4 1.8-4 3.9-4 .3 0 .5 0 .8.1Z"
          fill="currentColor"
        />
        <path
          d="M41.4 22.3c2.4 0 4.3 2 4.3 4.4 0 3.2-3.1 4.6-6.2 7.2-3.1-2.6-6.2-4-6.2-7.2 0-2.4 1.9-4.4 4.3-4.4 1 0 2 .4 2.8 1.2.8-.8 1.8-1.2 3-1.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Evening Socials",
    description:
      "Curated dinners and gatherings with fellow participants in an elegant atmosphere.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12 text-umber"
        aria-hidden="true"
      >
        <path
          d="M18 18v12c0 4 2.7 7.4 6.4 8.5V46H22v3h16v-3h-2.4v-7.5c3.7-1.1 6.4-4.5 6.4-8.5V18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 25h24M44 18v31M51 18h-2.7c-1.4 0-2.3 1.1-2.3 2.5v7.2c0 2.4 1.6 4.4 3.8 5.1V49h3V18h-1.8Z"
          fill="currentColor"
          opacity="0.16"
        />
      </svg>
    ),
  },
];

const settingHighlights: HighlightItem[] = [
  {
    title: "Premium venue",
    description:
      "A composed resort setting chosen for privacy, comfort, and polished service.",
  },
  {
    title: "Comfortable, elegant accommodations",
    description:
      "Optional lodging add-ons for guests who prefer a seamless, immersive stay.",
  },
  {
    title: "Fine dining and curated menus",
    description:
      "Thoughtful meals and evening hospitality shaped for conversation and ease.",
  },
  {
    title: "Quiet, distraction-free environment",
    description:
      "A calm backdrop that lets instruction, play, and connection take focus.",
  },
];

const audiencePoints = [
  "Intimate, thoughtfully curated group size",
  "Emphasis on conversation, connection, and shared learning",
];

const SectionHeading = ({ title }: { title: string }) => (
  <div className="mb-12 flex items-center gap-5 text-center">
    <div className="h-px flex-1 bg-umber/20" />
    <h2 className="font-display text-4xl font-medium tracking-tight text-umber md:text-5xl">
      {title}
    </h2>
    <div className="h-px flex-1 bg-umber/20" />
  </div>
);

const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
  <article className="group relative rounded-[2rem] border border-umber/10 bg-white/45 p-8 text-center shadow-soft backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white/60">
    <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent" />
    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sand/70 ring-1 ring-umber/10">
      {item.icon}
    </div>
    <h3 className="font-display text-3xl text-umber">{item.title}</h3>
    <p className="mt-4 text-base leading-8 text-umber/78">{item.description}</p>
  </article>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 text-lg leading-8 text-umber/80">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 rounded-full bg-clay" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ImageFrame = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={`image-frame ${className ?? ""}`}>
    <div className="overflow-hidden rounded-[1.85rem]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-[1600ms] hover:scale-[1.03]"
      />
    </div>
  </div>
);

const HomePage = () => {
  return (
    <main className="bg-desert-glow text-umber">
      <section
        className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(29, 21, 13, 0.18) 0%, rgba(29, 21, 13, 0.52) 80%), url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,240,214,0.22),transparent_45%),linear-gradient(180deg,rgba(18,12,7,0.04),rgba(18,12,7,0.46))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7ead2] to-transparent" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-28 text-center md:px-10">
          <div className="animate-fade-up max-w-4xl">
            <p className="font-sans text-sm uppercase tracking-[0.42em] text-sand/85">
              Palm Desert, California
            </p>
            <h1 className="mt-5 font-display text-5xl font-medium tracking-tight text-[#fff7eb] drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:text-7xl lg:text-[5.7rem]">
              Desert Bridge Cruise
            </h1>
            <div className="mx-auto mt-6 h-px w-44 bg-gradient-to-r from-transparent via-sand/80 to-transparent md:w-72" />
            <p className="mt-8 font-display text-2xl italic text-sand md:text-[2rem]">
              A refined introduction to the art and pleasure of bridge
            </p>
            <p className="mt-4 font-display text-3xl italic text-sand md:text-[2rem]">
              for the bridge-curious.
            </p>
            <p className="balanced-text mx-auto mt-6 max-w-[24ch] text-lg leading-8 text-[#f8ecda] md:max-w-[36ch] md:text-2xl md:leading-10">
              Three days of learning, play, and elegant social connection in
              Palm Desert
            </p>
            <div className="mt-12">
              <a className="luxury-button" href="#apply">
                Reserve Your Seat
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-28">
        <SectionHeading title="The Experience" />
        <div className="grid gap-6 md:grid-cols-3">
          {experienceItems.map((item) => (
            <ExperienceCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="relative border-y border-umber/10 bg-white/30 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10">
          <div className="animate-fade-up">
            <SectionHeading title="Who It’s For" />
            <p className="max-w-2xl text-2xl leading-10 text-umber/82">
              Designed for discerning advancing/intermediate seeking both
              intellectual engagement and social refinement.
            </p>
            <div className="mt-8 max-w-xl">
              <BulletList items={audiencePoints} />
            </div>
          </div>

          <ImageFrame
            src={socialImage}
            alt="Well-dressed guests enjoying conversation at a desert resort gathering"
            className="min-h-[320px] md:min-h-[520px]"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-sand/70 py-24 md:py-28">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(62,47,28,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[0.95fr_1.05fr] md:px-10">
          <div className="animate-fade-up">
            <SectionHeading title="The Setting" />
            <p className="max-w-xl text-2xl leading-10 text-umber/82">
              Set in the serene beauty of Palm Desert, Desert Bridge Cruise
              offers a tranquil escape paired with elevated hospitality.
            </p>

            <div className="mt-10 space-y-6">
              {settingHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-umber/10 bg-white/45 p-6 shadow-soft"
                >
                  <p className="font-display text-2xl text-umber">
                    {item.title}
                  </p>
                  <p className="mt-2 text-base leading-8 text-umber/72">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ImageFrame
            src={venueImage}
            alt="Luxury Palm Desert venue with pool, palms, and mountain views"
            className="min-h-[320px] md:min-h-[620px]"
          />
        </div>
      </section>

      <section
        id="apply"
        className="border-t border-umber/10 bg-gold-wash px-6 py-24 text-center md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/40 bg-white/20 px-6 py-14 shadow-frame backdrop-blur-sm md:px-12">
          <p className="font-display text-3xl italic leading-relaxed text-umber md:text-5xl">
            Join us for an experience that blends intellect, leisure, and
            understated luxury.
          </p>
          <div className="mt-10">
            <a
              className="luxury-button"
              href="mailto:info@desertbridgecruise.com?subject=Invitation%20Request"
            >
              Apply for Invitation
            </a>
          </div>
          <p className="mt-8 text-base uppercase tracking-[0.28em] text-umber/60">
            Limited seats available. Early reservations recommended.
          </p>
        </div>
      </section>

      <footer className="border-t border-umber/10 bg-[#f8eedc] px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
          <p className="font-display text-3xl text-umber">
            Desert Bridge Cruise
          </p>
          <div className="h-px w-full max-w-4xl bg-umber/15" />
          <div className="flex flex-col items-center gap-3 text-sm uppercase tracking-[0.22em] text-umber/65 md:flex-row md:gap-8">
            <a
              className="transition hover:text-umber"
              href="mailto:info@desertbridgecruise.com"
            >
              info@desertbridgecruise.com
            </a>
            <span className="hidden h-4 w-px bg-umber/20 md:block" />
            <span>Palm Desert, California</span>
          </div>
          <div className="flex items-center gap-5 text-sm text-umber/55">
            <a className="transition hover:text-umber" href="#0">
              Terms
            </a>
            <span className="h-3 w-px bg-umber/20" />
            <a className="transition hover:text-umber" href="#0">
              Privacy
            </a>
          </div>
          <div className="flex items-center gap-5 text-sm text-umber/55">
            Desert Bridge Cruise is a product of Beckmann Lorton Overdrive
          </div>
        </div>
      </footer>
    </main>
  );
};

export { HomePage };
