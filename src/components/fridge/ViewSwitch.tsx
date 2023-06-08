import { Stack, Switch, Typography } from "@mui/material";

interface Props {
    change: (checked: boolean) => void;
}

function ViewSwitch({ change }: Props) {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Typography>By expiry</Typography>
            <Switch onChange={(e) => change(e.target.checked)} defaultChecked={true} color="default" />
            <Typography>By category</Typography>
        </Stack>
    );
}

export default ViewSwitch;