import Link from "next/link";
import Image from "next/image";


interface IappProps {
   data: {
     id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImageUrl: string;
    createdAt: string;
    updatedAt: string;
   }
}
export function BlogPostCard({ data }: IappProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            alt="Blog Image"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]"> {/* ensures spacing */}
          <div>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">{data.title}</h3>
            <p className="mb-4 line-clamp-2 text-sm text-gray-600">{data.content}</p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={data.authorImageUrl}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 font-medium">{data.authorName}</p>
            </div>
            <time className="text-xs text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(new Date(data.createdAt))}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
}
