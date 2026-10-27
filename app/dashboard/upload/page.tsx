import Link from 'next/link';

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Upload</p>
            <h1 className="mt-2 text-3xl font-bold">New meeting</h1>
          </div>
          <Link href="/dashboard" className="text-sm text-slate-300 hover:text-white">Back to dashboard</Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-soft">
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center">
            <p className="text-lg font-medium text-white">Drop audio or video file here</p>
            <p className="mt-2 text-sm text-slate-400">MP3, WAV, M4A, MP4 supported</p>
            <button type="button" className="mt-6 rounded-full bg-blue-500 px-5 py-2.5 font-medium text-white hover:bg-blue-400">Choose file</button>
          </div>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Meeting title</label>
              <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Product sync - Q3 roadmap" />
            </div>
            <div className="flex gap-4">
              <button type="button" className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-medium text-white hover:bg-white/10">Save draft</button>
              <button type="button" className="rounded-full bg-blue-500 px-5 py-2.5 font-medium text-white hover:bg-blue-400">Upload and process</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
