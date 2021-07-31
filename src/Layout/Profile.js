import {
    Button,
    Input,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import unknown from "../Icons/unknown.jpg"
import {Label} from "@material-ui/icons";
import {updateUsers} from "../Common/API";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: 20,
        height: 260,
        backgroundColor: "#F9FBFE",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    uploadButton: {
        marginBottom: 10,
        width: 150,
        backgroundColor: "#61D5DF",
        fontSize: 16,
    },
    label: {
        color: "#303856",
        fontSize: 15,
    }
}));


const Profile = () => {

    const classes = useStyles();
    const [user, setUser] = useState({})

    useEffect(() => {
        updateUsers().then(res => {
            console.log(res)
        })
    }, [])

    return (
        <div className="paper__wrapper">
            <h2 className="profile__header">MY PROFILE</h2>
            <TableContainer component={Paper} className="table__container">
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>PROFILE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <main className="profile__main">
                            <Grid container spacing={3}>
                                <Grid item xs={6} >
                                    <label className={classes.label}><b>PROFILE PICTURE</b></label>
                                    <Paper className={classes.paper}>
                                            <img src={unknown} className="profile__image"/>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className={classes.uploadButton}
                                            >
                                                Upload
                                            </Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <label className={classes.label}><b>PERSONAL DETAILS</b></label>
                                    <Paper className={classes.paper}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} >
                                    <label className={classes.label}><b>CHANGE PASSWORD</b></label>
                                    <Paper className={classes.paper}>
                                        <div>
                                            <span>Current Password</span>
                                            <input type="text"
                                            />
                                        </div>
                                        <div>
                                            <span>Current Password</span>
                                            <input type="text"/>
                                        </div>
                                        <div>
                                            <span>Current Password</span>
                                            <input type="text"/>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <label className={classes.label}><b>CONTACT INFORMATION</b></label>
                                    <Paper className={classes.paper}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </main>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Profile;