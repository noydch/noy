import { HiMiniPresentationChartBar } from 'react-icons/hi2'
import yellowPattern from './../../../assets/yellow.png'
import coverBg from './../../../assets/bgRobot.png'
import thunderImg from './../../../assets/thuner.png'
import lineImg from './../../../assets/Line.png'
import yellowPattern2 from './../../../assets/yellowItem2.png'
import element1 from './../../../assets/foot.png'
import element2 from './../../../assets/item1.png'
import robotImg from './../../../assets/robot.png'
import { NavLink } from 'react-router-dom'
import { FaArrowsToDot } from 'react-icons/fa6'
import { GrCloudComputer } from 'react-icons/gr'
import HomeQandA from './HomeQandA'

const HomeContent = () => {
    return (
        <div className=" containers my-20">
            <section className=' flex items-end justify-between'>
                <div className=' flex flex-col gap-y-4'>
                    <p className=" text-gray-400 font-semibold">With Stitle</p>
                    <h1 className=" font-bold text-5xl">Let's start a project together</h1>
                    <p className=" text-[14px] text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, atque?</p>
                    <div className='w-[350px] h-[50px] relative'>
                        <input type="text"
                            placeholder='Type your email address'
                            className=' bg-[#222931] outline-none text-[14px] rounded-full h-full w-full p-5'
                        />
                        <button className=' absolute z-10 right-0 font-semibold text-[#1B1F24] bg-[#00C39A] hover:bg-[#44ffd7] cursor-pointer duration-300 h-full w-[140px] rounded-full'>Get Started</button>
                    </div>
                </div>
                <div>
                    <img src={yellowPattern} alt=""
                        className='w-[200px]' />
                </div>
            </section>

            {/* section 2 */}
            <section className=' flex gap-5 mt-20'>
                <div className=' flex-[1] flex flex-col gap-5'>
                    <div className=' flex gap-5'>
                        <div style={{ backgroundImage: `url(${coverBg})` }}
                            className='relative w-[250px] h-[200px] bg-[#FDC799] rounded-lg bg-no-repeat bg-cover bg-center p-8'>
                            <div className=' text-black'>
                                <h1 className=' text-5xl font-semibold'>86</h1>
                                <p className=' text-2xl font-medium'>Project is <br /> pending</p>
                            </div>
                            <img src={thunderImg} alt="thunderImg"
                                className=' w-[60px] absolute bottom-2 right-5'
                            />
                        </div>
                        <div style={{ backgroundImage: `url(${coverBg})` }}
                            className='relative w-[300px] h-[200px] bg-[#FFD155] rounded-lg bg-no-repeat bg-cover bg-center p-8'>
                            <div className=' text-black'>
                                <h1 className=' text-5xl font-semibold'>453</h1>
                                <p className=' text-2xl font-medium'>Awards</p>
                            </div>
                            <img src={lineImg} alt="thunderImg"
                                className=' w-[130px] absolute bottom-2 right-2'
                            />
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${coverBg})` }}
                        className='flex flex-col justify-between bg-[#324A34] h-[280px] rounded-lg bg-no-repeat bg-cover bg-center p-8'>
                        <div className=' flex items-center justify-between'>
                            <h2 className=' text-2xl font-semibold'>Start Project</h2>
                            <div className=' flex items-center gap-1'>
                                <div className=' w-[10px] h-[10px] rounded-full bg-gray-500'></div>
                                <div className=' w-[10px] h-[10px] rounded-full bg-gray-500'></div>
                                <div className=' w-[10px] h-[10px] rounded-full bg-gray-500'></div>
                            </div>
                        </div>
                        <div className=' w-[250px] h-[55px] bg-black rounded-lg p-2 flex items-center gap-2'>
                            <div className=' text-black w-[35px] h-[35px] bg-yellow-500 rounded-lg flex items-center justify-center'>
                                <HiMiniPresentationChartBar className=' text-2xl' />
                            </div>
                            <p>Your order is on its way!</p>
                        </div>
                        <div className=' flex justify-between items-end'>
                            <div className=' flex flex-col gap-2'>
                                <div className=' w-[240px] h-[15px] bg-[#5E7960] rounded-[2px]'></div>
                                <div className=' w-[150px] h-[15px] bg-[#5E7960] rounded-sm'></div>
                                <div className=' w-[200px] h-[15px] bg-[#5E7960] rounded-sm'></div>
                            </div>
                            <img src={yellowPattern2} alt=""
                                className='w-[80px]'
                            />
                        </div>
                    </div>
                </div>
                <div className=' flex-[2]'>
                    <div style={{ backgroundImage: `url(${coverBg})` }}
                        className='relative bg-[#4A9FFF] w-full h-full rounded-lg bg-no-repeat bg-cover bg-center p-14'>
                        <h1 className=' text-4xl font-semibold text-black'>Better tech to better <br /> trade</h1>
                        <img src={element1} alt=""
                            className=' w-[100px] absolute bottom-20'
                        />
                        <img src={element2} alt=""
                            className=' w-[50px] absolute top-10 right-15'
                        />
                        <img src={robotImg} alt=""
                            className=' w-[450px] absolute bottom-10 right-8'
                        />
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section className='mt-20'>
                <div className=' flex items-end justify-between'>
                    <h2 className=' text-3xl'>
                        Trusted by 20,000+ customers <br />
                        across Europe
                    </h2>
                    <NavLink to={'/'} className={"text-yellow-500 border-b"}>Watch their stories</NavLink>
                </div>
                <div className=' flex justify-between items-center mt-10'>
                    <div className='flex items-center justify-center gap-2 text-2xl bg-white/5 w-[130px] p-2 rounded-full'>
                    <FaArrowsToDot />
                        asana
                    </div>
                    <div className='flex items-center justify-center gap-2 text-2xl bg-white/5 w-[130px] p-2 rounded-full'>
                    <FaArrowsToDot />
                        asana
                    </div>
                    <div className='flex items-center justify-center gap-2 text-2xl bg-white/5 w-[130px] p-2 rounded-full'>
                    <FaArrowsToDot />
                        asana
                    </div>
                    <div className='flex items-center justify-center gap-2 text-2xl bg-white/5 w-[130px] p-2 rounded-full'>
                    <FaArrowsToDot />
                        asana
                    </div>
                    <div className='flex items-center justify-center gap-2 text-2xl bg-white/5 w-[130px] p-2 rounded-full'>
                    <FaArrowsToDot />
                        asana
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <section className=' mt-20'>
                <div>
                    <div className=' flex justify-between'>
                        <div>
                        <h2 className=' text-4xl'>Our service we can <br /> help you</h2>
                        <p className=' text-gray-300 mt-8'>
                            We have many interesting services with profesional team, <br />
                            that will help your work to be better
                        </p>
                        </div>
                        <div className='px-10 py-12 w-[280px] h-[280px] bg-[#1B1F24] border border-[#262A2F] rounded-md'>
                            <GrCloudComputer className=' text-[#00C39A] text-4xl'/>
                            <h3 className=' text-2xl font-semibold mt-5'>Development</h3>
                            <p className=' text-[14px] mt-10'>Create website and responsive website by HTML/CSS, react, webflow</p>
                        </div>
                    </div>
                    <div className=' mt-5 flex justify-between'>
                        <div className='px-10 py-12 w-[280px] h-[280px] bg-[#1B1F24] border border-[#262A2F] rounded-md'>
                            <GrCloudComputer className=' text-[#00C39A] text-4xl'/>
                            <h3 className=' text-2xl font-semibold mt-5'>Development</h3>
                            <p className=' text-[14px] mt-10'>Create website and responsive website by HTML/CSS, react, webflow</p>
                        </div>
                        <div className='px-10 py-12 w-[280px] h-[280px] bg-[#1B1F24] border border-[#262A2F] rounded-md'>
                            <GrCloudComputer className=' text-[#00C39A] text-4xl'/>
                            <h3 className=' text-2xl font-semibold mt-5'>Development</h3>
                            <p className=' text-[14px] mt-10'>Create website and responsive website by HTML/CSS, react, webflow</p>
                        </div>
                        <div className='px-10 py-12 w-[280px] h-[280px] bg-[#1B1F24] border border-[#262A2F] rounded-md'>
                            <GrCloudComputer className=' text-[#00C39A] text-4xl'/>
                            <h3 className=' text-2xl font-semibold mt-5'>Development</h3>
                            <p className=' text-[14px] mt-10'>Create website and responsive website by HTML/CSS, react, webflow</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* section 5 */}
            <HomeQandA/>
        </div>
    )
}
export default HomeContent