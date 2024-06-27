import React from 'react'
import HeroMobile from '@/public/Images/Hero/Mobile.webp'
import HeroWeb from '@/public/Images/Hero/HeroWeb.webp'

import Google from '@/public/Images/Hero/Google.svg'
import Slack from '@/public/Images/Hero/Slack.svg'
import Truestpilot from '@/public/Images/Hero/Trustpilot.svg'
import Cnn from '@/public/Images/Hero/CNN logo.svg'
import Clutch from '@/public/Images/Hero/Clutch.svg' 

import Image from 'next/image'

const page = () => {
  return (
    <section className='w-full flex flex-col'>
      <div className='flex justify-center'>
        <div className='lg:mx-20 mx-5 max-w-[1536px] my-6 flex-col '>
          <div className='flex flex-col items-center'>
            <h1 className='md:text-[64px] text-[32px] sm:font-semibold sm:w-[665px] xs:w-[380px] w-auto text-center leading-tight text-[#172026]'>Start monitoring your website like a pro</h1>
            <p className='py-6 lg:text-[18px] md:text-[17px] text-[16px] lg:w-[846px] md:w-[700px] w-auto text-center text-[#36485c]'>
            Get a bird&#39;s eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!
            </p>
            <div className='flex gap-6'>
              <button className='sm:text-[18px] text-[16px] font-medium text-white text-center bg-[#4328eb] h-[56px] px-8 py-4 rounded'>
              Try for free
              </button>
              <button className='sm:text-[18px] text-[16px] font-medium text-[#4328eb] text-center h-[56px] py-4 flex'>
              View Pricing
              <span className='w-[28px] h-[28px] p-[6px] rounded-full ml-[10px] arrow-bg-color-hero'>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.4165 7H11.5832" stroke="#4328EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.5 2.91666L11.5833 6.99999L7.5 11.0833" stroke="#4328EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='xl:h-[900px] lg:h-[720px] flex flex-col items-center justify-between hero-bg-gradient'>
        <div className='mt-[50px]'>
          <Image src={HeroWeb} alt='' width={0} height={0} className='rounded-2xl xl:w-[920px] xl:h-[653px]
          lg:w-[710px] lg:h-[506px] md:w-[590px] md:h-[420px] sm:h-[341px] sm:w-[480px] xs:w-[350px] xs:h-[249px] w-[280px] h-[200px] shadow-img'  />
          <Image src={HeroMobile}  alt='' width={0} height={0} className='sm:rounded-2xl rounded-lg           xl:ml-[833px] xl:mt-[-510px] lg:ml-[643px] lg:mt-[-393px] md:ml-[540px] md:mt-[-327px] sm:ml-[431px] sm:mt-[-266px] xs:ml-[312px] xs:mt-[-193px] ml-[249px] mt-[-155px] xl:w-[260px] xl:h-[560px] lg:w-[200px] lg:h-[427px] md:w-[165px] md:h-[352px] sm:w-[135px] sm:h-[289px] xs:w-[98px] xs:h-[210px] w-[78px] h-[168px] shadow-img'/>
        </div>
        <div className='w-full xl:mb-[80px] lg:mb-[60px] mt-[30px] flex flex-col justify-center items-center'>
          <div className='lg:mx-20 mx-5 max-w-[1536px] flex flex-col lg:flex-row logo-row-col'>
            <span className='md:text-[18px] text-[16px] text-white my-auto xl:mr-[30px] xl:w-[330px] lg:w-[368px] text-center lg:text-start'>Trusted by these companies</span>
            <div className='lg:flex hidden justify-between w-full xl:gap-24 lg:gap-12'>
              <span>
                <Image src={Google} alt='Google' width={0} height={0} className='xl:w-[104px] xl:h-[64px] lg:w-[90px] lg:h-[55px]' />
              </span>
              <span>
              <Image src={Slack} alt='Slack' width={0} height={0} className='xl:w-[134px] xl:h-[64px] lg:w-[114px] lg:h-[55px]' />
              </span>
              <span>
              <Image src={Truestpilot} alt='Truestpilot' width={0} height={0} className='xl:w-[180px] xl:h-[64px] lg:w-[160px] lg:h-[55px]' />
              </span>
              <span>
              <Image src={Cnn} alt='Cnn' width={0} height={0} className='xl:w-[72px] xl:h-[64px] lg:w-[52px] lg:h-[55px]' />
              </span>
              <span>
              <Image src={Clutch} alt='Clutch' width={0} height={0} className='xl:w-[93px] xl:h-[64px] lg:w-[73px] lg:h-[55px]' />
              </span>
            </div>
            <div className='block flex-col lg:hidden justify-between w-full items-center mt-[16px]'>
                <div className='flex flex-row gap-8 w-fit px-20'>
                  <span>
                    <Image src={Google} alt='Google' width={0} height={0} className='md:w-[104px] md:h-[64px] sm:w-[90px] sm:h-[55px] w-[80px] h-[45px]' />
                  </span>
                  <span>
                    <Image src={Slack} alt='Slack' width={0} height={0} className='md:w-[134px] md:h-[64px] sm:w-[114px] sm:h-[55px] w-[104px] h-[45px]' />
                  </span>
                </div>
                <div className='flex flex-row gap-8 w-fit md:mt-2 mt-1 mb-6 ml-[20px]'>
                <span>
                    <Image src={Truestpilot} alt='Truestpilot' width={0} height={0} className='md:w-[180px] md:h-[64px] sm:w-[160px] sm:h-[55px] w-[150px] h-[45px]' />
                  </span>
                  <span>
                    <Image src={Cnn} alt='Cnn' width={0} height={0} className='md:w-[72px] md:h-[64px] sm:w-[52px] sm:h-[55px] w-[42px] h-[45px]' />
                  </span>
                  <span>
                    <Image src={Clutch} alt='Clutch' width={0} height={0} className='md:w-[93px] md:h-[64px] sm:w-[73px] sm:h-[55px] w-[63px] h-[45px]' />
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page