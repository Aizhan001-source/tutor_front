import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuthStore } from '../model/auth.store';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'


export const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate('/dashboard');
  };

  return (
    <form onSubmit={onSubmit} className='flex flex-col mt-3 bg-white rounded-2xl shadow-xl p-8 gap-3'>
      <div className=''>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <div className='relative'>
          <EnvelopeIcon className='w-5 h-5 text-[#99A1AF] absolute left-3 top-1/2 -translate-y-1/2' />
          <input
            type="email"
            placeholder="admin@crammaster.com"
            value={email}
            className="bg-white border p-3 pl-10 rounded-[10px] w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
      </div>

      <div className=''>
        <label htmlFor='password' className='block text-medium text-gray-700 mb-2 gap-3'>
          Password
        </label>

        <div className='relative'>
          <LockClosedIcon className='w-5 h-5 text-[#99A1AF] absolute left-3 top-1/2 -translate-y-1/2' />
          <input
            type="password"
            placeholder="........"
            className="w-full border border-gray-300 pl-11 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline none transition "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
      </div>

      <div className='flex flex-col gap-3 text-center'>
        <button type="submit" className='w-full bg-indigo-600 hover:bg-indigo-700 text-white pl-11 pr-4 py-3 rounded-lg font-semibold transition duration-200 shadow-lg hover:shadow-xl'>
          Sign in
        </button>
        <p className='text-gray-600'>
        Admin access is restricted. Contact system administrator for credentials.
      </p>
      </div>
    </form>

  );
};