import React from 'react';
import { Link} from 'react-router-dom';
import bg1 from "../../assets/serImg1.png";
import bg2 from "../../assets/brandImg.png";
import bg3 from "../../assets/ArtImg.png";



function Service() {
    const services = [
        {
            title: 'Film Production',
            image: bg1,
            path: '/film-production',
        },
        {
            title: 'Branding',
            image: bg2,
            path: '/branding',
        },
        {
            title: 'Art Curation',
            image: bg3,
            path: '/art-curation',
        },
    ];


    return (
        <div className="min-h-screen bg-[#fefaf5] text-center px-6 py-12 mt-20">
            <h1 className="text-2xl font-serif mb-10">The storyboard reveals the breadth of our craft.</h1>
            <div className="flex justify-center flex-wrap gap-8">
                {services.map((service) => (
                    <Link
                        key={service.title}
                        to={service.path}
                        className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105 w-64"
                    >
                        <img src={service.image} alt={service.title} className="rounded-md mb-3" />
                        <h2 className="font-semibold text-lg">{service.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Service;