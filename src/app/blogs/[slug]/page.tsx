import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Blog {
  metadata: {
    title: string;
    author: string;
    date: string;
    excerpt?: string;
    coverImage?: string;
  };
  content: string;
}

// Adjusted type for `params` as a Promise
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Await the params here
  const blog: Blog | null = await getBlogBySlug(slug);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <section className="section blog-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12 mb-5">
                  <div className="single-blog-item">
                    {blog.metadata.coverImage && (
                      <Image
                        src={blog.metadata.coverImage}
                        alt="Cover Image"
                        width={800}
                        height={500}
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                      />
                    )}
                    <div className="blog-item-content mt-5">
                      <div className="blog-item-meta mb-3">
                        <span className="text-muted text-capitalize mr-3">
                          <i className="icofont-comment mr-2"></i>
                          {blog.metadata.author}
                        </span>
                        <span className="text-black text-capitalize mr-3">
                          <i className="icofont-calendar mr-2"></i>{" "}
                          {blog.metadata.date}
                          2019
                        </span>
                      </div>

                      <h2 className="mb-4 text-md heading-2">
                        <a href="blog-single.html">{blog.metadata.title}</a>
                      </h2>

                      <p className="lead mb-4">
                        Non illo quas blanditiis repellendus laboriosam minima
                        animi. Consectetur accusantium pariatur repudiandae!
                      </p>

                      <p>
                        <ReactMarkdown
                          className="blog-content"
                          remarkPlugins={[remarkGfm]}
                        >
                          {blog.content}
                        </ReactMarkdown>
                      </p>

                      <blockquote className="quote">
                        A brand for a company is like a reputation for a person.
                        You earn reputation by trying to do hard things well.
                      </blockquote>

                      <p className="lead mb-4 font-weight-normal text-black">
                        The same is true as we experience the emotional
                        sensation of stress from our first instances of social
                        rejection ridicule. We quickly learn to fear and thus
                        automatically.
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iste, rerum beatae repellat tenetur incidunt
                        quisquam libero dolores laudantium. Nesciunt quis itaque
                        quidem, voluptatem autem eos animi laborum iusto
                        expedita sapiente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                <div className="sidebar-widget search mb-3">
                  <h4>Search Here</h4>
                  <form action="#" className="search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search"
                    />
                    <i className="ti-search"></i>
                  </form>
                </div>

                <div className="sidebar-widget latest-post mb-3">
                  <h4>Popular Posts</h4>

                  <div className="py-2">
                    <span className="text-sm text-muted">03 Mar 2018</span>
                    <h6 className="my-2">
                      <a href="#">Thoughtful living in los Angeles</a>
                    </h6>
                  </div>

                  <div className="py-2">
                    <span className="text-sm text-muted">03 Mar 2018</span>
                    <h6 className="my-2">
                      <a href="#">Vivamus molestie gravida turpis.</a>
                    </h6>
                  </div>

                  <div className="py-2">
                    <span className="text-sm text-muted">03 Mar 2018</span>
                    <h6 className="my-2">
                      <a href="#">
                        Fusce lobortis lorem at ipsum semper sagittis
                      </a>
                    </h6>
                  </div>
                </div>

                <div className="sidebar-widget category mb-3">
                  <h4 className="mb-4">Categories</h4>

                  <ul className="list-unstyled">
                    <li className="align-items-center">
                      <a href="#">Health</a>
                      <span>(14)</span>
                    </li>
                    <li className="align-items-center">
                      <a href="#">Tea Benifit</a>
                      <span>(2)</span>
                    </li>
                    <li className="align-items-center">
                      <a href="#">Product</a>
                      <span>(10)</span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget tags mb-3">
                  <h4 className="mb-4">Tags</h4>

                  <a href="#">Health</a>
                  <a href="#">agency</a>
                  <a href="#">company</a>
                  <a href="#">medicine</a>
                  <a href="#">Branding</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// No change needed here
export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}
