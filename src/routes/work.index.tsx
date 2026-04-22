import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ProjectImage } from "@/components/site/ProjectImage";
import { useLang } from "@/i18n/LangContext";
import { PROJECTS, type ProjectCategory } from "@/data/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — SEL RA ART" },
      {
        name: "description",
        content:
          "Selected projects in solid timber: bespoke furniture, kitchens, staircases, doors, and architectural elements by SEL RA ART, Riga.",
      },
      { property: "og:title", content: "Work — SEL RA ART" },
      {
        property: "og:description",
        content: "Selected projects in solid timber by SEL RA ART, Riga.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
  component: WorkIndex,
});

type Filter = ProjectCategory | "all";

function WorkIndex() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.work.filters.all },
    { key: "furniture", label: t.work.filters.furniture },
    { key: "kitchens", label: t.work.filters.kitchens },
    { key: "staircases", label: t.work.filters.staircases },
    { key: "doors", label: t.work.filters.doors },
    { key: "exterior", label: t.work.filters.exterior },
  ];

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="pt-[140px] md:pt-[180px] pb-16 md:pb-20 bg-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="label-eyebrow mb-6">{t.work.eyebrow}</div>
            <h1 className="font-serif font-light text-ink text-[48px] md:text-[80px] leading-[1.05] max-w-3xl">
              {t.work.title}
            </h1>
            <p className="mt-8 max-w-xl text-walnut text-[16px] leading-[1.8]">{t.work.intro}</p>
          </Reveal>

          <div className="mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-linen/40 pt-8">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`text-[11px] tracking-[0.18em] uppercase pb-1 transition-colors duration-200 ${
                  filter === f.key
                    ? "text-ink border-b border-ink"
                    : "text-walnut hover:text-ink border-b border-transparent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone pb-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
            {filtered.map((p, i) => {
              const pattern = i % 4;
              const spans = ["md:col-span-7", "md:col-span-5 md:mt-24", "md:col-span-5", "md:col-span-7 md:-mt-8"];
              return (
                <Reveal key={p.slug} className={spans[pattern]} delay={(i % 4) * 60}>
                  <Link to="/work/$slug" params={{ slug: p.slug }} className="group block">
                    <div className="overflow-hidden bg-muted">
                      <ProjectImage
                        src={p.cover}
                        alt={p.title}
                        className="w-full h-[300px] md:h-[440px] object-cover transition-opacity duration-500 group-hover:opacity-90"
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
        </div>
      </section>
    </Layout>
  );
}
