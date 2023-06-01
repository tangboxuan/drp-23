export interface RawStyles {
  [key: string]: string[];
}

function getStyle(stylesList: RawStyles, key: string): string {
  const requiredStyle = stylesList[key];

  return requiredStyle.join(" ");
}

export default getStyle;
