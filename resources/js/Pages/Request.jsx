import { Head, useForm, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Card from '@/Components/Card';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import Table from '@/Components/Table';


export default function Request({ auth, requests }) {
    let temp = [];
    for (let i = 0; i < requests.length; i++) {
        temp.push({});
        temp[i]['name'] = requests[i]['name'];
        temp[i]['nim'] = requests[i]['nim'];
        temp[i]['course'] = requests[i]['course'];

        let bg;
        switch (requests[i]['mine']['type']) {
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
        temp[i]['mine'] = (
            <div className={`flex flex-col py-1 px-2 justify-center w-full rounded-lg ${bg} text-xs text-white-300 font-normal`}>
                <div className='font-semibold'>{requests[i]['mine']['time']}</div>
                <div className='capitalize'>{requests[i]['mine']['type'][0].toUpperCase() + requests[i]['mine']['class']} - {requests[i]['mine']['day']}</div>
            </div>
        );
        
        switch (requests[i]['theirs']['type']) {
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
        temp[i]['theirs'] = (
            <div className={`flex flex-col py-1 px-2 justify-center w-full rounded-lg ${bg} text-xs text-white-300 font-normal`}>
                <div className='font-semibold'>{requests[i]['theirs']['time']}</div>
                <div className='capitalize'>{requests[i]['theirs']['type'][0].toUpperCase() + requests[i]['theirs']['class']} - {requests[i]['theirs']['day']}</div>
            </div>
        );

        temp[i]['action'] = (
            <>
                <Link
                    href={route('request.accept', requests[i]['route'])}
                    className='flex items-center justify-center py-1 w-full rounded-full bg-primary-300 hover:bg-primary-400 active:bg-primary-500 text-xs text-white-300 font-normal transition-all duration-200 ease-in-out'
                >
                    Request
                </Link>
            </>
        )
    }

    return (
        <>
            <Head title="Requests"/>
            <div className="bg-primary-50 font-inter relative sm:flex min-h-screen">
                <Navbar title={auth.user.name} auth={auth}></Navbar>

                <div className="sm:flex sm:flex-col md:gap-7 max-w-6xl min-w-full mt-16 mx-auto p-4 lg:p-8 justify-start bg-cover">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex text-primary-300 text-2xl font-extrabold">Permohonan Tukar Jadwal</div>
                        <div className="flex gap">
                            <div className="inline-flex py-4 px-2 text-black font-medium tracking-wider">Filter</div>
                            <div className='inline-flex rounded-lg text-gray-200'>
                                <InputLabel htmlFor="type"></InputLabel>
                                <SelectInput
                                    id="type"
                                    nama="type"
                                    // value={data.type}
                                    className="mt-1 block w-full border-2 border-primary-200 rounded-xs text-gray-75"
                                    placeholder="Select an Option"
                                    // onChange={(e) => setData('type', e.target.value)}
                                    required
                                >   
                                    <option value="kuliah" className='text-gray-300'>Kuliah</option>
                                    <option value="praktikum" className='text-gray-300'>Praktikum</option>
                                    <option value="responsi" className='text-gray-300'>Responsi</option>
                                </SelectInput>
                            </div>
                        </div>
                    </div>

                    <Table
                        headers={[['name', 'Nama', 'w-56'], ['nim', 'NIM', 'w-32'], ['course', 'Mata Kuliah', 'flex-grow'], ['mine', 'Mine', 'w-32'], ['theirs', 'Paralel Request', 'w-32'], ['action', 'Aksi', 'w-2/12']]}
                        data={temp}
                        className=''

                    />
                </div>
            </div>
        </>
    )
}