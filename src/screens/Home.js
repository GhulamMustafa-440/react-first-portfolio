import { NavLink } from "react-router-dom"
import Common from "../components/Common"
import Navbar from "../components/Navbar"
import web from "../images/Hire-laravel-developers.png"
function Home() {
    return (
        <>
            <Common
            name="Grow your business with"
            imgSrc={web}
            visit="/services"
            btname="Get Started"
             />
        </>
    )
}

export default Home