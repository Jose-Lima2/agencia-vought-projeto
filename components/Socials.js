// links
import Link from 'next/link';

// icons
import {
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/agencia_vought/'} target='blank' className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://wa.me/5532999216627'} target='blank' className='hover:text-accent transition-all duration-300'>
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
