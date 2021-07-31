import {Switch, Route, Link, useHistory} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import laptop from "../Icons/laptop.jpeg"


const useStyles = makeStyles(theme => ({
    header: {
        display: "flex",
        flexDirection:"column",
        backgroundColor: "#2B2C41",
        opacity: 0.75,
        width: "auto",
    },
    title: {
        flex: 1,
        paddingLeft: 70,
        fontSize: 18,
    },
    navigation: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 30,
        paddingRight: 100,
        marginLeft: 50,
    },
    nav_item: {
        fontSize: 14,
    },
    button: {
        color: "#4FC3C9",
        whiteSpace: "nowrap",
    },
    dropship: {
        paddingLeft: 6,
        color: "#4FC3C9"
    }
}));


const LandingPage = () => {

    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            history.push("/catalog")
        }
    }, [])

    return(
        <>
            <div className="landing__page">
                <AppBar position="static" className={classes.header}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className={classes.menuButton}
                        >
                        </IconButton>
                        <Typography className={classes.title}>
                            <span>365</span>
                            <span className={classes.dropship}>DROPSHIP</span>
                        </Typography>
                        <nav className={classes.navigation}>
                            <Typography
                                className={classes.nav_item}
                            >
                                <b>ABOUT</b>
                            </Typography>
                            <Typography
                                className={classes.nav_item}
                            >
                                <b>CATALOG</b>
                            </Typography>
                            <Typography
                                className={classes.nav_item}
                            >
                                <b>PRICING</b>
                            </Typography>
                            <Typography
                                className={classes.nav_item}
                            >
                                <b>SUPPLIERS</b>
                            </Typography>
                            <Typography
                                className={classes.nav_item}
                            >
                                <b>HELP</b>
                            </Typography>
                            <Typography
                                className={classes.nav_item}
                            >
                                <b>BLOG</b>
                            </Typography>
                            <Link to="/registration">
                                <Button
                                    className={classes.button}
                                    variant="outlined"
                                    color="primary"
                                >
                                    <b>SIGN UP NOW</b>
                                </Button>
                            </Link>
                            <Link to="/login">
                                <Button className={classes.button} >
                                    <b>LOGIN</b>
                                </Button>
                            </Link>
                        </nav>
                    </Toolbar>
                </AppBar>
                <main className="firstPage__main">
                    <span className="firstPage__main-text">
                        <p className="span__title-num">365</p>
                        <b><p className="span__title-name">DROPSHIP</p></b>
                        <p className="span-slogan"><b>WE GOT YOUR SUPPLY CHAIN COVERED</b><br/><b>365 DAYS A YEAR!</b>
                        </p>
                    </span>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        SIGN UP NOW
                    </Button>
                </main>
            </div>
        </>
    );
};

export default LandingPage;