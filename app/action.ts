"use server";

import { redirect } from "next/navigation";
import { prisma } from "./utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export async function handleSubmit(formdata: FormData) {
    const{getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user ){
        return redirect("/api/auth/register");
    }

const title = formdata.get('title');
const content = formdata.get('content');
const url = formdata.get('url');

    const data = await prisma.BlogPost.create ({
        data: {
            title: title,
            content: content,
            imageUrl: url,
            authorId: user.id,
            authorName: user.given_name,
            authorImageUrl: user.picture, // Assuming you want to use the user's picture as the author image URL

        },
    });

    return redirect("/dashboard");
    
}