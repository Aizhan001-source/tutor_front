import Shield from "../../../assets/shield.svg"

export const Logo = () => {
    return (
        <div className="flex flex-col gap-3 items-center justify-center text-center">
            <img
            src={Shield}
            alt="CramMaster"
            className="w-20 h-20 mb-4"
            />
            <span className="text-4xl text-[#080808] font-semibold">
                Admin Login
            </span>
            <span className="text-[#4A5565]">
                Secure access to admin panel
            </span>
        </div>
    )
}