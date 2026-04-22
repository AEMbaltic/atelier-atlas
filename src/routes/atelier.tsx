import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ProjectImage } from "@/components/site/ProjectImage";
import { useLang } from "@/i18n/LangContext";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "Atelier — SEL RA ART" },
      {
        name: "description",
        content:
          "An atelier in Riga, since 2007. Designers, draftsmen and master joiners working in solid timber across Latvia and export markets.",
      },
      { property: "og:title", content: "Atelier — SEL RA ART" },
      {
        property: "og:description",
        content: "An atelier in Riga, since 2007. SEL RA ART.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
  component: Atelier,
});

function Atelier() {
  const { t } = useLang();
  return (
    <Layout>
      <section className="pt-[140px] md:pt-[180px] pb-12 md:pb-20 bg-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="label-eyebrow mb-6">{t.atelier.eyebrow}</div>
            <h1 className="font-serif font-light text-ink text-[44px] md:text-[80px] leading-[1.05] max-w-4xl">
              {t.atelier.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-7">
            <ProjectImage
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=85"
              alt="Workshop interior"
              className="w-full h-[420px] md:h-[640px] object-cover"
            />
          </Reveal>
          <Reveal className="md:col-span-5 md:mt-24" delay={120}>
            <div className="space-y-7 text-ink/90 text-[16px] leading-[1.85]">
              {t.atelier.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <Reveal>
            <div className="label-eyebrow text-linen mb-4">{t.atelier.statsLabels.founded}</div>
            <div className="font-serif text-[64px] text-bone leading-none">2007</div>
          </Reveal>
          <Reveal delay={80}>
            <div className="label-eyebrow text-linen mb-4">{t.atelier.statsLabels.markets}</div>
            <div className="font-serif text-[36px] text-bone leading-tight">
              Latvia · Germany · Estonia · United Kingdom
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="label-eyebrow text-linen mb-4">{t.atelier.statsLabels.team}</div>
            <div className="font-serif text-[36px] text-bone leading-tight">
              Designers, draftsmen, master joiners
            </div>
          </Reveal>
        </div>
      </section>

      {/* Second image */}
      <section className="bg-bone py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <ProjectImage
              src="https://images.unsplash.com/photo-1611967164521-abae8fba4668?auto=format&fit=crop&w=2000&q=85"
              alt="Joinery detail"
              className="w-full h-[340px] md:h-[560px] object-cover"
            />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
