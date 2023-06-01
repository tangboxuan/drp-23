import getStyle from "../../Styles";

interface Props {
  ingredient: string;
  quantity: number;
}

export default function FridgeEntry({ ingredient, quantity }: Props) {
  return (
    <div className={getStyle(styles, "capsule")}>
      <p>{ingredient}</p>
      <p>{quantity}</p>
    </div>
  );
}

const styles = {
  capsule: [
    "rounded-xl",
    "shadow-lg",
    "p-2",
    "flex",
    "justify-center",
    "items-center",
  ],
};
