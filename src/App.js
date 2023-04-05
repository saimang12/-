import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./pages/Main";
import './css/main.scss';
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [on, setOn] = useState(true);
  const [genre, setGenre] = useState('');
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [load, setLoad] = useState(true);
  const [movieList, setMovieList] = useState();
  const [list, setList] = useState(0);
  const [pageNum, setPageNum] = useState(0);

  const limit = 50;
  const pageLimit = 20;
  const listNum = Array.from({ length: parseInt(movieList / limit) });


  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    setLoad(true);
    const r = await axios.get(`https://yts.mx/api/v2/list_movies.json?&page=${pageNum}&limit=${limit}&genre=${genre}&query_term=${search}`);
    setMovie(r.data.data.movies);
    setMovieList(r.data.data.movie_count);
    setInput('')
    setLoad(false);
  }


  useEffect(() => {
    getMovie();
  }, [genre, search, pageNum])

  const GL = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Thriller",
    "War",
    "Western"
  ];
  if (load) {
    return <div className="load"><i className="xi-spinner-1 xi-spin"></i></div>
  } else {
    return (

      <Routes>
        <Route path={`/`} element={<Layout setGenre={setGenre} GL={GL} setSearch={setSearch} setPageNum={setPageNum} setList={setList} />}>
          <Route path={`/`} element={<Main movie={movie} on={on} setOn={setOn} input={input} setInput={setInput} search={search} setSearch={setSearch} setPageNum={setPageNum} listNum={listNum} pageLimit={pageLimit} list={list} setList={setList} movieList={movieList} limit={limit} genre={genre} />} >

            <Route path={`/detail/:id`} element={<Detail movie={movie} on={on} setOn={setOn} />} />
          </Route>
        </Route>
      </Routes>
    );
  }

}

export default App;
