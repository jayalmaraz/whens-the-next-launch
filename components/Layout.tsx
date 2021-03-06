import { Box, BoxProps, Heading } from "@theme-ui/components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

export const SITE_TITLE = "When's the next SpaceX launch?";

interface LayoutHeadProps {
  title?: string;
  description?: string;
}

const LayoutHead = ({ title, description }: LayoutHeadProps) => (
  <Head>
    <title>{title ?? SITE_TITLE}</title>
    <meta
      name="description"
      content={
        description ?? "The simplest information on the next SpaceX launch"
      }
    />

    {/* Open Graph Meta */}
    <meta property="og:title" content="When's the next SpaceX launch?" />
    <meta property="og:url" content="https://www.whensthenextlaunch.com/" />
    <meta
      property="og:description"
      content="The simplest information on the next SpaceX launch"
    />

    {/* Open Graph Images */}
    <meta
      property="image"
      content="https://www.whensthenextlaunch.com/images/ogimage-lg.png"
    />
    <meta
      property="og:image"
      content="https://www.whensthenextlaunch.com/images/ogimage-lg.png"
    />
    <meta
      property="og:image"
      content="https://www.whensthenextlaunch.com/images/ogimage-lg.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image"
      content="https://www.whensthenextlaunch.com/images/ogimage-m.png"
    />
    <meta property="og:image:width" content="901" />
    <meta property="og:image:height" content="474" />
    <meta
      property="og:image"
      content="https://www.whensthenextlaunch.com/images/ogimage-s.png"
    />
    <meta property="og:image:width" content="601" />
    <meta property="og:image:height" content="316" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@jayalmaraz" />
    <meta
      name="twitter:image"
      content="https://www.whensthenextlaunch.com/images/ogimage-lg.png"
    />
  </Head>
);

const HomeLink = (props: BoxProps) => (
  <Link href="/">
    <Box
      as="a"
      {...props}
      sx={{
        fontSize: 12,
        backgroundColor: "#fff",
        color: "#000",
        paddingTop: 1,
        paddingBottom: 1,
        paddingRight: 4,
        marginLeft: [-M_LEFT_PADDING, "-76px"],
      }}
    >{`whensthenextlaunch.com`}</Box>
  </Link>
);

const MobileMenuPanel = ({ menuOpen, setMenuOpen }) => {
  function handleClose() {
    setMenuOpen(false);
  }
  return (
    <>
      <Box
        onClick={() => setMenuOpen(true)}
        sx={{
          // backgroundColor: "#0004C4",
          padding: 2,
          paddingLeft: 4,
          textAlign: "right",
          fontSize: 12,
          fontWeight: "bold",
        }}
      >
        {"MENU <"}
      </Box>

      {menuOpen ? (
        <Box
          sx={{
            display: menuOpen ? "block" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "#0004C4",
          }}
        >
          <Box padding={3}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <HomeLink onClick={handleClose} />

                <Heading as="h1" sx={{ color: "#fff", marginTop: 1 }}>
                  MENU
                </Heading>
              </Box>
              <Box onClick={handleClose}>{"CLOSE x"}</Box>
            </Box>

            <Box sx={{ display: "flex", marginTop: 4 }}>
              <Box sx={{ display: "grid", rowGap: 3 }}>
                <Link href={`/`}>
                  <Box as="a" onClick={handleClose}>
                    {"> home"}
                  </Box>
                </Link>
                <Link href={`/about`}>
                  <Box as="a" onClick={handleClose}>
                    {"> about"}
                  </Box>
                </Link>
              </Box>
            </Box>

            <DisclaimerStatement />
          </Box>
        </Box>
      ) : null}
    </>
  );
};

const M_LEFT_PADDING = 3;
const D_LEFT_PADDING = 5;

const MenuZone = ({ menuOpen, setMenuOpen }) => (
  <Box
    sx={{
      display: "flex",
      flex: "1 1 auto",
      alignItems: "flex-start",
      alignContent: "flex-start",
      justifyContent: "space-between",
      width: ["100%", 500],
      marginBottom: [3, 5],
    }}
  >
    <HomeLink />

    {/* Desktop nav links */}
    <Box
      sx={{
        display: ["none", "block"],
        textAlign: "right",
        marginTop: 3,
        fontSize: 12,
        paddingRight: D_LEFT_PADDING,
      }}
    >
      <Link href={`/about`}>
        <Box as="a">{"about <"}</Box>
      </Link>
    </Box>

    {/* Mobile menu */}
    <Box
      sx={{
        display: ["block", "none"],
        paddingTop: 3,
        paddingBottom: 3,
      }}
    >
      <MobileMenuPanel menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </Box>
  </Box>
);

const DisclaimerStatement = () => (
  <Box
    as="footer"
    sx={{
      marginTop: 4,
      maxWidth: 480,
      backgroundColor: "#000",
      fontSize: "9px",
    }}
  >
    <Box as="p">
      <Heading
        as="span"
        sx={{
          margin: 0,
          padding: 0,
          fontSize: "9px",
        }}
      >
        Disclaimer
        <br />
      </Heading>
      whensthenextlaunch.com are not affiliated, associated, authorized,
      endorsed by, or in any way officially connected with Space Exploration
      Technologies Corp (SpaceX), or any of its subsidiaries or its affiliates.
      The names SpaceX as well as related names, marks, emblems and images are
      registered trademarks of their respective owners.
      <br />
      The information presented on whensthenextlauch.com comes with no
      guarantees or warranties with respect to accuracy. All information is
      subject to change.
    </Box>
  </Box>
);

const BLACK_SHADOW_SHRINK = 24;
const BLACK_SHADOW_X = 96;
const BLACK_SHADOW_Y = 32;
const WHITE_SHADOW_WIDTH = 11;

const BLACK_SHADOW = `${BLACK_SHADOW_X + BLACK_SHADOW_SHRINK}px ${
  BLACK_SHADOW_Y + BLACK_SHADOW_SHRINK
}px 0 -${BLACK_SHADOW_SHRINK}px #000`;

const WHITE_SHADOW = `${
  BLACK_SHADOW_X + WHITE_SHADOW_WIDTH + BLACK_SHADOW_SHRINK
}px ${
  BLACK_SHADOW_Y + WHITE_SHADOW_WIDTH + BLACK_SHADOW_SHRINK
}px 0 -${BLACK_SHADOW_SHRINK}px #fff`;

interface Meta {
  title?: string;
  description?: string;
}

interface Props {
  children: ReactNode;
  meta?: Meta;
}

const Layout = ({ children, meta }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <LayoutHead title={meta?.title} description={meta?.description} />

      <Box
        as="main"
        role="main"
        sx={{
          display: "flex",
          flex: "1 1 auto",
          justifyContent: "center",
          maxWidth: 960,
          marginRight: [0, "128px"],
          zIndex: 1,
        }}
      >
        <Box
          as="article"
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            width: ["100vw", 500],
            paddingLeft: [M_LEFT_PADDING, D_LEFT_PADDING],
            paddingBottom: 4,
            // backgroundColor: "#000",
            // boxShadow: [0, `${BLACK_SHADOW}, ${WHITE_SHADOW}`],
          }}
        >
          <MenuZone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Box sx={{ display: menuOpen ? "none" : "block" }}>{children}</Box>
          <DisclaimerStatement />
        </Box>
      </Box>

      <Box
        sx={{
          display: ["none", "block"],
          top: 0,
          left: 0,
          position: "fixed",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <Image
          alt="A Falcon 9 rocket launches from a nighttime Cape Canaveral, from SpaceX's Starlink-19 (v1.0) mission in February, 2021"
          src="/images/spacex-falcon-night.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={100}
        />
      </Box>
    </>
  );
};

export default Layout;
