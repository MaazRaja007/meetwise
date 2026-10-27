import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockMeetings, mockMeetingDetails } from '@/lib/mock-data';

export default function MeetingDetailsPage({ params }: { params: { id: string } }) {
  const meeting = mockMeetings.find((item) => item.id === params.id) || mockMeetingDetails[params.id];

  if (!meeting) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Meeting details</p>
            <h1 className="mt-2 text-3xl font-bold">{meeting.title}</h1>
          </div>
          <div className="flex gap-3">
            <button type="button" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10">Export PDF</button>
            <button type="button" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10">Export DOCX</button>
            <button type="button" className="rounded-full bg-rose-500 px-4 py-2 font-medium text-white hover:bg-rose-400">Delete meeting</button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <section className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h2 className="mb-4 text-xl font-semibold">Transcript</h2>
              <div className="space-y-3 text-sm leading-7 text-slate-200">
                {meeting.transcript.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h2 className="mb-4 text-xl font-semibold">Summary</h2>
              <p className="text-sm leading-7 text-slate-200">{meeting.summary}</p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h2 className="mb-4 text-xl font-semibold">Action items</h2>
              <ul className="space-y-3">
                {meeting.actionItems.map((item, index) => (
                  <li key={index} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-3">
                    <div>
                      <p className="font-medium text-white">{item.task}</p>
                      <p className="text-sm text-slate-400">Owner: {item.owner} • Due: {item.dueDate}</p>
                    </div>
                    <input type="checkbox" checked={item.isComplete} readOnly className="h-5 w-5 accent-blue-500" />
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h2 className="mb-4 text-xl font-semibold">Overview</h2>
              <dl className="space-y-3 text-sm text-slate-300">
                <div className="flex justify-between gap-3"><dt>Source</dt><dd>{meeting.source}</dd></div>
                <div className="flex justify-between gap-3"><dt>Status</dt><dd>{meeting.status}</dd></div>
                <div className="flex justify-between gap-3"><dt>Created</dt><dd>{meeting.createdAt}</dd></div>
                <div className="flex justify-between gap-3"><dt>Duration</dt><dd>{meeting.duration}</dd></div>
              </dl>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h2 className="mb-4 text-xl font-semibold">Quick links</h2>
              <div className="space-y-3">
                <Link href="/dashboard" className="block rounded-xl bg-slate-800 px-3 py-2 text-sm text-white hover:bg-slate-700">Back to meetings</Link>
                <Link href="/dashboard/billing" className="block rounded-xl bg-slate-800 px-3 py-2 text-sm text-white hover:bg-slate-700">Billing</Link>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
