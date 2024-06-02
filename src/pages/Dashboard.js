import React from 'react';
import {PageHeader} from "@ant-design/pro-layout";
import PageWrapper from "../components/common/PageWrapper";

const Dashboard = () => {

    const pageHeader = <PageHeader
        title="Dashborad"
    />

    return (
        <PageWrapper pageHeader={pageHeader}>
            <>
                <h1>Dashboard</h1>
            </>
        </PageWrapper>
    );
};

export default Dashboard;