import LabContent from "./LabContent";
import { OWNER } from "@/content/site";
import { vi } from "@/content/i18n";

export const metadata = {
  title: `${vi.nav.lab} — ${OWNER.name}`,
  description: vi.lab.desc,
};

export default function LabPage() {
  return <LabContent />;
}
