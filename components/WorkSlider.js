// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import { BsArrowRight } from 'react-icons/bs';

// import required modules
import { Pagination } from 'swiper';

// next image
import Image from 'next/image'; 
// images
import thumb1 from '../public/thumb1.jpg';
import thumb2 from '../public/thumb2.jpg';
import thumb3 from '../public/thumb3.jpg';
import thumb4 from '../public/thumb4.jpg';

// data
const workSlidesData = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: thumb1,
        },
        {
          title: 'title',
          path: thumb2,
        },
        {
          title: 'title',
          path: thumb3,
        },
        {
          title: 'title',
          path: thumb4,
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: thumb4,
        },
        {
          title: 'title',
          path: thumb3,
        },
        {
          title: 'title',
          path: thumb2,
        },
        {
          title: 'title',
          path: thumb1,
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[408px]'
    >
      { 
        workSlidesData.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer '>
                {
                  slide.images.map((image, index) => {
                    return (
                      <div 
                        key={index}
                        className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                      >
                        <div className='flex items-center justify-center relative overflow-hidden'>
                          {/* image */}
                          <Image src={image.path} width={500} height={300} alt=''></Image>
                          {/* overlay gradient */}
                          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                          {/* title */}
                          <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 '>
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              {/* title 1 */}
                              <div className='delay-100' >title 1</div>
                              {/* title 2 */}
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>title 2</div>
                              {/* icons */}
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight></BsArrowRight></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default WorkSlider;
