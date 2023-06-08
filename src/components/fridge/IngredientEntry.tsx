import getStyle from "../../Styles";
import { Ingredient } from "../../util/Ingredients";
import Broccoli from "../../assets/broccoli.png";
import Kiwi from "../../assets/kiwi.png";

interface Props {
  ingredient: Ingredient;
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function IngredientEntry({ ingredient }: Props) {
  var circleStyle;
  var expiryText;
  var textColor;

  if (ingredient.expiry <= 1) {
    circleStyle = "containerRed";
    expiryText = "Today";
    textColor = "text-expirationRed";
  } else if (ingredient.expiry <= 4) {
    circleStyle = "containerOrange";
    textColor = "text-warningOrange";
    if (ingredient.expiry === 2) {
      expiryText = "Tomorrow";
    } else {
      expiryText = ingredient.expiry + " days";
    }
  } else {
    circleStyle = "containerGreen";
    textColor = "text-safeGreen";
    expiryText = ingredient.expiry + " days";
  }

  return (
    <div className={getStyle(styles, "container")}>
      <div className={getStyle(styles, circleStyle)}>
        {ingredient.name === "broccoli" ? (
          <img
            className={getStyle(styles, "ingredient")}
            src={Broccoli}
            alt=""
          />
        ) : (
          <img className={getStyle(styles, "ingredient")} src={Kiwi} alt="" />
        )}
      </div>

      <p className={getStyle(styles, "textQty") + " " + textColor}>
        x {ingredient.quantity}
      </p>

      <p className={getStyle(styles, "text") + " " + textColor}>
        {capitalizeFirstLetter(ingredient.name)}
      </p>

      <p className={getStyle(styles, "text") + " " + textColor}>{expiryText}</p>

      <div className={getStyle(styles, "editCtn")}>
        <div className={getStyle(styles, "editIconCtn")}>
          <svg
            className={getStyle(styles, "icon")}
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
              fill="#000000"
            />
          </svg>
        </div>

        <div className={getStyle(styles, "editIconCtn")}>
          <svg
            className={getStyle(styles, "icon")}
            viewBox="0 0 22 22"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="ui-gambling-website-lined-icnos-casinoshunter"
                transform="translate(-869.000000, -159.000000)"
                fill="#252528"
                fill-rule="nonzero"
              >
                <g
                  id="square-filled"
                  transform="translate(50.000000, 120.000000)"
                >
                  <path
                    d="M820.716328,39.2890737 L830,48.573 L839.283672,39.2890737 C839.644156,38.9285898 840.211387,38.9008602 840.603678,39.2058851 L840.710926,39.3021143 C841.101451,39.6926386 841.101451,40.3258036 840.710926,40.7163279 L831.427,50 L840.710926,59.2836721 C841.07141,59.6441561 841.09914,60.2113872 840.794115,60.6036784 L840.697886,60.7109263 C840.307361,61.1014506 839.674196,61.1014506 839.283672,60.7109263 L830,51.427 L820.716328,60.7109263 C820.355844,61.0714102 819.788613,61.0991398 819.396322,60.7941149 L819.289074,60.6978857 C818.898549,60.3073614 818.898549,59.6741964 819.289074,59.2836721 L828.573,50 L819.289074,40.7163279 C818.92859,40.3558439 818.90086,39.7886128 819.205885,39.3963216 L819.302114,39.2890737 C819.692639,38.8985494 820.325804,38.8985494 820.716328,39.2890737 Z M819.996181,40.0092211 L829.987233,50 L819.996181,59.9907789 L820.009221,60.0038195 L830,50.0127671 L839.990779,60.0038195 L840.003819,59.9907789 L830.012767,50 L840.003819,40.0092211 L839.990779,39.9961805 L830,49.9872329 L820.009221,39.9961805 L819.996181,40.0092211 Z"
                    id="cancel"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: [
    "flex",
    "items-center",
    "bg-backgroundBeige",
    "rounded-lg",
    "w-full",
    "h-[45px]",
    "relative",
  ],
  containerGreen: [
    "border-[3.5px]",
    "border-safeGreen",
    "bg-white",
    "rounded-full",
    "h-[32px]",
    "w-[32px]",
    "flex",
    "justify-center",
    "items-center",
    "ml-3",
  ],
  containerOrange: [
    "border-[3.5px]",
    "border-warningOrange",
    "bg-white",
    "rounded-full",
    "h-[32px]",
    "w-[32px]",
    "flex",
    "justify-center",
    "items-center",
    "ml-3",
  ],
  containerRed: [
    "border-[3.5px]",
    "border-expirationRed",
    "bg-white",
    "rounded-full",
    "h-[32px]",
    "w-[32px]",
    "flex",
    "justify-center",
    "items-center",
    "ml-3",
  ],
  editCtn: [
    "absolute",
    "right-2",
    "w-12",
    "flex",
    "items-center",
    "justify-between",
  ],
  editIconCtn: [
    "bg-white",
    "rounded-full",
    "w-5",
    "h-5",
    "flex",
    "justify-center",
    "items-center",
  ],
  icon: ["w-3", "h-3"],
  ingredient: ["h-[19px]", "w-[19px]"],
  text: ["text-sm", "ml-5"],
  textQty: ["text-sm", "ml-3"],
};
