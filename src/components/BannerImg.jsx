import React from 'react'

const BannerImg = ({img}) => {
    const bannerImg = {
        backgroundImage:`url(${img})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height: "400px",
        // height: '', // Set initial height to 0
        // paddingBottom: '56.27%',
    };
  return (
    <div data-aos="zoom-in"
    className="w-full h-[400px]" style={bannerImg}></div>
  );
};

export default BannerImg;
