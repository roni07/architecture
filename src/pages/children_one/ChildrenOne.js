import React from 'react';
import {PageHeader} from "@ant-design/pro-layout";
import SecondaryBtn from "../../components/common/SecondaryBtn";
import {PlusOutlined} from "@ant-design/icons";
import PageWrapper from "../../components/common/PageWrapper";

const ChildrenOne = () => {

    const pageHeader = <PageHeader
        title="Children One"
        extra={<SecondaryBtn
            icon={<PlusOutlined/>}
            btnName="Create Children"
        />}
    />

    return (
        <PageWrapper pageHeader={pageHeader}>
            <>
                <h2>Children One</h2>
            </>
        </PageWrapper>
    );
};

export default ChildrenOne;