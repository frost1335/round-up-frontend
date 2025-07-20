import Image from 'next/image';

import BottomMenu from '@/components/BottomMenu/page';
import { CardsIcon, PhoneIcon, PosterIcon, ScanIcon, ToCardIcon } from './icons';

function TransactionPage() {
    const userList = [
        {
            name: "Ахрор",
            firstLetter: "A",
        },
        {
            name: "Ака",
            firstLetter: "A",
        },
        {
            name: "Магазин",
            firstLetter: "М",
        },
        {
            name: "My bro",
            firstLetter: "L",
        },
    ]

    return (
        <>
            <div className='flex flex-col justify-between px-4 py-10 pb-20 bg-[#F6F8F9] h-full'>
                <div>
                    <h2 className='text-neutral-700 font-semibold text-center mb-10'>Pul o`tkazmasi</h2>

                    <div className="mb-8">
                        <h4 className="text-md text-gray-600 font-semibold mb-3">Kimga</h4>
                        <div className="flex items-center">
                            <Image className="absolute left-7 mr-2" src={CardsIcon} alt="Contacts Icon" width={42} />
                            <input type="text" placeholder="Telefon raqami yoki ismi" className="w-full pl-16 py-3 px-3 border text-gray-500 border-gray-300 rounded-xl placeholder:text-gray-300 bg-white" />
                            <Image className="absolute right-8" src={ScanIcon} alt="Contacts Icon" width={30} />
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className='flex items-center justify-between mb-5'>
                            <h4 className="text-md text-gray-600 font-semibold">Qabul qiluvchilar</h4>
                            <button className='text-[#00C0C9] font-semibold'>
                                Barchasi
                            </button>
                        </div>
                        <div>
                            <ul className='flex overflow-x-auto gap-8'>
                                {userList.map((elem, key) => (
                                    <li key={key} className='flex flex-col items-center'>
                                        <span className={`w-12 h-12 rounded-full bg-[#81B1FB] flex items-center justify-center mb-2`}>
                                            {elem.firstLetter}
                                        </span>
                                        <p className='text-neutral-500 text-sm text-center'>{elem.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-white rounded-xl shadow-lg mb-4'>
                        <button className='flex items-center gap-3 w-full cursor-pointer text-neutral-700 font-medium text-sm px-6 py-4 text-left border-b border-b-[#F0F1F2]'>
                            <Image src={PhoneIcon} width={30} alt='Phone Icon' />
                            Telefon raqami orqali
                        </button>
                        <button className='flex items-center gap-3 w-full cursor-pointer text-neutral-700 font-medium text-sm px-6 py-4 text-left'>
                            <Image src={ToCardIcon} width={30} alt='My Card Icon' />
                            Mening kartamga o`tkazing
                        </button>
                    </div>
                    <div className='bg-white rounded-xl shadow-lg'>
                        <button className='flex items-center gap-3 w-full cursor-pointer text-neutral-700 font-medium text-sm px-6 py-4 text-left'>
                            <Image src={PosterIcon} width={30} alt='Poster Icon' />
                            Tabriknoma qo`shish
                        </button>
                    </div>
                </div>
            </div>
            <BottomMenu />
        </>
    )
}

export default TransactionPage;