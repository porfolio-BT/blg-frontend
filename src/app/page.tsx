import Link from "next/link";
import Image from "next/image";
import { Post1, Post2, Post3, Post4 } from "./assets";

export default function Home() {
  return (
    <div>
      <div className="h-[130px] bg-header ">
        <div className="flex justify-center h-[100%] items-center">
          <Image
            src={Post4}
            width={187}
            height={200}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="px-[10%]">
        <div className="min-h-[50px] bg-menu flex justify-center items-center py-[18px]  rounded-bl-[40px] rounded-br-[40px]">
          <ul className="flex gap-[80px] items-center">
            <Link
              href="/"
              className="text-[20px] font-bold uppercase text-[#fff]"
            >
              Giới thiệu
            </Link>
            <Link
              href="/"
              className="text-[20px] font-bold uppercase text-[#fff]"
            >
              podcast
            </Link>
            <Link
              href="/"
              className="text-[20px] font-bold uppercase text-[#fff]"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-[20px] font-bold uppercase text-[#fff]"
            >
              Vlog
            </Link>
            <Link
              href="/"
              className="text-[20px] font-bold uppercase text-[#fff]"
            >
              Liên hệ
            </Link>
          </ul>
        </div>
        <div className="flex gap-[30px] items-center pt-[150px]">
          <div className="flex-1 relative pl-[100px]">
            <div className="absolute left-[20px] top-[-80px] z-[100]">
              <Image
                src={Post2}
                width={160}
                height={170}
                alt="Picture of the author"
              />
            </div>
            <div className="bg-pink relative post1 w-[70%] min-h-[120px] flex flex-col justify-center p-[20px] rounded-[20px]">
              <h1 className="font-bold py-[10px]">
                Xin chào,bạn có một lá thư chưa đọc. Bạn có muốn đọc nó ngay bây
                giờ không?
              </h1>
              <div className="flex gap-[30px]">
                <button className="bg-[#fff] text-pink3 px-8 py-2 rounded-[50px]  font-bold">
                  Có
                </button>
                <button className="bg-[#fff] text-pink3 px-8 py-2 rounded-[50px] font-bold">
                  Ok
                </button>
              </div>
            </div>
            <div className="absolute top-[-100px] left-[160px] z-[100] rotate-60">
              <Image
                src={Post3}
                width={100}
                height={110}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className=" flex-1">
            <Image
              src={Post1}
              width={780}
              height={207}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div>Store of my life</div>
        <div className="flex gap-[100px]">
          <div className="h-[170px] bg-pink flex-1">block1</div>
          <div className="h-[170px] bg-pink flex-1">block1</div>
          <div className="h-[170px] bg-pink flex-1">block1</div>
          <div className="h-[170px] bg-pink flex-1">block1</div>
        </div>
      </div>
    </div>
  );
}

// blob:https://www.canva.cn/b05e3fd4-b750-4d8a-97d9-679293c5b396
// blob:https://www.canva.cn/415e1f0b-9bcc-40e4-a916-65bc5012e4bf
