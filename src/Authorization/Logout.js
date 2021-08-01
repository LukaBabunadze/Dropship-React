import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    button: {
        marginLeft: 50,
        backgroundColor: "#5D6B9F",
        fontSize: 12,
        whiteSpace: "nowrap",
        height: 25,
        width: 70,
    }
})

const Logout = () => {

    const classes = useStyle();
    const history = useHistory();
    const handleLogOut = () => {
        localStorage.removeItem("products")
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        history.push("/")
    }
    return (
        <Button
            onClick={handleLogOut}
            variant="contained"
            color="primary"
            className={classes.button}
        >
            Log Out
        </Button>
    );
};

export default Logout;