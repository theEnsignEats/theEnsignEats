export default function Cart() {
    return(
        <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            {/*// <!-- Background backdrop, show/hide based on slide-over state. -->*/}
            <div class="fixed inset-0"></div>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                        {/*// <!--*/}
                        {/*//   Slide-over panel, show/hide based on slide-over state.*/}
                        {/*//*/}
                        {/*//   Entering: "transform transition ease-in-out duration-500 sm:duration-700"*/}
                        {/*//     From: "translate-x-full"*/}
                        {/*//     To: "translate-x-0"*/}
                        {/*//   Leaving: "transform transition ease-in-out duration-500 sm:duration-700"*/}
                        {/*//     From: "translate-x-0"*/}
                        {/*//     To: "translate-x-full"*/}
                        {/*// -->*/}
                        <div class="pointer-events-auto w-screen max-w-md">
                            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div class="p-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">Team</h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button type="button" class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-amber-500">
                                                <span class="absolute -inset-2.5"></span>
                                                <span class="sr-only">Close panel</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-gray-200">
                                    <div class="px-6">
                                        {/*// <!-- Tab component -->*/}
                                        <nav class="-mb-px flex space-x-6">
                                            {/*// <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->*/}
                                            <a href="#" class="whitespace-nowrap border-b-2 border-amber-500 px-1 pb-4 text-sm font-medium text-amber-600">All</a>
                                            <a href="#" class="whitespace-nowrap border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Online</a>
                                            <a href="#" class="whitespace-nowrap border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Offline</a>
                                        </nav>
                                    </div>
                                </div>
                                <ul role="list" class="flex-1 divide-y divide-gray-200 overflow-y-auto">
                                    <li>
                                        <div class="group relative flex items-center px-5 py-6">
                                            <a href="#" class="-m-1 block flex-1 p-1">
                                                <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                                                <div class="relative flex min-w-0 flex-1 items-center">
                      <span class="relative inline-block flex-shrink-0">
                        <img class="h-20 w-28 " src="/Shake%20Shack%20Cheeseburger%20Menu%20Background%20Removed.png" alt=""/>
                        {/*// <!-- Online: "bg-green-400", Offline: "bg-gray-300" -->*/}
                            <span class="absolute right-0 top-0 block h-6 w-6 rounded-full bg-amber-500 ring-2 ring-white px-2" aria-hidden="true">1</span>
                      </span>
                                                    <div class="ml-4 truncate">
                                                        <p class="truncate text-sm font-medium text-gray-900">Cheeseburger</p>
                                                        <p class="truncate text-sm text-gray-500">$5.99</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="relative ml-2 inline-block flex-shrink-0 text-left">
                                                <button type="button" class="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
                                                    <span class="absolute -inset-1.5"></span>
                                                    <span class="sr-only">Open options menu</span>
                                                    <span class="flex h-full w-full items-center justify-center rounded-full">
                        <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                        </svg>
                      </span>
                                                </button>

                                                {/*// <!--*/}
                                                {/*//   Dropdown panel, show/hide based on dropdown state.*/}
                                                {/*//*/}
                                                {/*//   Entering: "transition ease-out duration-100"*/}
                                                {/*//     From: "transform opacity-0 scale-95"*/}
                                                {/*//     To: "transform opacity-100 scale-100"*/}
                                                {/*//   Leaving: "transition ease-in duration-75"*/}
                                                {/*//     From: "transform opacity-100 scale-100"*/}
                                                {/*//     To: "transform opacity-0 scale-95"*/}
                                                {/*// -->*/}
                                                <div class="absolute right-9 top-0 z-10 w-48 origin-top-right rounded-md bg-white/80 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-0-button" tabindex="-1">
                                                    <div class="py-1" role="none">
                                                        {/*// <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->*/}
                                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="options-menu-0-item-0">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div class="flex items-center justify-between px-6 py-4 bg-gray-100">
                                                <p class="text-sm font-medium text-gray-900">Total</p>
                                                <p class="text-sm text-gray-500">$5.99</p>
                                            </div>
                                        </div>
                                    </li>

                                    {/*// <!-- More people... -->*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}