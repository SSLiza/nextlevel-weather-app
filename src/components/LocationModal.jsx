import { X } from 'lucide-react';
import React from 'react';

const LocationModal = ({ onClose }) => {
    return (
        <div>
            <div className='fixed inset-0 bg-gray-900/60 flex justify-center items-center'>
                <div className='h-[500px] w-[400px] p-8 rounded-lg'>
                    <div className='mb-4'>
                        <h2 className='text-2xl font-bold'>Location Modal</h2>
                        <p>This is a modal for location information.</p>
                    </div>
                    <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={onClose}><X /></button>
                </div>
                <div>
                    <form>
                        <input type="text" placeholder="Enter your City Name" className='border border-gray-300 rounded px-4 py-2 w-full' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;