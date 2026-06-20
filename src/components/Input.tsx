interface InputType {
  placeholder: string;
  label: string;
  className: string;
  value: string;
  setValue?: () => void;
  type: string;
}

function Input({
  placeholder,
  label,
  className,
  value,
  setValue,
  type,
}: InputType) {
  return (
    <div className={`flex w-full flex-col gap-2 ${className}`}>
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={() => setValue}
        className="w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition duration-200 focus:border-[#143cf4] focus:outline-none focus:ring-2 focus:ring-[#143cf4]/10"
      />
    </div>
  );
}

export default Input;
