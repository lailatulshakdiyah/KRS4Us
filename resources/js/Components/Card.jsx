import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';


export default function Card({ title, children }) {
    return (
        <nav className='absolute buttom-10 top-40 left-10 right-10 w-screen bg-blue-600 border-b border-blue-100'>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="shrink-0 flex items-center">
                        <div className="hidden space-x-3 sm:ms-6 sm:flex text-white">
                            <span>KRS Saya</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}