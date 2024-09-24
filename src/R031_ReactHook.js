import React, {useEffect, useState} from "react";

function R031_ReactHook(props) {
    const [contents, setContents] = useState('[THIS IS REACT // R031_ReactHook]');

    useEffect(() => {
        console.log('userEffect');
    });

    return (
        <div>
            <h2>{contents}</h2>
            <button onClick={() => setContents('[THIS IS HOOK, R031_ReactHook]')}>버튼</button>
        </div>
    )
}
export default R031_ReactHook;