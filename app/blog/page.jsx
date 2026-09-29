import BlogContent from "./BlogContent";
import { OWNER } from "@/content/site";
import { vi } from "@/content/i18n";

export const metadata = {
  title: `${vi.nav.blog} — ${OWNER.name}`,
  description: vi.blog.desc,
};

export default function BlogPage() {
  return <BlogContent />;
}
