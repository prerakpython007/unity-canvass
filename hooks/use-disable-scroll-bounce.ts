import { useEffect } from "react";

export const useDisableSrollBounce = () => {
    useEffect (() => {
        document.body.classList.add("oveflow-hidden" , "overscroll-none");
        return () => {
            document.body.classList.remove("overflow-hidden" , "overscroll-none");
        };
    }, []);
};