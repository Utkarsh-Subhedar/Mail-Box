import { useState } from "react";
import { Inbox, Send, FileText, Trash2 } from "lucide-react";

const menuItems = [
  { id: "inbox", label: "Inbox", icon: Inbox },
  { id: "sent", label: "Sent", icon: Send },
  { id: "drafts", label: "Drafts", icon: FileText },
  { id: "trash", label: "Trash", icon: Trash2 },
];

function Sidebar() {
  const [active, setActive] = useState("inbox");

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
      {/* Logo / Title */}
      <div className="p-4 text-xl font-semibold border-b border-slate-200">
        MailBox
      </div>

      {/* Menu */}
      <nav className="flex-1 p-2 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition cursor-pointer
                ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
