import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="h-1/2 w-full bg-transparent flex flex-col items-center justify-center">
        <h4 className="text-sm text-white mt-4">Общий баланс</h4>
        <div>
          <h1 className="text-3xl font-bold text-white">50 500 000 <span className="text-sm font-light">сум</span></h1>
        </div>
        <ul className="flex justify-between w-[296px] mt-6">
          <li>
            <Link href="/cards" className="flex flex-col items-center text-white">
              <div className="w-[72px] h-[72px] mb-4 bg-[#FFFFFF] text-gray-500 rounded-full flex items-center justify-center shadow-lg">
                <span>M</span>
              </div>
              <h5 className="text-[16px] font-light">Мои карты</h5>
            </Link>
          </li>
          <li>
            <Link href="/cards" className="flex flex-col items-center text-white">
              <div className="w-[72px] h-[72px] mb-4 bg-[#FFFFFF] text-gray-500 rounded-full flex items-center justify-center shadow-lg">
                <span>M</span>
              </div>
              <h5 className="text-[16px] font-light">Мои карты</h5>
            </Link>
          </li>
          <li>
            <Link href="/cards" className="flex flex-col items-center text-white">
              <div className="w-[72px] h-[72px] mb-4 bg-[#FFFFFF] text-gray-500 rounded-full flex items-center justify-center shadow-lg">
                <span>M</span>
              </div>
              <h5 className="text-[16px] font-light">Мои карты</h5>
            </Link>
          </li>
        </ul>
      </div>
      <div className="h-1/2 w-full bg-white rounded-t-xl shadow-2xl">
        Test
      </div>
    </div>
  );
}
