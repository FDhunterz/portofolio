"use client";
import mePNG from "@/assets/me.png";
import html2pdf from 'html2pdf.js';

export default function ProfileHeader() {   

    const downloadCV = async () => {
        print();
    }

    const headerItems = [
        {
            label: "About Me",
            href: "#about-me"
        },
        {
            label: "Contact",
            href: "#contact"
        },
        {
            label: "Projects",
            href: "#profile-projects"
        },
        {
            label: "Experience",
            href: "#profile-experience"
        },
    ];

    const completion = [
        {
            label: "Completed",
            value: '5',
            subValue: 'Projects'
        },
        {
            label: "Portofolio",
            value: '5',
            subValue: 'Projects'
        },
        {
            label: "Experience",
            value: '5',
            subValue: 'Years'
        },
        
    ]

    const onclickScroll = (keys: string) => {
        const el = document.getElementById(keys);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <div className="min-h-screen flex flex-col print:items-center print:justify-center print:min-h-0">
            <div className="px-12 py-6 flex print:hidden">
                <div className="pr-10 rounded-full font-semibold">ICON</div>
                <div className="flex w-100 flex-1">
                    {headerItems.map((item) => (
                        <div key={item.label}  className="pr-10 font-medium" >
                            <a href={item.href} onClick={() => onclickScroll(item.href)}>{item.label}</a>
                        </div>
                    ))}
                </div>
                <a href="#contact-now" className="pr-10 underline">Contact Now</a>
            </div>
            <div className="flex xl:flex-row flex-col  items-center flex-1 p-20 print:p-0 print:mt-20 print:flex-col" >
                <div className="xl:w-1/3 w-1/2 print:w-1/2 flex items-center justify-center">
                <div className="w-full aspect-square rounded-full p-10 border-2 border-tertiary">
                    <div className="w-full aspect-square rounded-full overflow-hidden">
                    <img 
                        src={mePNG.src} 
                        alt="Profile" 
                        className="w-full h-full object-cover object-top"
                    />
                    </div>
                </div>
                </div>
                <div className="xl:w-2/3 w-full print:w-full flex flex-col justify-center pl-20">
                    <div className="flex flex-col justify-between">
                        <div className="flex pb-20 justify-center xl:justify-start xl:mt-0 mt-10">
                            {completion.map((item) => (
                                <div key={item.label} className="pr-20">
                                    <div className="flex items-start mt-2">
                                        <span className="font-bold text-xl mr-0.5">+</span>
                                        <div className="flex flex-col">
                                            <span className="text-4xl ">{item.value}</span>
                                            <span className="text-sm text-secondary">{item.label} {item.subValue}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pb-20 print:pb-25">
                            <h1 className="xl:text-9xl print:text-7xl text-7xl font-extralight text-primary mb-10">Frontend and Mobile Developer</h1>
                            <p className="text-lg text-primary mb-10">Hello, I'm Faizal. I'm a software engineer with a passion for building web applications. I'm a quick learner and I'm always looking to improve my skills.</p>
                            <div className="flex print:hidden" >
                                <button className="button-primary bg-primary text-white mr-5" onClick={()=> {
                                    window.open('https://wa.me/6288217081355', '_blank');
                                }}>Call Me</button>
                                <button className="button-primary bg-tertiary text-primary" onClick={()=> {
                                    downloadCV();
                                }}>Download CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}