interface InputProps {
  inputName: string;
  inputTitle?: string;
  inputType: string;
  inputPlaceholder: string;
}

export const Input: React.FC<InputProps> = ({ inputName, inputTitle, inputType, inputPlaceholder }) => {
  return (
<label className="block">
  {inputTitle &&
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    {inputTitle}
  </span>}
  <input name={inputName} type={inputType} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder={inputPlaceholder} />
</label>
  )
}
