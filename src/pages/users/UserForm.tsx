import { useForm } from 'react-hook-form';
import { useLocation, useParams } from "react-router-dom";
import { CardContent, Button, TextField } from "@mui/material";
import type { UserDTO } from '../../shared/dto/UserDTO'
import { useSelector } from 'react-redux';
import type { RootState } from '../../core/store';
import { userService } from "../../services/userService";
import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const UserForm = () => {

    const { register, handleSubmit, reset } = useForm<UserDTO>();

    const user = useSelector((state: RootState) => state.UserSlice);
    const location = useLocation();
    const queryClient = useQueryClient();
    const params = useParams();

    useEffect(() => {
        if (location.pathname.includes('edit')) {
            console.log(params.id);

            reset(user);
        }
    }, []);

    const mutation = useMutation({
        mutationFn: userService.createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        }
    })

    const submitForm = async (data: UserDTO) => {
       const output =  await mutation.mutateAsync(data);
       console.log(output)
    }

    return (
        <>
            <CardContent className='w-full h-full flex justify-center items-start'>
                <form onSubmit={handleSubmit(submitForm)} className='w-[40%] flex flex-col gap-5'>
                    <div className='flex flex-row justify-between items-center'>
                        <span>ID</span>
                        <TextField {...register('id')} label="ID" variant="outlined" />
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <span>Name</span>
                        <TextField {...register('name')} label="Name" variant="outlined" />
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <span>Email</span>
                        <TextField {...register('email')} label="Email" variant="outlined" />
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <span>Phone</span>
                        <TextField {...register('phone')} label="Phone" variant="outlined" />
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <span>Website</span>
                        <TextField {...register('website')} label="Website" variant="outlined" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <Button type='submit' className='w-[35%]' variant="outlined">
                            {
                                location.pathname.includes('edit') ? 'Edit User' : 'Create User'
                            }
                        </Button>
                    </div>
                </form>
            </CardContent>
        </>
    )
};

export default UserForm;