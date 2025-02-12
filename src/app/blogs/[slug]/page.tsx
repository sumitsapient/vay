import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Blog {
  metadata: {
    title: string;
    author: string;
    date: string;
    coverImage?: string;
  };
  content: string;
}

// ✅ Corrected typing for params
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const blog: Blog | null = await getBlogBySlug(params.slug);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="blog-container">
      <h1 className="blog-title">{blog.metadata.title}</h1>
      <p className="blog-meta">
        By {blog.metadata.author} on {blog.metadata.date}
      </p>

      {blog.metadata.coverImage && (
        <Image
          src={blog.metadata.coverImage}
          alt="Cover Image"
          width={800}
          height={500}
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      )}

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

// ✅ Correctly using generateStaticParams
export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}
