import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectExampleOld = () => {

    // const [name, setName] = useState<string>('');
    const [userDetails, setUserDetails] = useState<[]>([]);

    // useEffect(() => {
    //     console.log('UseState Name value has been changed', name);
    // }, [name])

    let isLoaded = false;


    useEffect(() => {
        /*Mounting Starts*/
        if (!isLoaded) {
            const users = axios.get('https://jsonplaceholder.typicode.com/users');

            // const users = fetch('https://jsonplaceholder.typicode.com/users');

            // users.then(result => {
            //     result.json().then(out => {
            //         setUserDetails(out);
            //     })
            // })

            users.then(res => {
                setUserDetails(res.data);
            });

            console.log('Data Loaded');
            isLoaded = true;
        }
        /*Mounting End*/

        /*Unmounting Starts*/
        return () => {
            console.log('Component unmounted');
        }
        /*Unmounting End*/
    }, [])

    return (
        <>
            {/* <TextField variant="outlined" label="Name" value={name} onChange={(e) => setName(e.target.value)} /> */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Website</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userDetails.map((row) => (
                            <TableRow
                                key={row['id']}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row['name']}
                                </TableCell>
                                <TableCell>{row['email']}</TableCell>
                                <TableCell>{row['phone']}</TableCell>
                                <TableCell>{row['website']}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default UseEffectExampleOld;