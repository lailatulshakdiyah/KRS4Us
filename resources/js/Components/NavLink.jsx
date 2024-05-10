import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center text-sm tracking-wide transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'text-white font-bold'
                    : 'text-white') +
                className
            }
        >
            {children}
        </Link>
    );
}
