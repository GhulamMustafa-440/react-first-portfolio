import { NavLink } from "react-router-dom"
import web from "../images/Hire-laravel-developers.png"
function Card({imgsrc, title}) {
    return(
        <div className="col-md-4 col-10 mx-auto">
        <div className="card">
            <img src={imgsrc} className="card-img-top" alt={imgsrc} height='210px' />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                </div>
        </div>
    </div>
    )
}

export default Card