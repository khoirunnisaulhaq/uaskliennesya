import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-2">Selamat Datang di Halaman Beranda</h1>
      <Link to="/profile">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Profile</button>
      </Link>
      <Link to="/data-api">
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded ml-4">Data API</button>
      </Link>
      <Link to="/about">
        <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded ml-4">Tentang</button>
      </Link>
    </div>
  );
}

export default Home;
