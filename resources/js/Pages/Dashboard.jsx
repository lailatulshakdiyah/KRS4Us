import { Head } from '@inertiajs/react';
import '@css/dashboard.css' ;
import Navbar from '@/Components/Navbar';
import NavLink from '@/Components/NavLink';
import Card from '@/Components/Card';
import Calendar from '@/Components/Calendar';

export default function Dashboard({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="font-inter relative sm:flex sm:justify-center min-h-screen">
                <Navbar title={auth.user.name}>
                    <div className="flex flex-row gap-10">
                        <NavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            
                        >
                            Request
                        </NavLink>
                        {auth.user.is_admin ? (
                            <NavLink
                                
                            >
                                Dashboard
                            </NavLink>
                        ) : (<></>)}
                        <NavLink
                            href={route('logout')}
                            method='post'
                        >
                            Logout
                        </NavLink>
                    </div>
                </Navbar>

                <div className="bg-gray-100 sm:flex sm:flex-row columns-2 md:gap-7 max-w-7xl min-w-full mt-16 mx-auto p-6 lg:p-8 justify-center bg-cover">
                    <div className="flex flex-col gap-12 w-full">
                        <Card
                            title="Jadwal Saya"
                            description="SKS Maksimum: 24"
                            className="flex flex-col px-6 py-5 gap-3"
                            extra={<div className="flex rounded-b-md bg-gray-400 border-b border-blue-100 px-5 sm:px-6 lg:px-8 py-2 justify-center">Jumlah SKS: 8</div>}
                        >
                            <div>
                                <span className="text-blue-600 font-semibold">IPB 1231 </span>
                                <span className="text-black">- Ilmu Padi</span>
                                <div className="flex flex-row text-black -mt-1">4 (3-1) - Mayor</div>
                            </div>
                            <div>
                                <span className="text-blue-600 font-semibold">IPB 1231 </span>
                                <span className="text-black ms-1">- Ilmu Padi</span>
                                <div className="flex flex-row text-black -mt-1">4 (3-1) - Mayor</div>
                            </div>
                        </Card>
                        <Card
                            title="Kalender Saya"
                            description={
                                <>
                                    <div className="flex text-sm">Keterangan:</div>
                                    <div className="flex items-center px-4 py-0.5 rounded-md bg-green-500 text-xs font-normal">Praktikum</div>
                                    <div className="flex items-center px-4 py-0.5 rounded-md bg-yellow-300 text-xs text-black font-normal">Responsi</div>
                                    <div className="flex items-center px-4 py-0.5 rounded-md bg-blue-700 text-xs font-normal">Kuliah</div>
                                </>
                            }
                            className="flex flex-col pt-2 px-3 rounded-b-md"
                        >
                            <Calendar
                                courses={
                                    {
                                        'senin': [
                                            {
                                                'name': 'IPB1231 - Ilmu Padi',
                                                'class': 1,
                                                'room': 'CCR 4.4',
                                                'type': 'kuliah',
                                                'start_time': '10:00',
                                                'end_time': '11.40'
                                            },
                                            {
                                                'name': 'IPB1231 - Ilmu Padi',
                                                'class': 1,
                                                'room': 'CCR 4.4',
                                                'type': 'responsi',
                                                'start_time': '12:00',
                                                'end_time': '13.40'
                                            }
                                        ],
                                        'selasa': [
                                            {
                                                'name': 'IPB1231 - Ilmu Padi',
                                                'class': 1,
                                                'room': 'CCR 4.4',
                                                'type': 'praktikum',
                                                'start_time': '13:00',
                                                'end_time': '14.00'
                                            }
                                        ],
                                        'rabu': [
                                            {
                                                'name': 'IPB1231 - Ilmu Padi',
                                                'class': 1,
                                                'room': 'CCR 4.4',
                                                'type': 'kuliah',
                                                'start_time': '15:00',
                                                'end_time': '16.40'
                                            }
                                        ],
                                        'kamis': [
                                            {
                                                'name': 'IPB1231 - Ilmu Padi',
                                                'class': 1,
                                                'room': 'CCR 4.4',
                                                'type': 'kuliah',
                                                'start_time': '10:00',
                                                'end_time': '11.40'
                                            }
                                        ],
                                        'jumat': [
                                            {
                                                'name': 'IPB1231 - Ilmu Padi',
                                                'class': 1,
                                                'room': 'CCR 4.4',
                                                'type': 'responsi',
                                                'start_time': '10:00',
                                                'end_time': '11.40'
                                            },
                                            {
                                                'name': 'IPB1231 - Ilmu Padi',
                                                'class': 1,
                                                'room': 'CCR 4.4',
                                                'type': 'praktikum',
                                                'start_time': '10:00',
                                                'end_time': '11.40'
                                            }
                                        ],
                                        'sabtu': []
                                    }
                                }
                            />
                        </Card>
                    </div>
                    <Card
                        title="Jadwal Mata Kuliah"
                        className="flex flex-col pt-2 px-3 rounded-b-md"
                    >
                        <Calendar
                            courses={
                                {
                                    'senin': [
                                        {
                                            'name': 'IPB1231 - Ilmu Padi',
                                            'class': 1,
                                            'room': 'CCR 4.4',
                                            'type': 'kuliah',
                                            'start_time': '10:00',
                                            'end_time': '11.40'
                                        },
                                        {
                                            'name': 'IPB1231 - Ilmu Padi',
                                            'class': 1,
                                            'room': 'CCR 4.4',
                                            'type': 'responsi',
                                            'start_time': '12:00',
                                            'end_time': '13.40'
                                        }
                                    ],
                                    'selasa': [
                                        {
                                            'name': 'IPB1231 - Ilmu Padi',
                                            'class': 1,
                                            'room': 'CCR 4.4',
                                            'type': 'praktikum',
                                            'start_time': '13:00',
                                            'end_time': '14.00'
                                        }
                                    ],
                                    'rabu': [
                                        {
                                            'name': 'IPB1231 - Ilmu Padi',
                                            'class': 1,
                                            'room': 'CCR 4.4',
                                            'type': 'kuliah',
                                            'start_time': '15:00',
                                            'end_time': '16.40'
                                        }
                                    ],
                                    'kamis': [
                                        {
                                            'name': 'IPB1231 - Ilmu Padi',
                                            'class': 1,
                                            'room': 'CCR 4.4',
                                            'type': 'kuliah',
                                            'start_time': '10:00',
                                            'end_time': '11.40'
                                        }
                                    ],
                                    'jumat': [
                                        {
                                            'name': 'IPB1231 - Ilmu Padi',
                                            'class': 1,
                                            'room': 'CCR 4.4',
                                            'type': 'responsi',
                                            'start_time': '10:00',
                                            'end_time': '11.40'
                                        },
                                        {
                                            'name': 'IPB1231 - Ilmu Padi',
                                            'class': 1,
                                            'room': 'CCR 4.4',
                                            'type': 'praktikum',
                                            'start_time': '10:00',
                                            'end_time': '11.40'
                                        }
                                    ],
                                    'sabtu': []
                                }
                            }
                        />
                    </Card>
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
