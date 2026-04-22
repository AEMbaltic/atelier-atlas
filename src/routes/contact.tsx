import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { useLang } from "@/i18n/LangContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SEL RA ART" },
      {
        name: "description",
        content:
          "Speak with the atelier. Aptiekas iela 13-35, Riga, LV-1005. Workshop visits by appointment.",
      },
      { property: "og:title", content: "Contact — SEL RA ART" },
      {
        property: "og:description",
        content: "Speak with the atelier in Riga. Workshop visits by appointment.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    try {
      // Placeholder endpoint — replace with real handler.
      await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
      }).catch(() => undefined);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <Layout>
      <section className="pt-[140px] md:pt-[180px] pb-16 md:pb-20 bg-bone">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="label-eyebrow mb-6">{t.contact.eyebrow}</div>
            <h1 className="font-serif font-light text-ink text-[44px] md:text-[80px] leading-[1.05] max-w-3xl">
              {t.contact.title}
            </h1>
            <p className="mt-8 max-w-xl text-walnut text-[16px] leading-[1.8]">{t.contact.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left column — details */}
          <Reveal className="md:col-span-5 space-y-10">
            <div>
              <div className="label-eyebrow mb-3">{t.contact.studio}</div>
              <div className="text-ink text-[16px] leading-[1.8]">
                {t.contact.address}
              </div>
            </div>
            <div>
              <div className="label-eyebrow mb-3">Telephone</div>
              <div className="text-ink text-[16px]">{t.contact.phone}</div>
            </div>
            <div>
              <div className="label-eyebrow mb-3">Email</div>
              <a
                href={`mailto:${t.contact.email}`}
                className="text-ink text-[16px] hover:text-walnut transition-colors"
              >
                {t.contact.email}
              </a>
            </div>

            <div className="pt-4">
              <div className="aspect-[4/3] w-full overflow-hidden border border-linen/50">
                <iframe
                  title="SEL RA ART workshop location"
                  src="https://www.google.com/maps?q=Aptiekas+iela+13,+Riga&output=embed"
                  className="w-full h-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Right column — form */}
          <Reveal className="md:col-span-6 md:col-start-7" delay={100}>
            {submitted ? (
              <div className="border-t border-ink pt-10">
                <p className="font-serif italic text-[26px] md:text-[30px] text-ink leading-[1.4]">
                  {t.contact.submitted}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8 border-t border-ink pt-10">
                <Field label={t.contact.formName} name="name" required />
                <Field label={t.contact.formEmail} name="email" type="email" required />
                <Field label={t.contact.formMessage} name="message" required textarea />
                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="text-[12px] tracking-[0.18em] uppercase text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors disabled:opacity-50"
                  >
                    {submitting ? "…" : `${t.contact.submit} →`}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="block label-eyebrow mb-2">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className="w-full bg-transparent border-0 border-b border-linen/70 focus:border-ink outline-none py-2 text-ink text-[16px] resize-none transition-colors"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="w-full bg-transparent border-0 border-b border-linen/70 focus:border-ink outline-none py-2 text-ink text-[16px] transition-colors"
        />
      )}
    </label>
  );
}
