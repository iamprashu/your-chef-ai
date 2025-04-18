
import { useContext, useState } from 'react';
import { ApplicationContext } from '../Contexts/ApplicationContext';
import toast from 'react-hot-toast';

export default function CallAi(){
    const{resetData,DeleteItem,count,getRecepie,itemList} = useContext(ApplicationContext)

    // if(itemList.length > 10){
    //     toast.error(`Please delete ${count-10} item.`)
    // }


    return(
        <div className=" flex flex-col items-center gap-5 p-2 rounded-xl">
            {(count>=4 && count<=10) &&<h1 className="text-sm md:text-2xl ">Now you can get recipe for these items...</h1>}
            <div className="flex gap-5 ">
                <button className="bg-gray-800 px-2 py-2 rounded-xl md:px-5 md:py-2 md:rounded-xl md:text-xl text-sm text-white font-bold hover:bg-gray-600" onClick={DeleteItem}>Delete Item</button>
                <button className="bg-gray-800 px-2 py-2 rounded-xl md:px-5 md:py-2 md:rounded-xl md:text-xl text-sm text-white font-bold hover:bg-gray-600" onClick={resetData}>Reset Items</button>
                {(count>=4 && count<=10) && <button className="bg-gray-800 px-2 py-2 rounded-xl md:px-5 md:py-2 md:rounded-xl md:text-xl text-sm text-white font-bold hover:bg-gray-600" onClick={getRecepie}>Get Recipes</button>}
            </div>
        </div>
    )
}
