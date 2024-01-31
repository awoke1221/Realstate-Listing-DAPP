import Image from 'next/image'
import Link from 'next/link';
//import ConnectWallet from './ConnectWallet';

export default function Navbar() {
    return (
        <header className="relative bg-[#f9f1f1eb] navbar">
            <nav className=" font-mono text-[20px] container flex items-center justify-between mx-auto p-8">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-4">
                        <img src="/images/Logo.png" alt="Logo" className='h-[60px]' />
                        
                    </Link>
                </div>

                <div className='flex space-x-4 text-xl ml-auto'>
                    <ul className="flex space-x-4 text-xl">
                        <li>
                            <Link href="/items">
                                Items
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                Listing
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/account" className='mr-2'>
                                Account
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Hamburger menu for mobile */}
                {/* Add a responsive menu toggle button here */}
            </nav>
        </header>
    )
}