import React from "react";
import { Link } from 'react-router-dom';

export default function Hero(){
    return(
        <div
            className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
            style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2019/02/08/21/53/plant-3984065_1280.jpg')`,
                backgroundAttachment: 'fixed',
            }}
            >
            <div className="bg-white/90 p-8 rounded-xl shadow-md max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-green-700 mb-4">
                Welcome to GreenThumb 🌱
                </h1>
                <p className="text-lg md:text-xl text-gray-800 mb-8">
                Your personal gardening assistant – track plants, set reminders, and join the community!
                </p>
                <div className="space-x-4">
                <Link to="/register">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
                    Get Started
                    </button>
                </Link>
                <Link to="/login">
                    <button className="border border-green-600 text-green-600 hover:bg-green-100 font-semibold py-2 px-6 rounded">
                    Login
                    </button>
                </Link>
                </div>
            </div>
            </div>
    )
}