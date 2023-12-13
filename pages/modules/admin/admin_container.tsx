import Image from 'next/image';
// import ydbPic from '../assets/png/img-ydb.png'
import { useState } from 'react';
import { IMenuItem } from './admin_interfaces';
import MenuItem from './components/MenuItem';

export default function AdminContainer() {
    const [menu, setMenu] = useState<IMenuItem[]>([
        {id: 0, title: 'Dashboard', selected: false},
        {id: 0, title: 'Merchant', selected: false},
        {id: 0, title: 'Customer', selected: false},
        {id: 0, title: 'Promosi', selected: false},
        {id: 0, title: 'Transaksi', selected: false},
        {id: 0, title: 'YDB Connect', selected: false},
        {id: 0, title: 'YDBKoin', selected: false},
        {id: 0, title: 'Penghasilan YDB', selected: false},
        {id: 0, title: 'Laporan', selected: false},
        {id: 0, title: 'Membership Management', selected: false},
        {id: 0, title: 'Admin Management', selected: false},
        {id: 0, title: 'Master Data Kategori', selected: false},
    ])

    return (
        <div className="flex flex-row h-full w-full">

            <div className="flex flex-col h-full w-1/5 bg-cyan-50">
                {/* <Image
                    src={ydbPic}
                    height={10}
                    width={10}
                    alt="YDB Image"
                /> */}

                {menu.map((element) => {
                    return <MenuItem data={element} />
                })}
            </div>

            
        </div>
    )
}