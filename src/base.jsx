import { createRoot } from "react-dom/client";
import './completeProject.css'
import App from "./App";
import  ProviderApp  from "./Contexts/ApplicationContext";

createRoot(document.getElementById('root')).render(
  <ProviderApp>
    <App/>
  </ProviderApp>
)