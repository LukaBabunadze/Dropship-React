import {Form, Formik, Field} from "formik"
import {Dialog, DialogActions, DialogContent, DialogTitle, Input, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {registration, userRegistration} from "../Common/API";
import {useHistory} from "react-router-dom";

const useStyle = makeStyles({
    root: {
        height: 600,
        width: 450,
        textAlign: "center",
        marginTop: 30,
    },
    inputs: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: 30,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 70,
        marginTop: 40,
    },
    inputItem: {
        width: 250,
        height: 30,
        border: "1px solid grey",
        boxShadow: "none",
        paddingLeft: 30,
        borderRadius: 8,
    }
});


const SignUp = () => {

    const history = useHistory();

    const classes = useStyle();

    const handleSubmit = (values) => {
        userRegistration(values)
            .then(res => {
            history.push("/catalog");
        })
            .catch(err => {alert(Error.message)})
    }
    return(
               <Dialog  open={true}>
                   <div className={classes.root}>
                       <DialogTitle>
                           Register Here
                       </DialogTitle>
                       <DialogActions className={classes.inputs}>
                           <Formik
                               enableReinitialize
                               initialValues={{
                                   firstName: "",
                                   lastName: "",
                                   email: "",
                                   password: "",
                                   passwordConfirmation: "",
                               }
                               }
                               onSubmit={handleSubmit}
                           >
                               <Form>
                                   <Field

                                       placeholder="First Name"
                                       name="firstName"
                                       className={classes.inputItem}
                                   />
                                   <Field

                                       placeholder="Last Name"
                                       name="lastName"
                                       className={classes.inputItem}
                                   />
                                   <Field

                                       placeholder="Email"
                                       name="email"
                                       className={classes.inputItem}
                                   />
                                   <Field

                                       placeholder="Password"
                                       name="password"
                                       className={classes.inputItem}
                                   />
                                   <Field

                                       placeholder="Password Confirmation"
                                       name="passwordConfirmation"
                                       className={classes.inputItem}
                                   />
                                   <Button
                                       type="submit"
                                       color={"primary"}
                                       variant={"contained"}
                                   >
                                       Submit
                                   </Button>
                                </Form>
                           </Formik>
                       </DialogActions>
                       <DialogContent>
                           <p>Or Register With</p>
                       </DialogContent>
                   </div>
               </Dialog>
    );
};

export default SignUp;
