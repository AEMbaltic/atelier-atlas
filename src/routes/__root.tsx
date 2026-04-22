import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { LangProvider } from "@/i18n/LangContext";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bone px-6">
      <div className="max-w-md text-center">
        <div className="label-eyebrow">404</div>
        <h1 className="mt-4 font-serif text-[56px] leading-tight text-ink">Page not found</h1>
        <p className="mt-4 text-walnut">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="link-underline text-[13px] tracking-[0.16em] uppercase">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

const HREFLANGS = ["lv", "en", "de", "ru"] as const;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SEL RA ART — Bespoke Furniture & Joinery, Riga" },
      {
        name: "description",
        content:
          "Bespoke furniture, kitchens, staircases, and architectural woodwork, handmade in solid timber. Atelier in Riga, exporting to Germany, Estonia, and the UK since 2007.",
      },
      { name: "author", content: "SEL RA ART" },
      { property: "og:site_name", content: "SEL RA ART" },
      { property: "og:title", content: "SEL RA ART — Bespoke Furniture & Joinery, Riga" },
      {
        property: "og:description",
        content:
          "Bespoke furniture, kitchens, staircases, and architectural woodwork, handmade in solid timber in Riga since 2007.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "lv_LV" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#F4F1EB" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap",
      },
      ...HREFLANGS.map((l) => ({
        rel: "alternate",
        hreflang: l,
        href: `https://selraart.aembaltic.com/${l === "lv" ? "" : l}`,
      })),
      { rel: "alternate", hreflang: "x-default", href: "https://selraart.aembaltic.com/" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lv">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SEL RA ART",
              description:
                "Bespoke furniture, kitchens, staircases, and architectural woodwork, handmade in solid timber.",
              founder: "SEL RA ART",
              foundingDate: "2007",
              url: "https://selraart.aembaltic.com",
              telephone: ["+371 29354067", "+371 26150665"],
              email: "info@selraart.lv",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Aptiekas iela 13-35",
                addressLocality: "Riga",
                postalCode: "LV-1005",
                addressCountry: "LV",
              },
              areaServed: ["LV", "DE", "EE", "GB"],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LangProvider>
      <Outlet />
    </LangProvider>
  );
}
