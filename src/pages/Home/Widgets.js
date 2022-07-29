import React from 'react';
import { Link } from 'react-router-dom';

const Widgets = (props) => {
    return (
        <div className='sticky top-20'>
            <div className="card w-72 bg-base-100 shadow-xl ">
                <div className="">
                    <p className=' mt-3 flex justify-between font-semibold px-4'> Add to your feed <span className='text-primary'>
                        <Link to="/#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mt-1 mercado-match" width="16" height="16" focusable="false">
                            <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                        </svg></Link>
                    </span></p>
                </div>
                <div className='mx-3'>
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3 mt-2">
                                <div className="avatar">
                                    <div className="mask rounded-full w-12 h-12">
                                        <img src="https://placeimg.com/192/192/people" alt='no internet' />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-semibold">Isha Narang</div>
                                    <div className="text-sm opacity-60">Talent Attraction, Acquisition</div>
                                    <button className="btn btn-xs btn-active rounded-full btn-ghost">+ Follow</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3 mt-2">
                                <div className="avatar">
                                    <div className="mask rounded-full w-12 h-12">
                                        <img src="https://placeimg.com/192/192/people" alt='no internet' />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-semibold">Alexa</div>
                                    <div className="text-sm opacity-60">Talent Attraction, Acquisition</div>
                                    <button className="btn btn-xs btn-active rounded-full btn-ghost">+ Follow</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3 mt-2">
                                <div className="avatar">
                                    <div className="mask rounded-full w-12 h-12">
                                        <img src="https://placeimg.com/192/192/people" alt='no internet' />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-semibold">Jenny</div>
                                    <div className="text-sm opacity-60">Talent Attraction, Acquisition</div>
                                    <button className="btn btn-xs btn-active rounded-full btn-ghost">+ Follow</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </div>

                <div className="divider -mb-3 mt-2"></div>
                <div className=" hover:bg-base-300">
                    <Link to="/#" className='flex items-center font-bold my-4 mx-3 text-gray-400'>View all recommendations <span className='mt-1'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="mercado-match" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                        <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
                    </svg></span></Link>
                </div>
            </div>
        </div>
    );
};

export default Widgets;