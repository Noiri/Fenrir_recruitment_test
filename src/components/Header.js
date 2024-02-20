import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/header.module.css";
import { AppBar, Box, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <>
      <Head>
        <title>Gourmet Local</title>
        <meta
          name="description"
          content="This application searches for restaurants in your neighborhood."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍳</text></svg>"
        />
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div className={styles.hot_pepper_banner}>
              <a href="http://webservice.recruit.co.jp/">
                <Image
                  src="http://webservice.recruit.co.jp/banner/hotpepper-m.gif"
                  alt="ホットペッパーグルメ Webサービス"
                  width="88"
                  height="35"
                  title="ホットペッパーグルメ Webサービス"
                />
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
