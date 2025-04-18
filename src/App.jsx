import PanelHeader from "./Components/PanelHeader.jsx";
import Panel from "./Components/Panel.jsx";
import {Toaster} from "react-hot-toast";
import Recepie from "./Components/Recepie.jsx";
import Warn from "./Components/Warn.jsx";

export  default function App() {
    return(
        <div className="h-screen justify-arround items-center w-full bg-gray-600">
            <Warn/>
            <Toaster position="top-center" theme="light" toastOptions={{
    className: '',
    duration: 1000,
            }}/>
            <PanelHeader/>
            <div className="min-h-[90%] flex flex-col items-center">
                <Panel/>
                <Recepie/>
            </div>
        </div>
    )
}