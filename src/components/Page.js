// Import Library
import React, {useState} from 'react';
import Head from 'next/head';
// Import component, function, asset
import Header from "src/layouts/header";
import Footer from "src/layouts/footer";
import PopupChat from "./PopupChat";

export default function Page({ children, title, isHeader = true, isFooter = true }) {
    const [active, setActive] = useState(false)

  // UI
  return (
    <>
      <Head>
        <title>{`${title} | Miki`}</title>
      </Head>
      <div
          className="fixed bottom-24 right-24 cursor-pointer select-none border-2 border-amber-300 rounded-full z-50"
          onClick={() => setActive(!active)}
      >
          <img
              width='70px'
              height='70px'
              src='https://res.cloudinary.com/miki-shop-dev/image/upload/v1674485687/users/Facebook_Messenger_logo_2020.svg_wfskzm.png'
          />
      </div>
        {active && (
            <PopupChat/>
        )}
      {isHeader && <Header />}
      {children}
      {isFooter && <Footer />}
    </>
  );
}
