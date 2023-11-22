import NavBar from "./components/NavBar.jsx";
import { ItemLists } from "./components/ItemLists.jsx";
import { CartContextProvider } from "./store/CardContext.jsx";
import Modal from "./components/UI/Modal.jsx";
import ModalContextProgress, {
  ModalContextCartProgress,
} from "./store/ModalContextCartProgress.jsx";

function App() {
  return (
    <ModalContextCartProgress>
      <CartContextProvider>
        <div className={"bg-slate-950"}>
          <NavBar />
          <ItemLists />
          <Modal>Ini modal</Modal>
        </div>
      </CartContextProvider>
    </ModalContextCartProgress>
  );
}

export default App;
