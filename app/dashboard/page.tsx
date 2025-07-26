
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../utils/db";
import { BlogPostCard } from "@/components/general/Blogpost";

async function getData(UserId: string) {
    const data = await prisma.blogPost.findMany({
        where: {
            authorId: UserId,

        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return data;
}



export default async function  Dashboard() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

  if (!user) {
    // Redirect to login or show fallback content
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold">Please sign in to view your dashboard.</h2>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>Go Home</Link>
      </div>
    );
  }

    const data = await getData(user.id);
    return (
            <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">

                    Blog Articles</h2>
                    <Link href="/dashboard/create" className={buttonVariants()}>
                    Create Post</Link>

        
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item)=>(
                    <BlogPostCard data ={item} key={item.id} />
                )) }
            </div>

        </div>
    )
}