import React, {useEffect, useState} from 'react'
import { SearchIcon, CaretDown } from 'src/components/Icons/index.js'
import Link from 'next/link'
import {useRecoilValue} from "recoil";
import {dataUser} from "../../../recoils/dataUser";
import Loading from "../../../components/Loading";

export default function HeaderAdmin() {
    const [loading, setLoading] = useState(true);
    const user = useRecoilValue(dataUser);
    useEffect(() => {
        setLoading(false)
    }, [])
    if (loading) {
        return <Loading/>
    };

    // const url = 'https://www.w3schools.com/howto/img_avatar.png'
    return (
        <div className="h-[113px] top-[20px] fixed w-full max-w-[1235px] z-10
         bg-white flex items-center rounded-8 justify-between shadow-md mx-[20px]
         before:content-['d'] before:text-bgr before:block before:w-full before:h-20px before:bg-bgr before:absolute 
         before:top-[-20px] before:z-10
         ">
            <div className="flex items-center h-[40px] border-[1px]
            border-primary-text bg-white px-[15px] rounded-8 ml-[30px]">
                <input placeholder="Tìm kiếm" type="text" className="h-[32px] text-[14px] px-[5px] border-0 outline-0 " />
                <SearchIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
            </div>
            <div className="flex items-center">
                <div className='max-w-[50px] '>
                    <img
                        width="120px"
                        height="120px"
                        src={user?.avatar}
                        className='w-full rounded-full' />
                </div>
                <div className='flex items-center  mr-[30px]'>
                    <Link href=''>
                        <p className='ml-[20px] mr-[10px] cursor-pointer'>{user?.userName || 'Default Admin'}</p>
                    </Link>
                    <CaretDown classNameIcon="cursor-pointer hover:scale-90 duration-300" />
                </div>
            </div>
        </div>
    )
}
