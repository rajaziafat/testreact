import "../public/css/main.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useAuthMiddleware from "@/lib/hooks/useAuthMiddleware";
import Head from "next/head";

export const metadata = {
  title: "HAVEGLAM",
  description: "Haveglam is the place where you see the real beauty.",
  icons: "images/favicon.ico",
  openGraph: {
    title: "Social facebook",
    description: "Description for social.",
    images: [
      {
        url: "https://www.haveglam.com/api/images/logo.png",
        width: 800,
        height: 600,
        alt: "Social",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social",
    description: "Description for social.",
    images: "https://www.haveglam.com/api/images/logo.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAuthMiddleware();
  const authState = await isLoggedIn();
  console.log(authState);
  return (
    <html lang="en">
      <Head>
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID_GOES_HERE');
              fbq('track', 'PageView');
              `,
          }}
        />
        {/* End Facebook Pixel Code */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1307547996784486&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>

      <body>
        <Header isLoggedIn={authState} />
        <ToastContainer position="bottom-right" />
        <main className="main">
          {children}
          <Footer />
        </main>
        <div id="popups"></div>
      </body>
    </html>
  );
}
