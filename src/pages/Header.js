import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = ({ setGenre, GL, setSearch, setPageNum, setList }) => {
    return (
        <header className="header">
            <div className="inner">
                <h1>
                    <a href="https://saimang12.github.io/react_movie/">Park's Movie List</a>
                </h1>
                <nav className="gnb">
                    <ul className="g_list">
                        <Nav setGenre={setGenre} GL={GL} setSearch={setSearch} setPageNum={setPageNum} setList={setList} />
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header