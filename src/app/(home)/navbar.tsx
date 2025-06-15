import { cn } from '@/lib/utils';
import {Poppins} from 'next/font/google';
import Link from 'next/link';
const poppins = Poppins({
    subsets: ['latin'],
    weight: [ '700'],
    });

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Link href={href} className={cn("pl-6 flex items-center", { "font-bold": isActive })}>
      {children}
    </Link>
  )
}

const navbarItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];


export default function navbar() {
  return (
    <nav className="h-20 flex border-bottom justify-between foont-medium bg-white">
        <Link href="/" className='pl-6 flex items-center'>
          <span className={cn("text-5xl font-semibold", poppins.className)}>Funroad</span>
        </Link>
    </nav> 
  )
}
