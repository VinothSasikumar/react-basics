import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { UserNameContext } from "../hooks/UseContext";

const ConditionalRendering = () => {

    const userName = useContext(UserNameContext);

    const [value, setValue] = useState<number>(0);
    const [user, setUser] = useState<string>(userName ?? '');

    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                <TextField placeholder="Your Name" variant="outlined" value={user} onChange={(e) => setUser(e.target.value)} />
                <Button variant="contained" onClick={() => setValue(value + 1)}>Increase</Button>
                <span>Value is: {value}</span>
                <span>Value is: {value % 2 === 0 ? 'Even' : 'Odd'}</span>
            </div>
        </>
    )
}

export default ConditionalRendering;