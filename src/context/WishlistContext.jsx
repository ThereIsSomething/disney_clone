import { createContext, useState, useEffect } from 'react';

// Create the context
const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    // Initialize state with data from localStorage or an empty array
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Add movie to wishlist and save to localStorage
    const addToWishlist = (movie) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = [...prevWishlist, movie];
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Save to localStorage
            return updatedWishlist;
        });
    };

    // Remove movie from wishlist and update localStorage
    const removeFromWishlist = (movieId) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = prevWishlist.filter((movie) => movie.id !== movieId);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Save to localStorage
            return updatedWishlist;
        });
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export { WishlistContext, WishlistProvider };
