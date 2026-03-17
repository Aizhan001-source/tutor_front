import {Logo} from "./ui/Logo"
import {LoginForm} from "./ui/LoginForm"

export const AdminlogPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#EFF6FF] to-[#E0E7FF]'>
        <div className='flex items-center justify-center px-4 py-8'>
          <div className='w-full max-w-md'>
            <Logo />
            <LoginForm />
          </div>
        </div>
    </div>
  );
};