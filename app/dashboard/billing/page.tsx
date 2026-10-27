import Link from 'next/link';

export default function BillingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Billing</p>
            <h1 className="mt-2 text-3xl font-bold">Subscription</h1>
          </div>
          <Link href="/dashboard" className="text-sm text-slate-300 hover:text-white">Back to dashboard</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-slate-900 p-8">
            <p className="text-sm text-slate-400">Current plan</p>
            <h2 className="mt-4 text-4xl font-bold">Pro</h2>
            <p className="mt-3 text-sm text-slate-300">Unlimited uploads, live meetings, and AI analysis.</p>
            <div className="mt-6 rounded-2xl bg-slate-950 p-4">
              <p className="text-sm text-slate-400">Status</p>
              <p className="mt-2 text-lg font-semibold text-emerald-300">Active • Renews monthly</p>
            </div>
            <button type="button" className="mt-6 w-full rounded-full bg-blue-500 px-5 py-3 font-medium text-white hover:bg-blue-400">Manage billing</button>
          </section>

          <section className="rounded-3xl border border-white/10 bg-slate-900 p-8">
            <h2 className="text-xl font-semibold">Included</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>• Upload and process meeting recordings</li>
              <li>• Start secure live room sessions</li>
              <li>• AI transcription and summary generation</li>
              <li>• Export to PDF and DOCX</li>
              <li>• Organization-level role controls</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
