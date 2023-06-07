import { setupIonicReact } from "@ionic/react";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import Dashboard from "./components/dashboard/Dashboard";
import getStyle from "./Styles";
import Footer from "./components/shared/Footer";

setupIonicReact();

function App() {
  return (
    <div className={getStyle(styles, "container")}>
      <Dashboard />

      <Footer />
    </div>
  );
}

const styles = {
  container: ["flex", "flex-col"],
};

export default App;
