import getStyle from "../../Styles";
import DeleteIcon from "../../assets/delete-left-solid.svg";

interface Props {
  ingredient: string;
  onClick: (ingredient: string) => void;
} // TODO: Add quantity

export default function FridgeEntry({ ingredient, onClick }: Props) {
  return (
    <div className={getStyle(styles, "capsule")}>
      <p>{ingredient}</p>
      <svg
        className={getStyle(styles, "svg")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        onClick={() => onClick(ingredient)}
      >
        <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
      </svg>
    </div>
  );
}

const styles = {
  capsule: [
    "rounded-xl",
    "shadow-lg",
    "p-2",
    "flex",
    "flex-row",
    "justify-center",
    "items-center",
    "m-2",
    "border-black",
    "border",
    "hover:scale-105",
    "cursor-pointer",
  ],
  svg: ["h-4", "w-4", "fill-red-600", "ml-2", "hover:fill-blue-900"],
};
