import React from 'react'
import {Accordion} from '../Accordion/Accordion';

const Data = [
  {
    title: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?",
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
];


const page = () => {
  return (
    <section className='w-full flex flex-col md:mt-[120px]'>
      <div className='flex justify-center'>
        <div className='lg:mx-20 mx-5 max-w-[1536px] my-6 flex-col '>
          <div className='flex justify-between faq-row-col'>
            <div className='md:w-[35%] w-full'>
              <div className='py-[32px] pr-[56px]'>
                <p className='xl:text-[18px] text-[16px] text-[#eb2891] font-medium'>
                Frequently Asked Questions
                </p>
                <h3 className='xl:text-[42px] text-[24px] text-[#172026] mt-[16px] font-medium leading-tight'>Let’s clarify some of your questions</h3>
                <p className='xl:text-[18px] text-[16px] text-[#36485c] mt-[16px] lg:leading-tight leading-snug xl:w-[455px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
            <div className='md:w-[60%] w-full'>
            <Accordion data={Data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page