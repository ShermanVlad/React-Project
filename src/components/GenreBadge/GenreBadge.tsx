import React, {FC} from 'react';
import {IGenre} from "../../models/IGenre";
import styles from './GenreBadge.module.css'

type IProps={
    genre: IGenre | any
}

const GenreBadge:FC<IProps> = ({genre}) => {
    return (
        <div className={styles.genreDiv}>
            <p>
                {
                    genre?.name
                }
            </p>
        </div>
    );
};

export default GenreBadge;