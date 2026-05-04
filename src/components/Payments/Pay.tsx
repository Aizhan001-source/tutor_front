import { Navbar } from "../Main/ui/Navbar"
import { Card } from "../Payments/ui/Card"
import { Summary } from "./ui/Summary"
import { Footer } from "../Main/ui/Footer"

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