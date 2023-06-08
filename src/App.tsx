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
import Fridge from "./components/fridge/Fridge";
import getStyle from "./Styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CurrentPage } from "./util/CurrentPage";

setupIonicReact();

function App() {
  return (
    <Router>
      <div className={getStyle(styles, "container")}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path={CurrentPage.Fridge} element={<Fridge />} />
          <Route path={CurrentPage.Home} element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  container: ["flex", "flex-col"],
};

export default App;
