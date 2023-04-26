import { getLinksLinks } from "csc-start/app/utils/data";


const NonSocialLinks = () => {
    
    const regularLinks = getLinksLinks();
    
    return (
        <div className="grid justify-center pt-[66px]">
            {regularLinks.map((site) => {
                return (
                <ul key={site.id}>
                    <li className="pt-[36px]">
                        <a href={site.url}>
                            <button className="button">
                                <p className="h2">{site.title}</p>
                            </button>
                        </a>
                    </li>
                </ul>
            )
            })}
        </div>
    )
}

export default NonSocialLinks;