function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar placeholder */}
      <aside className="w-64 bg-white border-r border-slate-200">
        <div className="p-4 font-semibold text-lg">MailBox</div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col">
        {/* Header placeholder */}
        <header className="h-14 bg-white border-b border-slate-200 flex items-center px-4">
          Header
        </header>

        {/* Page content */}
        <section className="flex-1 p-4">{children}</section>
      </main>
    </div>
  );
}

export default AppLayout;
