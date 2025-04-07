import PanelHeader from "./Components/PanelHeader.jsx";
import Panel from "./Components/Panel.jsx";
import {ToastContainer} from "react-toastify";

export  default function App() {
    return(
        <div className=" min-h-screen max bg-yellow-50 flex flex-col justify-arround items-center">
            <PanelHeader/>
            <Panel/>
            <ToastContainer position="top-left" autoClose={1000} theme="dark"/>
        </div>
    )
}