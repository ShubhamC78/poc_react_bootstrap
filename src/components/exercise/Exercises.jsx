import React from 'react';
import Grid from '@material-ui/core/Grid';
import LeftPane from './LeftPane';
import RightPane from './RightPane';


const styles = {
    paperStyle: {
        padding: 50,

    }
}

export default ({ exercises }) =>
    <Grid container>
        <Grid item sm>
            {
                exercises.map(([group, exercises]) => {

                })
            }
        </Grid>
        <Grid item sm>
            <RightPane styles={styles.paperStyle} />
        </Grid>
    </Grid>