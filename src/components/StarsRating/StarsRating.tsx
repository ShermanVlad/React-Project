import React, {FC} from 'react';
import {Rating} from "@mui/material";

type IProps={
    rating: number
}

const StarsRating:FC<IProps> = ({rating}) => {
    return (
        <div>
            <Rating name="half-rating-read"
                    defaultValue={rating}
                    max={10}
                    size={'medium'}
                    precision={0.1} readOnly
            />
        </div>
    );
};

export default StarsRating;