"use client";
import { useState, useEffect } from "react";

interface ProfileContentSidebarProps {
    items: {
        title: string;
        description: string;
        image?: string | null | undefined;
        link: string;
        date: string;
        keys: string;
    }[];
    title: string;
}

export default function ProfileContentSidebar({items, title }: ProfileContentSidebarProps) {
    const [active, setActive] = useState('#profile-jasgo-admin');


    useEffect(() => {
        const handleScroll = () => {
            let current = items[0].keys;
            for (const item of items) {
                const el = document.getElementById(item.keys);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100) {
                        current = item.keys;
                    }
                }
            }
            setActive(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const onclickScroll = (keys: string) => {
        setActive(keys);
        const el = document.getElementById(keys);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="flex flex-col justify-center items-center sticky top-10 z-10 pr-10">
            <div className="w-full h-full bg-background " >

                <div className="flex mb-5">
                    <span className="text-primary text-2xl font-bold">{title}</span>
                </div>
                {items.map((item) => (
                    <div key={item.keys} className="flex justify-center items-center print:hidden">
                        <div className={`w-1 h-auto min-h-0 self-stretch mr-2 ${active === item.keys ? 'bg-black' : 'bg-transparent'}`}></div>
                        <div className="flex-1 py-2">
                            <a href={`#${item.keys}`} className={`text-primary ${active === item.keys ? 'font-bold' : ''}`} onClick={() => onclickScroll(item.keys)}>{item.title}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}