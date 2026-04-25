// Dynamic Routing for particular list of id
import React from "react";
async function getAllBlogs(id) {
  const blogs = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return blogs.json();
}
export default async function BlogDetails({ params }) {
  const resolveParams = await params;
  const paramsId = resolveParams.id;
  const matchedBlogsJson = await getAllBlogs(paramsId);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        <p>{matchedBlogsJson.id}</p>
        <p>{matchedBlogsJson.title}</p>
        <p>{matchedBlogsJson.body}</p>
      </div>
    </div>
  );
}
