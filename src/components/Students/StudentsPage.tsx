import {NavBar} from "../Students/ui/NavBar"
import {MainBar} from "../Students/ui/MainBar"

export const StudentPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 gap-3">
            <NavBar />
            <MainBar />
        </div>
    )
}