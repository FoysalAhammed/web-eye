import React from 'react'
import LucyTarr from '../../../public/Images/Testimonials/Lucy Tarr.svg'
import Google from '../../../public/Images/Testimonials/Google.svg'
import GrantStyles from '../../../public/Images/Testimonials/Grant Styles.svg'
import AppStore from '../../../public/Images/Testimonials/App Store.svg'
import RalphEdwards from '../../../public/Images/Testimonials/Ralph Edwards.svg'
import X from '../../../public/Images/Testimonials/X.svg'
import AnnetteBlack from '../../../public/Images/Testimonials/Annette Black.svg'
import Facebook from '../../../public/Images/Testimonials/facebook.svg'
import RobertFox from '../../../public/Images/Testimonials/Robert Fox.svg'
import BrooklynSimmons from '../../../public/Images/Testimonials/Brooklyn Simmons.svg'
import Image from 'next/image'
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const TestimonialData1 = [
  {
    id: 1,
    avatar: LucyTarr,
    name: "Lucy Tarr",
    company: "CEO of AB.co",
    details: "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    logo: Google
  },
  {
    id: 2,
    avatar: GrantStyles,
    name: "Grant Styles",
    company: "CEO of Biffco Enterprises Ltd.",
    details: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    logo: AppStore
  },
  {
    id: 3,
    avatar: RalphEdwards,
    name: "Ralph Edwards",
    company: "Director at Acme.co",
    details: "Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam.",
    logo: X
  },

  {
    id: 4,
    avatar: AnnetteBlack,
    name: "Annette Black",
    company: "Manager at Barone LLC.",
    details: "Consectetur adipiscing elit duis tristique sollicitudin. Vel risus commodo viverra maecenas accumsan. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    logo: Facebook
  },

  {
    id: 5,
    avatar: RobertFox,
    name: "Robert Fox",
    company: "CEO of Biffco Enterprises Ltd.",
    details: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    logo: Google
  },

  {
    id: 6,
    avatar: BrooklynSimmons,
    name: "Brooklyn Simmons",
    company: "CEO of AB.co",
    details: "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    logo: X
  },

]

const TestimonialData2 = [
  {
    id: 1,
    avatar: RobertFox,
    name: "Robert Fox",
    company: "CEO of Biffco Enterprises Ltd.",
    details: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    logo: Google
  },

  {
    id: 2,
    avatar: GrantStyles,
    name: "Grant Styles",
    company: "CEO of Biffco Enterprises Ltd.",
    details: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    logo: AppStore
  },
  {
    id: 3,
    avatar: BrooklynSimmons,
    name: "Brooklyn Simmons",
    company: "CEO of AB.co",
    details: "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    logo: X
  },
  {
    id: 4,
    avatar: RalphEdwards,
    name: "Ralph Edwards",
    company: "Director at Acme.co",
    details: "Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam.",
    logo: X
  },
  {
    id: 5,
    avatar: LucyTarr,
    name: "Lucy Tarr",
    company: "CEO of AB.co",
    details: "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    logo: Google
  },
  {
    id: 6,
    avatar: AnnetteBlack,
    name: "Annette Black",
    company: "Manager at Barone LLC.",
    details: "Consectetur adipiscing elit duis tristique sollicitudin. Vel risus commodo viverra maecenas accumsan. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    logo: Facebook
  },

]


const Page = () => {
  return (
    <section className='w-full flex flex-col bg-[#f4f8fa] lg:mt-[120px] mt-[50px]'>
      <div className='flex justify-center flex-col lg:pb-[100px] pb-[48px]'>
        <div className='lg:mx-20 mx-5 max-w-[1536px] flex-col'>
          <div className='flex flex-col items-center lg:pt-[96px] pt-[48px]'>
            <h3 className='md:text-[42px] trext-[24px] font-semibold w-auto text-center leading-tight text-[#172026]'>Testimonials</h3>
            <p className='mt-[16px] lg:text-[18px] md:text-[17px] text-[16px] lg:w-[676px] md:w-[700px] w-auto text-center text-[#36485c]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
        </div>
        <Marquee className="gap-[1.5rem] [--duration:30s] overflow-hidden lg:mt-[72px] mt-[32px]"
        innerClassName="gap-[1.5rem] [--gap:1.5rem]" fade={false}>
          {TestimonialData1.map((data_1,index)=>(
            <div key={index} className='bg-[#fff] rounded-2xl w-fit h-fit p-[24px]'>
              <div className='flex justify-between'>
                <div className='flex'>
                  <Image src={data_1.avatar} alt={data_1.name} width={0} height={0} className='lg:w-[64px] lg:h-[64px] w-[56px] h-[56px]'/>
                  <div className='flex flex-col my-auto ml-[8px]'>
                    <span className='text-[14px] text-[#172026] font-bold'>{data_1.name}</span>
                    <span className='text-[14px] text-[#5f7896]'>{data_1.company}</span>
                  </div>
                </div>
                <Image src={data_1.logo} alt={data_1.logo} width={0} height={0} className='lg:w-[48px] lg:h-[48px] w-[40px] h-[40px]'/>
              </div>
              <p className='w-[400px] mt-[16px] line-clamp-3 lg:text-[18px] text-[16px] text-[#36485c]'>{data_1.details}</p>
            </div>
          ))}
        </Marquee>

        <Marquee className="gap-[1.5rem] [--duration:30s] overflow-hidden  mt-[24px]"
        innerClassName="gap-[1.5rem] [--gap:1.5rem]" reverse={true}>
          {TestimonialData2.map((data_1,index)=>(
            <div key={index} className='bg-[#fff] rounded-2xl w-fit h-fit p-[24px]'>
              <div className='flex justify-between'>
                <div className='flex'>
                  <Image src={data_1.avatar} alt={data_1.name} width={0} height={0} className='lg:w-[64px] lg:h-[64px] w-[56px] h-[56px]'/>
                  <div className='flex flex-col my-auto ml-[8px]'>
                    <span className='text-[14px] text-[#172026] font-bold'>{data_1.name}</span>
                    <span className='text-[14px] text-[#5f7896]'>{data_1.company}</span>
                  </div>
                </div>
                <Image src={data_1.logo} alt={data_1.logo} width={0} height={0} className='lg:w-[48px] lg:h-[48px] w-[40px] h-[40px]'/>
              </div>
              <p className='w-[400px] mt-[16px] line-clamp-3 lg:text-[18px] text-[16px] text-[#36485c]'>{data_1.details}</p>
            </div>
          ))}
        </Marquee>

        <div className='lg:block hidden'>
          <Marquee className="gap-[1.5rem] [--duration:30s] overflow-hidden mt-[24px]"
          innerClassName="gap-[1.5rem] [--gap:1.5rem]" fade={false}>
            {TestimonialData1.map((data_1,index)=>(
              <div key={index} className='bg-[#fff] rounded-2xl w-fit h-fit p-[24px]'>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <Image src={data_1.avatar} alt={data_1.name} width={0} height={0} className='lg:w-[64px] lg:h-[64px] w-[56px] h-[56px]'/>
                    <div className='flex flex-col my-auto ml-[8px]'>
                      <span className='text-[14px] text-[#172026] font-bold'>{data_1.name}</span>
                      <span className='text-[14px] text-[#5f7896]'>{data_1.company}</span>
                    </div>
                  </div>
                  <Image src={data_1.logo} alt={data_1.logo} width={0} height={0} className='lg:w-[48px] lg:h-[48px] w-[40px] h-[40px]'/>
                </div>
                <p className='w-[400px] mt-[16px] line-clamp-3 lg:text-[18px] text-[16px] text-[#36485c]'>{data_1.details}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Page