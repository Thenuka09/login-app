import Image from 'next/image';
import logo from '../../public/Logo.png';

export default function Home() {
  return (
    <div className="flex mt-[24px] mb-[24px] mr-[24px] ml-[72px]">
      {/* left hand side elements */}
      <div className='w-[590px]'>
        <Image src={logo} alt='website logo' className='w-[163px] h-[40px]'/>
        <div className='w-[525px]'>
          <h1 className='mt-[70px] text-[white] font-inter font-medium text-[40px] mb-[16px]'>Welcome back to Room.me!</h1>
          <p className=' text-[white] mt-[32px] text-[20px]'>Room.me is an innovative video conference product that revolutionizes virtual meetings.</p>
        </div>

        <div className='flex flex-col'>
          <form action="">
            <div className='flex flex-col'>
              <label>Email Address</label>
              <input type="email" />
            </div>

            <div className='flex flex-col'>
              <label>Password</label>
              <input type="password" />
            </div>

            <div className='flex flex-col'>
              <button>Sign in</button>
              <button>Sign in with Google</button>
            </div>

            
          </form>

          <div>
            <input type="checkbox"/>
            <label >Remember for 30 days</label>

            <button>Forgot Password</button>

          </div>

          <div>
            <span>Does not have an account?</span>
            <button>Sign Up</button>
          </div>


          


        </div>
      </div>

      {/* right hand side elements */}
      <div>

      </div>
    </div>
  );
}
