export const routes = {
    home: '/',

    users: '/users',
    user: (id: number | string) => `/users/${id}`,
    createuser: '/users/create',
    edituser: (id: number | string) => `/users/edit/${id}`,

    products: '/product',
    product: (id: number | string) => `/product/${id}`,
    createproduct: '/product/create',
    editproduct: (id: number | string) => `product/${id}`
};