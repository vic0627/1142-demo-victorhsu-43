import Link from 'next/link';
import LogoStore_43 from './LogoStore_43';
import { ModeToggle_43 } from './ModeToggle_43';
import { Button } from '@/components/ui/button';

const NavbarStore_43 = () => {
  return (
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <LogoStore_43 />
      <div className='flex items-center gap-4'>
        <Link href='/'>
          <Button variant='secondary'>TKUdemo</Button>
        </Link>
        <ModeToggle_43 />
      </div>
    </div>
  );
};

export default NavbarStore_43;
