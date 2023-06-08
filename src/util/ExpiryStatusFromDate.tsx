function expiryStatusFromDate(daysTillExpiry: number): string {
    if (daysTillExpiry <= LOWER_BOUNDARY) {
        return "bg-expirationRed";
    } else if (daysTillExpiry <= MEDIUM_BOUNDARY) {
        return "bg-warningOrange";
    } else {
        return "bg-safeGreen";
    }
}

const LOWER_BOUNDARY = 2;
const MEDIUM_BOUNDARY = 4;

export default expiryStatusFromDate;