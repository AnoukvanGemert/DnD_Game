import IMAGES from "../Images/Images"

export default function Navbar() {
    return (<>
    <nav className="flex bg-purplee/80 justify-end h-17 sticky top-0 ml-60 items-strech ">
        <div className="absolute -left-60 top-0">
        <img src={IMAGES.titleImage} alt="FontFighting Logo" className="bg-purplee/80 p-4 pb-7 pr-10 w-60 h-auto rounded-br-4xl"></img>
        </div>
        <ul className="text-yellowText flex gap-6 items-strech text-2xl mr-4"> 
            <li><a href="/" className="h-full px-2 flex items-center bg-inherit hover:bg-purplee">Home</a></li>
            <li><a href="/about" className="h-full px-2 flex items-center bg-inherit hover:bg-purplee">About</a></li>
            <li><a href="/characters" className="h-full px-2 flex items-center bg-inherit hover:bg-purplee">Characters</a></li>
            <li><a href="/signIn" className="h-full px-2 flex items-center bg-inherit hover:bg-purplee active:bg-purplee">Sign in</a></li>
            <button className=" from-yellowText to-[#c59c08] text-purplee py-2 px-4 h-13 items-center rounded-2xl bg-linear-to-b cursor-pointer hover:from-[#c59c08] hover:to-[#c59c08] mt-2">
                Play Now!
            </button>
        </ul>
        
    </nav>
    
    </>)
}