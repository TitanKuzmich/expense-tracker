import React, {useContext} from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from "@material-ui/core"

import { ExpenseTrackerContext } from '../../context/context'

import List from "./List";
import Form from "./Form";
import InfoCard from './InfoCard'

import useStyles from "./styles"

const Main = () => {
    const classes = useStyles()
    const { balance } = useContext(ExpenseTrackerContext)

    return (
        <Card className={classes.root}>
            <CardHeader title="Expence Tracker" subheader="Powered by Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance ${balance}
                </Typography>
                <Typography variant="subtitle1" style={{ lineHeight:'1.5rem', marginTop: '20px' }}>
                    <InfoCard/>
                </Typography>
                <Divider className={classes.divider}/>
                  <Form/>
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid item xs={12}>
                  <List/>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Main;