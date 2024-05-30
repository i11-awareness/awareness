import { Link } from "react-router-dom";


export default function SeeMore(){
    return(
        <h3 className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 mb-20 h-sm:bottom-56">
            <Link to="/categories">See More</Link>
        </h3>
        )
}
