import Image from "next/image";
import Link from "next/link";

import TopNav from "@/components/TopNav/page";
import BottomMenu from "@/components/BottomMenu/page";

import { ContactsIcon, DepositIcon, EyeIcon, Icon1, Icon2, Icon3, TransferIcon } from "./icons";

const menu = [
  {
    title: "Мои карты",
    href: "/cards",
    icon: Icon1,
  },
  {
    title: "Мои карты",
    href: "/cards",
    icon: Icon2,
  },
  {
    title: "Мои карты",
    href: "/cards",
    icon: Icon3,
  },
];

export default function Home() {

  return (
    <>
      <TopNav />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="h-[360px] w-full bg-transparent flex flex-col items-center justify-center">
          <h4 className="text-sm text-white mt-4">Общий баланс</h4>
          <div className="flex items-center justify-center mt-4">
            <span>
              <Image src={EyeIcon} alt="Eye Icon" width={20} />
            </span>
            <h1 className="flex ml-4 mr-2 align-bottom text-3xl font-bold text-white">50 500 000 <span className="flex align-bottom items-end text-sm font-light ml-1 mb-1">сум</span></h1>
          </div>
          <ul className="flex justify-between w-[296px] mt-6">
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="flex flex-col items-center text-white">
                  <div className="w-[72px] h-[72px] mb-4 bg-[#FFFFFF] text-gray-500 rounded-full flex items-center justify-center shadow-xl">
                    <span><Image src={item.icon} alt={item.title} width={30} height={30} /></span>
                  </div>
                  <h5 className="text-[16px] font-light">{item.title}</h5>
                </Link>
              </li>
            ))}

          </ul>
        </div>
        <div className="h-1/2 w-full bg-[#F6F8F9] rounded-t-xl shadow-2xl px-4 py-6">
          <div className="mb-8">
            <h4 className="text-md text-gray-600 font-semibold mb-3">Оплата за номер</h4>
            <div className="flex items-center">
              <span className="absolute left-7 mr-2 text-gray-400">998</span>
              <input type="text" placeholder="Номер телефона" className="w-full pl-12 py-2.5 px-2 border text-gray-500 border-gray-300 rounded-lg placeholder:text-gray-300 bg-white" />
              <Image className="absolute right-8" src={ContactsIcon} alt="Contacts Icon" width={18} />
            </div>
          </div>
          <div>
            <h4 className="text-md text-gray-600 font-semibold mb-3">Финансовые услуги</h4>
            <div className="flex items-center gap-2">
              <button className="grid grid-cols-[48px_1fr] w-full p-2 bg-white rounded-lg shadow-md cursor-pointer">
                <span className="">
                  <Image src={TransferIcon} alt="Icon 1" width={48} />
                </span>
                <p className="text-[#3F3F46]">
                  Перевести средства
                </p>
              </button>
              <button className="grid grid-cols-[48px_1fr] w-full p-2 bg-white rounded-lg shadow-md cursor-pointer">
                <span>
                  <Image src={DepositIcon} alt="Icon 1" width={48} />
                </span>
                <p className="text-[#3F3F46]">
                  Кредит от TBC Bank
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BottomMenu />
    </>
  );
}
