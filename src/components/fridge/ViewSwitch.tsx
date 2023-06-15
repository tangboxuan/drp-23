import { Stack, Switch, Typography } from "@mui/material";
import getStyle from "../../Styles";
import { useState } from "react";

interface Props {
  change: (checked: boolean) => void;
}

function ViewSwitch({ change }: Props) {
  const [checked, setChecked] = useState(false);

  return (
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
        By expiry
      </button>

      <button
        onClick={() => {
          setChecked(!checked);
          change(checked);
        }}
        className={
          checked
            ? getStyle(styles, "subCtnInactive")
            : getStyle(styles, "subCtnActive")
        }
      >
        By category
      </button>
    </div>
  );
}

const styles = {
  ctn: [
    "flex",
    "rounded-lg",
    "shadow-md",
    "h-8",
    "items-center",
    "overflow-hidden",
  ],
  subCtnInactive: [
    "w-[73px]",
    "h-full",
    "bg-gray-200",
    "p-2",
    "text-[9.5px]",
    "font-medium",
  ],
  subCtnActive: [
    "w-[73px]",
    "h-full",
    "bg-gray-300",
    "p-2",
    "text-[9.5px]",
    "font-medium",
  ],
};

export default ViewSwitch;
