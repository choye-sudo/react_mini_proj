import { useState } from "react";
import ResultView from "./ResultView";
import CalcHandler from "./CalcHandler";
import { Link, useLoaderData, useParams } from "react-router-dom";


const Calc = () => {
    const data = useParams();
    console.log(data)
    console.log("Calc")
    return <div>
        <ResultView />
        <CalcHandler />
    </div>

}

export default Calc;