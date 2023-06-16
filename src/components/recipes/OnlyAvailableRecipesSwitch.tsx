import getStyle from "../../Styles";
import { useState } from "react";

interface Props {
  change: (checked: boolean) => void;
}

function OnlyAvailableRecipesSwitch({ change }: Props) {
  const [checked, setChecked] = useState(false);
  return (
    // <Stack direction="row" spacing={1} alignItems="center">
    //     <Typography>Recipes you can make with additional ingredients</Typography>
    //     <Switch onChange={(e) => change(e.target.checked)} defaultChecked={true} color="default" />
    //     <Typography>Recipes you can make now</Typography>
    // </Stack>

    <div className={getStyle(styles, "outerCtn")}>
      <div className={getStyle(styles, "ctn")}>
        <button
          onClick={() => {
            setChecked(!checked);
            change(checked);
          }}
          className={
            checked
              ? getStyle(styles, "subCtnActive")
              : getStyle(styles, "subCtnInactive")
          }
        >
          Additional Ingredients
        </button>

        <button
          onClick={() => {
            setChecked(!checked);
            change(checked);
          }}
          className={
            checked
              ? getStyle(styles, "subCtnInActive")
              : getStyle(styles, "subCtnActive")
          }
        >
          Current Ingredients
        </button>
      </div>
    </div>
  );
}

const styles = {
  outerCtn: ["flex", "justify-center", "items-center", "mt-4"],
  ctn: [
    "flex",
    "rounded-lg",
    "shadow-md",
    "h-8",
    "items-center",
    "overflow-hidden",
  ],
  subCtnInactive: ["bg-gray-200", "p-2", "text-[12px]", "font-medium"],
  subCtnActive: ["bg-gray-300", "p-2", "text-[12px]", "font-medium"],
};

export default OnlyAvailableRecipesSwitch;
