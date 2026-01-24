import { Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UseEffectNewExample = () => {

    const navigate = useNavigate();

    const [name, setName] = useState<string>();

    const currentlocation = useLocation();
    console.log('Component loaded', currentlocation.pathname);

    useEffect(() => {

        return () => {
            console.log('Component unloaded');
        }
    }, []);

    const clickEvent = () => {
        navigate('/effect');
    }

    return (
        <>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <span>{name}</span>

            {/* <Link to='/effect'> */}
            <Button variant="outlined" onClick={clickEvent}>Click to navigate to useEffect Old</Button>
            {/* </Link> */}
        </>
    )
}

export default UseEffectNewExample;