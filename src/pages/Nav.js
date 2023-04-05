import { Link } from "react-router-dom";

const Nav = ({ setGenre, GL, setSearch, setPageNum, setList }) => {

    return (
        <nav className="gnb">
            {
                <ul>
                    {
                        GL.map((it, idx) => {
                            return (
                                <li key={idx} onClick={() => {
                                    setGenre(it);
                                    setSearch('');
                                    setPageNum(0);
                                    setList(0);
                                }}>
                                    <Link to={`/`}>{it}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

            }
        </nav>
    )
}

export default Nav