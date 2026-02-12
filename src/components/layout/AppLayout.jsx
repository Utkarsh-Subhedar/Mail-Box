import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Header />

        <section className="flex-1 p-4">{children}</section>
      </main>
    </div>
  );
}

export default AppLayout;
