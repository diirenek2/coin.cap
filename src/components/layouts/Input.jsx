
const Input = (props) => {
    const { id, placeholder = '', label = '', type = 'text', ...rest } = props;
    return (
        <>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>{label}</label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-300 focus:border-gray-300" id="grid-last-name"
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    {...rest}
                />
            </div>
        </>
    );
};

export default Input
