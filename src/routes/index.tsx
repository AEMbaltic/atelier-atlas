import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ProjectImage } from "@/components/site/ProjectImage";
import { useLang } from "@/i18n/LangContext";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SEL RA ART — Bespoke Furniture & Joinery, Riga" },
      {
        name: "description",
        content:
          "Solid wood that lives with the home. Bespoke furniture, kitchens, staircases and architectural woodwork, handmade in Riga since 2007.",
      },
      {
        property: "og:title",
        content: "SEL RA ART — Bespoke Furniture & Joinery, Riga",
      },
      {
        property: "og:description",
        content:
          "Solid wood that lives with the home. An atelier in Riga, exporting to Germany, Estonia and the UK since 2007.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();
  const featured = PROJECTS.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <ProjectImage
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=85"
          alt="Hand-planed oak interior detail"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
        <div className="relative z-10 h-full mx-auto max-w-[1440px] px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
          <div className="max-w-2xl">
            <div className="label-eyebrow text-bone/80 mb-6">EST. 2007 · RĪGA</div>
            <h1 className="font-serif font-light text-bone text-[44px] md:text-[72px] leading-[1.05] tracking-[-0.01em]">
              {t.home.heroHeadline}
            </h1>
            <p className="mt-6 text-bone/85 text-[16px] md:text-[18px] max-w-xl leading-relaxed">
              {t.home.heroSub}
            </p>
            <div className="mt-10">
              <Link
                to="/work"
                className="text-bone border-b border-bone/80 hover:border-bone pb-1 text-[12px] tracking-[0.18em] uppercase transition-colors duration-200"
              >
                {t.home.heroCta} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-bone py-28 md:py-40">
        <Reveal className="mx-auto max-w-[760px] px-6 text-center">
          <p className="font-serif italic font-light text-ink text-[24px] md:text-[30px] leading-[1.45]">
            {t.home.statement}
          </p>
        </Reveal>
      </section>

      {/* Disciplines */}
      <section className="bg-bone border-t border-linen/40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="label-eyebrow mb-12">{t.home.disciplinesEyebrow}</div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-linen/40">
            {t.home.disciplines.map((d, i) => (
              <Reveal
                key={d.title}
                delay={i * 80}
                className="group border-b md:border-b-0 md:border-r last:border-r-0 border-linen/40 p-8 md:p-10 transition-colors duration-300 hover:bg-paper"
              >
                <div className="label-eyebrow mb-8">{d.label}</div>
                <h3 className="font-serif font-light text-ink text-[28px] md:text-[32px] leading-tight mb-3">
                  {d.title}
                </h3>
                <p className="text-walnut text-[14px] leading-relaxed mb-8 max-w-[260px]">
                  {d.desc}
                </p>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink border-b border-ink pb-1 transition-transform duration-200 group-hover:translate-x-1"
                >
                  {d.cta} →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="bg-bone border-t border-linen/40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28">
          <Reveal className="flex items-end justify-between mb-14">
            <div>
              <div className="label-eyebrow mb-4">{t.home.selectedEyebrow}</div>
              <h2 className="font-serif font-light text-ink text-[40px] md:text-[56px] leading-tight">
                {t.home.selectedTitle}
              </h2>
            </div>
            <Link
              to="/work"
              className="hidden md:inline-block text-[11px] tracking-[0.18em] uppercase text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors"
            >
              {t.home.selectedCta} →
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
            {featured.map((p, i) => {
              // Asymmetric: 0 wide-left(7), 1 right(5), 2 left(5), 3 wide-right(7)
              const spans = ["md:col-span-7", "md:col-span-5 md:mt-32", "md:col-span-5", "md:col-span-7 md:-mt-12"];
              return (
                <Reveal key={p.slug} className={spans[i]} delay={i * 60}>
                  <Link
                    to="/work/$slug"
                    params={{ slug: p.slug }}
                    className="group block"
                  >
                    <div className="overflow-hidden bg-muted">
                      <ProjectImage
                        src={p.cover}
                        alt={p.title}
                        className="w-full h-[320px] md:h-[460px] object-cover transition-opacity duration-500 group-hover:opacity-90"
                      />
                    </div>
                    <div className="mt-5 flex items-baseline justify-between">
                      <h3 className="font-serif font-light text-ink text-[22px] md:text-[26px]">
                        {p.title}
                      </h3>
                      <div className="text-[11px] tracking-[0.16em] uppercase text-linen">
                        {p.year}
                      </div>
                    </div>
                    <div className="mt-1 text-[13px] text-walnut">{p.location}</div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="md:hidden mt-12 text-center">
            <Link to="/work" className="link-underline text-[12px] tracking-[0.16em] uppercase">
              {t.home.selectedCta} →
            </Link>
          </div>
        </div>
      </section>

      {/* Materials & process */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <div className="label-eyebrow text-linen mb-6">{t.home.materialsEyebrow}</div>
            <h2 className="font-serif font-light text-bone text-[36px] md:text-[52px] leading-tight max-w-2xl mb-16">
              {t.home.materialsTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-t border-linen/30 pt-16">
            {t.home.materialsCols.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="label-eyebrow text-linen mb-5">0{i + 1}</div>
                <h3 className="font-serif font-light text-bone text-[26px] mb-4">{c.title}</h3>
                <p className="text-bone/75 text-[14px] leading-[1.75]">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Export */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-5">
            <div className="label-eyebrow mb-4">{t.home.partnersEyebrow}</div>
            <h2 className="font-serif font-light text-ink text-[32px] md:text-[44px] leading-tight">
              {t.home.partnersTitle}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
            <p className="text-walnut text-[16px] leading-[1.8] max-w-xl">
              {t.home.partnersBody}
            </p>
            <div className="mt-8">
              <Link to="/collaborations" className="link-underline text-[12px] tracking-[0.16em] uppercase">
                {t.home.partnersCta} →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-paper border-t border-linen/40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal>
            <div className="label-eyebrow mb-4">{t.contact.eyebrow}</div>
            <h2 className="font-serif font-light text-ink text-[36px] md:text-[48px] leading-tight mb-8">
              {t.contact.title}
            </h2>
            <div className="space-y-2 text-walnut text-[15px]">
              <div>{t.contact.address}</div>
              <div>{t.contact.phone}</div>
              <a href={`mailto:${t.contact.email}`} className="block hover:text-ink transition-colors">
                {t.contact.email}
              </a>
            </div>
          </Reveal>
          <Reveal delay={80} className="flex items-end">
            <Link to="/contact" className="link-underline text-[12px] tracking-[0.16em] uppercase">
              {t.contact.submit} →
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
