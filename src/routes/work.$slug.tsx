import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ProjectImage } from "@/components/site/ProjectImage";
import { useLang } from "@/i18n/LangContext";
import { getNextProject, getProject } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — SEL RA ART` : "Project — SEL RA ART";
    const desc = p ? p.description.en : "Project by SEL RA ART.";
    const img = p?.cover ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(img ? [{ property: "og:image", content: img }, { name: "twitter:image", content: img }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="pt-[180px] pb-32 text-center">
        <h1 className="font-serif text-[48px] text-ink">Project not found</h1>
        <Link to="/work" className="link-underline mt-8 inline-block text-[12px] tracking-[0.16em] uppercase">
          Back to work
        </Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="pt-[180px] pb-32 text-center">
        <h1 className="font-serif text-[36px] text-ink">Something went wrong</h1>
        <p className="mt-4 text-walnut">{error.message}</p>
      </div>
    </Layout>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const { lang, t } = useLang();
  const next = getNextProject(project.slug);

  return (
    <Layout>
      {/* Full-bleed cover */}
      <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
        <ProjectImage
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Title block */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="label-eyebrow mb-6">{t.work.eyebrow}</div>
            <h1 className="font-serif font-light text-ink text-[44px] md:text-[68px] leading-[1.05]">
              {project.title}
            </h1>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-linen/40 pt-8">
              <div>
                <div className="label-eyebrow mb-2">{t.work.location}</div>
                <div className="text-ink text-[15px]">{project.location}</div>
              </div>
              <div>
                <div className="label-eyebrow mb-2">{t.work.year}</div>
                <div className="text-ink text-[15px]">{project.year}</div>
              </div>
              {project.client && (
                <div>
                  <div className="label-eyebrow mb-2">Client</div>
                  <div className="text-ink text-[15px]">{project.client}</div>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-16 font-serif italic font-light text-ink text-[22px] md:text-[26px] leading-[1.55] max-w-2xl">
              {project.description[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-bone pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
            {project.gallery.map((src, i) => {
              const spans = ["md:col-span-8", "md:col-span-4 md:mt-24", "md:col-span-12"];
              return (
                <Reveal key={src} className={spans[i % spans.length]} delay={i * 60}>
                  <ProjectImage
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    className="w-full h-[360px] md:h-[560px] object-cover"
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="bg-paper border-t border-linen/40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Link to="/work" className="link-underline text-[12px] tracking-[0.16em] uppercase">
            ← {t.work.backToWork}
          </Link>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="md:text-right group"
          >
            <div className="label-eyebrow mb-3">{t.work.next}</div>
            <div className="font-serif text-[28px] md:text-[36px] text-ink group-hover:text-walnut transition-colors">
              {next.title} →
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
