import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col px-6 py-20">
        <nav className="mb-16 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur">
          <div className="text-xl font-bold text-white">MeetWise</div>
          <div className="flex items-center gap-4 text-sm text-slate-200">
            <Link href="/login" className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">Login</Link>
            <Link href="/signup" className="rounded-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-400">Get started</Link>
          </div>
        </nav>

        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-200">
              AI Meeting Assistant
            </span>
            <h1 className="max-w-xl text-5xl font-bold tracking-tight text-white md:text-6xl">
              Turn every meeting into action.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              MeetWise records meetings, transcribes them with Whisper, summarizes decisions with GPT, and tracks action items for your team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/dashboard" className="rounded-full bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-400">Open dashboard</Link>
              <Link href="/dashboard/meetings/live" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10">Start live call</Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
            <div className="rounded-2xl bg-slate-900 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Weekly review</p>
                  <h2 className="text-xl font-semibold text-white">Q3 Roadmap</h2>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">Done</span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-300">Summary</p>
                  <p className="mt-2 text-sm text-slate-100">Launch new onboarding flow, reduce churn, and tighten release criteria.</p>
                </div>
                <div className="rounded-2xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-300">Action items</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-100">
                    <li>• Finalize testing checklist by Friday</li>
                    <li>• Assign product follow-up task to M. Ali</li>
                    <li>• Review customer feedback notes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
