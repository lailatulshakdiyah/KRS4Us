import { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown'
import Navbar from '@/Components/Navbar';
import Table from '@/Components/Table';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';

export default function ListMahasiswa({ auth, users }) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="bg-primary-50 font-inter relative sm:flex sm:flex-col min-h-screen min-w-screen">
                <Navbar title={auth.user.name} auth={auth}/>

                <div className="sm:flex sm:flex-col md:gap-7 max-w-7xl min-w-full mt-16 mx-auto p-6 lg:p-8 justify-center bg-cover">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex text-xl text-gray-400 font-medium">List Mahasiswa</div>
                        <div className="flex gap-4">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button type="button" className="inline-flex transition duration-200 bg-primary-300 hover:bg-primary-400 active:bg-primary-500 py-2 px-6 rounded-lg text-white-300 text-xs tracking-wider">Upload Excel</button>
                                </Dropdown.Trigger>
                                <Dropdown.Content align="right" width="w-56">
                                    <UploadExcel/>
                                </Dropdown.Content> 
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button type="button" className="inline-flex transition duration-200 bg-primary-300 hover:bg-primary-400 active:bg-primary-500 py-2 px-6 rounded-lg text-white-300 text-xs tracking-wider">Tambah Mahasiswa</button>
                                </Dropdown.Trigger>
                                <Dropdown.Content align="right" width="w-96">
                                    <TambahMahasiswa/>
                                </Dropdown.Content>
                            </Dropdown>
                            {/* <div className="bg-gray-75 border-gray-75 border w-px"></div>
                            <div className="inline-flex transition duration-200 bg-success-300 hover:bg-success-400 py-2 px-6 rounded-lg text-white-300 text-xs tracking-wider">Kirim Email ke Semua</div> */}
                        </div>
                    </div>

                    <Table
                        headers={[['id', 'No.', 'w-12'], ['name', 'Nama', 'flex-grow'], ['nim', 'NIM', 'w-48'], ['email', 'Email', 'w-5/12']]}
                        data={users}
                        editPrefix='admin.mahasiswa'
                        deletePrefix='admin.mahasiswa'
                    />
                </div>
            </div>
        </>
    );
}

const UploadExcel = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        file: ''
    });

    // useEffect(() => {
    //     return () => {
    //         reset('file');
    //     };
    // }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.upload'));
    };

    return (
        <form onSubmit={submit} className="bg-white-0 text-gray-400 py-5 px-6 rounded-md">
            {/* <InputLabel htmlFor="name" value="Nama"/> */}
            <TextInput
                id="file"
                type="file"
                name="file"
                // value={data.file}
                className="mt-1 block w-full text-sm"
                onChange={(e) => setData('file', e.target.files[0])}
                required
            />
            <PrimaryButton className="mt-5 flex w-full text-sm" disabled={processing}>Unggah</PrimaryButton>
        </form>
    );
}

const TambahMahasiswa = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        nim: '',
        email: '',
        password: '',
        is_admin: false
    });

    useEffect(() => {
        return () => {
            reset('name', 'nim', 'email', 'password', 'isAdmin');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('admin'));
    };

    return (
        <form onSubmit={submit} className="bg-white-0 text-gray-400 py-5 px-6 rounded-md">
            <InputLabel htmlFor="name" value="Nama"/>
            <TextInput
                id="name"
                type="text"
                name="name"
                value={data.name}
                className="mt-1 block w-full"
                placeholder="Johnny Bravo"
                onChange={(e) => setData('name', e.target.value)}
                isFocused
                required
            />

            <InputLabel htmlFor="nim" value="NIM" className="mt-2"/>
            <TextInput
                id="nim"
                type="text"
                name="nim"
                value={data.nim}
                className="mt-1 block w-full"
                placeholder="G6401211999"
                onChange={(e) => setData('nim', e.target.value)}
                required
            />

            <InputLabel htmlFor="email" value="Email" className="mt-2"/>
            <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                placeholder="example@krs4us.com"
                onChange={(e) => setData('email', e.target.value)}
                required
            />

            <InputLabel htmlFor="password" value="Password" className="inline-flex mt-2"/>
            <div className="gap-x-6">
                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="inline-flex w-5/6 mt-1"
                    placeholder="akugamtenk"
                    onChange={(e) => setData('password', e.target.value)}
                    required
                />
               {/* <button type="button" className="inline-flex w-1/6 bg-primary-300">Tes</button> */}
            </div>

            <input
                id="is_admin"
                type="checkbox"
                checked={data.is_admin}
                onChange={() => setData('is_admin', !data.is_admin)}
            />
            <InputLabel htmlFor="is_admin" value="Admin" className="mt-4 inline-flex ms-2"/>

            <PrimaryButton className="mt-5 flex w-full text-sm" disabled={processing}>Tambahkan</PrimaryButton>
        </form>
    );
}