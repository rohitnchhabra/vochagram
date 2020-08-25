import React from "react";
import App, { Container } from "next/app";
import "../styles/styles.css";
import "../styles/footer-style.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store, wrapper } from "../redux/store";
import { withRouter } from "next/router";
import { END } from "redux-saga";

// import withRedux from "next-redux-wrapper";

class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };
    if (ctx.req) {
      ctx.store.dispatch(END);
      await ctx.store.sagaTask.toPromise();
    }
    return {
      pageProps,
    };
  };

  render() {
    const { Component, pageProps = {} } = this.props;
    return <Component {...pageProps} />;
  }
}
export default withRouter(wrapper.withRedux(MyApp));
