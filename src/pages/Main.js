import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Link, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Search from "./Search";
import Slide from "./Slide";

const Main = ({ movie, on, setOn, input, setInput, setSearch, setPageNum, listNum, pageLimit, list, setList, movieList, limit }) => {

    // const [movie, setMovie] = useState([]);
    // const getMovie = async () => {

    //     const r = await axios.get(`https://yts.mx/api/v2/list_movies.json?&limit=25`);
    //     setMovie(r.data.data.movies);

    // }
    // useEffect(() => {
    //     console.log(movie)
    //     getMovie();


    // }, [])




    const coverImg = (e) => {
        e.target.src = process.env.PUBLIC_URL + '/img/cover.jpg'
    }

    return (

        <main>
            <Search input={input} setInput={setInput} setSearch={setSearch} />
            <div className="page_btn">
                {
                    list > 1 &&
                    <button onClick={() => setList(list - pageLimit)} className="prev"><BsChevronDoubleLeft /></button>
                }

                {
                    listNum.map((it, idx) => {
                        return (
                            <button onClick={() => { setPageNum(idx + 1) }} key={idx}>{idx + 1}</button>
                        )
                    }).slice(list, list + pageLimit)
                }
                {
                    list < parseInt(movieList / limit) - pageLimit &&
                    <button onClick={() => setList(list + pageLimit)} className="next"><BsChevronDoubleRight /></button>
                }
            </div>
            <Slide movie={movie} coverImg={coverImg} setOn={setOn} movieList={movieList} />
            <div className="inner">
                <ul className="movieList">
                    {movie &&
                        movie.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <Link to={`/detail/${it.id}`} onClick={() => { setOn(true) }}>
                                        <figure>
                                            <img src={it.medium_cover_image} alt={it.title} onError={coverImg} />
                                        </figure>
                                        <h3>{it.title}</h3>
                                        <p>{it.description_full.substr(0, 60)}</p>
                                        {/* substr 문자 자르기 */}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Routes>
                <Route path={`/detail/:id`} element={<Detail movie={movie} on={on} setOn={setOn} coverImg={coverImg} />} />
            </Routes>

        </main>



    )
}

export default Main