import NicheAndCategory from "./NicheAndCategory";
import bluearrow from "../Icons/bluearrow.png";
import {Switch, Route} from "react-router-dom";
import {Slider, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import React from "react";
import {useState} from "react";

const useStyles = makeStyles({
    root: {
        width: 180,
    },
    priceText: {
        marginTop: 25,
        fontSize: 14,
        textAlign: "left",
        color: "#424958",
        fontWeight: 520,
    },
    profitText: {
        marginTop: 10,
        fontSize: 14,
        textAlign: "left",
        color: "#424958",
        fontWeight: 520,

    }
});

const valueOfPrice = (value) => {
    return`${value}$`
}
const valueOfProfit = (profit) => {
    return `${profit}%`
}


const Categories = () => {

    const [value, setValue] = useState([1, 4285])
    const [profit, setProfit] = useState([3, 98])

    const classes = useStyles();

    const handleChangePrice = (e, newValue) => {
        setValue(newValue);
    }

    const handleChangeProfit = (e, newProfit) => {
        setProfit(newProfit);
    }

    return(
            <>
                <Switch>
                    <Route path="/catalog">
                        <div className="body__nav-navigator">
                            <NicheAndCategory mainClass="body__nav-niche" name="Choose Niche" paragraphClass="nav__niche-text"/>
                            <NicheAndCategory mainClass="body__nav-category" name="Choose Category" paragraphClass="nav__niche-text"/>
                            <aside className="body__nav-details">
                                <div className="nav-details__item">
                                    <p>Ship From</p>
                                    <img  className="nav-details__item-image" src={bluearrow}/>
                                </div>
                                <div className="nav-details__item">
                                    <p>Ship To</p>
                                    <img  className="nav-details__item-image" src={bluearrow}/>
                                </div>
                                <div className="nav-details__item">
                                    <p>Select Supplier</p>
                                    <img  className="nav-details__item-image" src={bluearrow}/>
                                </div>
                                <div className={classes.root}>
                                    <Typography id="range-slider" gutterBottom className={classes.priceText}>
                                        PRICE RANGE
                                    </Typography>
                                    <Slider
                                        value={value}
                                        onChange={handleChangePrice}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        getAriaValueText={valueOfPrice}
                                        max={4285}
                                        min={1}
                                        color="#49547D"
                                    />
                                </div>
                                <div className={classes.root}>
                                    <Typography id="range-slider" gutterBottom className={classes.profitText}>
                                        PROFIT RANGE
                                    </Typography>
                                    <Slider
                                        value={profit}
                                        onChange={handleChangeProfit}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        getAriaValueText={valueOfProfit}
                                        max={98}
                                        min={3}
                                        color={"#49547D"}
                                    />
                                </div>
                                <Button variant="contained" color="primary">RESET FILTER</Button>
                            </aside>
                        </div>
                    </Route>
                </Switch>
            </>
    );
};

export default Categories;