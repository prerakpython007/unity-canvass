"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
    onChange: (color: Color ) => void;
};

export const ColorPicker =({
    onChange,
}: ColorPickerProps) => {
    return(
        <div
            className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200"
        >
            <ColorButton color={{ r: 425, g: 467, b: 123, }} onClick={onChange} />
            <ColorButton color={{ r: 25, g: 203, b:  66, }} onClick={onChange} />
            <ColorButton color={{ r: 181, g: 24, b: 66, }} onClick={onChange} />
            <ColorButton color={{ r: 137, g: 84, b: 226, }} onClick={onChange}/>
            <ColorButton color={{r: 171,g: 110, b: 163,}} onClick={onChange} />
            <ColorButton color={{r: 137, g: 233,b: 255,}}onClick={onChange}/>
            <ColorButton color={{ r: 197, g: 212, b: 105,}}onClick={onChange}/>
            <ColorButton color={{r: 225,g: 175,b: 3,}}onClick={onChange} />
            <ColorButton color={{ r: 161, g: 147, b: 162,}}onClick={onChange}/>
            <ColorButton color={{r: 255,g: 82,b: 186,}}onClick={onChange}/>
            <ColorButton color={{r: 237,g: 234,b: 22,}}onClick={onChange}/>
            <ColorButton color={{r: 212,g: 111,b: 254,}}onClick={onChange}/>
        </div>
    )
}

interface ColorButtonProps{
    onClick: (color: Color) => void;
    color : Color;
};

const ColorButton = ({
    onClick,
    color,
}: ColorButtonProps) => {

    return (
        <button
        className="w-8 items-center h-8 flex justify-center hover:opacity-75 transition"
        onClick={() => onClick(color)}
        >

            <div
                className="h-8 w-8 rounded-md border border-neutral-300"
                style={{background: colorToCss(color)}}
            >

            </div>
           
        </button>
    )

}