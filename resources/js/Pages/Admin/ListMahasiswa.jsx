import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Table from '@/Components/Table';

export default function ListMahasiswa({ auth, data }) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="bg-primary-50 font-inter relative sm:flex sm:flex-col min-h-screen min-w-screen">
                <Navbar title={auth.user.name} auth={auth}/>

                <div className="sm:flex sm:flex-col md:gap-7 max-w-7xl min-w-full mt-16 mx-auto p-6 lg:p-8 justify-center bg-cover">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex text-xl font-medium">List Mahasiswa</div>
                        <div className="flex gap-4">
                            <div className="inline-flex bg-primary-300 py-2 px-6 rounded-lg text-white-300 text-xs tracking-wider">Upload Excel</div>
                            <div className="inline-flex bg-primary-300 py-2 px-6 rounded-lg text-white-300 text-xs tracking-wider">Tambah Mahasiswa</div>
                            <div className="inline-flex bg-warning-300 py-2 px-6 rounded-lg text-white-300 text-xs tracking-wider">Tambah Mata Kuliah</div>
                            <div className="bg-gray-75 border-gray-75 border w-px"></div>
                            <div className="inline-flex bg-success-300 py-2 px-6 rounded-lg text-white-300 text-xs tracking-wider">Kirim Email ke Semua</div>
                        </div>
                    </div>

                    <Table
                        headers={[['id', 'No.', 'w-12'], ['name', 'Nama', 'flex-grow'], ['nim', 'NIM', 'w-48'], ['email', 'Email', 'w-5/12']]}
                        data={data}
                    />
                </div>
            </div>
        </>
    )
}