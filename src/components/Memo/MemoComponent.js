import React from 'react';

const MemoComponent = ( { name}) => {
    
    // pure component -> class based components, react memo -> functional based components
    // react memo is a higher order component

    return (
        <div>
            {name}
        </div>
    );
}

export default React.memo(MemoComponent);
