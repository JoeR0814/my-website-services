'user client';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <section className='bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto'>
      <h2 className='text-2xl font-bold text-center mb-4'>Contact Us</h2>

      <div className='flex items-center mb-4'>
        <FaPhone className='text-blue-500 mr-2' />
        <a href='tel:+1234567890' className='text-lg'>
          +1 (234) 567-890
        </a>
      </div>

      <div className='flex items-center mb-4'>
        <FaEnvelope className='text-blue-500 mr-2' />
        <a href='mailto:info@example.com' className='text-lg'>
          info@example.com
        </a>
      </div>

      <div className='flex items-center'>
        <FaMapMarkerAlt className='text-blue-500 mr-2' />
        <p className='text-lg'>123 Main St, Anytown, USA</p>
      </div>
    </section>
  );
}

