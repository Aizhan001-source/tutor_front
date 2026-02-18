import { LoginForm } from '../../components/Login/ui/LoginForm';

export const LoginPage = () => {
  return (
    <div>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <div className='bg-[#0c75ae] px-8 py-12 rounded-[10px] text-center'>

          <span className='text-4xl text-white font-[700]'>Қош келдіңіз!</span>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};