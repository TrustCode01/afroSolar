import React from 'react'

function FeaturesShow() {
  return (
    <section id="features" className=" mx-auto px-4 space-y-6  bg-gray-50 dark:bg-gray-800 text-white py-8 md:py-16 lg:py-20">
        <div className="container">

    <div className="mx-auto flex mb-6 max-w-280 flex-col items-center space-y-4 text-center">

        <h2 className="font-bold p-6 text-3xl leading-[1.1] sm:text-3xl md:text-5xl bg-linear-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">Why you must choose us</h2>

        <p className="max-w-[85%] leading-normal text-white sm:text-lg sm:leading-7">
        AfroSolar Zimbabwe has been the heart beat of the solar industry for decades. We offer great morden solar systems all over Zimbabwe at competitive amounts. We install every solar features from  wiring to advanced solar systems with monitoring control stystems. Try us and you will experince the hand of our expertise.
        </p>

    </div>

    <div class="mx-auto  mt-4 grid justify-center gap-4 sm:grid-cols-2 md:max-w-280 md:grid-cols-3">

        <article
            className="relative overflow-hidden rounded-lg border border-gray-100 bg-transparent select-none hover:shadow hover:shadow-blue-200 p-2">
               <img src='' alt="" className='' />
            <div className="flex  flex-col justify-between rounded-md p-4">
                <div className="space-y-2">
                <h3 className="font-bold pt-2 text-lg">12 Years+ Experince</h3>
                    <p className="text-md text-white">We have more than 12 years experience in the solar and electrical engineering industry</p>
                    
                </div>
            </div>
        </article>

        <article
            className="relative overflow-hidden rounded-lg border border-gray-100 bg-transparent select-none hover:shadow hover:shadow-blue-200 p-2">
            <div className="flex  flex-col justify-between rounded-md p-4">
                 <img src='' alt="" />
                <div className="space-y-2">
                    <h3 className="font-bold text-lg pt-2">Over 300 Projects Done</h3>
                    <p className="text-md text-white">We are have done more than 300 projects all over Zimbabwe</p>
                </div>
            </div>
        </article>

        <article
            className="relative overflow-hidden rounded-lg border border-gray-100 bg-transparent select-none hover:shadow hover:shadow-blue-200 p-2">
            <div className="flex  flex-col justify-between rounded-md p-4">
                <img src='' alt="" />
                <div className="space-y-2">
                    <h3 className="font-bold text-lg pt-2">Trusted by many</h3>
                    <p className="text-md text-white">We are trusted by reputable companies and individuals all over Zimbabwe</p>
                </div>
            </div>
        </article>

        <article
            className="relative overflow-hidden rounded-lg border border-gray-100 bg-transparent select-none hover:shadow hover:shadow-blue-200 p-2">
            <div className="flex  flex-col justify-between rounded-md p-4">
            <img src='' alt="" />
                <div className="space-y-2">
                    <h3 className="font-bold text-lg pt-2">Nation wide Service</h3>
                    <p className="text-md text-white">We can work anywhere across Zimbabwe. Both rural and urban areas are covered</p>
                </div>
            </div>
        </article>

        <article
            className="relative overflow-hidden rounded-lg border border-gray-100 bg-transparent select-none hover:shadow hover:shadow-blue-200 p-2">
            <div className="flex  flex-col justify-between rounded-md p-4">
            <img src="" alt="" />
                <div className="space-y-2">
                    <h3 className="font-bold text-lg pt-2">Quality Guaranteed</h3>
                    <p className="text-md text-white">We offer Quality products and services to our clients</p>
                </div>
            </div>
        </article>

        <article
            className="relative overflow-hidden rounded-lg border border-gray-100 bg-transparent select-none hover:shadow hover:shadow-blue-200 p-2">
            <div className="flex h flex-col justify-between rounded-md p-4">
             
                <img src='' alt="" />
                <div className="space-y-2">
                    <h3 className="font-bold text-lg pt-2" >Attention to every detail</h3>
                    <p className="text-md text-white">We listen to our clients needs so that we offer them what they need.</p>
                </div>
            </div>
        </article>

    </div>
    </div>

</section>
  )
  
}

export default FeaturesShow