import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";

const RecipeTable = ({recipe, handleBack}) => {
    return (
        <Box width={'70%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <TableContainer component={Paper} sx={{boxShadow: 6, backgroundColor: '#fcffd6', borderRadius: 4}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 'bold', color: '#b62af7'}}>
                                <Typography variant={'body1'} sx={{fontWeight: 'bold', color: '#b62af7'}}>Name</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant={'body1'} sx={{fontWeight: 'bold', color: '#b62af7'}}>Serving</Typography>
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 'bold', color: '#b62af7'}}>
                                <Typography variant={'body1'} sx={{fontWeight: 'bold', color: '#b62af7'}}>Fat</Typography>
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 'bold', color: '#b62af7'}}>
                                <Typography variant={'body1'} sx={{fontWeight: 'bold', color: '#b62af7'}}>Carbohydrates</Typography>
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 'bold', color: '#b62af7'}}>
                                <Typography variant={'body1'} sx={{fontWeight: 'bold', color: '#b62af7'}}>Protein</Typography>
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 'bold', color: '#b62af7'}}>
                                <Typography variant={'body1'} sx={{fontWeight: 'bold', color: '#b62af7'}}>Calories</Typography>
                            </TableCell>
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
                        <TableRow>
                            <TableCell component="th" scope="row" sx={{fontWeight: 'bold', color: '#b62af7'}}>
                                Total
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 'bold', color: '#b62af7'}}>
                                /
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 'bold', color: '#b62af7'}}>
                                {recipe.total_fat}g
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 'bold', color: '#b62af7'}}>
                                {recipe.total_carbohydrates}g
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 'bold', color: '#b62af7'}}>
                                {recipe.total_protein}g
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 'bold', color: '#b62af7'}}>
                                {recipe.total_calories}kcal
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Button variant="contained" sx={{ backgroundColor: '#b62af7', marginTop: '2em' }} onClick={handleBack}>Back</Button>
        </Box>
    )
}

export default RecipeTable;