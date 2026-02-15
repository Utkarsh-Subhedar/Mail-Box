function MailItem({ mail, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(mail.id)}
      className={`p-4 border-b border-slate-200 cursor-pointer transition
        ${isSelected ? "bg-blue-50" : "bg-white hover:bg-slate-50"}`}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-sm">{mail.sender}</h3>
        <span className="text-xs text-slate-500">{mail.time}</span>
      </div>

      <p className="text-sm font-medium text-slate-700 mt-1">{mail.subject}</p>

      <p className="text-xs text-slate-500 mt-1 truncate">{mail.preview}</p>
    </div>
  );
}

export default MailItem;
