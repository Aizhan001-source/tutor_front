import logoImage from "../../../assets/logo.svg"

export const Logo = () => {
    return (
        <div className="flex flex-col gap-3 items-center justify-center text-center">
            <img
            src={logoImage}
            alt="CramMaster"
            className="w-20 h-20 mb-4"
            />
            <span className="text-4xl text-[#080808] font-semibold">
            CramMaster
            </span>
            <span className="text-[#4A5565]">
                Find the perfect tutor for youre exam prep
            </span>
        </div>
    )
}