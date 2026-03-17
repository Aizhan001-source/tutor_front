import {LogoPage} from "../RoleSelection/ui/LogPage"
import {CardBar} from "../RoleSelection/ui/CardBar"
import {FooterBar} from "../RoleSelection/ui/FooterBar"

export const RoleSelectionPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-start justify-center px-4 py-20">
            <div className="w-full max-w-4xl">
                <LogoPage />
                <CardBar />
                <FooterBar />
            </div>
        </div>
    )
}