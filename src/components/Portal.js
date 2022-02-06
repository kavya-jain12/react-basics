import React from 'react';
import reactDom from 'react-dom';

const Portal = () => {

    // usage examples - modals, popup, tooltip
    // if u want any UI to render outside root then use portals

    return reactDom.createPortal(
        <h1>Portals from portal root added in public/index.html</h1>,
        document.getElementById('portal-root')
    );
}

export default Portal;
