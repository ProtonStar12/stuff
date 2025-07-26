
import { handleSubmit } from "@/app/action";
import { prisma } from "@/app/utils/db";
import SubmitButton from "@/components/general/Submitbutton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePage(){

    return (
        <div>

            <Card className="max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>a new post to share with everyone</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4" action={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input name = "title" required type="text" placeholder="title here"/>
                        </div>
                         <div className="flex flex-col gap-2">
                            <Label>Content</Label>
                            <Textarea name="content" required placeholder="type here..."/>
                        </div>
                         <div className="flex flex-col gap-2">
                            <Label>image url</Label>
                            <Input name="url" required type ="url" placeholder="image here"/>
                        </div>
                        <SubmitButton/>
                    </form>
                </CardContent>
            </Card>
        

        </div>
    )
}