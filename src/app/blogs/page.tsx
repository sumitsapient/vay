import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";
import Image from "next/image";

export default async function BlogList() {
  const blogs = getAllBlogs();
  console.log(blogs);

  return (
    <div>
      <h1>📜 Blog List</h1>
      {blogs.map((blog) => (
        <div key={blog.slug}>
          <Image
            src={blog.coverImage}
            width={800}
            height={400}
            alt="Cover Image"
            className="cover-image"
          />
          <h2>{blog.title}</h2>
          <p>{blog.excerpt}</p>
          <Link href={`/blogs/${blog.slug}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
