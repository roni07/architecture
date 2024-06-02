import React from 'react';
import {PageHeader} from "@ant-design/pro-layout";
import SecondaryBtn from "../../components/common/SecondaryBtn";
import {PlusOutlined} from "@ant-design/icons";
import PageWrapper from "../../components/common/PageWrapper";

const ChildrenTwo = () => {

    const pageHeader = <PageHeader
        title="Children Two"
        extra={<SecondaryBtn
            icon={<PlusOutlined/>}
            btnName="Create Children"
        />}
    />

    return (
        <PageWrapper pageHeader={pageHeader}>
            <>
                <h2>Children Two</h2>
            </>
        </PageWrapper>
    );
};

export default ChildrenTwo;