import React, {lazy, Suspense} from 'react';
import {Layout, theme} from 'antd';
import LoadingSuspense from "../common/LoadingSuspense";
import {Navigate, Route, Routes} from "react-router-dom";
import PageRoutes from "../../routes/PageRoutes";
import {DASHBOARD_PATH, ROOT_PATH} from "../../routes/Slug";
import NavHeader from "./header/NavHeader";
import Page404 from "../../pages/error_pages/Page404";

const {useToken} = theme;
const AsideLeft = lazy(() => import('./AsideLeft'));

const {Sider, Content} = Layout;

const DefaultLayout = () => {

    const {token} = useToken();

    return (
        <Layout>
            <Sider
                width={270}
                collapsible={false}
                // collapsed={collapsed}
                // onCollapse={onCollapse}
                // collapsedWidth={0}
                // zeroWidthTriggerStyle={{
                //     top: "82px",
                //     backgroundColor: token.colorPrimary,
                //     color: "#ffffff"
                // }}
                // trigger={collapsed ? <CaretRightOutlined/> : <CaretLeftOutlined/>}
                theme="light"
                className="my-sider"
            >
                <Suspense fallback={<LoadingSuspense height="100vh"/>}>
                    <AsideLeft/>
                </Suspense>
            </Sider>

            <Layout>
                <NavHeader/>
                <Content className="app-page">
                    {
                        <Suspense fallback={<LoadingSuspense/>}>
                                <Routes>
                                    {
                                        PageRoutes.map(route => {

                                            // if (!hasPermission(permissions, route.permissions)) {
                                            //     return null;
                                            // }

                                            return <Route
                                                key={route.path}
                                                path={route.path}
                                                element={<route.component/>}
                                            />
                                        })
                                    }
                                    <Route
                                        path={ROOT_PATH}
                                        element={<Navigate to={DASHBOARD_PATH}/>}
                                    />
                                    <Route path="*" element={<Page404/>}/>
                                </Routes>
                            </Suspense>
                    }
                </Content>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;
