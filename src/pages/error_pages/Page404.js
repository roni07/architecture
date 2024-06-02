import React from 'react';
import {DASHBOARD_PATH} from "../../routes/Slug";
import ErrorLayout from "../../components/layout/ErrorLayout";

const Page404 = () => {
    return (
        <ErrorLayout
            status={404}
            title={404}
            subTitle="Sorry, the page you visited does not exist."
            btnName="Go To Chatbot"
            pathName={DASHBOARD_PATH}
        />
    );
}

export default Page404;
