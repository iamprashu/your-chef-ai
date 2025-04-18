import React, { useContext } from 'react';
import Loader from './Loader';
import { ApplicationContext } from '../Contexts/ApplicationContext';
import RecepieComponent from './RecepieComponent';

function Recepie() {
  const { loader } = useContext(ApplicationContext);



  return (
    <div className="min-h-[50%] w-full flex flex-col p-5 justify-evenly items-center bg-gray-600 text-white">
      {loader ? <Loader /> : <RecepieComponent/> }
    </div>
  );
}

export default Recepie;
