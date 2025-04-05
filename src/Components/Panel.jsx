import { useState } from "react"

export default function Panel(){
    const[count,setCount] = useState(0);
    const[itemsinHand,setItemsInHand] = useState('')
    const[itemList,setItemList] = useState([]);

    function addItem(event){
        event.preventDefault()
        if(!itemsinHand){
            alert('Please Type Somethig')
        }else {
            setCount(count+1);
            setItemList((oldItems)=>[...oldItems,itemsinHand])
            setItemsInHand('')
        }
    }

  return(
      <div className="  w-[60%] flex flex-col p-2 gap-5 items-center text-black">
            <h1 className="text-xl text-black">Please Enter Details:</h1>

            <form onSubmit={addItem} className='flex gap-5'>
              <input type="text" placeholder="Enter Items You Have to make Food" className="bg-gray-700 w-80 h-10 rounded-2xl p-2 text-white" value={itemsinHand} onChange={(event)=>{setItemsInHand(event.target.value)}}></input>
                <button className="bg-gray-700 px-5 py-2 rounded-xl text-white font-bold hover:bg-gray-600">Add Item</button>
            </form>

            <h1 className="text-xl text-black">You Have {count} items in you hand:</h1>
          <ol className="text-xl list-decimal">
              {itemList.map((item,index)=>{return (<li key={index}>{item}</li>)})}
          </ol>

          {count === 4 &&  <div className="h-20  bg-red-200 flex flex-row items-center gap-10 p-2">
              <h1 className="text-2xl">Now you can get recepies for these items...</h1>
              <button className="bg-gray-700 px-5 py-2 rounded-xl text-white font-bold hover:bg-gray-600">Get Recepies</button>
          </div>}
      </div>)
}