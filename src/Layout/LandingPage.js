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
        opacity: 0.95,
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
        color: "#53B8CB",
    },
    dropship: {
        paddingLeft: 6,
        color: "#53B8CB"
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
            <div>
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
                                ABOUT
                            </Typography>
                            <Typography
                                className={classes.nav_item}
                            >
                                CATALOG
                            </Typography>
                            <Typography
                                className={classes.nav_item}
                            >
                                PRICING
                            </Typography>
                            <Typography
                                className={classes.nav_item}
                            >
                                SUPPLIERS
                            </Typography>
                            <Typography
                                className={classes.nav_item}
                            >
                                HELP
                            </Typography>
                            <Typography
                                className={classes.nav_item}
                            >
                                BLOG
                            </Typography>
                            <Link to="/registration">
                                <Button
                                    className={classes.button}
                                    variant="outlined"
                                    color="primary"
                                >
                                    SIGNUPNOW
                                </Button>
                            </Link>
                            <Link to="/login">
                                <Button className={classes.button} >
                                    LOGIN
                                </Button>
                            </Link>
                        </nav>
                    </Toolbar>
                </AppBar>
                <main className="firstPage__main">
                    <span className="firstPage__main-text">
                        <p className="span__title-num">365</p>
                        <b><p className="span__title-name">DROPSHIP</p></b>
                        <p className="span-slogan">WE GOT YOUR SUPPLY CHAIN COVERED<br/>365 DAYS A YEAR!
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