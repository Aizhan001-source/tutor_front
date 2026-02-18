import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid"
import { useNavigate } from "react-router-dom"

export const BottomPanel = () => {
    const navigate = useNavigate();
    
    const registerClick = () => {
        navigate('/register')
    }


    return (
        <div className='flex flex-col m-3 gap-3'>
            <span className='text-white underline'>Құпиясөзді ұмыттыңыз ба?</span>

            <div className='flex items-center'>
                <div className='flex-1 h-px bg-gray-100'></div>
                <span className='text-gray-100 text-sm whitespace-nowrap'>немесе</span>
                <div className='flex-1 h-px bg-gray-100'></div>
            </div>

            <button type="button" onClick={registerClick} className='flex justify-center items-center bg-none border p-3 rounded-[10px] w-full text-white font-[700] transition duration-200 hover:bg-[#5fc1d1]'>
                Тіркелу
                <ArrowRightEndOnRectangleIcon className='w-5 h-5 pl-1' />
            </button>
        </div>
    )
}