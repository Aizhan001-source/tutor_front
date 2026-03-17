import { Navbar } from "./ui/Navbar"
import { MainBar } from "./ui/MainBar"
import {CardBar} from "./ui/CardBar"
import {FooterBar} from "./ui/FooterBar"

export const AdminDashboard = () => {
    return (

        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar />
            <CardBar />
            <MainBar />
            <FooterBar />
        </div>
    )
}