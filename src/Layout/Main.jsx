import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
    return (
        <div>
            <div className="container px-4 mx-auto py-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
          <Footer></Footer>
        </div>
    );
};

export default Main;