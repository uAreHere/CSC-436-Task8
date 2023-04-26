import Image from "next/image";
import cargoWhite from '../images/cargo-white.svg'

const Header = () => {
    return <header className="barge bg-black flex justify-between items-center">
        <Image src={cargoWhite} alt={'LinkBarge'} height="75" width="75"/>
        <p className="h1 text-white">BARGE</p>
    </header>;
}

export default Header;