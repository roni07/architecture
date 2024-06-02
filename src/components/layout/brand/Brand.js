import React from 'react';
import ImageView from "../../common/ImageView";

import "./brand.scss";

const Brand = () => {
    return (
        <div className="brand">
            <ImageView
                url="/logo192.png"
                style={{height: "30px"}}
            />
        </div>
    );
};


export default Brand;