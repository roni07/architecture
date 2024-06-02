import React from 'react';
import {DASHBOARD_PATH} from "../../routes/Slug";
import ErrorLayout from "../../components/layout/ErrorLayout";

const Page500 = () => {
    return (
        <ErrorLayout
            status={500}
            title={500}
            subTitle="Sorry, something went wrong. Please try again later."
            btnName="Go To Chatbot"
            pathName={DASHBOARD_PATH}
        />
    );
}

export default Page500;
