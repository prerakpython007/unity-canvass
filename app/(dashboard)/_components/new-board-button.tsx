"use client";

import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface NewBoardButtonProps {
    orgId: string;
    disabled?: boolean;
};

export const NewBoardButton = ({
    orgId,
    disabled,
}: NewBoardButtonProps) => {
    const router = useRouter();
    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {
        const randomImage = Math.floor(Math.random() * 9) + 1;
        
        // Log the data we're sending
        const boardData = {
            orgId,
            title: "Untitled",
            imageUrl: `/placeholders/${randomImage}.svg`,
        };
        console.log("Creating board with data:", boardData);

        mutate(boardData)
            .then((id) => {
                console.log("Board created successfully with ID:", id);
                toast.success("Canvas created");
                router.push(`/board/${id}`);
            })
            .catch((error) => {
                // Log the detailed error
                console.error("Failed to create board:", error);
                toast.error(`Failed to create canvas: ${error.message}`);
            });
    };

    return (
        <button
            disabled={pending || disabled}
            onClick={onClick}
            className={cn(
                "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6 transition",
                (pending || disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
            )}
        >
            <div />
            <Plus className="h-12 w-12 text-white stroke-1" />
            <p className="text-xs text-white font-light">
                New canvas
            </p>
        </button>
    );
};