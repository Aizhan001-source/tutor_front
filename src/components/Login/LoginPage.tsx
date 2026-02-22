import { LoginForm } from '../Login/ui/LoginForm';
import { Logo } from "../Login/ui/Logo"

export const LoginPage = () => {
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