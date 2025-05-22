import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const ApplicationContext = createContext();

export default function ProviderApp({ children }) {
  const [loader, setLoader] = useState(false);
  const [recipe, setRecipe] = useState('');
  const [itemsInHand, setItemsInHand] = useState('');
  const [itemList, setItemList] = useState([]);
  const [count, setCount] = useState(0);
  const [showWarning, setShowWarning] = useState(true);

  function resetData(event) {
    if (count === 0) {
      toast.error('Please Add Item First.');
    } else {
      event.preventDefault();
      setItemList([]);
      setCount(0);
      toast.success('All Items Deleted.');
    }
  }

  function DeleteItem() {
    if (count === 0) {
      toast.error('Please Add First To Delete.');
    } else {
      itemList.pop();
      DeleteItemHandler(itemList);
      console.log(itemList);
    }
  }

  function DeleteItemHandler(UpdatedItems) {
    setItemsInHand(UpdatedItems); // updating items
    setCount(count - 1);
    setItemsInHand('');
  }

  function addItem(event) {
    event.preventDefault();
    if (!itemsInHand) {
      toast.error('Hey!, Please Enter Name of Item.');
    } else if (itemList.length >= 10) {
      toast.error('Cannot Add More Items');
    } else {
      setCount(count + 1);
      setItemList((oldItems) => [...oldItems, itemsInHand]);
      setItemsInHand('');
    }
  }

  async function getRecepie(event) {
    event.preventDefault();
    setLoader(true);
    toast('Data has been sent.');

    const items = itemList.toString();

    const prompt = `I am giving you a list of ingredients. Please think wisely and you can remove items (but don't say anything after removing) that are not needed.Please Give Complete Recepie don't miss any item you can use general items too like salt,masale names, etc, Suggest the best recipe based on them. Respond strictly in JSON format with the following structure in any condition any issues happen just follow this anyhow:
{
  "Recipe: <Recipe Title>": {
    "Title": "<Recipe Title>",
    "Ingredients": [ "<ingredient 1>", "<ingredient 2>", ... ],
    "Steps": [ "<step 1>", "<step 2>", ... ]
  }
}
Do not include any explanations or text outside the JSON.

Here are the available ingredients: ${items}`;

    try {
      const res = await puter.ai.chat(prompt, {
        model: 'gpt-4o',
      });

      console.log("AI response:", res);

      const rawText = res?.message?.content;

      if (rawText && typeof rawText === 'string') {
        const cleaned = rawText.replace(/```json|```/g, '').trim();

        try {
          const parsed = JSON.parse(cleaned);
          setRecipe([cleaned]); // storing JSON string in array for use in UI
        } catch (parseError) {
          toast.error("Failed to parse AI response.");
          console.error("JSON parse error:", parseError);
        }
      } else {
        toast.error("Response format is not valid text.");
        console.warn("Unexpected response structure:", res);
      }
    } catch (error) {
      console.error("Error calling AI:", error);
      toast.error("Sorry, something went wrong. Likely it's API.");
    }

    setLoader(false);
    setItemList([]);
    setCount(0);
  }

  const value = {
    loader, setLoader,
    recipe, setRecipe,
    itemsInHand, setItemsInHand,
    itemList, setItemList,
    resetData,
    DeleteItem,
    count, setCount,
    DeleteItemHandler,
    addItem,
    getRecepie,
    showWarning, setShowWarning
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}
