import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import logo from '@images/Ellipse2.png';
import '@css/dashboard.css' ;
import Navbar from '@/Components/Navbar';
import Card from '@/Components/Card';

export default function Dashboard({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="font-inter relative sm:flex sm:justify-center min-h-screen">
                <Navbar title='Welcome'></Navbar>

                <div className="grid absolute buttom-10 left-10 right-10 mt-28 bg-white w-96 h-48 h-min drop-shadow-md p-11">
                    <div className='grid grid '></div>
                </div>
            </div>
                
            

        

{/* <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-black sm:flex">KRS4us</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-2">
                <div className="max-w-md mx-auto sm:px-10 lg:px-50">
                    <div className="bg-primary-p75 overflow-hidden shadow-lg sm:rounded-lg flex justify-center">
                        <div className="p-2 text-gray-900">Hy Welcome to KRS4us!</div>
                    </div>
                </div>
            </div>
    </AuthenticatedLayout> */}
        
        </>
    );
}
