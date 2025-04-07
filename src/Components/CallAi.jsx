export default function CallAi(props){
    const itemList = props.itemList;
    const DeleteItemHandler = props.DeleteItemHandler;
    const count = props.count;

    function DeleteItem(){
        itemList.pop();
        DeleteItemHandler(itemList);
        console.log(itemList)
    }



    return(
        <div className="bg-red-100 flex flex-col items-center gap-5 p-2 rounded-xl">
            {count>=4 &&<h1 className="text-sm md:text-2xl ">Now you can get recipe for these items...</h1>}
            {count>=4 && <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnZ0aHNpYXdkYWFtYXZzamtlMGg2OTZmNHcyMW03b2F3Mzh4ZjVxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9BanIZkC1M8wWCwYJB/giphy.gif" className="rounded-xl h-[200px] w-[220px]" alt=""/>}
            <div className="flex gap-5">
                <button className="bg-gray-800 px-5 py-2 rounded-xl text-white font-bold hover:bg-gray-600" onClick={DeleteItem}>Delete Item</button>
                <button className="bg-gray-800 px-5 py-2 rounded-xl text-white font-bold hover:bg-gray-600">Reset Items</button>
                <button className="bg-gray-800 px-5 py-2 rounded-xl text-white font-bold hover:bg-gray-600">Get Recipes</button>
            </div>
        </div>
    )
}
