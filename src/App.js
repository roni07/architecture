import {lazy, Suspense} from "react";
import LoadingSuspense from "./components/common/LoadingSuspense";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PAGE_403_PATH, PAGE_404_PATH, PAGE_500_PATH} from "./routes/Slug";
import DefaultLayout from "./components/layout/DfaultLayout";
import {ConfigProvider} from "antd";
import {lightComponentsToken, lightToken} from "./them_token/light";

const Page403 = lazy(() => import("./pages/error_pages/Page403"));
const Page404 = lazy(() => import("./pages/error_pages/Page404"));
const Page500 = lazy(() => import("./pages/error_pages/Page500"));

const App = () => {
    return (
        <ConfigProvider
            // direction={(locale === "ur-pk" || locale === "ps-af") ? "rtl" : "ltr"}
            theme={{
                token: {...lightToken},
                components: lightComponentsToken
            }}
        >
            <div className="app-wrapper">
                <Suspense fallback={<LoadingSuspense/>}>
                    <BrowserRouter>
                        <Routes>
                            <Route>
                                {/*<Route element={<PrivateRoute isLogin={isLogin} selectedBranch={selectedBranch}/>}>*/}
                                <Route path={PAGE_404_PATH} element={<Page404/>}/>
                                <Route path={PAGE_403_PATH} element={<Page403/>}/>
                                <Route path={PAGE_500_PATH} element={<Page500/>}/>
                                <Route path="*" element={<DefaultLayout/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </div>
        </ConfigProvider>
    );
}

export default App;
