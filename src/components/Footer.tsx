import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className=" container">
        <div className=" py-10">
            <div className=" flex justify-between items-center">
                <h2 className=" text-2xl">Everthing begins with an ides."</h2>
                <div className=" flex items-center gap-4">
                    <NavLink to={"/"} className=" w-[40px] h-[40px] rounded-full  bg-gradient-to-tr from-[#3b5998] to-[#1877f2] flex items-center justify-center text-white">
                    <FaFacebookF />
                    </NavLink>
                    <NavLink to={"/"}  className=" w-[40px] h-[40px] rounded-full bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976] flex items-center justify-center text-white">
                    <FaInstagram />
                    </NavLink>
                    <NavLink to={"/"} className=" w-[40px] h-[40px] rounded-full bg-[#ffc118] flex items-center justify-center text-white">
                    <FaSnapchatGhost />
                    </NavLink>
                    <NavLink to={"/"} className=" w-[40px] h-[40px] rounded-full bg-[#1DA1F2] flex items-center justify-center text-white">
                    <FaTwitter />
                    </NavLink>
                </div>
            </div>

            <div className=" mt-15 flex justify-between">
                <div className=" flex-[2]">
                    <h4 className=" text-3xl mb-10">Stitle.</h4>
                    <div>
                    <div className='w-[300px] h-[45px] relative'>
                        <input type="text"
                            placeholder='Email address'
                            className=' bg-[#222931] outline-none text-[14px] rounded-full h-full w-full p-5'
                        />
                        <button className='text-[14px] absolute z-10 right-0 font-semibold text-[#1B1F24] bg-[#00C39A] hover:bg-[#44ffd7] cursor-pointer duration-300 h-full w-[120px] rounded-full'>
                        Get's Started
                        </button>
                    </div>
                    </div>
                </div>
                <div className="flex-[4] flex justify-between">
                    <div>
                        <h4 className=" text-[18px] mb-5">DESIGN</h4>
                        <ul className=" text-gray-400 flex flex-col gap-3">
                            <li>Digital Branding</li>
                            <li>E-Commerce Design</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className=" text-[18px] mb-5">DEVELOP</h4>
                        <ul className=" text-gray-400 flex flex-col gap-3">
                            <li>E-commerce development</li>
                            <li>Web Development</li>
                            <li>No-code development</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className=" text-[18px] mb-5">GROW</h4>
                        <ul className=" text-gray-400 flex flex-col gap-3">
                            <li>Research & Strategy</li>
                            <li>Visibility & Awareness</li>
                            <li>Campaign Management</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className=" flex justify-between items-center mt-20 text-gray-400">
                <p>stitle.development llc</p>
                <div className=" flex items-center gap-5 text-[14px]">
                    <p>TERMS</p>
                    <p>PRIVACY</p>
                    <p>COKKIES</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer