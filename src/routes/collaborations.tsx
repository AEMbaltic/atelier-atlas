import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/i18n/LangContext";

export const Route = createFileRoute("/collaborations")({
  head: () => ({
    meta: [
      { title: "Collaborations — SEL RA ART" },
      {
        name: "description",
        content:
          "Partners across Europe: Luxoise (Berlin), Bespoke Kitchens (UK), Unolik (Estonia). SEL RA ART works directly with architects, interior designers, and brands.",
      },
      { property: "og:title", content: "Collaborations — SEL RA ART" },
      {
        property: "og:description",
        content: "Partners across Europe: Luxoise, Bespoke Kitchens, Unolik.",
      },
    ],
  }),
  component: Collaborations,
});

function Collaborations() {
  const { t } = useLang();
  return (
    <Layout>
      <section className="pt-[140px] md:pt-[180px] pb-16 md:pb-24 bg-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="label-eyebrow mb-6">{t.collab.eyebrow}</div>
            <h1 className="font-serif font-light text-ink text-[44px] md:text-[80px] leading-[1.05] max-w-3xl">
              {t.collab.title}
            </h1>
            <p className="mt-8 max-w-xl text-walnut text-[16px] leading-[1.8]">{t.collab.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone pb-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="border-t border-linen/40">
            {t.collab.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 80}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-b border-linen/40">
                  <div className="md:col-span-1 label-eyebrow text-linen pt-2">
                    0{i + 1}
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="font-serif font-light text-ink text-[36px] md:text-[44px] leading-[1.05]">
                      {item.name}
                    </h2>
                    <div className="mt-2 label-eyebrow">{item.place}</div>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-ink/85 text-[16px] leading-[1.85] max-w-xl">{item.body}</p>
                    <a
                      href={`https://${item.url}`}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline mt-6 inline-block text-[12px] tracking-[0.16em] uppercase"
                    >
                      {item.url} →
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 text-center">
            <p className="font-serif italic font-light text-ink text-[26px] md:text-[32px] leading-[1.4] max-w-xl mx-auto">
              {t.collab.closing}
            </p>
            <div className="mt-8">
              <Link to="/contact" className="link-underline text-[12px] tracking-[0.16em] uppercase">
                {t.collab.cta} →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
