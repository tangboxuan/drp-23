import { Stack, Switch, Typography } from "@mui/material";

interface Props {
    change: (checked: boolean) => void;
}

function DateSwitch({ change }: Props) {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Expiry date</Typography>
            <Switch onChange={(e) => change(e.target.checked)} defaultChecked={true} color="default" />
            <Typography># of days</Typography>
        </Stack>
    );
}

export default DateSwitch