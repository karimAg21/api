import { Link } from "react-router-dom";
import { movies } from "./data";
export default function Thriller(){
    return(
        <div className="con">
            {
                movies.filter((thi)=>{
                    return thi.Genre==='Thriller'
                }).map((mov,i)=>{
                    return (
                        <div className="card " style={{width:"250px"}}>
      <img src={mov.Image} style={{width:"100%"}}  alt={mov.Title} />
        <div className="card-body">
        <Link to={`/movies/${mov.Title}`} className="aaa"><h4 className="card-title">{mov.Title}</h4></Link>
        <p>{mov.Year}</p>
        </div>
        </div>
                    )
                })
            }
        </div>
    )
}