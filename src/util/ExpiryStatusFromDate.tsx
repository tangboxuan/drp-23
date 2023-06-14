function expiryColourFromDate(daysTillExpiry: number): string {
  console.log(daysTillExpiry);
  if (daysTillExpiry <= LOWER_BOUNDARY) {
    return "expirationRed";
  } else if (daysTillExpiry <= MEDIUM_BOUNDARY) {
    return "warningOrange";
  } else {
    return "safeGreen";
  }
}

export const LOWER_BOUNDARY = 1;
export const MEDIUM_BOUNDARY = 4;

export default expiryColourFromDate;
