import { Navbar } from "../NavBar/NavBar"
import { Card } from "./ui/Card"
import { Summary } from "./ui/Summary"
import { Footer } from "../Footter/Footer"

export const Payment=() => {
    
    return(
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
            <Navbar/>
            <Card/>
            <Summary/>
            <Footer/>
        </div>
    )
}