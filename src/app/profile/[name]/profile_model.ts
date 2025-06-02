export interface SectionModel {
    sections: {
        title: string;
        keys: string;
        values: {
            title: string;
            description: string;
            image: string | null | undefined;
            link: string;
            date: string;
            keys: string;
            }[];
        }[];
}

export interface DataProfileModel {
    contact: {
        email: string;
        phone: string;
        address: string;
        linkedin: string;
        github: string;
    };
    about_me: string;
    codestyle: string;
    skills: {
        name: string;
        icon: string;
        level: string;
        description: string;
    }[];
}