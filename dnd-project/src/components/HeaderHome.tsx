import IMAGES from "../Images/Images";
import Navbar from "./Navbar";

export default function HeaderHome() {
    return (
        <>

            <header className="w-full">
                <div className="relative w-full">
                    <Navbar />
                    <img src={IMAGES.headerHome} alt="Header" className=" absolute w-full h-auto  object-center -z-10 top-0"></img>
                    <div className="absolute right-36 top-36">

                        <img src={IMAGES.scroll} className="relative w-125 h-137.5 opacity-95"></img>
                        <div className="wrap-break-word leading-80">
                            <p className="z-10 absolute top-30 left-[28%] w-60 h-130 text-3xl leading-14 flex flex-col gap-2"><span>Player, </span><span> do you think you can save the princess? </span><button className="w-fit from-yellowText to-[#c59c08] text-purplee  px-4 items-center rounded-2xl bg-linear-to-b cursor-pointer hover:from-[#c59c08] hover:to-[#c59c08] mt-2">
                                Play Now!
                            </button></p>
                            
                        </div>

                    </div>

                </div>
            </header>
        </>
    )
}