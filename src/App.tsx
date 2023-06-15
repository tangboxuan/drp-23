import { useEffect, useState } from "react";
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
import Recipes from "./components/recipes/Recipes";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en-gb";
import { socket } from "./socket";
import api from "./api";

setupIonicReact();

function App() {
  // const [connected, setConnected] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  const refreshIngredients = () => {
    api.get("/get-fridge").then((response) => {
      setIngredients(response.data);
    });
  };

  useEffect(() => {
    refreshIngredients();

    // function onConnect() {
    //   // setConnected(true);
    // }

    // function onDisconnect() {
    //   // setConnected(false);
    // }

    //   socket.on("connect", onConnect);
    //   socket.on("disconnect", onDisconnect);
    socket.on("update-fridge", refreshIngredients);

    return () => {
      //     socket.off("connect", onConnect);
      //     socket.off("disconnect", onDisconnect);
      socket.off("update-fridge", refreshIngredients);
    };
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      {/* {connected ? <div>Connected</div> : <div>Disconnected</div>} */}
      <Router>
        <div className={getStyle(styles, "container")}>
          <Routes>
            <Route path="/" element={<Dashboard ingredients={ingredients} />} />
            <Route
              path={CurrentPage.Fridge}
              element={
                <Fridge
                  ingredients={ingredients}
                  refreshIngredients={refreshIngredients}
                />
              }
            />
            <Route
              path={CurrentPage.Home}
              element={<Dashboard ingredients={ingredients} />}
            />
            <Route path={CurrentPage.Recipes} element={<Recipes />} />
          </Routes>
        </div>
      </Router>
    </LocalizationProvider>
  );
}

const styles = {
  container: ["flex", "flex-col"],
};

export default App;
