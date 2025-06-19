import { useState } from "react"
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi"

interface question{
    title:string,
    ask:string
}

const question:question[]=[
    {
        title:"01. Can I Find the right information faster?",
        ask:"Registration will give you access to additional features not available to guest users: convert multipage PDF (more 15 pages), large images and ZIP archives,"
    },
    {
        title:"02. How to share feature demos and ideas?",
        ask:"Registration will give you access to additional features not available to guest users: convert multipage PDF (more 15 pages), large images and ZIP archives,"
    },
    {
        title:"03. How to get insights from users?",
        ask:"Registration will give you access to additional features not available to guest users: convert multipage PDF (more 15 pages), large images and ZIP archives,"
    },
    {
        title:"04. Can I develop my website without code?",
        ask:"Registration will give you access to additional features not available to guest users: convert multipage PDF (more 15 pages), large images and ZIP archives,"
    },
]

const HomeQandA = () => {
    const [isOpen,setIsOpen] = useState<number | null>(null)

    return (
        <section className=' mt-20'>
            <h1 className=" text-4xl text-center mb-10">FAQs</h1>
            <ul className=" flex flex-col gap-4">
                {
                    question.map((item,index)=>(
                        <li key={index}>
                            <div className=" flex justify-between items-center">
                                <p className=" text-xl">{item.title}</p>
                                <button onClick={()=>setIsOpen(isOpen === index?null:index)}
                                className={`${isOpen=== index ? ' bg-[#00C39A] text-[#1B1F24]':'text-[#00C39A]'} w-[30px] h-[30px] rounded-full border flex items-center justify-center`}>
                                    {
                                        isOpen === index? <HiOutlineMinusSm /> : <HiOutlinePlusSm />
                                    }
                                </button>
                            </div>
                            {
                                isOpen === index &&(
                                    <p className=" my-2 text-base text-gray-400">{item.ask}</p>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default HomeQandA