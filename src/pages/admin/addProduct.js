import { LogoIcon } from 'src/components/icons';
import OverLay from 'src/layouts/managementPage/overlay/OverLay';
import CreateProduct from 'src/sections/handleAction/CreateProduct.js';
import Head from "next/head";
import React from "react";
export default function addProduct() {
  return (
    <OverLay>
      <Head>
        <title>Add Product | Miki</title>
      </Head>
      <div className="w-[510px] bg-bgr-auth rounded-r-16 mx-auto">
        <div className="flex items-center flex-col mt-14 justify-center">
          <LogoIcon />
          <h1 className="font-plf font-bold text-[40px] leading-[48px] ">MIKI JEWELRY</h1>
        </div>
        <h1 className="text-xl leading-7 font-bold ml-10 mt-[72px] ">Thêm mới sản phẩm</h1>
        <CreateProduct />
      </div>
    </OverLay>
  )
}
