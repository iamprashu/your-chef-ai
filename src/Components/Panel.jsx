import { useContext, useState } from "react"
import {toast} from "react-hot-toast";
import CallAi from "./CallAi.jsx";
import { ApplicationContext } from "../Contexts/ApplicationContext.jsx";

export default function Panel(){
    const{itemsInHand,setItemsInHand,itemList,setItemList,count,addItem,DeleteItemHandler} = useContext(ApplicationContext);
   
    return(
      <div className="w-full h-[50%] flex flex-col p-2 gap-5 items-center bg-gray-600  ">
           

            <form onSubmit={addItem} className='w-full  flex flex-col gap-2 items-center justify-evenly md:w-[60%]'>
                <h1 className="md:text-xl ">Please enter at least 4 items and maximum 10</h1>

              <input type="text" placeholder="Enter Items You Have...." className="bg-gray-700 md:w-2/4 w-3/4 h-10 rounded-2xl p-2 text-white" value={itemsInHand} onChange={(event)=>{setItemsInHand(event.target.value)}}></input>

                <button className="bg-gray-700 px-5 py-2 rounded-xl text-white hover:bg-gray-800 text-sm">Add Item</button>

            </form>
           <div className="w-full  flex flex-col gap-2 items-center justify-evenly md:w-[60%]">
           <h1 className="md:text-xl ">You have {count} items for the recepie</h1>
           <p className="md:text-xl">{itemList.map((item,index)=>{return (<span key={index}>{index+1}. {item}{index !== (itemList.length - 1) ? ', ' : ''} </span>)})}</p>
           </div>
        
          <CallAi/>
      </div>)
}