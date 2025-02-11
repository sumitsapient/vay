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

interface BlogPostProps {
  blog: Blog;
}

export default function BlogPost({ blog }: BlogPostProps) {
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
              width={800} // Adjust as needed
              height={500} // Adjust as needed
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

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug);
  return { props: { blog } };
}

export async function getStaticPaths() {
  const blogs = getAllBlogs();
  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
}
