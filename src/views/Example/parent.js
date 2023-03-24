import React, { useCallback } from "react";
import { useState, useEffect, useMemo } from "react";

function Parent(props) {
    return (
        <>
            <h2> {props.name} is my {props.relationship}</h2>
        </>
    )

}

function Children() {
    const [height, setHeight] = useState({
        name: "cm",
        tall: 170
    });
    const [count, setCount] = useState(0);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    const increment = () => {
        setCount((c) => c + 1);
    };
    const [weight, setWeight] = useState(0);
    return (
        <>
            <h2> my name is Jack , my height is {height.tall} {height.name} my weight is {weight}</h2>
            <Parent name="Nick" relationship="Mom" />
            <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>

        </>
    )


}
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

export default Children;
