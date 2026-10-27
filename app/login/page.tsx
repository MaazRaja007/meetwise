import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-soft">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">MeetWise</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-400">Sign in to manage meetings, reports, and billing.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" placeholder="you@company.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full rounded-xl bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-400">Sign in</button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          No account yet?{' '}
          <Link href="/signup" className="font-medium text-blue-300">Create one</Link>
        </div>
      </div>
    </main>
  );
}
