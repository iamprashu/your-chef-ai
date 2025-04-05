import Panel from "./Panel";
import PanelFooter from "./PanelFooter";
import PanelHeader from "./PanelHeader";

export default function MainPanel(){
  return(
    <div className="bg-gray-900 w-[40%] h-[500px] rounded-2xl flex flex-col justify-between">
      <PanelHeader/>
      <Panel/>
      <PanelFooter/>
    </div>
  )
}