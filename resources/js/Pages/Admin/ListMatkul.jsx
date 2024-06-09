import { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Table from '@/Components/Table';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';

export default function ListMatkul({ auth, courses }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        code: '',
        name: '',
        type: '',
        day: '',
        start_time: '',
        end_time: '',
        room: ''
    });

    useEffect(() => {
        return () => {
            reset('code', 'name', 'type', 'day', 'start_time', 'end_time', 'room');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.matkul'));
    };

    for (let i = 0; i < courses.length; i++) {
        courses[i]['schedule'] = `${courses[i]['start_time']} - ${courses[i]['end_time']}`;
        courses[i]['parallel'] = courses[i]['type'][0].toUpperCase() + courses[i]['class'];
    }

    return (
        <>
            <Head title="Dashboard"/>
            <div className="bg-primary-50 font-inter relative sm:flex sm:flex-col min-h-screen min-w-screen">
                <Navbar title={auth.user.name} auth={auth}/>

                <div className="sm:flex sm:flex-col gap-4 max-w-7xl min-w-full mt-16 mx-auto p-6 lg:p-8 justify-center bg-cover">
                    <div className="flex flex-row gap-9 text-gray-400 items-center">
                        <div className="flex w-2/3 text-xl font-medium">List Mata Kuliah</div>
                        <div className="flex w-1/3 text-md font-medium">Tambah Mata Kuliah</div>
                    </div>

                    <div className="flex flex-row gap-9 justify-between items-start">
                        <Table
                            headers={[['name', 'Mata Kuliah', 'w-7/12'], ['day', 'Hari', 'w-1/12 capitalize'], ['schedule', 'Jam', 'w-3/12'], ['parallel', 'Kelas', 'w-1/12']]}
                            data={courses}
                            className="w-2/3"
                            deletePrefix='admin.matkul.destroy'
                        />

                        <form onSubmit={submit} className="bg-white-0 text-gray-400 w-1/3 py-5 px-6 font-gray-400 rounded-md">
                            <InputLabel htmlFor="code" value="Kode"/>
                            <TextInput
                                id="code"
                                type="text"
                                name="code"
                                value={data.code}
                                className="mt-1 block w-full"
                                placeholder="IPB1470"
                                onChange={(e) => setData('code', e.target.value)}
                                required
                            />
                            
                            <InputLabel htmlFor="name" value="Nama" className="mt-2"/>
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                placeholder="Ilmu Padi"
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />

                            <InputLabel htmlFor="type" value="Jenis" className="mt-2"/>
                            <SelectInput
                                id="type"
                                name="type"
                                value={data.type}
                                className={`mt-1 block w-full rounded-md ${data.type === '' ? 'text-slate-400' : ''}`}
                                placeholder="Select an Option"
                                onChange={(e) => setData('type', e.target.value)}
                                required
                            >
                                <option value="kuliah" className='text-gray-300'>Kuliah</option>
                                <option value="praktikum" className='text-gray-300'>Praktikum</option>
                                <option value="responsi" className='text-gray-300'>Responsi</option>
                            </SelectInput>

                            <InputLabel htmlFor="day" value="Hari" className="mt-2"/>
                            <SelectInput
                                id="day"
                                name="day"
                                value={data.day}
                                className={`mt-1 block w-full rounded-md ${data.day === '' ? 'text-slate-400' : ''}`}
                                placeholder="Select an Option"
                                onChange={(e) => setData('day', e.target.value)}
                                required
                            >
                                <option value="senin" className='text-gray-300'>Senin</option>
                                <option value="selasa" className='text-gray-300'>Selasa</option>
                                <option value="rabu" className='text-gray-300'>Rabu</option>
                                <option value="kamis" className='text-gray-300'>Kamis</option>
                                <option value="jumat" className='text-gray-300'>Jumat</option>
                                <option value="sabtu" className='text-gray-300'>Sabtu</option>
                            </SelectInput>

                            <div className="columns-2 gap-x-6">
                                <InputLabel htmlFor="start_time" value="Waktu Mulai" className="inline-flex mt-2"/>
                                <TextInput
                                    id="start_time"
                                    type="text"
                                    name="start_time"
                                    value={data.start_time}
                                    className="inline-flex w-full mt-1"
                                    placeholder="00.00"
                                    onChange={(e) => setData('start_time', e.target.value)}
                                    required
                                />
                                <InputLabel htmlFor="end_time" value="Waktu Selesai" className="inline-flex mt-2"/>
                                <TextInput
                                    id="end_time"
                                    type="text"
                                    name="end_time"
                                    value={data.end_time}
                                    className="inline-flex w-full mt-1"
                                    placeholder="23.59"
                                    onChange={(e) => setData('end_time', e.target.value)}
                                    required
                                />
                            </div>

                            <InputLabel htmlFor="room" value="Ruangan" className="mt-2"/>
                            <TextInput
                                id="room"
                                type="text"
                                name="room"
                                value={data.room}
                                className="mt-1 block w-full"
                                placeholder="Localhost"
                                onChange={(e) => setData('room', e.target.value)}
                                required
                            />

                            <PrimaryButton className="mt-8 flex w-full text-sm" disabled={processing}>Tambahkan</PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}