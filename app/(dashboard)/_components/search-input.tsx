"use client";

import qs from "query-string";
import { Search } from "lucide-react";
// Updated import to useDebounceValue

import useCustomDebounce from "@/hooks/useCustomDebounce";

import { useRouter } from "next/navigation";
import {
    ChangeEvent,
    useEffect,
    useState,
} from "react";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    // Use useDebounceValue here
    const debouncedValue = useCustomDebounce(value, 500);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        console.log(debouncedValue);
        const url = qs.stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue,
            },
        }, {skipEmptyString: true, skipNull: true});

        router.push(url);
    }, [debouncedValue, router]);

    return (
        <div className="w-full relative">
            <Search 
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
            />
            <Input
            className="w-full max-w-[516px] pl-9"
            placeholder="Search Canvas"
            value={value}
            onChange={handleChange}
            />
        </div>
    );
};