import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    TableContainer, Paper, Table, TableHead, TableRow, TableCell,
    TableBody, CardContent, Button, IconButton
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { userService } from "../../services/userService";
import { routes } from "../../core/router/routes";
import { setUser } from '../../shared/reducers/UserSlice';
import type { UserDTO } from '../../shared/dto/UserDTO'

const UserList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: userService.getUsers
    });

    const onEditUser = (user: UserDTO) => {
        debugger;
        dispatch(setUser(user));
        navigate(`/users/edit/${user.id}`);
    }

    return (
        <>
            <div>
                <div className="flex flex-row justify-between items-center mb-5 p-5">
                    <h1 className="text-xl font-semibold">Users</h1>
                    <Link to={routes.createuser}>
                        <Button variant="outlined">Create User</Button>
                    </Link>
                </div>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Website</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users?.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.phone}</TableCell>
                                        <TableCell>{row.website}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => onEditUser(row)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </div>
        </>
    )
};

export default UserList;