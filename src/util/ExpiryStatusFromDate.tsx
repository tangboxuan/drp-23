function expiryStatusFromDate(daysTillExpiry: number): string {
    if (daysTillExpiry <= LOWER_BOUNDARY) {
        return "bg-expirationRed";
    } else if (daysTillExpiry <= MEDIUM_BOUNDARY) {
        return "bg-warningOrange";
    } else {
        return "bg-safeGreen";
    }
}

export const LOWER_BOUNDARY = 1;
export const MEDIUM_BOUNDARY = 4;

export default expiryStatusFromDate;