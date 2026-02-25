import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuthStore } from '../model/auth.store';
import { EnvelopeIcon, LockClosedIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid'


export const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit} className='flex flex-col mt-3'>
        <div className="flex flex-col items-start">
          <h1 className="text-left text-3xl font-bold text-[#1e293b] mb-8 relative -top-30">
            Welcome Back
          </h1>
        </div>
        <div className='relative -top-35'>
          <EnvelopeIcon className='w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2' />
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="bg-white border p-3 pl-10 rounded-[10px] w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='relative -top-30'>
          <LockClosedIcon className='w-3 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2' />
          <input
            type="password"
            placeholder="Password"
            className="bg-white border p-3 pl-10 rounded-[10px] w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className='relative -top-30 flex flex-col m-3 gap-3'>
          <button type="submit" className='flex justify-center items-center bg-[#7cd4e2] border p-3 rounded-[10px] w-full text-white font-[700] transition duration-200 hover:bg-[#5fc1d1]'>
            Sign in
            <ArrowRightEndOnRectangleIcon className='w-5 h-5 pl-1' />
          </button>
        </div>
      </form>
    </div>
  );
};