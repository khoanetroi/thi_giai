import Header from "./Layout/Header";
import Footer from "./Layout/footer";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default DefaultLayout;

