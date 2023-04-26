
import "./style.css"

function Movie(props){
    const movies = props.movielist
    return(
        <>
        {movies.map((movie)=>{
            return(
                <div key={movie.imdbID} className="card">
                    <div className="image-box">
                        <img src={movie.Poster} alt={movie.Title}/>
                    </div>
                    <div className="title-box">
                        <p>{movie.Title}</p>
                    </div>
                </div>
                )
            })}
        </>
    )
}

export default Movie