import {
  //   IonCard,
  //   IonCardContent,
  //   IonCardHeader,
  //   IonCardSubtitle,
  //   IonCardTitle,
  setupIonicReact,
} from "@ionic/react";

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

/* 

// return (
  //   <div
  //     style={{ margin: "0 1em 0 0", paddingTop: "env(safe-area-inset-top)" }}
  //   >
  //     <IonCard>
  //       <IonCardHeader>
  //         <IonCardTitle>Card Title</IonCardTitle>
  //         <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
  //       </IonCardHeader>

  //       <IonCardContent>
  //         Here's a small text description for the card content. Nothing more,
  //         nothing less and nothing even more less.
  //       </IonCardContent>
  //     </IonCard>
  //   </div>
  // );

  // return <div>Hello world</div>;

*/
