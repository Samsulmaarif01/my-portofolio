import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-[100px]'>
        <div className=''>
            <Image src={assets.profile_img} alt="profile" className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-poppins'>Hai, I'm Samsul Maarif <Image src={assets.hand_icon} alt='hand icon' className='w-6'/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-poppins'>full stack developer and Tech Enthusiast</h1>
        <p className='max-w-2xl mx-auto font-poppins'>
        Saya adalah mahasiswa semester 5 yang sangat antusias dalam bidang UI/UX, pengembangan web, dan pengembangan aplikasi mobile. Saya selalu bersemangat untuk belajar dan mengembangkan keterampilan saya di dunia teknologi yang terus berkembang ini.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 rounded-full border border-white bg-black text-white flex items-center gap-2'>Contact Me</a> <Image src={assets.right_arrow_white} alt="arrow right" className='w-4'/>
            <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>Download My Resume <Image src={assets.download_icon} alt="download" className='w-4'/></a> 
        </div>
    </div>  
  )
}

export default Header