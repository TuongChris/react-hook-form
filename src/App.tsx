import { Provider } from "react-redux";
import store from "../src/Redux/Store/Store";
import ListPage from "./modules/auth/Pages/LoginPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <ListPage />
      </Provider>
    </>
  );
}

export default App;
