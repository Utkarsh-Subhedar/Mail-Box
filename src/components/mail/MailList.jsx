import { useState } from "react";
import MailItem from "./MailItem";

const mockMails = [
  {
    id: 1,
    sender: "GitHub",
    subject: "New login detected",
    preview: "We noticed a new login from Chrome on Windows...",
    time: "2:30 PM",
  },
  {
    id: 2,
    sender: "LinkedIn",
    subject: "You appeared in 12 searches",
    preview: "Your profile is getting attention this week...",
    time: "1:15 PM",
  },
  {
    id: 3,
    sender: "React Newsletter",
    subject: "Top React Patterns in 2026",
    preview: "This week we explore scalable folder structures...",
    time: "Yesterday",
  },
];

function MailList() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="w-96 bg-white border-r border-slate-200 overflow-y-auto">
      {mockMails.map((mail) => (
        <MailItem
          key={mail.id}
          mail={mail}
          isSelected={selectedId === mail.id}
          onSelect={setSelectedId}
        />
      ))}
    </div>
  );
}

export default MailList;
