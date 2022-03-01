
const Input = (props) => {
  const { id, placeholder = '', label = '', type = 'text', ...rest } = props;
  return (
    <>
      <label className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" htmlFor={id}>{label}</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          className="appearance-none block w-full bg-slate-700 text-slate-300 border border-slate-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-900 focus:ring-1 focus:ring-slate-700"
          type={type}
          id={id}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </>
  )
}
export default Input
