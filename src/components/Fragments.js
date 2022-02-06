import React from 'react';

const Fragments = () => {
    return (
        // <div>
        //     <h1>Fragment Demo</h1>
        //     <p>This is fragment demo</p>
        // </div>

        // The above code adds additional div tag, to avoid this we use React fragments (does not take any space in DOM)
        // react fragments can be mainly used in tables where columns are used in child compoenent
        // <React.Fragment> </React.Fragment> is equal to <> </>
        // Only attribute key can be added React fragment <React.Fragment key={key}>
        // key attribute limitation if empty tags are used <></>

        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This is fragment demo</p>
        </React.Fragment>
    );
}

export default Fragments;
