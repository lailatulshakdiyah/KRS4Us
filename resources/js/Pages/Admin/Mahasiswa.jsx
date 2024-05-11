import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Table from '@/Components/Table';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';

export default function Mahasiswa({ auth, user }) {
    return (
        <>
            <Head title={user.name}/>
            <div className="bg-primary-50 font-inter relative sm:flex sm:flex-col min-h-screen min-w-screen">
                <Navbar title={auth.user.name} auth={auth}/>

                <div className="sm:flex sm:flex-col md:gap-7 max-w-7xl min-w-full mt-16 mx-auto p-6 lg:p-8 justify-center text-gray-400 bg-cover">
                    <div className="flex text-2xl font-semibold">Data Mahasiswa</div>

                    <div className="flex flex-row gap-8">
                        <div className="bg-white-0 flex flex-col w-56 py-4 px-5 justify-center rounded-lg shadow-md">
                            <div className="flex">{user.name}</div>
                            <div className="flex">{user.nim}</div>
                        </div>
                        <div className="bg-white-0 flex flex-col w-full py-4 px-5 justify-center rounded-lg shadow-md">
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-col w-1/2">
                                    <InputLabel htmlFor="email" value="Email"/>
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        // value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <InputLabel htmlFor="password" value="Password"/>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        // value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex text-xl font-medium">List Mahasiswa</div>
                        <div className="flex bg-green-500 py-2 px-6 rounded-lg text-white text-xs tracking-wider">Kirim Email</div>
                    </div>

                    <Table
                        headers={[['id', 'No.', 'w-12'], ['name', 'Nama', 'flex-grow'], ['nim', 'NIM', 'w-48'], ['email', 'Email', 'w-5/12']]}
                        // data={data}
                    />
                </div>
            </div>
        </>
    )
}