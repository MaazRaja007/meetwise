import Link from 'next/link';

export default function LiveMeetingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Live meeting</p>
            <h1 className="mt-2 text-3xl font-bold">Start a secure meeting room</h1>
          </div>
          <Link href="/dashboard" className="text-sm text-slate-300 hover:text-white">Back to dashboard</Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-6 aspect-video rounded-2xl bg-gradient-to-br from-blue-500/30 via-slate-800 to-slate-900 p-6">
              <div className="flex h-full items-end justify-between">
                <div>
                  <p className="text-sm text-slate-200">Live room</p>
                  <h2 className="mt-2 text-2xl font-semibold">Quarterly planning</h2>
                </div>
                <span className="rounded-full bg-rose-500/15 px-3 py-1 text-xs font-medium text-rose-200">Recording on</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button type="button" className="rounded-full bg-blue-500 px-5 py-2.5 font-medium text-white hover:bg-blue-400">Join room</button>
              <button type="button" className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-medium text-white hover:bg-white/10">Invite attendees</button>
            </div>
          </div>

          <aside className="space-y-4 rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div>
              <p className="text-sm text-slate-400">Meeting status</p>
              <p className="mt-2 text-xl font-semibold text-white">In progress</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Host</p>
              <p className="mt-2 font-medium text-white">Ayesha Khan</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Access</p>
              <p className="mt-2 font-medium text-white">Owner + invited staff</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Room link</p>
              <p className="mt-2 break-all text-sm text-blue-300">https://meetwise.app/room/quarterly-planning</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
