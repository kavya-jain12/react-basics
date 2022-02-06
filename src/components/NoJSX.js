import React from 'react';

const NoJSX = () => {
    // return (
    //     <div>
    //         <h3 className="no-jsx">Without JSX</h3>
    //     </div>
    // );

    return React.createElement('div', null, React.createElement('h3', { className: 'no-jsx'}, 'Without JSX'))
}

export default NoJSX
