import Logo from '../assets/afroSolar-logo.jpg'

const Header = () => {
  return (
    <header className="bg-[#302c42] backdrop-blur-2xl overflow-hidden pb-9 px-4 md:px-8">
   
    <section
        className="relative  flex flex-col-reverse md:flex-row mx-auto justify-between items-center gap-9 md:gap-4 max-w-[1300px] py-4  my-12">
        <svg width="736" height="423" className="absolute top-[50px] sm:top-[200px] sm:right-[-150px]" viewBox="0 0 736 423"
            fill="none">
            <path d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5" stroke="url(#paint0_linear_16_172)"
                stroke-width="6"></path>
            <defs>
                <linearGradient id="paint0_linear_16_172" x1="700.5" y1="-3.99998" x2="14.5" y2="361"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#343045"></stop>
                    <stop offset="0.213542" stop-color="#C0B7E8"></stop>
                    <stop offset="0.71875" stop-color="#8176AF"></stop>
                    <stop offset="1" stop-color="#343045"></stop>
                </linearGradient>
            </defs>
        </svg><svg className="absolute sm:right-28 md:right-6" width="383" height="846" viewBox="0 0 383 846" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845"
                stroke="url(#paint0_linear_16_173)" stroke-width="6"></path>
            <defs>
                <linearGradient id="paint0_linear_16_173" x1="16.5" y1="39.5" x2="363" y2="814"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.0104167" stop-color="#343045"></stop>
                    <stop offset="0.229167" stop-color="#C0B7E8"></stop>
                    <stop offset="0.776042" stop-color="#8176AF"></stop>
                    <stop offset="1" stop-color="#343045"></stop>
                </linearGradient>
            </defs>
        </svg><svg className="absolute -top-14 sm:right-7" width="416" height="675" viewBox="0 0 416 675" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672"
                stroke="url(#paint0_linear_16_171)" stroke-width="6"></path>
            <defs>
                <linearGradient id="paint0_linear_16_171" x1="365.5" y1="28" x2="110" y2="594"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#343045"></stop>
                    <stop offset="0.276042" stop-color="#8176AF"></stop>
                    <stop offset="0.739583" stop-color="#C0B7E8"></stop>
                    <stop offset="1" stop-color="#343045"></stop>
                </linearGradient>
            </defs>
        </svg>
        <div className="md:w-[520px] z-20">
            <h1 className="text-3xl md:text-[36px] lg:text-[46px] leading-14 text-white font-bold">
                <span className="text-[#C0B7E8]">Dive </span>Into The Depths
                Of<span className="text-[#C0B7E8]"> Virtual Reality</span></h1>
            <p className="text-base text-white mt-4 md:mt-9 mb-10 md:mb-16">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris
                eros in vitae .</p>
            <div className="flex gap-6 sm:gap-10">
                <button className="uppercase font-bold text-xs rounded-[40px] py-2 lg:py-4 px-4 lg:px-9 text-[#302c42]  bg-linear-r from-[#8176AF] to-[#C0B7E8]">BUILD YOUR WORLD</button></div>
        </div>
        <div className="p-4 z-20 bg-black rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] overflow-hidden bg-opacity-20">
            <img className="max-w-[490px] z-0 w-full" src={Logo} alt=""/>
        </div>
    </section>
    <div
        className="flex relative z-30 justify-center sm:justify-between gap-5 items-center mt-6 mx-auto  max-w-[1300px]  rounded-[90px] py-3 px-3 sm:p-8 lg:p-14 bg-linear-r from-[#211E2E] via-[#3A3456] to-[#211E2E]">
        
        <div className="flex sm:flex-1 gap-4 lg:gap-6"><svg width="42" height="63" viewBox="0 0 42 63" fill="none"
                xmlns="http://www.w3.org/2000/svg" className="flex-none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M21 0.833344C32.2758 0.833344 41.4166 9.9742 41.4166 21.25C41.4166 24.6593 40.5834 27.8717 39.1039 30.6983L21 62.0833L3.31538 31.4595C1.57498 28.4542 0.583313 24.9693 0.583313 21.25C0.583313 9.9742 9.72416 0.833344 21 0.833344ZM21 6.66668C12.9458 6.66668 6.41665 13.1959 6.41665 21.25C6.41665 23.566 6.95093 25.7882 7.96198 27.7943L8.45197 28.6893L21 50.4167L33.6366 28.5362C34.9071 26.3423 35.5833 23.8555 35.5833 21.25C35.5833 13.1959 29.0541 6.66668 21 6.66668ZM21 12.5C25.8325 12.5 29.75 16.4175 29.75 21.25C29.75 26.0825 25.8325 30 21 30C16.1675 30 12.25 26.0825 12.25 21.25C12.25 16.4175 16.1675 12.5 21 12.5ZM21 18.3333C19.3891 18.3333 18.0833 19.6392 18.0833 21.25C18.0833 22.8608 19.3891 24.1667 21 24.1667C22.6108 24.1667 23.9166 22.8608 23.9166 21.25C23.9166 19.6392 22.6108 18.3333 21 18.3333Z"
                    fill="#C0B7E8"></path>
            </svg>
            <div className="text-white">
                <h2 className="hidden sm:inline-block text-2xl font-bold ">Pay Us a Visit</h2>
                <p className="text-sm mt-3">Union St, Seattle, WA 98101, United States</p>
            </div>
        </div><span classNameName="h-28 w-[1px] hidden sm:inline-block bg-[#C0B7E8] "></span>
        <div classNameName="hidden sm:flex flex-1 gap-4 lg:gap-6">
            
        </div><span classNameName="hidden lg:inline-block h-28 w-[1px]  bg-[#C0B7E8] "></span>
        <div classNameName="hidden  lg:flex flex-1 gap-4 lg:gap-6">
            
        </div>
    </div>
</header>
  )
}

export default Header