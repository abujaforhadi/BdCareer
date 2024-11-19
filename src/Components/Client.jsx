import Aos from 'aos';
import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import "aos/dist/aos.css"; 

const Client = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true, 
        });
      }, []);
    return (
        <div className='py-5'>
            
            <Marquee className="space-x-3">
                <div className="w-32 h-32 flex items-center justify-center">
                    <img
                        src="https://bk.nextgenitltd.com/images/1730279224445-414112116-logo.png"
                        alt="Client 1"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                    <img
                        src="https://bk.nextgenitltd.com/images/1730279156646-735363922-Zenith.png"
                        alt="Client 2"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                    <img
                        src="https://bk.nextgenitltd.com/images/1727867976112-572889501-3_RAB.png"
                        alt="Client 3"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                    <img
                        src="https://bk.nextgenitltd.com/images/1727867965831-540391233-4_animal.png"
                        alt="Client 4"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                    <img
                        src="https://bk.nextgenitltd.com/images/1727867840362-671907712-12_BTI.png"
                        alt="Client 5"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                    <img
                        src="https://bk.nextgenitltd.com/images/1727867882785-161817134-9_tade_fac.png"
                        alt="Client 6"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                    <img
                        src="https://bk.nextgenitltd.com/images/1727867816783-116429089-14_concord.png"
                        alt="Client 7"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                    <img
                        src="https://bk.nextgenitltd.com/images/1727867355300-632700582-19_advanced_development.png"
                        alt="Client 8"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                    <img
                        src="https://bk.nextgenitltd.com/images/1727867134347-986028033-29_drik.png"
                        alt="Client 9"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                    <img
                        src="https://bk.nextgenitltd.com/images/1727866821292-429672923-40_modren_hospital.png"
                        alt="Client 10"
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="w-32 h-32 flex items-center justify-center">
                    <img
                        src="https://bk.nextgenitltd.com/images/1727866722713-944462085-43_probati.png"
                        alt="Client 11"
                        className="object-contain w-full h-full"
                    />
                </div>
            </Marquee>
        </div>
    );
};

export default Client;
