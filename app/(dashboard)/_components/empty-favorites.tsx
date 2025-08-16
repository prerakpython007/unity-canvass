import Image from "next/image";


export const EmptyFavorites = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
            src="/empty-favorites.svg"
            height={500}
            width={500}
            alt="Empty"
            />
            <h2 className="text-3xl font-semibold ">
                No Favorite canvases!
            </h2>
            <p className="text-muted-foreground text-md mt-2">
                Try favoriting a canvas.
            </p>
        </div>
    )
}