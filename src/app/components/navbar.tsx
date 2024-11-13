
import Link from 'next/link';

export default function Navbar() {
    return (
        <div 
            className="
            bg-blue-500 
             py-4 px-8 
             flex justify-around 
             items-center
             text-white 
             font-semibold
             font sans">

            <Link href="/" >Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/about/contact">Contact</Link>
            <Link href="/apply" >Apply</Link>
            <Link href="/jobs" >Jobs</Link>
            <Link href="/jobs/programing" >Programming</Link>
        </div>
    );
}

