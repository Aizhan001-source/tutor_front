import { BookLog } from "./ui/BookLog";
import { CardBlog } from "./ui/CardBlog";

export const WelcomePage = () => {
    return (
        <div className ="min-h-screen bg-linear-to-br from-blue--50 to-indigo-100">
            <div className="flex items-center justify-center px-4 py-12">
                <BookLog/>
            </div>
            <div className="flex items-center justify-center -mt-15">
                <CardBlog/>
            </div>
        </div>
    )
}