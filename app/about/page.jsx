import AboutContent from "./AboutContent";
import { OWNER } from "@/content/site";
import { vi } from "@/content/i18n";

export const metadata = {
  title: `${vi.nav.about} — ${OWNER.name}`,
  description: vi.footer.tagline,
};

export default function AboutPage() {
  return <AboutContent />;
}
