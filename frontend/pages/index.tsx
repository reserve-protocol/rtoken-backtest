import Head from "next/head";
import { Inter } from "@next/font/google";
import AppHeader from "@/components/AppHeader";
import { Box } from "@material-ui/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RToken Backtester</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppHeader />
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            src="https://rtoken-backtest.herokuapp.com/app/1/embed"
            height="1000px"
            width="1200px"
            style={{
              paddingTop: "100px",
              border: "solid",
              borderColor: "whitesmoke",
            }}
          ></iframe>
        </Box>
      </main>
    </>
  );
}
