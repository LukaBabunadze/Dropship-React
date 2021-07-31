import {Form, Formik, Field} from "formik"
import {Dialog, DialogActions, DialogContent, DialogTitle, Input, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {registration, userRegistration} from "../Common/API";
import {useHistory} from "react-router-dom";
import logo from "../Icons/logo.png";
import facebook from "../Icons/facebook.png";
import google from "../Icons/google.png";
import {AccountCircle, DeleteOutlined} from "@material-ui/icons";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

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
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 70,
        marginTop: 40,
    },
    button: {
        height: 40,
        width: 200,
        fontSize: 16,
        marginTop: 14,
        color: "#FFF",
        backgroundColor: "#2B2C41",
    }
});

toast.configure()
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

    const successToast = () => {
        toast.success("Registration is Successful", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000
        })
    }
    return(
               <Dialog  open={true}>
                   <div className={classes.root}>
                       <div className="signup__header">
                           <DialogContent><img className="login__logo" src={logo}/></DialogContent>
                           <DialogTitle className="signup__header-title">
                               <b>Register Here</b>
                           </DialogTitle>
                       </div>
                       <DialogActions>
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
                               <Form className={classes.inputs}>
                                   <div>
                                       <AccountCircleIcon
                                           className="signup-icons"
                                       />
                                       <Field

                                           placeholder="First Name"
                                           name="firstName"
                                           className="signup__item-input"
                                       />
                                   </div>
                                   <div>
                                       <AccountCircleIcon
                                           className="signup-icons"
                                       />
                                       <Field
                                           placeholder="Last Name"
                                           name="lastname"
                                           className="signup__item-input"
                                       />
                                   </div>
                                   <div>
                                       <MailOutlineOutlinedIcon
                                           className="signup-icons"
                                       />
                                       <Field

                                           placeholder="Email"
                                           name="email"
                                           className="signup__item-input"
                                       />
                                   </div>
                                   <div>
                                       <LockOutlinedIcon
                                           className="signup-icons"
                                       />
                                       <Field
                                           type="password"
                                           placeholder="Password"
                                           name="password"
                                           className="signup__item-input"
                                       />
                                   </div>
                                   <div>
                                       <LockOutlinedIcon
                                           className="signup-icons"
                                       />
                                       <Field
                                           type="password"
                                           placeholder="Password Confirmation"
                                           name="passwordConfirmation"
                                           className="signup__item-input"
                                       />
                                   </div>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className={classes.button}
                                    >
                                        <b>SUBMIT</b>
                                    </Button>
                                </Form>
                           </Formik>
                       </DialogActions>
                       <DialogContent>
                           <div className="login__item--wrapper">
                               <span className="login__item-line"></span>
                               <p>Or Register With</p>
                               <span className="login__item-line"></span>
                           </div>
                           <div className="login__social-media--wrapper">
                               <span><img className="signup__logo-media" src={facebook}/></span>
                               <span><img className="signup__logo-media" src={google}/></span>
                           </div>
                       </DialogContent>
                   </div>
               </Dialog>
    );
};

export default SignUp;
