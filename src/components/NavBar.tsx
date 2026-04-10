import { Link } from "react-router-dom";
import { routes } from "../core/router/routes";

const NavBar = () => {
    return (
        <>
            <nav className="bg-blue-200 w-full h-full flex flex-row justify-between items-center">
                <span className="w-1/2 pl-10" >ECommerce Platform</span>
                <div className="w-1/2 flex flex-row justify-end gap-5 pr-10">
                    <Link to={routes.home}>Home</Link>
                    <Link to={routes.users}>Users</Link>
                    <Link to={routes.products}>Product</Link>
                </div>
            </nav>
        </>
    )
};

export default NavBar;