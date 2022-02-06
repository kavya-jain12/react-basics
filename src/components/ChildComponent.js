import React from 'react';

const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.welcomeParent("child")}>Call Parent</button>
        </div>
    );
}

export default ChildComponent;
