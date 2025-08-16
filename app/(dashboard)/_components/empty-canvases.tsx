"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export const EmptyCanvases = () => {
    const router = useRouter();
    const { organization } = useOrganization();
    const {mutate , pending} = useApiMutation(api.board.create);

    const onClick = () => {
        if (!organization) return;

        mutate({
            orgId: organization.id,
            title: "Untitled"
        })

            .then((id) =>{
                toast.success("Canvas Created!");
                router.push(`/board/${id}`);
            })
            .catch(() => toast.error("Faild to create Canvas"))
    };

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
            src="/note.svg"
            height={200}
            width={200}
            alt="Empty"
            />
            <h2 className="text-3xl font-semibold mt-6">
               Create your first canvas!
            </h2>
            <p className="text-muted-foreground text-md mt-2">
                Start by creating a canvas for your organization.
            </p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create canvas
                </Button>
            </div>
        </div>
    )
}