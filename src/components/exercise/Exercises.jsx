import React, { Fragment } from 'react';
import { Grid, Typography, List, ListItemLink, ListItemText, ListItem, Paper } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';


const styles = {
    paperStyle: {
        padding: 50,
        margin: 10,
        height: 500,
        overflow: 'auto'
    }
}

export default ({ exercises }) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.paperStyle}>

                {
                    exercises.map(([group, exercises]) =>
                        <Fragment>
                            <Typography variant="headline" style={{ textTransform: 'capitalize' }} color="inherit">
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map(({ title }) =>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>

                                )}
                            </List>
                        </Fragment>
                    )
                }
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.paperStyle}>
                <Typography variant="display1" style={{ textTransform: 'capitalize' }} color="inherit">
                    Welcome !
                </Typography>
                <Typography variant="subheading" style={{ textTransform: 'capitalize' }} color="inherit">
                    Please select an exercise for detail.
                </Typography>
            </Paper>
        </Grid>
    </Grid>