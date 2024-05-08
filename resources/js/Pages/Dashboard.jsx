import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import logo from '@images/Ellipse2.png';
import '@css/dashboard.css' ;

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-black sm:flex">KRS4us | </h2>}
        >
            <Head title="Dashboard" />

            <div className="py-2">
                <div className="max-w-md mx-auto sm:px-10 lg:px-50">
                    <div className="bg-primary-p75 overflow-hidden shadow-lg sm:rounded-lg flex justify-center">
                        <div className="p-2 text-gray-900">Hy Welcome to KRS4us!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
