import { NavLink } from 'react-router';

export const Login = () => {
  return (
    <main className="w-screen max-w-[600px] mx-auto h-screen px-8 flex flex-col items-start gap-6 content-stretch justify-center">
      <h1 className="text-3xl">Sign In</h1>
      <p className="text-lg">Enter your email to start using Bitbot</p>
      <div className="flex items-center justify-between w-full"></div>
      <div className="flex flex-col px-6 w-full gap-3">
        <NavLink
          className="block text-center py-2 w-full rounded-2xl bg-amber-500 shadow-2xl"
          to="/login"
        >
          Start
        </NavLink>
        <NavLink
          className="block text-center py-2 w-full rounded-2xl shadow-2xl border border-solid border-4 border-slate-900"
          to="/"
        >
          Go Back
        </NavLink>
      </div>
    </main>
  );
};
