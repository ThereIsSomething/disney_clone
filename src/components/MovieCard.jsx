import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
    const { addToWishlist } = useContext(WishlistContext);

    const handleAddToWishlist = () => {
        addToWishlist(movie);  // Add the clicked movie to the wishlist
    };

    return (
        <>
            <img
                src={IMAGE_BASE_URL + movie.poster_path}
                className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in"
                onClick={handleAddToWishlist}  // Add to wishlist on click
            />
        </>
    );
}

export default MovieCard;
