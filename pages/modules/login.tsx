import Image from 'next/image';
import { useState } from 'react';
// import ydbPic from '../assets/png/img-ydb.png'

export default function Login() {
    const [url, setUrl] = useState('')

    return (
        <div className='grid grid-cols-2 l:grid-cols-1'>

            <div className='flex flex-col justify-center bg-purple-300 h-screen'>
                <div className='flex flex-row justify-center'>
                    {/* <Image className='w-1/3'
                        src={ydbPic}
                        height={0}
                        width={0}
                        alt="YDB Image"
                    /> */}
                </div>
            </div>

            <div className='flex flex-col justify-center bg-white h-screen px-4'>
                <div className='flex flex-row justify-center'>
                    <div className='flex flex-col'>
                        <text className='font-poppins text-3xl font-semibold'>Masuk ke Akun Anda</text>
                        <text className='font-poppins text-base font-light mt-2'>Masukkan alamat email atau nomor telepon dan password Anda.</text>

                        <label className="block mt-8">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 font-poppins font-light text-slate-700 text-sm">
                                Email/No.Telepon
                            </span>
                            <input type="email" name="email" className="mt-2 text-sm px-3.5 py-2.5 border font-poppins text-gray1 font-thin border-brown rounded-sm placeholder-slate-400 focus:outline-none focus:border-brown block w-full" placeholder="you@example.com" />
                        </label>

                        <label className="block mt-5">
                            <div className='flex flex-row justify-between'>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 font-poppins font-light text-slate-700 text-sm">
                                    Password
                                </span>
                                <text className='font-poppins font-semibold text-sm text-button underline'>Lupa Password</text>
                            </div>
                            <div className='flex flex-row border items-center border-brown rounded-sm mt-2'>
                                <input type="password" autoComplete='off' name="password" className="flex-1 text-sm px-3.5 py-2.5 font-poppins text-gray1 font-thin placeholder-slate-400 focus:outline-none focus:border-brown block w-full" placeholder="your password..." />
                                <text className='font-poppins mr-3.5'>Show</text>
                            </div>
                        </label>

                        <button className='text-sm bg-primary mt-6 py-3 px-3 text-white rounded-sm'>Masuk</button>
                    </div>
                </div>
            </div>

        </div>
    )
}