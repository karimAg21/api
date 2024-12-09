import { Link } from "react-router-dom"
export default function Aff(props){
    return (
      <div className="card " style={{width:"250px"}}>
      <img src={props.movie.Image} style={{width:"100%"}}  alt={props.movies.Title} />
        <div className="card-body">
        <Link to={`/movies/${props.movies.Title}`} className="aaa"><h4 className="card-title">{props.movies.Title}</h4></Link>
        <p>{props.movies.Year}</p>
        </div>
        </div>
      )
}