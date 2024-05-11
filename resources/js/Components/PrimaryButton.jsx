export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-grid items-center px-4 py-2 bg-primary-300 border border-transparent rounded-md font-semibold text-white-300 tracking-wider hover:bg-primary-400 focus:bg-primary-400 active:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
