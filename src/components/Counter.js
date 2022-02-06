import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    // this.setState({
    //     count: this.state.count + 1
    // }, () => {
    //     console.log("count", count);
    // })

    // same as state callback in class component shown above
    useEffect(() => {
        console.log(count)
    }, [count]);

    const handleClick = () => {
        // add 1 to prev values
        // setCount((prevState) => prevState + 1)
        setCount((count) => count + 1)
    }

    const incrementFive = () => {
        handleClick()
        handleClick()
        handleClick()
        handleClick()
        handleClick()
    }

    return (
        <div>
            <h1> Count Value: {count}</h1>
            <button onClick={() => incrementFive()}>Increment Count by 5</button>
        </div>
    );
}

export default Counter;
