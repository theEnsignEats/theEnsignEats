export default function Hero() {
    return (
        <div className="relative bg-amber-400">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <img
                            className="h-11"
                            src="/Burger%20Logo%20ensign%20eats%20on%20the%20right%20transparent.png"
                            alt="Your Company"
                        />
                        <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Feeling hungry? Come check our newest menu item{' '}
                                <a href="#" className="whitespace-nowrap font-semibold text-orange-600">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                            Best food at Ensign College
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Let us treat you to a FREE, tangy, sweet Golden BBQ Sandwich in the form of 600 bonus points when you spend $10.
                            See terms
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Order Pick-up
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Order Delivery <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                    <img
                        className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                        src="/PopeyesFood.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
