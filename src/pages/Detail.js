import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsXLg } from "react-icons/bs";

const Detail = ({ movie, on, setOn, coverImg }) => {
    const { id } = useParams();
    const itm = movie.find(it => String(it.id) === id);
    return (
        <>
            {itm && on &&
                <div className="moviePopWrap">
                    <div className="movie_pop">
                        <div className="img_wrap">
                            <figure>
                                <img src={itm.large_cover_image} alt={itm.title} onError={coverImg} />
                            </figure>
                        </div>
                        <div className="desc_wrap">
                            <div className="desc">
                                <h3>{itm.title_long}</h3>
                                <p>{
                                    itm.description_full &&
                                    itm.description_full.substr(0, 350)
                                    ||
                                    'this movie not description'

                                }</p>
                                <span className="genres">
                                    {
                                        itm &&
                                        itm.genres.map((it, idx) => {
                                            return (
                                                <em key={idx}>{it}</em>
                                            )
                                        })
                                    }
                                </span>
                                <span className="link">
                                    <a href={itm.url} target={'_blank'}>View More</a>
                                </span>
                            </div>
                        </div>
                        <div className="close" onClick={() => { setOn(false) }}>
                            <Link to={`/`}><BsXLg /></Link>
                        </div>
                    </div>
                </div>


            }
        </>
    )
}

export default Detail