import { Button, TextField } from "@mui/material";
import { useRef } from "react";

const UseRef = () => {

    const textFieldRef = useRef<HTMLInputElement>(null);

    const buttonClick = () => {
        textFieldRef.current?.focus();        
    }

    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                <TextField ref={textFieldRef} placeholder="Your Name" variant="outlined" />
                <Button onClick={buttonClick}>Click to update the Text</Button>
            </div>
        </>
    )
}

export default UseRef;