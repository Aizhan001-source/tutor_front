import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useAuthStore } from '../../../store/authStore';

export const LoginForm = () => {
  const navigate = useNavigate();

  const { login, isLoading, error } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await login(email, password);

    // ✅ проверка — только если токен появился
    const newToken = localStorage.getItem('token');
    if (newToken) {
      navigate('/dashboard');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col mt-3 bg-white rounded-2xl shadow-xl p-8 gap-3'
    >
      <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
        Welcome Back
      </h2>

      {/* EMAIL */}
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>
          Email Address
        </label>
        <div className='relative'>
          <EnvelopeIcon className='w-5 h-5 text-[#99A1AF] absolute left-3 top-1/2 -translate-y-1/2' />
          <input
            type='email'
            placeholder='you@example.com'
            value={email}
            className='bg-white border p-3 pl-10 rounded-[10px] w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      {/* PASSWORD */}
      <div>
        <label className='block text-sm text-gray-700 mb-2'>
          Password
        </label>

        <div className='relative'>
          <LockClosedIcon className='w-5 h-5 text-[#99A1AF] absolute left-3 top-1/2 -translate-y-1/2' />
          <input
            type='password'
            placeholder='........'
            className='w-full border border-gray-300 pl-11 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <div className='text-red-500 text-sm bg-red-50 p-2 rounded'>
          {error}
        </div>
      )}

      {/* OPTIONS */}
      <div className='flex items-center justify-between text-sm'>
        <label className='flex items-center'>
          <input
            type='checkbox'
            className='rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
          />
          <span className='ml-2 text-gray-600'>Remember me</span>
        </label>

        <a href='#' className='text-indigo-600 hover:text-indigo-700 font-medium'>
          Forgot password?
        </a>
      </div>

      {/* BUTTON */}
      <div className='flex flex-col m-3 gap-3'>
        <button
          type='submit'
          disabled={isLoading}
          className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-200 shadow-lg hover:shadow-xl disabled:opacity-50'
        >
          {isLoading ? 'Loading...' : 'Sign in'}
        </button>
      </div>

      {/* FOOTER */}
      <div className='mt-6 text-center'>
        <p className='text-gray-600'>
          Don't have an account?
          <button className='text-indigo-600 hover:text-indigo-700 font-semibold ml-1'>
            Sign Up
          </button>
        </p>
      </div>
    </form>
  );
};