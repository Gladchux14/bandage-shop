"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const CheckoutPage = () => {
  const { cartItems, clearCart, getTotalPrice } = useCart();
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setIsSubmitted(true); 
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [isSubmitted, router]);

  if (isSubmitted) {
    return (
      <div className="bg-[#FAFAFA] flex flex-col items-center justify-center p-6 md:px-24 md:py-12 w-full h-auto">
        <FaCheckCircle size={64} className="text-green-500 mb-4" />
        <h1 className="font-montserrat text-2xl font-semibold leading-[33.6px] text-center text-[#121517] mb-4">
          Thank you for shopping from Bandage, Enjoy our product!
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] flex flex-col p-6 md:px-24 md:py-12 w-full h-auto">
      <h1 className="font-montserrat text-2xl font-semibold leading-[33.6px] text-left text-[#121517] mb-8">
        Checkout
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <div className="flex flex-col bg-white rounded-lg p-8 gap-8 w-full lg:w-3/5">
          <h2 className="font-montserrat text-xl font-bold text-left text-[#121517]">
            Billing Details
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border border-[#DCDCDC] rounded p-4 text-[#121517]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-[#DCDCDC] rounded p-4 text-[#121517]"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleInputChange}
              className="border border-[#DCDCDC] rounded p-4 text-[#121517]"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="border border-[#DCDCDC] rounded p-4 text-[#121517] w-1/3"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                className="border border-[#DCDCDC] rounded p-4 text-[#121517] w-1/3"
                required
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                value={formData.zip}
                onChange={handleInputChange}
                className="border border-[#DCDCDC] rounded p-4 text-[#121517] w-1/3"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#23A6F0] w-full text-white font-montserrat font-bold py-4 px-6 rounded-lg mt-4"
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="flex flex-col bg-white rounded-lg p-8 gap-8 w-full lg:w-2/5">
          <h2 className="font-montserrat text-xl font-bold text-left text-[#121517]">
            Order Summary
          </h2>

          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-[#DCDCDC] pb-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[75px] h-[50px] bg-gray-200">
                    <Image
                      src={
                        Array.isArray(item.imageSrc)
                          ? item.imageSrc[0]
                          : item.imageSrc
                      }
                      alt={item.title}
                      width={75}
                      height={50}
                      layout="responsive"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-sm font-medium text-[#121517]">
                      {item.title}
                    </h3>
                    <p className="font-montserrat text-xs text-[#737373]">
                      ${parseFloat(item.price.replace(/[$,]/g, ""))} x{" "}
                      {item.quantity} item{item.quantity > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-montserrat text-sm font-medium text-[#121517]">
                    $
                    {(
                      parseFloat(item.price.replace(/[$,]/g, "")) *
                      item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex justify-between border-t border-[#DCDCDC] pt-4">
              <h3 className="font-montserrat text-lg font-medium text-left text-[#121517]">
                Total
              </h3>
              <p className="font-montserrat text-lg font-medium text-left text-[#121517]">
                ${getTotalPrice().toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex justify-between border-t border-[#DCDCDC] pt-4">
            <div className="flex gap-4">
              <div className="w-[62px] h-[12px] bg-gray-200">
                <Image
                  src="/images/Paystack.png"
                  alt="Paystack"
                  width={150}
                  height={30}
                  className="object-cover"
                />
              </div>
              <div className="w-[19px] h-[12px] bg-gray-200">
                <Image
                  src="/images/Mastercard.png"
                  alt="Mastercard"
                  width={150}
                  height={30}
                  className="object-cover"
                />
              </div>
              <div className="w-[38px] h-[12px] bg-gray-200">
                <Image
                  src="/images/Visa.png"
                  alt="Visa"
                  width={150}
                  height={30}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

