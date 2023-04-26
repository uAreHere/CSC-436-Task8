import { getCurrentUser } from "csc-start/app/utils/data";
import Image from "next/image";


const {name, avatar} = getCurrentUser();


const TopContent = () => {
    
    return <div className="barge flex justify-between items-center">
            <div className="user-info">
                <Image className="rounded-[360px]" src={avatar} alt="user-avatar" height="145" width="145" />
                <div>
                <p className="h2 user-name">{name}</p>
                </div>
            </div> 
        </div>
}

export default TopContent;