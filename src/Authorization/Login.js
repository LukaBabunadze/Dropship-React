import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Input} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import {Switch,Route, useHistory} from "react-router-dom";
import {login} from "../Common/API";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import logo from "../Icons/logo.png";
import facebook from "../Icons/facebook.png";
import google from "../Icons/google.png"
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";


const useStyles = makeStyles({
    root: {
        height: 500,
        width: 450,
        textAlign: "center",
        marginTop: 20,
    },
    inputs: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: 30,
        alignText: "center",
        marginBottom: 0,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
    },
    button: {
        width: 200,
        height: 50,
        boxShadow: "none",
        borderRadius: 8,
        marginBottom: 0,
        marginTop: 0,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#2B2C41",
        fontSize: 16,
    }
});

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = () => {

    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState("");

    const history = useHistory();
    const classes = useStyles();

    const loginSuccess = () => {
        history.push("/catalog")
    }
    const performLogin = (e) => {
        e.preventDefault();
        login(email, password)
            .then(res => {
                loginSuccess();
            })
            .catch(res => {
                setOpen(true);
            });
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) loginSuccess()
        // else {
        //     history.push("/");
        // }
    }, [])

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false)
    }


    return(
        <Switch>
            <Route path="/login">
                <Dialog  open={true}>
                    <div className={classes.root}>
                        <div className="login__header">
                            <DialogContent><img className="login__logo" src={logo}/></DialogContent>
                            <DialogTitle className="login__header-title">
                                <b>Members Log In</b>
                            </DialogTitle>
                        </div>
                        <DialogActions>
                            <form className={classes.inputs} onSubmit={performLogin}>
                                <div>
                                    <MailOutlineOutlinedIcon className="login-icons" />
                                    <input
                                        type="text"
                                        placeholder="email"
                                        value={email}
                                        className="login__input-item"
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                    />
                                </div>
                                <div>
                                    <LockOutlinedIcon className="login-icons"/>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        value={password}
                                        className="login__input-item"
                                        onChange={(e) => {setPassword(e.target.value)}}
                                    />
                                </div>
                                <span className="login__main-span">Forgot Password?</span>
                                <Button
                                    type="submit"
                                    className={classes.button}
                                    variant="contained"
                                    color="primary"
                                >
                                    <b>Submit</b>
                                </Button>
                            </form>
                        </DialogActions>
                        <DialogContent>
                            <div className="login__item--wrapper">
                                <span className="login__item-line"></span>
                                <p>Or Log In With</p>
                                <span className="login__item-line"></span>
                            </div>
                            <div className="login__social-media--wrapper">
                                <span><img className="login__logo-media" src={facebook}/></span>
                                <span><img className="login__logo-media" src={google}/></span>
                            </div>
                            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error">
                                    Email or Password is Incorrect!
                                </Alert>
                            </Snackbar>
                        </DialogContent>
                    </div>
                </Dialog>
            </Route>
        </Switch>
    );
};

export default Login;