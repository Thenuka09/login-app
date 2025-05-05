import Image from 'next/image';
import logo from '../../public/Logo.png';
import google_svg from '../../public/Google svg.svg';

export default function Home() {
  return (
    <div className="flex mt-[24px] mb-[24px] mr-[24px] ml-[72px]">
      {/* left hand side elements */}
      <div className='w-[590px]'>
        <Image src={logo} alt='website logo' className='w-[163px] h-[40px]' />
        <div className='w-[525px]'>
          <h1 className='mt-[70px] text-[white] font-inter font-medium text-[40px] mb-[16px]'>Welcome back to Room.me!</h1>
          <p className=' text-[white] mt-[32px] text-[20px] mb-[32px]'>Room.me is an innovative video conference product that revolutionizes virtual meetings.</p>
        </div>

        <div className='flex flex-col'>
          <form action="">
            <div className='flex flex-col mb-[24px]'>
              <label className='text-[22px] text-[white] font-medium font-inter mb-[16px]'>Email Address</label>
              <input type="email" className='h-[62px] w-[592px] bg-[#1D1D21] text-[white] border border-[#383838] rounded-[8px] px-[24px] py-[16px]' placeholder='Enter your email address' />
            </div>

            <div className='flex flex-col mb-[24px]'>
              <label className='text-[22px] text-[white] font-medium font-inter mb-[16px]'>Password</label>
              <input type="password" className='h-[62px] w-[592px] bg-[#1D1D21] text-[white] border border-[#383838] rounded-[8px] px-[24px] py-[16px]' placeholder='Enter your email address' />
            </div>

            <div className='flex flex-col'>
              <button className='h-[62px] w-[592px] bg-linear-to-r from-[#8B80FF] to-[#5C53BC] text-[white] rounded-[8px] font-semibold cursor-pointer mb-[24px]'>Sign in</button>
            </div>

            <div className='flex bg-[white] h-[62px] w-[592px] rounded-[8px] justify-center cursor-pointer mb-[24px]'>
              <div className='flex items-center'>
                <Image src={google_svg} alt='google svg' className='w-[22px] h-[22px] mr-[16px]' />
              </div>
              <button className='text-[#1D1D21] text-[18px] font-semibold rounded-[8px] cursor-pointer'>Sign in with Google</button>
            </div>


            <div className='flex justify-between mb-[24px]'>
              <div className='flex items-center'>
                <input type="checkbox" className='w-[16px] h-[18px] bg-[#1D1D21] border border-[#383838] mr-[8px] rounded-[4px]' />
                <label className='text-white text-[14px]'>Remember for 30 days</label>
              </div>
              <button className='text-[#A89FFF] text-[14px] justify-end font-medium underline underline-offset-4 cursor-pointer'>Forgot Password</button>
            </div>

            <div className='flex justify-center text-white text-[16px]'>
              <span className='mr-[4px]'>Doesn&apos;t have account? </span>
              <button className='font-semibold underline underline-offset-2 cursor-pointer'>Sign Up</button>
            </div>
          </form>


        </div>
      </div>

      {/* right hand side elements */}
      <div>

      </div>
    </div>
  );
}
