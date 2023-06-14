import getStyle from "../../Styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface Props {
    recipeSummary: RecipeSummary;
    recipeDetails: RecipeDetails;
}


function RecipePage({ recipeSummary, recipeDetails }: Props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography id="modal-modal-title" variant="h1" component="h2">
                        {recipeSummary.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

const styles = {
    container: ["flex", "flex-col", "h-full", "w-full", "pb-20", "p-10", "mt-5", "overflow-y-scroll", "max-h-screen"],
    title: ["text-2xl", "font-bold", "tracking-wide"],
    subtitle: ["text-xl", "font-bold", "mt-9", "tracking-wide"],
}

export default RecipePage;