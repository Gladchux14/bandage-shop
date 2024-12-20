"use client"
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FiBarChart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const MobileHomeNav = ({ isMenuOpen, toggleMenu }: any) => {
  return (
    <nav className=" flex justify-between md:hidden items-start px-[32px] py-[24px] h-auto">
      <div>
        <Link href="/">
          <Image
            src={"/images/Bandage.png"}
            height={70}
            width={190}
            alt="logo"
            className="max-w-[70px] md:max-w-full"
          />
        </Link>
      </div>
      {isMenuOpen && (
        <ul className="w-full bg-[#FFFFFF] flex flex-col items-center space-y-4 py-[10px] mt-20 text-[#737373] text-[20px] font-normal gap-[20px]">
          <li>
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link href="/shop-page" onClick={toggleMenu}>Product</Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      )}
       <div className="text-black flex items-center gap-[15px]">
        <IoIosSearch height={24} width={24} />
        <Link href="./cart-page">
          <IoCartOutline height={24} width={24} />
        </Link>
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FiX size={24} />
          ) : (
            <FiMenu size={24} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default MobileHomeNav;
