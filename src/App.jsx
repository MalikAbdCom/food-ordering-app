import NavBar from "./components/NavBar.jsx";
import { ItemLists } from "./components/ItemLists.jsx";
import { CartContextProvider } from "./store/CardContext.jsx";

function App() {
  return (
    <CartContextProvider>
      <div className={"bg-slate-950"}>
        <NavBar />
        <ItemLists />
      </div>
    </CartContextProvider>
  );
}

export default App;
