import { NavLink } from "react-router-dom"
import Common from "../components/Common"
import Navbar from "../components/Navbar"
import about from "../images/about.png"
function About() {
    return (
        <>
            <Common
            name="Welcome to about page"
            imgSrc={about}
            visit="/contact"
            btname="Contact Now"
             />
        </>
    )
}

export default About