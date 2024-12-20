"use client";
import Link from "next/link";
import { useWishlist } from "@/contexts/WishlistContext"; // Adjust path if necessary
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext"; // You'll need to create/import your auth context

const WishlistPage: React.FC = () => {
  const { wishlist, dispatch } = useWishlist(); // Access wishlist and dispatch

  const handleRemove = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  };

  return (
    <div className="py-10 px-20">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div key={product.id} className="border p-4">
              <img
                src={Array.isArray(product.imageSrc) ? product.imageSrc[0] : product.imageSrc}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              <p>{product.newPrice}</p>
              <button
                className="text-red-500 mt-2"
                onClick={() => handleRemove(product.id)} 
              >
                Remove from wishlist
              </button>
            </div>
          ))}
        </div>
      )}
      <Link href="/shop-page" className="text-blue-500 mt-4 block">
        Back to Shop
      </Link>
    </div>
  );
};

export default WishlistPage;
