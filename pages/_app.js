import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress"
import Router from "next/router"

const progress = new ProgressBar({
  size: 1,
  color: "rgb(255, 56, 92)",
  className: "z-50",
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
