import { DataProfileModel } from "../[name]/profile_model";


export default function AboutMeContact({aboutMe} : {aboutMe : DataProfileModel}) {
    return (
        <div className="flex flex-col items-center w-full mt-20 print:mt-10   " id="contact">
            <h2 className="text-2xl font-bold text-center mb-5">Contact</h2>
            
            <div className="flex flex-wrap w-full gap-x-4 gap-y-4 ">
            {
                Object.keys(aboutMe.contact).map((key) => (
                    <div key={key} className="flex w-full sm:w-[calc(50%-8px)] flex-row items-center border border-gray-100 rounded-md p-3 gap-2">
                    <div className="flex flex-col w-full">
                        <p className="text-lg font-bold">{key}</p>
                        <p className="text-sm text-gray-500 mb-2">{aboutMe.contact[key as keyof typeof aboutMe.contact]}</p>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    );
}