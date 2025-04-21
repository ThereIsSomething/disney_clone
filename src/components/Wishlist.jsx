import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { IoTrashOutline } from 'react-icons/io5'; // For deleting items

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Wishlist() {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);

    return (
        <div className="p-8">
            <h2 className="text-3xl text-white mb-6">My Wishlist</h2>
            {wishlist.length === 0 ? (
                <p className="text-white">Your wishlist is empty.</p>
            ) : (
                <div className="flex flex-wrap gap-6">
                    {wishlist.map((movie) => (
                        <div key={movie.id} className="relative">
                            <img
                                src={IMAGE_BASE_URL + movie.poster_path}
                                className="w-[200px] h-[300px] rounded-lg"
                            />
                            <div
                                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded-full cursor-pointer"
                                onClick={() => removeFromWishlist(movie.id)}  // Remove from wishlist
                            >
                                <IoTrashOutline size={20} />
                            </div>
                            <h3 className="text-white mt-2">{movie.title}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Wishlist;
