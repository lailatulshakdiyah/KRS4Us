import { useEffect } from 'react';
import { Link, Head, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar.jsx';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import bg from '@images/ahn.png';

export default function Welcome({ auth, status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: true
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('welcome'));
    };
    
    return (
        <>
            <Head title="Welcome" />
            <div className="font-inter relative sm:flex sm:justify-center min-h-screen" style={{backgroundImage: 'url('+bg+')'}}>
                <Navbar title="Welcome"/>

                <div className="sm:flex sm:flex-row md:gap-20 max-w-7xl mt-16 mx-auto p-6 lg:p-8 justify-center items-center bg-cover">
                    <div className="flex flex-col">
                        <div className='text-primary-300 text-5xl font-extrabold'>Repot Tukar KRS?</div>
                        <div className='text-gray-400 text-4xl'>Santai Dulu Ga Sih</div>
                        <div className="mt-7 text-4xl">
                            <span className='text-gray-400'>Tenang Ada </span>
                            <span className='text-primary-300 font-bold'>KRS 4US</span>
                        </div>
                        <div className="mt-4 max-w-md text-gray-400">Kenapa Harus Pakai KRS 4US?</div>
                        <div className="mt-4 max-w-md text-gray-400 font-bold">Tukar Paralel Anti Ribet</div>
                        <div className="mt-4 max-w-md text-gray-400 font-bold">Jadwal Kuliah yang Pas</div>
                        <div className="mt-4 max-w-md text-gray-400 font-bold">Informasi Lengkap dan Terpercaya</div>
                    </div>
                    <div className="bg-white-75 w-96 h-min rounded-lg drop-shadow-2xl p-11">
                        <div className="w-min mx-auto text-primary-300 text-4xl font-black text-center">KRS</div>
                        <div className="w-min mx-auto -mt-3 text-4xl font-black text-center">
                            <span className="text-primary-300">4</span>
                            <span className="text-gray-500">US</span>
                            <div className="bg-gray-500 h-0.5 -mt-1"></div>
                        </div>
                        <div className="mt-7 text-xs text-center text-gray-500">
                        KRS 4US adalah web app yang dirancang khusus untuk mahasiswa agar bisa menyusun Kartu Rencana Studi (KRS) dengan lebih mudah dan menyenangkan, bahkan bisa kolaborasi bareng teman-teman!
                        </div>

                        <form onSubmit={submit} className="grid">
                            <InputLabel htmlFor="email" value="Email" className="mt-9 text-gray-500"/>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="example@email.com"
                            />
                            <InputError message={errors.email} className="mt-2" />
                            
                            <InputLabel htmlFor="password" value="Password" className="mt-4 text-gray-500"/>
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="********"
                            />
                            <InputError message={errors.password} className="mt-2"/>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="mx-auto underline text-sm text-primary-300 mt-4 hover:text-primary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100"
                                >
                                    Reset Your Password Here
                                </Link>
                            )}

                            <PrimaryButton className="mt-4 flex w-full text-sm" disabled={processing}>
                                Log in 
                            </PrimaryButton>
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
