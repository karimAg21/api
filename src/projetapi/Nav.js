
import { Link } from "react-router-dom"
export default function Nav(){
    return(
      
       <ul>
          <ul ><li><Link className="ul" to={'/'}><i class="fa-solid fa-house"></i>   <i>M</i>ovies<i>I</i>nfo</Link></li></ul>
          <li><Link to={'/Action'}>Action</Link></li>
          <li><Link to={'/Crime'}>Crime</Link></li>
          
          <li>
            <Link  to={'#'}>Genre ▼</Link>
            <ul className="dropdown">
              <li><Link to={'/Drama'}>Drama</Link></li>
              <li><Link to={'/Comedy'}>Comedy</Link></li>
              <li><Link to={'/Horror'}>Horror</Link></li>
              <li><Link to={'/Mystery'}>Mystery</Link></li>
              <li><Link to={'/Romance'}>Romance</Link></li>
              <li><Link to={'/Western'}>Western</Link></li>
              <li><Link to={'/Thriller'}>Thriller</Link></li>
            </ul>
          </li>
          <li><Link to={'/Search'}><i class="fa-solid fa-magnifying-glass"></i>  Search</Link></li>
          <ul className="uloo"><li><Link to={'/watchlist'} style={{color:"black%"}}>WatchList</Link></li></ul>
       </ul>
       
    )
}