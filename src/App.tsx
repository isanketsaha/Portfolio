import { Experince } from "components/experince/experince";
import { Header } from "./components/header/header";
import { Home } from "./components/home/Home";

export const App = () => (
  <>
    <Header />
    <div id="page">
      <Home />
    </div>
    <div id="page">
      <Experince />
    </div>
  </>
);
