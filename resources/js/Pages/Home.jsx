import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Card from '@/Components/Card';
import Calendar from '@/Components/Calendar';

export default function Home({ auth, list, mine, courses }) {
    return (
        <>
            <Head title="Home" />
            <div className="bg-primary-50 font-inter relative sm:flex min-h-screen">
                <Navbar title={auth.user.name} auth={auth}/>

                <div className="sm:flex sm:flex-row columns-2 md:gap-7 max-w-7xl min-w-full mt-16 mx-auto p-6 lg:p-8 justify-center items-start bg-cover">
                    <div className="flex flex-col gap-9 w-full">
                        <Card
                            title="Jadwal Saya"
                            // description="SKS Maksimum: 24"
                            className="flex flex-col max-h-48 overflow-auto px-3 py-3 rounded-b-md"
                            // extra={<div className="flex rounded-b-md bg-gray-75 text-gray-400 px-5 sm:px-6 lg:px-8 py-2 justify-center">Jumlah SKS: 8</div>}
                        >
                            {list && list.map((course) => (
                                <Link href={route('course', course.id)} className="transition-all duration-200 ease-in-out hover:bg-gray-50 hover:shadow-md active:bg-neutral-200 rounded-md px-2.5 py-1 hover:py-2"> 
                                    <span className="text-primary-300 font-semibold">{course.code} </span>
                                    <span className="text-gray-400">- {course.name}</span>
                                    <span className="text-gray-400 capitalize"> ({course.type})</span>
                                </Link>
                            ))}
                        </Card>
                        <Card
                            title="Kalender Saya"
                            description={
                                <>
                                    <div className="flex text-sm">Keterangan:</div>
                                    <div className="flex items-center px-4 py-0.5 rounded-md bg-success-300 text-xs font-normal">Praktikum</div>
                                    <div className="flex items-center px-4 py-0.5 rounded-md bg-warning-300 text-xs text-gray-500 font-normal">Responsi</div>
                                    <div className="flex items-center px-4 py-0.5 rounded-md bg-primary-300 text-xs font-normal">Kuliah</div>
                                </>
                            }
                            className="flex flex-col pt-2 px-1.5 rounded-b-md"
                        >
                            <Calendar
                                courses={mine}
                            />
                        </Card>
                    </div>
                    <Card
                        title="Jadwal Mata Kuliah"
                        className="flex flex-col pt-2 px-1.5 rounded-b-md"
                    >
                        <Calendar
                            courses={courses}
                            // courses={
                            //     {
                            //         'senin': [
                            //             {
                            //                 'name': 'IPB1231 - Ilmu Padi',
                            //                 'class': 1,
                            //                 'room': 'CCR 4.4',
                            //                 'type': 'kuliah',
                            //                 'start_time': '10.00',
                            //                 'end_time': '11.40',
                            //                 'route': '1'
                            //             },
                            //             {
                            //                 'name': 'IPB1231 - Ilmu Padi',
                            //                 'class': 1,
                            //                 'room': 'CCR 4.4',
                            //                 'type': 'responsi',
                            //                 'start_time': '12.00',
                            //                 'end_time': '13.40',
                            //                 'route': '1'
                            //             }
                            //         ],
                            //         'selasa': [
                            //             {
                            //                 'name': 'IPB1231 - Ilmu Padi',
                            //                 'class': 1,
                            //                 'room': 'CCR 4.4',
                            //                 'type': 'praktikum',
                            //                 'start_time': '13.00',
                            //                 'end_time': '14.00',
                            //                 'route': 'home'
                            //             }
                            //         ],
                            //         'rabu': [
                            //             {
                            //                 'name': 'IPB1231 - Ilmu Padi',
                            //                 'class': 1,
                            //                 'room': 'CCR 4.4',
                            //                 'type': 'kuliah',
                            //                 'start_time': '15.00',
                            //                 'end_time': '16.40',
                            //                 'route': '1'
                            //             }
                            //         ],
                            //         'kamis': [
                            //             {
                            //                 'name': 'IPB1231 - Ilmu Padi',
                            //                 'class': 1,
                            //                 'room': 'CCR 4.4',
                            //                 'type': 'kuliah',
                            //                 'start_time': '10.00',
                            //                 'end_time': '11.40',
                            //                 'route': '1'
                            //             }
                            //         ],
                            //         'jumat': [
                            //             {
                            //                 'name': 'IPB1231 - Ilmu Padi',
                            //                 'class': 1,
                            //                 'room': 'CCR 4.4',
                            //                 'type': 'responsi',
                            //                 'start_time': '10.00',
                            //                 'end_time': '11.40',
                            //                 'route': '1'
                            //             },
                            //             {
                            //                 'name': 'IPB1231 - Ilmu Padi',
                            //                 'class': 1,
                            //                 'room': 'CCR 4.4',
                            //                 'type': 'praktikum',
                            //                 'start_time': '10.00',
                            //                 'end_time': '11.40',
                            //                 'route': '1'
                            //             }
                            //         ],
                            //         'sabtu': []
                            //     }
                            // }
                        />
                    </Card>
                </div>
            </div>        
        </>
    );
}
