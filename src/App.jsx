import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductionHouse from './components/ProductionHouse';
import GenreMovieList from './components/GenreMovieList';
import Wishlist from './components/Wishlist';
import About from './components/About'; // ✅ Import About
import { WishlistProvider } from './context/WishlistContext.jsx';

function App() {
    return (
        <WishlistProvider>
            <Router>
                <div className="">
                    <Header />
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Slider />
                                <ProductionHouse />
                                <GenreMovieList />
                            </>
                        } />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/about" element={<About />} /> {/* ✅ Add About route */}
                    </Routes>
                </div>
            </Router>
        </WishlistProvider>
    );
}

export default App;
