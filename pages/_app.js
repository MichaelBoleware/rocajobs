import React from 'react';
import App from 'next/app';
import Login from './login';
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";
import store from '../services/redux/store';

class Rocajobs extends App {
  
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    console.log(store.getState());
    return {pageProps: pageProps};
}
    
      render() {
        const { Component, pageProps, store } = this.props;
            return (
              <Provider store={store}>
                  <Component {...pageProps} />
              </Provider>

            );

    }
}
const makeStore = () => store;

export default withRedux(makeStore)(Rocajobs);