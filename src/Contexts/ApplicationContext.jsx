import {createContext,useState } from "react"
import toast from "react-hot-toast";
import { Client } from "@gradio/client"; // ai client


export const ApplicationContext = createContext();

export default function ProviderApp({children}){
    const[loader,setLoader] = useState(false);
    const[recipe,setRecipe] = useState('');
    const[itemsInHand,setItemsInHand] = useState('')
    const[itemList,setItemList] = useState([]);
    const[count,setCount] = useState(0);
    const [showWarning, setShowWarning] = useState(true);



    function resetData(event){
        if(count==0){
            toast.error('Please Add Item First.')
        }
        else{
            event.preventDefault();
        setItemList([]);
        setCount(0);
        toast.success('All Items Deleted.')
        }
    }

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

    function DeleteItemHandler(Updateditems){
        setItemsInHand(Updateditems);//updating items
        setCount(count-1)
        setItemsInHand('')
    }

    function addItem(event){
        event.preventDefault()
        if(!itemsInHand){
            // alert('Please Enter Item Name')
            toast.error('Hey!, Please Enter Name of Item.')
        }else if(itemList.length >= 10) {
                toast.error(`Cannot Add More Items`)
        }else{            
            setCount(count+1);
            setItemList((oldItems)=>[...oldItems,itemsInHand])
            setItemsInHand('')
        }
    }
    async function getRecepie(event){
        setLoader(true);
        toast('Data has been sent.')
        event.preventDefault
        const items = itemList.toString();

        try{
            const client = await Client.connect("prashantbisht/Chef");
            const result = await client.predict("/chat", { 		
                message: `I am giving you a list of ingredients. please think wisely and you can remove item (but don't say anything after removing) that are not needed suggest best recepie Please return exactly one recipe based on them.

                Respond strictly in JSON format with the following structure in any condition any issues happen just follow this any how:
                {
                  "Recipe 1: <Recipe Title>": {
                    "Title": "<Recipe Title>",
                    "Ingredients": [ "<ingredient 1>", "<ingredient 2>", ... ],
                    "Steps": [ "<step 1>", "<step 2>", ... ]
                  }
                }
                
                Do not include any explanations or text outside the JSON.
                
                Here are the available ingredients: ${items}`,                
                system_message: "Hello!!", 		
                max_tokens:512,
                temperature:0.7,
                top_p:0.95, 
             });
            setRecipe(result.data);
        }catch(error){
           toast.error("Sorry Something Went Wrong, Likely it's api")
        }
        setLoader(false);
        setItemList([]);
        setCount(0);
    }
    const value = {
        loader,setLoader,recipe,setRecipe,
        itemsInHand,setItemsInHand,
        itemList,setItemList,resetData,DeleteItem,count,setCount,DeleteItemHandler,addItem,getRecepie,showWarning, setShowWarning
    }

    return( <ApplicationContext.Provider value={value}>
        {children}
    </ApplicationContext.Provider>);
}

