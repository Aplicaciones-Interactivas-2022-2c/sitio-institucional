import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
const labels = {
    0.5: 'Pesima',
    1: 'Pesima+',
    1.5: 'Mala',
    2: 'Mala+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Buena',
    4: 'Buena+',
    4.5: 'Excelente',
    5: 'Excelente+',
};
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
const RatingComponent = (props) => {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    return (<Box sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
        }}>
      <Rating name="hover-feedback" value={value} precision={0.5} getLabelText={getLabelText} onChange={(event, newValue) => {
            setValue(newValue);
            props.sendValue(newValue);
        }} onChangeActive={(event, newHover) => {
            setHover(newHover);
        }} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}/>
      {value !== null && (<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>)}
    </Box>);
};
export default RatingComponent;
