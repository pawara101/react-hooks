import React from 'react';

export const Header = () => {
    console.log("Header Rendered");
    return(
        <div>
            <h2>Header</h2>
        </div>
    )
}

export default React.memo(Header);