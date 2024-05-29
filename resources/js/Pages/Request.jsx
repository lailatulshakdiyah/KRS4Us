import { Head, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Card from '@/Components/Card';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import Table from '@/Components/Table';


export default function Request({ auth, users }) {
    const { data, setData } = useForm({
        type: ''
    });

    return (
        <>
            <Head title="Requests"/>
            <div className="bg-primary-50 font inter relative sm:flex min-h-screen">
                <Navbar title={auth.user.name} auth={auth}></Navbar>

                <div className="sm:flex sm:flex-col md:gap-7 max-w-6xl min-w-full mt-16 mx-auto p-4 lg:p-8 justify-start bg-cover">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex text-xl text-primary-300 font-extrabold">Permohonan Tukar Jadwal</div>
                        <div className="flex gap">
                            <div className="inline-flex py-4 px-2 text-black text-medium tracking-wider">Filter</div>
                            <div className='inline-flex rounded-lg text-gray-200 text-xs tracking-wider'>
                                <InputLabel htmlFor="type"></InputLabel>
                                <SelectInput
                                    id="type"
                                    nama="type"
                                    value={data.type}
                                    className="mt-1 block w-full border-2 border-primary-200 rounded-xs text-gray-75"
                                    placeholder="Select an Option"
                                    onChange={(e) => setData('type', e.target.value)}
                                    required
                                >   
                                    <option value="kuliah" className='text-gray-300'>Kuliah</option>
                                    <option value="praktikum" className='text-gray-300'>Praktikum</option>
                                    <option value="responsi" className='text-gray-300'>Responsi</option>
                                </SelectInput>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-items-start">
                        <Table
                            headers={[['name', 'Nama', 'w-56'], ['nim', 'NIM', 'w-48'], ['name', 'Mata Kuliah', 'w-48'], ['name', 'Mine', 'w-48'], ['name', 'Paralel Request', 'w-48'], ['name', 'Aksi', 'w-52']]}
                            data={users}
                            className=''

                        />
                    </div>
                </div>
            </div>
        </>
    )
}