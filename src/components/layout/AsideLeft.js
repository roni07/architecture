import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import Brand from './brand/Brand';
import {DASHBOARD_PATH} from "../../routes/Slug";
import Navs from "../../configs/Navs";

import "./aside_left.scss";

const AsideLeft = () => {

    /* Menu Binding Start */

    const bindSingleMenuItem = (item) => {
        return (
            {
                key: item.key,
                label: <div
                    style={{fontSize: "16px"}}
                    // onClick={globalContext.screenWidth > 991 ? null : () => onCollapse(true)}
                >
                    {item.title}
                    {item.path && <Link to={item.path}/>}
                </div>,
                icon: item.icon,
            }
        )
    }

    const bindSubMenuItem = item => {
        return (
            {
                key: item.key,
                label: <div style={{fontSize: "16px"}}>{item.title}</div>,
                icon: item.icon,
                children: item.subMenu.map(childItem => getMenuItems(childItem))
            }
        )
    }

    const getMenuItems = (item) => {

        return item.subMenu ? bindSubMenuItem(item) : bindSingleMenuItem(item);
    }

    /* Menu Binding End */

    return (
        <>
            <Link to={DASHBOARD_PATH}>
                <Brand/>
            </Link>
            <Menu
                theme="light"
                defaultSelectedKeys={['1']}
                mode="inline"
                className="aside-left-content"
                items={Navs.map(item => getMenuItems(item))}
            />
        </>
    );
}

export default AsideLeft;
