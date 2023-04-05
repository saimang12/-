import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


const Layout = ({ setGenre, GL, setSearch, setPageNum, setList }) => {


    return (
        <div className="Wrap">
            <Header setGenre={setGenre} GL={GL} setSearch={setSearch} setPageNum={setPageNum} setList={setList} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;