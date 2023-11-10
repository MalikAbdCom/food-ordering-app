import NavBar from "./components/NavBar.jsx";
import {ItemLists} from "./components/ItemLists.jsx";

function App() {
    return (
        <div className={'bg-slate-950'}>
            <NavBar/>
            <ItemLists/>
        </div>
    );
}

export default App;