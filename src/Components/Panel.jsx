import { useState } from "react"

export default function Panel(){
  const[data,addData]=useState([]);
  const[newItem,addNewItem] = useState('');

  function inputHandler(event){
    let inData = event.target.value;
    addNewItem(inData)
  }

  function addItemToLog(){

    if(newItem){
      addData((oldData)=>[...oldData,newItem]);
      addNewItem('')
    }else{
      alert('sorry')
    }
    
  }
  

  return(<div className="bg-gray-700 h-[340px] w-full flex flex-col  p-2 gap-5 justify-between">

    <div className="flex flex-col gap-5">
      <div className="flex gap-2 justify-evenly items-center w-full">

        <input type="data" placeholder="Please add items you have......." className="bg-gray-600 h-10 rounded-xl p-2 focus:outline-0" onChange={inputHandler} value={newItem}/>    
        <button className="bg-gray-600 px-7 py-2 rounded-2xl hover:bg-gray-800" onClick={addItemToLog}>Add Ingredients </button>
      </div>


      <div className="auto w-[100%]  flex flex-col" >
        <h2 className="text-xl">Ingredients in hand:</h2>
        <ul className="">
          {data.map((item,index)=>(<li>{item}</li>))}
        </ul>
      </div>
    </div>
  </div>)
}