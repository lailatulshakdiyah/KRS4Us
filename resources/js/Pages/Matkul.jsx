import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Card from '@/Components/Card';
import Table from '@/Components/Table';


export default function Matkul({ auth, course }) {
    return (
        <>
            <Head title="Matkul" />
            <div className="bg-primay-50 font-inter relative sm:flex min-h-screen">
                <Navbar title={auth.user.name} auth={auth} />

                <div className='sm:flex sm:flex-col md:gap-7 max-w-7xl min-w-full mt-16 mx-auto p-6 lg:p-8 items-start bg-primary-50'>
                    <div className='flex flex-col'>
                        <div className='flex text-primary-300 text-2xl font-extrabold leading-10'>Detail Mata Kuliah</div>
                        <div className='flex text-5xl text-gray-500 font-normal'>IPB 1231 
                            <span className='flex text-5xl ms-3 text-gray-500 font-normal'>- Ilmu Padi</span>
                        </div>
                        <div className='flex text-2xl text-gray-500 font-normal -mt-1 leading-9'>SKS: 4 (3-1) - Mayor</div>
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
                            title='Mahasiswa Peserta - K1'
                        >
                            {/*<div className='columns-2'>
                                <Table></Table>
                        </div> */}
                        </Card>
                         
                    </div>
                    <Table
                        className='flex flex-row columns-2 gap-12 w-1/2'
                        headers={[['name', 'Jenis', 'flex-grow'], ['name', 'Jadwal', 'flex-grow'], ['name', 'Request', 'flex-grow']]}
                        
                    >
                        <Table
                            className='flex flex-col columns-2 gap-12 w-1/2'
                            headers={[['nim', 'NIM', 'flex-row']]}
                        ></Table>
                    </Table>
                    

                </div>
            </div>
        </>
    )
}