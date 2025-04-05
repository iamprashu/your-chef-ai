import PanelHeader from "./Components/PanelHeader.jsx";
import Panel from "./Components/Panel.jsx";

export  default function App() {
    return(
        <div className="App h-screen bg-yellow-50 flex flex-col justify-arround items-center">
            <PanelHeader/>
            <Panel/>
        </div>
    )
}