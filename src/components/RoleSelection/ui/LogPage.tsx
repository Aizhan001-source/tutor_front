import Logo from "../../../assets/book.svg"

export const LogoPage = () => {
    return (
        <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
                <div className="bg-indigo-600 p-4 rounded-2xl">
                    <img src={Logo} 
                    alt="CramMaster Logo" 
                    className="w-12 h-12" />
                </div>
            </div>
            <span className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Welcome to CramMaster
            </span>
            <p className="text-lg text-gray-600 mb-2">
                Your ultimate exam preparation platform
            </p>
            <p className="text-lg text-gray-500">
                Connect students with expert tutors for personalized learning
            </p>
        </div>
    )
}