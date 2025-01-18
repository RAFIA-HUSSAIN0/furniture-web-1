import React from 'react';
import Image from 'next/image';
import Simple from "./images/Simple.png";
import Chairs from "./images/Chairs.png";
import Sample from "./images/Sample.png";
import Link from 'next/link';
import Prod from "./images/Prod.png";
import Round from "./images/Round.png.png";
import Mychair from "./images/Mychair.png";
import Reclaimed from "./images/Reclaimed.png";
import Roundn from "./images/Round.png";
import Three from "./images/Three.png";
import Set from "./images/Set.png";
import White from "./images/White.png";
import Table from "./images/Table.png";
import Thin from "./images/Thin.png";




const Grid = () => {
    return (
        <div className=' lg:h-[1808px]  lg:w-full md:w-[478px] sm:w-[200px]  ' >
            <div className='  lg:h-[1791px] mt-[10px]  lg:w-full px-[120px] md:w-[300px] sm:w-[150px]       '>
                <div className='w-[1500px]  overflow-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 lg:px-20

     '>

                    <div className='w-[297px] h-[372px] '>
                        <div className='w-[297px] h-[287px object-cover]'>
                            <Image src="/images/Simple.png" alt="Simple" width={290} height={290} />
                        </div>
                        <div className=' w-[200px] mt-[10px] h-[71px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px]  '>Trenton modular sofa_3</p>
                            <h2 className='hover:text-blue-500 font-poppins mt-[10px] font-medium text-[24px] leading-[36px]  '>Rs. 25,000.00</h2>
                        </div>
                    </div>

                    <div className='w-[297px] h-[397px] '>
                        <div className='w-[297px] h-[297px] '>
                            <Image src="/images/Chairs.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className='w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px]  '>Granite dining table with dining chair</p>
                            <h2 className='hover:text-blue-500 font-poppins  font-medium text-[24px] leading-[36px]'>Rs. 25,000.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className='w-[297px] h-[297px] '>
                            <Image src="/images/Sample.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className=' w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Outdoor bar table and stool</p>
                            <h2 className='hover:text-blue-500 font-poppins  font-medium text-[24px] leading-[36px] '>Rs. 25,000.00</h2>
                        </div>
                    </div>

                    <div className='w-[297px] h-[397px] '>
                        <div className=' w-[297px] h-[297px]'>
                            <Image src="/images/Mez.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className='w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Plain console with teak mirror</p>
                            <h2 className='hover:text-blue-500 font-poppins font-medium text-[24px] leading-[36px] '>Rs. 25,000.00</h2>
                        </div>
                    </div>
                </div>



                <div className='w-[1500px]  overflow-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 lg:px-20
 '>

                    <div className=' w-[297px] h-[372px] '>
                        <div className=' w-[297px] h-[287px]'>
                            <Image src="/images/Coffee.png" alt="Simple" width={290} height={290} />
                        </div>
                        <div className=' w-[200px] mt-[10px] h-[71px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Grain coffee table</p>
                            <h2 className='hover:text-blue-500 font-poppins mt-[8px] font-medium text-[24px] leading-[36px]'>Rs. 15,000.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className=' w-[297px] h-[297px]'>
                            <Image src="/images/Prod.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className=' w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Kent coffee table</p>
                            <h2 className='hover:text-blue-500 font-poppins mt-[10px] font-medium text-[24px] leading-[36px] '>Rs. 225,000.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className='w-[297px] h-[297px] '>
                            <Image src="/images/Round.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className='
                         w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Round coffee table_color 2</p>
                            <h2 className='hover:text-blue-500 font-poppins  font-medium text-[24px] leading-[36px] '>Rs. 251,000.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className=' w-[297px] h-[297px] '>
                            <Image src="/images/Reclaimed.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className='w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Reclaimed teak coffee table</p>
                            <h2 className='hover:text-blue-500 font-poppins  font-medium text-[24px] leading-[36px] '>Rs. 25,200.00</h2>
                        </div>
                    </div>
                </div>

                <div className='w-[1500px]  overflow-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 lg:px-20
  '>

                    <div className=' lg:w-[297px] h-[372px] '>
                        <div className=' lg:w-[297px] h-[287px] '>
                            <Image src="/images/Thin.png" alt="Simple" width={290} height={290} />
                        </div>
                        <div className=' w-[200px] mt-[10px] h-[71px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Plain console_</p>
                            <h2 className='hover:text-blue-500 font-poppins mt-[5px] font-medium text-[24px] leading-[36px] '>Rs. 258,200.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className=' w-[297px] h-[297px]'>
                            <Image src="/images/Draz.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className='w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Reclaimed teak Sideboard</p>
                            <h2 className='hover:text-blue-500 font-poppins  font-medium text-[24px] leading-[36px] '>Rs. 20,000.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className=' w-[297px] h-[297px] '>
                            <Image src="/images/Mychair.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className=' w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>SJP_0825 </p>
                            <h2 className='hover:text-blue-500 font-poppins mt-[18px] font-medium text-[24px] leading-[36px]  '>Rs. 200,000.00</h2>
                        </div>
                    </div>

                    <div className='w-[297px] h-[397px] '>
                        <div className='w-[297px] h-[297px] '>
                            <Image src="/images/threee.png" alt="threee" width={290} height={290} />
                        </div>
                        <div className=' w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px]'>Bella chair and table</p>
                            <h2 className='hover:text-blue-500 font-poppins mt-[18px] font-medium text-[24px] leading-[36px] '>Rs. 200,000.00</h2>
                        </div>
                    </div>
                </div>

                <div className='w-[1500px]  overflow-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 lg:px-20
  '>

                    <div className=' w-[297px] h-[372px] '>
                        <div className=' w-[297px] h-[287px]  '>
                            <Image src="/images/Table.png" alt="Simple" width={290} height={290} />
                        </div>
                        <div className=' w-[200px] mt-[10px] h-[71px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Bella chair and table</p>
                            <h2 className='hover:text-blue-500 font-poppins mt-[10px] font-medium text-[24px] leading-[36px] '>Rs. 100,000.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className=' w-[297px] h-[297px] '>
                            <Image src="/images/Bed.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className=' w-[212px] h-[91px] mt-[10px]'>
                            <Link href="/Asgard"> <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal lg:text-[16px] text-black leading-[24px] '>Granite square side table</p> </Link>
                            <h2 className='hover:text-blue-500 font-poppins mt-[18px] font-medium text-[24px] leading-[36px] '>Rs. 258,800.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className=' w-[297px] h-[297px] '>
                            <Image src="/images/White.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className=' w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Asgaard sofa</p>
                            <h2 className='hover:text-blue-500 font-poppins mt-[18px] font-medium text-[24px] leading-[36px] '>Rs. 115,000.00</h2>
                        </div>
                    </div>

                    <div className=' w-[297px] h-[397px] '>
                        <div className='w-[297px] h-[297px] '>
                            <Image src="/images/Set.png" alt="alt" width={290} height={290} />
                        </div>
                        <div className=' w-[212px] h-[91px] mt-[10px]'>
                            <p className='hover:text-blue-500 font-poppins pb-[10px] font-normal text-[16px] text-black leading-[24px] '>Outdoor sofa set</p>
                            <h2 className='hover:text-blue-500 font-poppins mt-[18px] font-medium text-[24px] leading-[36px] '>Rs. 244,000.00</h2>
                        </div>
                    </div>
                </div>





                <div className='flex justify-center items-center  sm:px-[220px] '>
                    <div className='flex justify-center text-center items-center mt-[70px] w-[392px]  h-[60px] gap-4 sm:flex sm:justify-center'>
                        <button className='hover:text-blue-500 bg-[#FBEBB5] flex items-center justify-center font-poppins font-normal leading-[30px] py-[30px] px-[30px] w-[7px] h-[30px] rounded-[10PX] '>1</button>
                        <button className='hover:text-blue-500 bg-[#FFF9E5] flex items-center justify-center font-poppins font-normal leading-[30px] py-[30px] px-[30px] w-[7px] h-[30px] rounded-[10PX] '>2</button>
                        <button className='hover:text-blue-500 bg-[#FFF9E5] flex items-center justify-center font-poppins font-normal leading-[30px] py-[30px] px-[30px] w-[7px] h-[30px] rounded-[10PX] '>3</button>
                        <button className='hover:text-blue-500 bg-[#FFF9E5] flex items-center justify-center font-poppins font-normal leading-[30px] py-[30px] px-[60px] w-[4px] h-[30px] rounded-[10PX] '>Next</button>
                    </div>
                </div>



            </div>





        </div>


    )
}

export default Grid
