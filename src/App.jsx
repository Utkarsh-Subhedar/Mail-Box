import AppLayout from "./components/layout/AppLayout";
import MailList from "./components/mail/MailList";

function App() {
  return (
    <AppLayout>
      <div className="flex h-full">
        <MailList />

        <div className="flex-1 p-6 bg-white">
          <h2 className="text-lg font-semibold">Select a mail to view</h2>
        </div>
      </div>
    </AppLayout>
  );
}

export default App;
