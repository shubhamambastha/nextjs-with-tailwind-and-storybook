import App from "next/app";
import { PageTransition } from "next-page-transitions";
import Loader from "../components/Loader";
import SnackbarProvider from "../src/providers/snackbarProvider";
import AuthProvider from "../src/providers/authProvider";
import "../styles/main.scss";

const TIMEOUT = 400;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <PageTransition
          timeout={TIMEOUT}
          classNames="page-transition"
          loadingComponent={<Loader />}
          loadingDelay={500}
          loadingTimeout={{
            enter: TIMEOUT,
            exit: 0,
          }}
          loadingClassNames="loading-indicator"
        >
          <AuthProvider>
            <SnackbarProvider>
              <Component {...pageProps} />
            </SnackbarProvider>
          </AuthProvider>
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity ${TIMEOUT}ms;
          }
        `}</style>
      </>
    );
  }
}

export default MyApp;
