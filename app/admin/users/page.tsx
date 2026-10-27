import Link from 'next/link';

export default function AdminUsersPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Admin</p>
            <h1 className="mt-2 text-3xl font-bold">User management</h1>
          </div>
          <Link href="/dashboard" className="text-sm text-slate-300 hover:text-white">Back to dashboard</Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Team members</h2>
            <button type="button" className="rounded-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-400">Invite member</button>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Ayesha Khan', role: 'Owner', email: 'ayesha@company.com' },
              { name: 'M. Ali', role: 'Admin', email: 'ali@company.com' },
              { name: 'Sarah Lee', role: 'Manager', email: 'sarah@company.com' },
              { name: 'Daniel Smith', role: 'Staff', email: 'daniel@company.com' }
            ].map((user) => (
              <div key={user.email} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <div>
                  <p className="font-medium text-white">{user.name}</p>
                  <p className="text-sm text-slate-400">{user.email}</p>
                </div>
                <select defaultValue={user.role} className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none">
                  <option>Owner</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Staff</option>
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
