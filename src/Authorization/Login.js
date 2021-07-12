import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Input} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import {Switch,Route, useHistory} from "react-router-dom";
import {login} from "../Common/API";


const useStyles = makeStyles({
    root: {
        height: 500,
        width: 450,
        textAlign: "center",
        marginTop: 30,
    },
    inputs: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: 60,
        alignText: "center",
        marginRight: 70,
        marginTop: 40,
    },
    inputItem: {
        width: 300,
        height: 50,
        border: "1px solid grey",
        boxShadow: "none",
        paddingLeft: 30,
        borderRadius: 8,
    }
});
const Login = () => {

    const [email, setEmail] = useState("");
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
                alert("Email or Password is incorrect")
            });
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) loginSuccess()
        // else {
        //     history.push("/");
        // }
    }, [])

    return(
        <Switch>
            <Route path="/login">
                <Dialog  open={true}>
                    <div className={classes.root}>
                        <DialogTitle>
                            Members Log In
                        </DialogTitle>
                        <DialogActions>
                            <form className={classes.inputs} onSubmit={performLogin}>
                                <Input
                                    type="text"
                                    placeholder="email"
                                    value={email}
                                    className={classes.inputItem}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                                <Input
                                    type="password"
                                    placeholder="password"
                                    value={password}
                                    className={classes.inputItem}
                                    onChange={(e) => {setPassword(e.target.value)}}
                                />
                                <Input
                                    placeholder="Log In"
                                    type="submit"
                                    className={classes.inputItem}
                                />
                            </form>
                        </DialogActions>
                        <DialogContent>
                            <p>Or Log In With</p>
                        </DialogContent>
                    </div>
                </Dialog>
            </Route>
        </Switch>
    );
};

export default Login;