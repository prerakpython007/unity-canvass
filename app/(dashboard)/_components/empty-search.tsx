import Image from "next/image";


export const EmptySearch = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
            src="/empty-search.svg"
            height={500}
            width={500}
            alt="Empty"
            />
            <h2 className="text-3xl font-semibold mt-6">
                No results found!
            </h2>
            <p className="text-muted-foreground text-md mt-2">
                Try searching for something else.
            </p>
        </div>
    )
}