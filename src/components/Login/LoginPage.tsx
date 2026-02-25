import { LoginForm } from '../../components/Login/ui/LoginForm.tsx';
export const LoginPage = () => {
  return (
    <div>
      <div className='min-h-screen flex flex-col items-center justify-center bg-blue-50'>
        <div className="flex flex-col items-center justify-center text-center relative -top-30">
          <img
          src="../assets/book.png"
          alt="CramMaster"
          className="w-20 h-20 mb-4 relative top-10"
          />
          <span className="text-4xl text-[#080808] font-bold">
            CramMaster
          </span>
          <p className="text-gray-600">
            Find the perfect tutor for your exam prep
          </p>
        </div>
        
        <div className='bg-[rgb(254,255,255)] px-25 py-30 rounded-[30px] text-center relative -top-20'>
          <LoginForm />
          
        </div>
      </div>
    </div>
  );
}