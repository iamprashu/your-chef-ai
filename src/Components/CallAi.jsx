import chefGif from '/src/includes/chef.gif'
import {toast} from "react-hot-toast";
import { Client } from "@gradio/client"; // ai client
import { useState } from 'react';
import Recepie from './Recepie';





export default function CallAi(props){
    const itemList = props.itemList;
    const DeleteItemHandler = props.DeleteItemHandler;
    const count = props.count;
    const[loader,setLoader] = useState(false);
    const[recipe,setRecipe] = useState('');

    function DeleteItem(){
        if(count==0){
            toast.error('Please Add First To Delete.')
        }
        else{
            itemList.pop();
            DeleteItemHandler(itemList);
            console.log(itemList)
        }
    }
    function resetData(event){
        event.preventDefault();
        
        toast.success('All Items Deleted.')
    }

    async function getRecepie(event){
        toast('data send')
        event.preventDefault
        const items = itemList.toString();

        try{
            const client = await Client.connect("prashantbisht/Chef");
            const result = await client.predict("/chat", { 		
                message: `hello i am giving you items i have please give me recepie only with title and recepie no extra messages please ${items}`, 		
                system_message: "Hello!!", 		
                max_tokens:512,
                temperature:0.7,
                top_p:0.95, 
             });
            setRecipe(result.data)
        }catch(error){
            console.log(error);
        }

    }

    console.log(recipe)



    return(
        <div className="bg-red-100 flex flex-col items-center gap-5 p-2 rounded-xl">
            {count>=4 &&<h1 className="text-sm md:text-2xl ">Now you can get recipe for these items...</h1>}
            {count>=4 && <img src={chefGif} className="rounded-xl h-[200px] w-[220px]" alt=""/>}
            <div className="flex gap-5">
                <button className="bg-gray-800 px-5 py-2 rounded-xl text-white font-bold hover:bg-gray-600" onClick={DeleteItem}>Delete Item</button>
                <button className="bg-gray-800 px-5 py-2 rounded-xl text-white font-bold hover:bg-gray-600" onClick={resetData}>Reset Items</button>
                <button className="bg-gray-800 px-5 py-2 rounded-xl text-white font-bold hover:bg-gray-600" onClick={getRecepie}>Get Recipes</button>
            </div>
        </div>
    )
}
