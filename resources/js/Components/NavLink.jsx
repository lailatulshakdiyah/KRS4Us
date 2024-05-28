import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center p-5 text-sm text-white-300 tracking-wide transition duration-150 ease-in-out hover:bg-primary-400 focus:outline-none ' +
                (active
                    ? 'text-white bg-primary-400'
                    : 'text-white') +
                className
            }
            as='button'
        >
            {children}
        </Link>
    );
}
