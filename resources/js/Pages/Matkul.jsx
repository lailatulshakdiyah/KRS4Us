import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Card from '@/Components/Card';
import Table from '@/Components/Table';


export default function Matkul({ auth, course, courses, students }) {
    let temp = [];
    for (let i = 0; i < courses.length; i++) {
        temp.push({});
        temp[i]['schedule'] = `${courses[i]['day']} ${courses[i]['start_time']} - ${courses[i]['end_time']}`;
        
        let bg;
        switch (courses[i]['type']) {
            case 'kuliah':
                bg = 'bg-primary-300';
                break;
            case 'praktikum':
                bg = 'bg-success-300';
                break;
            case 'responsi':
                bg = 'bg-warning-300';
                break;
            default:
                bg = 'bg-gray-75';
        }
        temp[i]['parallel'] = (
            <div className={`flex items-center justify-center w-full py-0.5 rounded-lg ${bg} text-xs text-white-300 font-normal`}>
                {courses[i]['type'][0].toUpperCase() + courses[i]['class']}
            </div>
        );

        if (courses[i]['status'] !== 'hidden') {
            if (courses[i]['status'] !== 'disabled') {
                temp[i]['request'] = (
                    <Link
                        href={route('course.request', courses[i]['route'])}
                        className='flex items-center justify-center w-full py-0.5 rounded-lg bg-primary-300 hover:bg-primary-400 active:bg-primary-500 text-xs text-white-300 font-normal transition-all duration-200 ease-in-out'
                    >
                        Request
                    </Link>
                );
            } else {
                temp[i]['request'] = (
                    <button
                        disabled
                        href={route('course.request', courses[i]['route'])}
                        className='flex items-center justify-center w-full py-0.5 rounded-lg bg-gray-100 text-xs text-white-300 font-normal transition-all duration-200 ease-in-out'
                    >
                        Request
                    </button>
                );
            }
        }
    }

    return (
        <>
            <Head title="Matkul" />
            <div className="bg-primay-50 font-inter relative sm:flex min-h-screen">
                <Navbar title={auth.user.name} auth={auth} />

                <div className='sm:flex sm:flex-col md:gap-7 max-w-7xl min-w-full mt-16 mx-auto p-6 lg:p-8 items-start bg-primary-50'>
                    <div className='flex flex-col'>
                        <div className='flex text-primary-300 text-2xl font-bold mb-2'>Detail Mata Kuliah</div>
                        <div className='flex text-5xl text-gray-500 font-normal'>{course.name}</div>
                        {/* <div className='flex text-2xl text-gray-500 font-normal -mt-1 leading-9'>SKS: 4 (3-1) - Mayor</div> */}
                    </div>
                    <div className='flex flex-row columns-2 gap-12 w-full'>
                        <Card
                            title='Daftar Kelas'
                            className='w-1/2'
                            description={
                                <>
                                    <div className='flex text-sm'>Keterangan:</div>
                                    <div className="flex items-center px-4 py-0.5 rounded-md bg-success-300 text-xs font-normal">Praktikum</div>
                                    <div className="flex items-center px-4 py-0.5 rounded-md bg-warning-300 text-xs text-gray-500 font-normal">Responsi</div>
                                    <div className="flex items-center px-4 py-0.5 rounded-md bg-primary-300 text-xs font-normal">Kuliah</div>
                                </>
                            }
                        >
                        </Card>
                        <Card
                            title={`Mahasiswa Peserta - ${course['type'][0].toUpperCase() + course['class']}`}
                        >
                        </Card>
                         
                    </div>
                    <div className="flex flex-row w-full -my-6 gap-12">
                        <Table
                            className='flex flex-row w-1/2 capitalize'
                            headers={[['parallel', 'Paralel', 'w-1/6'], ['schedule', 'Jadwal', 'w-4/6'], ['request', '', 'w-1/6']]}
                            data={temp}
                        />
                        <Table
                            className='flex flex-col w-1/2'
                            headers={[['nim', 'NIM', 'w-1/3'], ['name', 'Nama', 'w-2/3']]}
                            data={students}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}