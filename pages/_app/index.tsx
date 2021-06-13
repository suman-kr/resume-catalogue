import "./style.scss";
import { store, persistor } from "../../src/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { CookiesProvider } from "react-cookie";

function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;
  return (
    <CookiesProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </CookiesProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
const makeStore = () => store;

interface MyAppProps {
  Component: any;
  pageProps: any;
}

export default withRedux(makeStore)(MyApp);
