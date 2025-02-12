import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Blog {
  metadata: {
    title: string;
    author: string;
    date: string;
  };
  content: string;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const blog: Blog | null = getBlogBySlug(params.slug);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="blog-container">
      <h1 className="blog-title">{blog.metadata.title}</h1>
      <p className="blog-meta">
        By {blog.metadata.author} on {blog.metadata.date}
      </p>

      {/* Render Markdown content with optimized images */}
      <ReactMarkdown
        className="blog-content"
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => (
            <Image
              src={src!}
              alt={alt || "Blog Image"}
              width={800}
              height={500}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          ),
        }}
      >
        {blog.content}
      </ReactMarkdown>
    </div>
  );
}

// ✅ Replace `getStaticPaths`
export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}
