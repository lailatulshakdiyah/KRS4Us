import { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Table from '@/Components/Table';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Mahasiswa({ auth, user, courses }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: user.name,
        nim: user.nim,
        email: user.email,
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('name', 'nim', 'email', 'password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        if (data.name !== user.name || data.nim !== user.nim || data.email !== user.email || data.password !== '') {
            post(route('admin.mahasiswa', {'nim': user.nim}));
        }
    };

    return (
        <>
            <Head title={user.name}/>
            <div className="bg-primary-50 font-inter relative sm:flex sm:flex-col min-h-screen min-w-screen">
                <Navbar title={auth.user.name} auth={auth}/>

                <div className="sm:flex sm:flex-col md:gap-7 max-w-7xl min-w-full mt-16 mx-auto p-6 lg:p-8 justify-center text-gray-400 bg-cover">
                    <div className="flex text-2xl font-semibold">Data Mahasiswa</div>

                    <form onSubmit={submit} className="flex flex-row gap-8">
                        <div className="flex flex-col bg-white-0 w-64 py-4 px-5 justify-between rounded-lg shadow-md">
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="py-1 inline-flex h-min w-full border-none shadow-none hover:bg-white-200 focus:border-none focus:ring-transparent"
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <TextInput
                                id="nim"
                                type="text"
                                name="nim"
                                value={data.nim}
                                className="py-1 block h-min w-full border-none shadow-none hover:bg-white-200 focus:border-none focus:ring-transparent"
                                onChange={(e) => setData('nim', e.target.value)}
                            />

                            <PrimaryButton className="flex mt-4 h-min w-full text-sm" disabled={processing}>Edit</PrimaryButton>
                        </div>
                        <div className="flex flex-col bg-white-0 w-full py-4 px-5 justify-center rounded-lg shadow-md">
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-col w-1/2">
                                    <InputLabel htmlFor="email" value="Email"/>
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <InputLabel htmlFor="password" value="Password"/>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                </div>
                            </div>
                            <PrimaryButton className="flex mt-4 w-full text-sm" disabled={processing}>Edit</PrimaryButton>
                        </div>
                    </form>
                    
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex text-xl font-medium">List Mata Kuliah</div>
                        <div className="flex bg-green-500 py-2 px-6 rounded-lg text-white text-xs tracking-wider">Kirim Email</div>
                    </div>

                    <Table
                        headers={[['id', 'No.', 'w-12'], ['name', 'Mata Kuliah', 'flex-grow'], ['class', 'Paralel', 'w-2/5']]}
                        data={courses}
                    />
                </div>
            </div>
        </>
    )
}