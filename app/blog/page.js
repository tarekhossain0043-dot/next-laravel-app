// list of Blog from Dummi Api
import Link from "next/link";
import React from "react";

async function getBlogList() {
  const blogList = await fetch("https://jsonplaceholder.typicode.com/posts");
  return blogList.json();
}

export default async function BlogLIst() {
  const getBlogs = await getBlogList();

  return (
    <div className="py-10 px-10">
      <table className="table table-auto">
        <thead className="table-header-group">
          <tr className="table-row">
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        {getBlogs.slice(0, 10).map((blog, key) => {
          console.log(blog);
          return (
            <tbody key={key}>
              <tr>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.body}</td>
                <td className="px-5 py-2 bg-liner-to-r from-purple-300 to-blue-400 text-white transition-all duration-300 hover:bg-clip-text hover:text-transparent hover:bg-liner-to-r hover:from-purple-300 hover:to-blue-400 capitalize cursor-pointer">
                  <Link href={`/blog/${blog.id}`}>View Blog</Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
