import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

export default function Navbar({ title, auth }) {
    return (
        <nav className="fixed z-40 top-0 w-screen bg-primary-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-medium">
                <div className="flex justify-between h-16">
                    <div className="shrink-0 flex items-center">
                        <Link href="/" className="shrink-0">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-white-300" />
                        </Link>
                        <div className="hidden space-x-3 sm:ms-6 sm:flex text-white-300 tracking-wide">
                            <span className="font-bold">KRS 4Us</span>
                            <span>|</span>
                            <span>{title}</span>
                        </div>
                    </div>
                    
                    {auth && (
                        <div className="flex flex-row">
                            {route().current().startsWith('admin') ? (
                                <>
                                    <NavLink
                                        href={route('admin')}
                                        active={route().current('admin')}
                                    >
                                        List Mahasiswa
                                    </NavLink>
                                    <NavLink
                                        href={route('admin.matkul')}
                                        active={route().current('admin.matkul')}
                                    >
                                        Daftar Mata Kuliah
                                    </NavLink>
                                    <NavLink
                                        href={route('home')}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        href={route('logout')}
                                        method='post'
                                    >
                                        Logout
                                    </NavLink>
                                </>
                            ) : (
                                <>
                                    <NavLink
                                        href={route('home')}
                                        active={route().current('home')}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        href={route('request')}
                                        active={route().current('request')}
                                    >
                                        Request
                                    </NavLink>
                                    {auth.user.is_admin ? (
                                        <NavLink
                                            href={route('admin')}
                                        >
                                            Dashboard
                                        </NavLink>
                                    ) : null}
                                    <NavLink
                                        href={route('logout')}
                                        method='post'
                                    >
                                        Logout
                                    </NavLink>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}