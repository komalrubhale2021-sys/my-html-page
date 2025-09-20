import react, {useEffect} from 'react';

const Clock = () => {
    const [time, setTime] = useSatate(new Date().toLocaleString());
    const updateTimer = () =>{
        setInterval(() =>{
            setTime(new Date().toLocaleString());

        }, 1000);
    };

    useEffect(()=> {
        updateTimer();  // use effect function takes two argument  1st is  call back function and 2nd is array.. use effect is use to perform side effect

    }, time);

    return<div>{time}</div>
};

export default Clock;