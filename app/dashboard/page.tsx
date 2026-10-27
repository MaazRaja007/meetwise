import Link from 'next/link';
import { mockMeetings } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Workspace</p>
            <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard/upload" className="rounded-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-400">Upload meeting</Link>
            <Link href="/dashboard/meetings/live" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10">Start meeting</Link>
          </div>
        </header>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Total meetings</p>
            <p className="mt-3 text-3xl font-bold">{mockMeetings.length}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Completed</p>
            <p className="mt-3 text-3xl font-bold">{mockMeetings.filter((m) => m.status === 'done').length}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">In progress</p>
            <p className="mt-3 text-3xl font-bold">{mockMeetings.filter((m) => m.status !== 'done').length}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent meetings</h2>
            <Link href="/admin/users" className="text-sm text-blue-300 hover:text-blue-200">User management</Link>
          </div>

          <div className="space-y-4">
            {mockMeetings.map((meeting) => (
              <Link key={meeting.id} href={`/dashboard/meetings/${meeting.id}`} className="block rounded-2xl border border-slate-800 bg-slate-950 p-4 transition hover:border-blue-500/40 hover:bg-slate-900">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">{meeting.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{meeting.source === 'live' ? 'Live meeting' : 'Uploaded file'} • {meeting.createdAt}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">{meeting.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
