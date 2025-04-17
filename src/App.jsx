import PanelHeader from "./Components/PanelHeader.jsx";
import Panel from "./Components/Panel.jsx";
import {Toaster} from "react-hot-toast";
import Recepie from "./Components/Recepie.jsx";

export  default function App() {
    return(
        <div className="h-screen justify-arround items-center w-full">
            <Toaster position="top-right" autoClose={1000} theme="light"/>
            <PanelHeader/>
            <div className="flex flex-col md:flex-row h-[90%] md:min-h-[90%]">
                <Panel/>
                <Recepie/>
            </div>
        </div>
    )
}