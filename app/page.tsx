import Link from "next/link";
import { prisma } from "./utils/db";
import { BlogPostCard } from "@/components/general/Blogpost";
import { Suspense } from "react";






async function getData(){

  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorId: true,
      authorName: true,
      authorImageUrl: true,
      id: true,
      createdAt: true,
    },
  });
  return data;

  
}

export default  function Home() {

  return (
    <div className ="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>

      <Suspense fallback={<p> waiting....</p>}>
      <BlogPosts/>
      </Suspense>
          </div>
   
  );
}

async function BlogPosts(){
  const data = await getData();
  return (

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item)=> (
          <BlogPostCard data ={item} key={item.id}/>
        ))}
        </div>

  )
}