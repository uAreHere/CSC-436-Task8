import { getSocialLinks } from "csc-start/app/utils/data";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import Image from "next/image";

const SocialLinks = () => {

    const socialMedia = getSocialLinks();


    return (
        <nav className="flex justify-center p-3 items-center pt-[60px] pl-[40px] pr-[37px]">
                <ul className="socialbar">
                    {socialMedia.filter(({title}) => title == "Twitter").map(({title, url}) => <li key={title}><a href={url}> <Image src={twitter} alt={'Twitter'} height="46" width="46" /></a></li>)}
                    {socialMedia.filter(({title}) => title == "Facebook").map(({title, url}) => <li key={title}><a href={url}> <Image src={facebook} alt={'Facebook'} height="46" width="46" /></a></li>)}
                </ul>
        </nav>
    )
}

export default SocialLinks;