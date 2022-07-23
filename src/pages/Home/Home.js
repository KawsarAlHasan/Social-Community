import React from 'react';
import Card from './Card';
import Post from './Post';
import Slidebar from './Slidebar';
import Widgets from './Widgets';

const Home = (props) => {
    return (
        <div className='bg-base-200'>
            <div class="grid grid-cols-12">
                <div class="col-span-3 mt-3 grid justify-items-end"> <Slidebar /> </div>
                <div class="col-span-6 mt-3 justify-items-center">
                    <Post />
                    <Card />
                </div>
                <div class="col-span-3 mt-3 grid justify-items-start"> <Widgets /> </div>
            </div>
        </div>
    );
};

export default Home;