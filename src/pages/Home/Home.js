import React from 'react';
import Card from './Card';
import Post from './Post';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

const Home = (props) => {
    return (
        <div className='bg-base-200'>
            <div className="grid grid-cols-12">
                <div className="lg:col-span-3 md:col-span-4 sm:col-span-12 mt-3 sm:justify-items-center grid md:justify-items-end"> <Sidebar /> </div>
                <div className="lg:col-span-6 md:col-span-8 sm:col-span-12 mt-3 justify-items-center">
                    <Post />
                    <Card />
                </div>
                <div className="lg:col-span-3 sm:hidden lg:block mt-3 grid lg:justify-items-start"> <Widgets /> </div>
            </div>
        </div>
    );
};

export default Home;