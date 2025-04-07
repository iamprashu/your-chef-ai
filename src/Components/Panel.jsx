import { useState } from "react"
import {toast} from "react-toastify";
import CallAi from "./CallAi.jsx";

export default function Panel(){
    const[count,setCount] = useState(0);
    const[itemsInHand,setItemsInHand] = useState('')
    const[itemList,setItemList] = useState([]);

    function DeleteItemHandler(Updateditems){
        setItemsInHand(Updateditems);//updating items
        setCount(count-1)
        setItemsInHand('')
    }
    function addItem(event){
        event.preventDefault()
        if(!itemsInHand){
            // alert('Please Enter Item Name')
            toast('Hey!, Please Enter Name of Item.')
        }else {
            setCount(count+1);
            setItemList((oldItems)=>[...oldItems,itemsInHand])
            setItemsInHand('')
        }
    }
    return(
      <div className="  w-[60%] flex flex-col p-2 gap-5 items-center text-black">
            <h1 className="text-xl text-black">Please enter at least 4 items</h1>

            <form onSubmit={addItem} className='flex gap-5'>
              <input type="text" placeholder="Enter Items You Have...." className="bg-gray-700 w-80 h-10 rounded-2xl p-2 text-white" value={itemsInHand} onChange={(event)=>{setItemsInHand(event.target.value)}}></input>
                <button className="bg-gray-700 px-5 py-2 rounded-xl text-white hover:bg-gray-600 text-sm">Add Item</button>
            </form>

            <h1 className="text-xl text-black">You Have {count} items in you hand:</h1>
          <ol className="text-xl list-decimal">
              {itemList.map((item,index)=>{return (<li key={index}>{item}</li>)})}
          </ol>
          {/*  Conditional Render Heree*/}
          <CallAi itemList={itemList} DeleteItemHandler = {DeleteItemHandler} count={count}/>
      </div>)
}