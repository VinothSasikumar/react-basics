import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { UserDTO } from '../dto/UserDTO'

const initialState: UserDTO = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    website: ''
}

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        setUser: (state: UserDTO, action: PayloadAction<UserDTO>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.website = action.payload.website;
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
