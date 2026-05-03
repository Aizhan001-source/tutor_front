import { Navbar } from "../Payments/ui/Navbar"
import { Card } from "../Payments/ui/Card"
import { Summary } from "./ui/Summary.tsx"
import { Footer } from "./ui/Footer.tsx"

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