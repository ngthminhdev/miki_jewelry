import React, {useEffect, useRef, useState} from 'react';
import {Send} from "../Icons";

export default function PopupChat() {

    const [first, setFirst] = useState(true)
    const [data, setData] = useState([
        {
            id: 0,
            message: 'Miki shop kính chào quý khách, chúc quý khách 1 năm mới an khang, thịnh vượng!'
        }
    ])
    const [text, setText] = useState('');

    const sendMessage = (text = '') => {
        setData((curr) => [{id: 1, message: text}, ...curr])
        if (first) {
            setData((curr) => [{
                id: 0,
                message: 'Cảm ơn bạn đã liên hệ, chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất <3'
            }, ...curr])
        }
        setFirst(false)
        setText('')
    }
    return (
        <>
            <div
                className="
                fixed flex flex-col w-96 h-128 border-4 z-50
                bottom-28 right-24 bg-white origin-bottom-right
                animate-popup transition-all
                shadow-black rounded-3xl p-3
                 ">
                <div className="text-center pt-1 pb-1 mb-5 border-b-2">
                    CSKH - Miki Shop
                </div>
                <div className="h-96 pb-1 mb-5 flex flex-col-reverse overflow-auto">
                    {data.map((msg) => {
                        if (msg.id === 0) {
                            return (
                                <div
                                    className="block p-2 pr-3 max-w-3/4 ml-auto float-right text-right bg-gray-200 rounded-8 mt-2 mb-2">
                                    {msg.message}
                                </div>
                            )
                        } else {
                            return (
                                <div
                                    className="block p-2 pl-2 max-w-3/4 mr-auto float-left text-left bg-amber-200 rounded-8 mt-2 mb-2">
                                    {msg.message}
                                </div>
                            )
                        }
                    })}
                </div>
                <div className=" h-12 flex justify-between fill">
                    <input autoFocus onChange={(e) => {
                        setText(e.target.value)
                    }} type='text' value={text} placeholder="nhập tin nhắn..."
                           className="w-[80%] p-3 border-2 focus:border-2"
                           onKeyUp={(e) => {
                               e.key === 'Enter' && sendMessage(text)
                           }}
                    />

                    <span className="w-[20%] p-2 relative content-center flex items-center"
                          onClick={() => sendMessage(text)}
                    >
                      <Send iconClass="absolute cursor-pointer hover:fill-amber-400"/>
                    </span>
                </div>
            </div>
        </>
    )
}