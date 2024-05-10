import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Navbar({ title, children }) {
    return (
        <nav className="fixed top-0 w-screen bg-blue-600 border-b border-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-medium">
                <div className="flex justify-between h-16">
                    <div className="shrink-0 flex items-center">
                        <Link href="/" className="shrink-0">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-white" />
                        </Link>
                        <div className="hidden space-x-3 sm:ms-6 sm:flex text-white tracking-wide">
                            <span className="font-bold">Krs4Us</span>
                            <span>|</span>
                            <span>{title}</span>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </nav>
    )
}