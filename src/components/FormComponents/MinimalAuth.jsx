import React, { useState } from 'react';
import { Loader2, CheckCircle, Lock, Mail } from 'lucide-react';

export default function MinimalAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setStatus('loading');
      // Simulate authentication request
      setTimeout(() => {
        setStatus('success');
        
        // Reset back to idle after a few seconds
        setTimeout(() => {
          setStatus('idle');
          setEmail('');
          setPassword('');
        }, 3500);
      }, 2000);
    }
  };

  return (
    <div className="flex w-full items-center justify-center p-4">
      {/* Outer container matching the screenshot's warm grey/beige tone */}
      <div className="relative overflow-hidden border border-[#d1d0cb] bg-[#e8e7e3] p-10 shadow-sm transition-all duration-500 ease-in-out w-full sm:w-[400px] min-w-[280px]">
        
        {status === 'success' ? (
          /* Success State - smooth fade-in replacement */
          <div className="flex h-[320px] flex-col items-center justify-center text-center animate-in fade-in duration-700">
            <div className="mb-6 rounded-full bg-[#d6eed5] p-4 text-[#2d5a2c]">
              <CheckCircle className="h-10 w-10" strokeWidth={2} />
            </div>
            <h3 className="mb-2 text-2xl font-medium text-gray-900">Access Granted</h3>
            <p className="text-sm text-gray-600">Secure session established for {email}</p>
          </div>
        ) : (
          /* Form State */
          <div className={`transition-all duration-500 ${status === 'loading' ? 'opacity-50 blur-[2px]' : 'opacity-100'}`}>
            <div className="mb-8">
              <span className="mb-4 block text-[11px] font-bold tracking-[0.15em] text-[#787873] uppercase">
                Entry Point
              </span>
              <h2 className="text-[28px] font-normal tracking-tight text-[#1a1a1a]">
                Minimal Auth
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Email Field */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold tracking-wider text-[#6b6b66] uppercase">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    disabled={status === 'loading'}
                    required
                    className="w-full border border-[#9b9a95] bg-[#ecebe8] px-4 py-3.5 text-base text-gray-800 placeholder-[#8c8c88] transition-colors focus:border-gray-600 focus:bg-[#f4f3ef] focus:outline-none disabled:opacity-70"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold tracking-wider text-[#6b6b66] uppercase">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    disabled={status === 'loading'}
                    required
                    className="w-full border border-[#9b9a95] bg-[#ecebe8] px-4 py-3.5 text-base text-gray-800 placeholder-[#8c8c88] transition-colors focus:border-gray-600 focus:bg-[#f4f3ef] focus:outline-none disabled:opacity-70"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading' || !email || !password}
                className="mt-2 flex w-full items-center justify-center bg-[#f4f3ef] py-4 text-[15px] font-semibold text-black transition-all hover:bg-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
