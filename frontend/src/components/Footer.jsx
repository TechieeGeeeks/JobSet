import MailIcon from '../img/mail_icon.png'
import PhoneIcon from '../img/phone_icon.png'
import GPSIcon from '../img/location.png'
import InstagramIcon from '../img/instagram_icon.png'
import GithubIcon from '../img/github_icon.png'
import TwitterIcon from '../img/twitter_icon.png'
import LinkedInIcon from '../img/linkedin_icon.png'


const Footer = () => {
  return (
    <div>
      {/* For Desktops */}
      <div className='hidden w-screen md:flex flex-col bg-lightPrimary mt-12'>
        <div className="flex items-center justify-center">
          <div className='absolute hidden bg-lightCard py-10 px-64 rounded-2xl md:flex items-center justify-center gap-9 shadow-2xl'>
            <div className='text-xl'>
              Subscribe To Our Newsletter
            </div>
            <div className='flex gap-1'>
              <input type="text" className='p-4 border border-black rounded-lg' placeholder='Enter Your Mail' />
              <button className='p-4 rounded-lg bg-lightPrimary text-lightCard'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className=' md:mt-40 p-16'>
          <div className="flex flex-col items-center justify-center">
            <div className="text-lightCard md:text-2xl">
              JobSet
            </div>
            <div className="text-footerSubtitle font-extralight md:text-xl">
              Job set toh life set
            </div>
          </div>
          <div className="border border-footerSubtitle border-t-[0.1px] border-b-[0.1px] border-l-0 border-r-0 py-16 mt-9 flex items-center justify-center gap-36 text-xl font-medium text-lightCard">
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src={MailIcon} alt="mail_icon" className='w-7' />
              <div>Mail</div>
              <div className='text-sm font-thin'>
                jobset@support.com
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src={PhoneIcon} alt="mail_icon" className='w-7' />
              <div>Call</div>
              <div className='text-sm font-thin'>
                +91 123457896
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src={GPSIcon} alt="mail_icon" className='w-7' />
              <div>Find Us</div>
              <div className='text-sm font-thin'>
                Thane(west)
              </div>
            </div>
          </div>
          <div className='mt-9 flex justify-between text-lightCard'>
            <div>Copyright @2023. All rights reserved.</div>
            <div className='flex gap-2'>
              <img src={GithubIcon} alt="github_icon" className='w-10' />
              <img src={InstagramIcon} alt="instagram_icon" className='w-10' />
              <img src={LinkedInIcon} alt="linkedin_icon" className='w-10' />
              <img src={TwitterIcon} alt="twitter_icon" className='w-10' />
              </div>
          </div>
        </div>
      </div>


      {/* For Mobiles */}
      <div className='md:hidden bg-lightPrimary p-8'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-lightCard text-xl'>JobSet</p>
          <p className='text-footerSubtitle font-extralight text-sm'>Job set tho life set</p>
        </div>

        <div className='flex items-center justify-center mt-6 text-lightCard gap-3'>
        <div className='flex flex-col items-center justify-center gap-2'>
              <img src={MailIcon} alt="mail_icon" className='w-5' />
              <div>Mail</div>
              <div className='text-[10px] font-thin'>
                jobset@support.com
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src={PhoneIcon} alt="mail_icon" className='w-5' />
              <div>Call</div>
              <div className='text-[10px] font-thin text-center'>
                +91 123457896
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src={GPSIcon} alt="mail_icon" className='w-5' />
              <div>Find Us</div>
              <div className='text-[10px] font-thin'>
                Kopar Khairane
              </div>
            </div>


        </div>
        <div className='mt-9 text-[12px] flex items-center justify-between text-lightCard'>
            <div>Copyright @2023. All rights reserved.</div>
            <div className='flex gap-2'>
              <img src={GithubIcon} alt="github_icon" className='w-5' />
              <img src={InstagramIcon} alt="instagram_icon" className='w-5' />
              <img src={LinkedInIcon} alt="linkedin_icon" className='w-5' />
              <img src={TwitterIcon} alt="twitter_icon" className='w-5' />
            </div>
              
          </div>
      </div>
    </div>

  );
}

export default Footer;
