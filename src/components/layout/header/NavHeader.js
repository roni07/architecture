import React from 'react';
import {Dropdown, Flex, Layout} from 'antd';
import ImageView from "../../common/ImageView";

import "./nav_header.scss";

const {Header} = Layout;

const NavHeader = () => {

    const menuItems = [
        {
            key: 'profile',
            label: (
                <>
                    Profile
                    {/*<Link to={PROFILE_PATH}/>*/}
                </>
            ),
            children: null,
            icon: null
        },
        {
            key: 'logout',
            label: (
                <div>
                    Logout
                </div>
            ),
            children: null,
            icon: null
        },
    ]

    return (
        <Header className="nav-header">

            <p className="greeting-title">Good Morning</p>

            <Flex align="center" gap={18}>
                <div className="image-wrapper">
                    <ImageView
                        url="/assets/images/profile.svg"
                        style={{width: "20px", height: "20px"}}
                    />
                </div>

                <div className="user-detail-wrapper">
                    <p className="user-type-txt">
                        Admin
                    </p>
                    <p className="profile-txt">
                        Profile
                    </p>
                </div>

                <Dropdown
                    className="drop-down"
                    menu={{items: menuItems}}
                    trigger={['click']}
                >
                    <ImageView
                        url="/assets/images/arrow_down.svg"
                    />
                </Dropdown>

            </Flex>

        </Header>
    );
}

export default NavHeader;
