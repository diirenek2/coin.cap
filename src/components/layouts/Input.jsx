
const Input = (props) => {
    const { id, placeholder = '', label = '', type = 'text', ...rest } = props;
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor={id}>{label}</label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded"
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    {...rest}
                />
            </div>
        </div>
    );
};

export default Input
