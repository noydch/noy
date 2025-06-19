// import { IoIosPin } from 'react-icons/io'
// import { IoPerson, IoSearchSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'


interface navlink {
    title: string,
    path: string,
}

const navLinks: navlink[] = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Service",
        path: "/service"
    },
    {
        title: "Pricing",
        path: "/pricing"
    },
    {
        title: "Customers",
        path: "/customers"
    }
]

const Navbar = ({ children }: { children: React.ReactNode }) => {
    // const Navbar = () => {
    return (
        <>
            <nav className=' w-full bg-[#1B1F24] h-[70px] flex items-center text-white'>
                <div className='container w-full flex justify-between items-center'>
                    <h1 className=' text-3xl font-bold'>Stitle</h1>
                    <div className=' flex items-center gap-10'>
                        {
                            navLinks.map((item, index) => (
                                <NavLink key={index}
                                    className={({ isActive }) => ` 
                                        relative block py-1 transition-all duration-300 ease-in-out
                                        ${isActive ? 'text-white' : 'text-gray-400'}
                                        hover:text-white
                                        before:content-[''] before:absolute before:bottom-0 before:left-0 
                                        before:h-[2px] before:bg-white before:transition-all
                                        before:duration-300 before:ease-in-out
                                        ${isActive ? 'before:w-full' : 'before:w-0'}
                                        hover:before:w-full
                                        ${isActive ? 'scale-105 transform' : ''}
                                        hover:scale-105 hover:transform
                                        after:content-[''] after:absolute after:top-0 after:left-0 
                                        after:w-full after:h-full after:opacity-0 
                                        after:transition-opacity after:duration-300 after:ease-in-out
                                        hover:after:opacity-5
                                    `}
                                    to={item.path}>
                                    {item.title}
                                </NavLink>
                            ))
                        }
                    </div>
                    <div className='cursor-pointer flex justify-center items-center font-semibold w-[140px] h-[40px] rounded-full border-2 border-[#00C39A] text-[#00C39A] transition-all duration-300 ease-in-out hover:bg-[#00C39A] hover:text-white hover:scale-105 hover:transform hover:shadow-lg'>
                        Let's do it
                    </div>
                </div>
            </nav>
            {children}
            <Footer/>
        </>
    )
}
export default Navbar