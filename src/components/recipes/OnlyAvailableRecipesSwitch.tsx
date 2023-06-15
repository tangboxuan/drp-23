import { Stack, Switch, Typography } from "@mui/material";

interface Props {
    change: (checked: boolean) => void;
}

function OnlyAvailableRecipesSwitch({ change }: Props) {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Recipes you can make with additional ingredients</Typography>
            <Switch onChange={(e) => change(e.target.checked)} defaultChecked={true} color="default" />
            <Typography>Recipes you can make now</Typography>
        </Stack>
    );
}

export default OnlyAvailableRecipesSwitch