import aboutMe from "./about-me.json";
import code_style from "@/assets/code_style.png";
import Image from 'next/image';

export default function AboutMeCodestyle() {
    return (
        <div className="flex flex-col items-center w-full mt-20 print:mt-10   ">
            <h2 className="text-2xl font-bold text-center mb-5">Codestyle</h2>
            <p className="text-center mb-10 max-w-200">{aboutMe.codestyle}</p>
            <Image src={code_style.src} alt="Codestyle" className="w-full h-auto rounded-md shadow-md" />
        </div>
    );
}