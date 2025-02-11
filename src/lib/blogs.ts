import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "src/content/blogs");

// Get all blog slugs (filenames)
export function getAllBlogSlugs() {
  return fs.readdirSync(BLOGS_DIR).map((file) => file.replace(".md", ""));
}

// Get metadata & content for a specific blog
export function getBlogBySlug(slug: string) {
  const filePath = path.join(BLOGS_DIR, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);
  return { metadata: data, content };
}

// Get all blog metadata (for blog list)
export function getAllBlogs() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => {
    const { metadata } = getBlogBySlug(slug);
    return { ...metadata, slug };
  });
}
