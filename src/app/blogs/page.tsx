import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";
import Image from "next/image";
import "./SingleBlog.css";

export default async function BlogList() {
  const blogs = getAllBlogs();

  return (
    <>
      <section className="section blog-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {blogs.map((blog) => (
                  <div className="col-lg-12 col-md-12 mb-5" key={blog.slug}>
                    <div className="blog-item">
                      <div className="blog-thumb">
                        {blog.coverImage && (
                          <Image
                            src={blog.coverImage}
                            alt="Cover Image"
                            width={500}
                            height={300}
                            className="cover-image"
                          />
                        )}
                      </div>

                      <div className="blog-item-content">
                        <h1 className="mt-3 mb-3 heading-2">
                          <a href="blog-single.html">{blog.title}</a>
                        </h1>

                        <p className="mb-4">{blog.excerpt}</p>
                        <Link
                          className="btn btn-primary"
                          href={`/blogs/${blog.slug}`}
                        >
                          Read More{" "}
                          <i className="icofont-simple-right ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
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

          <div className="row mt-5">
            <div className="col-lg-8">
              <nav className="pagination py-2 d-inline-block">
                <div className="nav-links">
                  <span aria-current="page" className="page-numbers current">
                    1
                  </span>
                  <a className="page-numbers" href="#">
                    2
                  </a>
                  <a className="page-numbers" href="#">
                    3
                  </a>
                  <a className="page-numbers" href="#">
                    <i className="icofont-thin-double-right"></i>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
