import Card from "../components/Card"
import Navbar from "../components/Navbar"
import Sdata from "./Sdata"
function Services() {
    return (
        <>
            <Navbar />
            <div className="my-4">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                         {
                            Sdata.map((val, ind) => {
                                return <Card 
                                imgsrc={val.imgsrc}
                                title={val.title}
                                key={ind}
                                />
                            })
                         }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Services