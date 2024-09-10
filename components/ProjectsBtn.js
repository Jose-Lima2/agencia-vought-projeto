// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 z-10'>
      <Link
        href={'/work'}
        className='relative w-[185px] h-[185px] flex flex-col justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <h1 className="text-xl mb-2">Clientes</h1>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
