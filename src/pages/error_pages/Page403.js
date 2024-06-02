import React from 'react';
import {DASHBOARD_PATH} from "../../routes/Slug";
import ErrorLayout from "../../components/layout/ErrorLayout";

const Page403 = () => {
    return (
        <ErrorLayout
            status={403}
            title={403}
            subTitle="Sorry, you are not authorized to access this page."
            btnName="Go To Chatbot"
            pathName={DASHBOARD_PATH}
        />
    );
}

export default Page403;
