import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='text-red-600 p-40'>
      <h1>Home Page</h1>
      <Link href='/services'>Services</Link>
      <Link href='/contact'>Contact</Link>
    </div>
  );
};

export default HomePage;

