import Sidebar from "./Sidebar";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <header className="h-14 bg-white border-b border-slate-200 flex items-center px-4">
          Header
        </header>

        <section className="flex-1 p-4">{children}</section>
      </main>
    </div>
  );
}

export default AppLayout;
