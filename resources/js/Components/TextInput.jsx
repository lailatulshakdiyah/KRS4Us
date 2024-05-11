import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-50 placeholder:text-gray-75 placeholder:font-medium focus:border-primary-100 focus:ring-primary-100 rounded-md shadow-inner ' +
                className
            }
            ref={input}
        />
    );
});
