"use client";
import carcirus from "@/assets/carcirus.png";
import silvervtr from "@/assets/silvervtr.png";
import jasgo from "@/assets/jasgo.png";
import jasgoDriver from "@/assets/jasgo-driver.png";
import mediplus from "@/assets/mediplus.png";
import mediplusDoctor from "@/assets/mediplus-doctor.png";

export default function ProfileContentProjects({title, description, image, link, date, keys}: {title: string, description: string, image?: string | null | undefined, link: string, date: string, keys: string}) {
    const getImage = () => {
        if(image === null){
            return null;
        }
        if (image?.startsWith('http')) {
            return image;
        }else{
            if(image === "assets/carcirus.png"){
                return carcirus.src;
            }
            if(image === "assets/silvervtr.png"){
                return silvervtr.src;
            }
            if(image === "assets/jasgo.png"){
                return jasgo.src;
            }
            if(image === "assets/jasgo-driver.png"){
                return jasgoDriver.src;
            }
            if(image === "assets/mediplus.png"){
                return mediplus.src;
            }
            if(image === "assets/mediplus-doctor.png"){
                return mediplusDoctor.src;
            }
        }
        return image;
    }
    return (
        <section className="flex flex-col min-h-screen print:min-h-0 print:mb-20" id={keys}>
            <div className="flex flex-col">
                <h1 className="text-4xl print:text-2xl font-bold mb-5 cursor-pointer" onClick={() => window.open(link, '_blank')}>{title}</h1>
                <p className="text-lg text-gray-500 mb-5">{description}</p>
            </div>
            {getImage() && <img className="w-full h-auto border-2 border-gray-200 rounded-md" src={getImage()!} alt={title} />}
            <span className="text-sm text-gray-500">{date}</span>
        </section>
    );
}