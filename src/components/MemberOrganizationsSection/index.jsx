import { IMAGE_LINKS } from "./allmembers.js";

export default function MemberOrganizationSection(){
    const imgs = IMAGE_LINKS.map((image, idx) => {
        return (
            <div key={idx} className="">
                <img className="w-[175px]" src={image} alt="Member Logo" key={idx} />
            </div>
        )
    });

    return (
        <div className='container mx-auto flex flex-col text-center justify-center'>
            <h1 className='my-4'>Member Organizations</h1>
            <div className='flex flex-row items-center space-x-5 flex-wrap justify-center gap-2 place-content-evenly'>
                {imgs}
            </div>
        </div>
    );
}
