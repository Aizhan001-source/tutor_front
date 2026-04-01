import { Navbar } from "../BookSessions/ui/Navbar"
import { Card } from "../BookSessions/ui/Card"
import { Summary } from "./ui/Summary.tsx"
import { Footer } from "./ui/Footer.tsx"

export const BookSession=() => {
    return(
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
            <Navbar/>
            <Card/>
            <Summary/>
            <Footer/>
        </div>
    )
}