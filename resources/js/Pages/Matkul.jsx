import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';

export default function Matkul({ auth, course }) {
    return (
        <>
            <Head title={course.name}/>
        </>
    )
}