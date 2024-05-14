import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ className = '', placeholder = '', isFocused = false, children, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                'border-gray-50 placeholder:text-gray-75 placeholder:font-medium focus:border-primary-100 focus:ring-primary-100 rounded-md shadow-inner ' +
                className
            }
            ref={input}
        >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {children}
        </select>
    );
});
