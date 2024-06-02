import React from 'react';
import {Button} from "antd";

import "./secondary_btn.scss";

const SecondaryBtn = ({icon, btnName, onClick}) => {
    return (
        <Button
            className="secondary-btn"
            onClick={onClick}
            icon={icon}
        >
            {btnName}
        </Button>
    );
};

export default SecondaryBtn;