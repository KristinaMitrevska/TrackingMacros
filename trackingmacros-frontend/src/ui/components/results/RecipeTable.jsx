import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";


const RecipeTable = ({recipe, handleBack}) => {
    console.log(recipe);
    console.log(null);
    return (
        <Box width={'70%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Serving</TableCell>
                            <TableCell align="right">Fat</TableCell>
                            <TableCell align="right">Carbohydrates</TableCell>
                            <TableCell align="right">Protein</TableCell>
                            <TableCell align="right">Calories</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recipe.ingredients.map((ingredient) => (
                            <TableRow key={ingredient.name}>
                                <TableCell component="th" scope="row">
                                    {ingredient.name}
                                </TableCell>
                                <TableCell align="right">
                                    {ingredient.quantity}{ingredient.unit}
                                </TableCell>
                                <TableCell align="right">
                                    {ingredient.fat}g
                                </TableCell>
                                <TableCell align="right">
                                    {ingredient.carbohydrates}g
                                </TableCell>
                                <TableCell align="right">
                                    {ingredient.protein}g
                                </TableCell>
                                <TableCell align="right">
                                    {ingredient.calories}kcal
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button variant={'contained'} onClick={handleBack}>Back</Button>
        </Box>
    )
}

export default RecipeTable;