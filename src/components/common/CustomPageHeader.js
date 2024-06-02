import React, {useContext} from 'react';
import {PageHeader} from "@ant-design/pro-layout";
import {Link} from "react-router-dom";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";

const CustomPageHeader = ({title, extra, path}) => {

    return (
        <PageHeader
            title={<>
                {/*{*/}
                {/*    path ? <Link to={path}>*/}
                {/*        {*/}
                {/*            locale === "ur-pk" ? <ArrowRightOutlined className="page-header-arrow-left"/> :*/}
                {/*                <ArrowLeftOutlined className="page-header-arrow-left"/>*/}
                {/*        }*/}
                {/*    </Link> : null*/}
                {/*}*/}
                {title}
            </>}
            extra={extra ? extra : null}
        />
    );
};

export default CustomPageHeader;