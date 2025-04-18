import { useContext, useState } from 'react';
import { AlertTriangle } from 'lucide-react'; // Optional icon library
import { ApplicationContext } from '../Contexts/ApplicationContext';

export default function WarningOverlay() {
    const{showWarning, setShowWarning} = useContext(ApplicationContext);
  if (!showWarning) return null;

  return (
    <div className='bg-red-600/10 absolute z-[999] h-full w-full backdrop-blur-sm flex items-center justify-center'>
      <div className='bg-white border border-red-400 text-red-700 px-6 py-4 rounded-xl shadow-xl max-w-md w-full relative'>
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-red-500 mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Warning</h2>
            <p className="text-sm mt-1">
              This tool is for informational purposes only. Do not misuse it. Generated recipes may be inaccurate or unsuitable for certain dietary needs. Please verify with reliable sources if needed.
              <br />Thank You.
              <p className='text-end'>--- Prashant Joshi</p>
            </p>
          </div>
          <button
            onClick={() => setShowWarning(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
            aria-label="Close warning"
          >
            ✖
          </button>
        </div>
      </div>
    </div>
  );
}
