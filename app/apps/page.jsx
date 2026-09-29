import AppsContent from "./AppsContent";
import { OWNER, APP } from "@/content/site";
import { vi } from "@/content/i18n";

export const metadata = {
  title: `${APP.name} — ${OWNER.name}`,
  description: vi.app.description,
};

export default function AppsPage() {
  return <AppsContent />;
}
