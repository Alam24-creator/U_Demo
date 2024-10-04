import React from 'react'


const Hero = () => {
  return (
    <div className='bg-black/20 h-full'>
      
      <div className='h-full flex justify-center 
      items-center p-4
       bg-primary/10'>
        <div className='container grid grid-cols-1 gap-4'>
            <div className='text-white '>
                <p data-aos="fade-up" className="text-sm">
                    Our Packages
                </p>
                <p data-aos="fade-up" 
                    data-aos-delay="300"
                    className='font-bold text-3xl'>
                    Search your desitnaiton

                </p>
            </div>
            {/* package */}
            <div
            data-aos="fade-up" 
            data-aos-delay="600"
            className='
            bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all
             duration-600 text-white p-4 space-y-4 rounded-full
            relative w-[300px] mx-auto'>
                <div className='flex justify-center font-bold'>
                View Packages
                </div>

            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Hero;
