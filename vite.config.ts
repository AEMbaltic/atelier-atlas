// @lovable.dev/vite-tanstack-config bundles plugins for the Lovable sandbox
// AND for the production target. By default it adds the Cloudflare Workers
// plugin during build. To deploy to Vercel we disable Cloudflare and pass
// target: "vercel" to TanStack Start so it emits a .vercel/output build.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
});
