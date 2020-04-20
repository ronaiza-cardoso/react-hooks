/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

const INITIAL_VALUE = 5;

export default function Timer() {
    const [timer, setTimer] = useState(INITIAL_VALUE);

    // componentDidMount
    useEffect(() => {
        // t is the current value of the timer
        const interval = setInterval(() => setTimer(t => t - 1), 1000)

        // componentWillUnmount
        return () => clearInterval(interval)
    }, [timer]);


    useEffect(() => {
        if (timer < 0) {
            setTimer(INITIAL_VALUE)
        }
    }, [timer])

    return (
            <div>
                <p>{timer}</p>
            </div>
    );
}
