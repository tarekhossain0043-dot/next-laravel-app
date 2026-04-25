"use client";

import React, { useState } from "react";

const SocialButton = () => (
  <div className="mt-6">
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white text-gray-500 text-xs">
          Or continue using
        </span>
      </div>
    </div>

    <div className="mt-6 space-y-3">
      <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </button>
      <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
        <svg
          className="h-5 w-5 mr-2 text-[#1877F2]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Continue with Facebook
      </button>
    </div>
  </div>
);

export default function AuthFlow() {
  // States: 'login' | 'register' | 'reset' | 'confirm'
  const [view, setView] = useState("login");

  const handleGoToLogin = (e) => {
    e.preventDefault();
    setView("login");
  };

  const handleGoToRegister = (e) => {
    e.preventDefault();
    setView("register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
        {/* LOGIN VIEW */}
        {view === "login" && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Sign In
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                New to Our Product?{" "}
                <a
                  href="#"
                  onClick={handleGoToRegister}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Create an Account
                </a>
              </p>
            </div>
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Email Address"
                    required
                    className="mt-1 appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    required
                    className="mt-1 appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setView("reset");
                    }}
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A1A2E] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
              >
                Sign In
              </button>
            </form>
            <SocialButton />
          </div>
        )}

        {/* REGISTER VIEW */}
        {view === "register" && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Create an Account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Have an Account?{" "}
                <a
                  href="#"
                  onClick={handleGoToLogin}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign In
                </a>
              </p>
            </div>
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setView("confirm");
              }}
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="reg-email"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="reg-email"
                    type="email"
                    placeholder="Enter Email Address"
                    required
                    className="mt-1 appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="reg-password"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="reg-password"
                    type="password"
                    placeholder="Create Password"
                    required
                    className="mt-1 appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A1A2E] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
              >
                Create Account
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                By creating account, you agree to our <br />
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>
              </p>
            </form>
            <SocialButton />
          </div>
        )}

        {/* PASSWORD RESET VIEW */}
        {view === "reset" && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Password Reset
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                We Will Help You Reset your Password
              </p>
            </div>
            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="reset-email"
                  className="block text-xs font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="reset-email"
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  className="mt-1 appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A1A2E] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
              >
                Reset Password
              </button>
            </form>
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Remembered your Password? </span>
              <a
                href="#"
                onClick={handleGoToLogin}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Back to Sign In
              </a>
            </div>
          </div>
        )}

        {/* EMAIL CONFIRMATION VIEW */}
        {view === "confirm" && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Confirm Email
              </h2>
              <p className="mt-2 text-sm text-gray-600 max-w-xs mx-auto">
                Check Your Email and Enter Confirmation Code
              </p>
            </div>
            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="confirm-code"
                  className="block text-xs font-medium text-gray-700"
                >
                  Confirmation Code
                </label>
                <input
                  id="confirm-code"
                  type="text"
                  placeholder="Enter Code"
                  required
                  className="mt-1 appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-center tracking-widest"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1A1A2E] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
              >
                Confirm Email
              </button>
            </form>
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">&apos;received your code?</span>
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Resend Code
              </a>
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={handleGoToLogin}
                className="text-xs text-gray-400 hover:text-gray-600"
              >
                Cancel and return to login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
