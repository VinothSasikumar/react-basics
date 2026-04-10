import type { UserDTO } from "../shared/dto/UserDTO";
import { httpClient } from "./httpClient";

export const userService = {
    getUsers: () => httpClient.get<UserDTO[]>('/users'),
    createUser: (user: UserDTO) => httpClient.post<number, UserDTO>('/users/create', user)
}