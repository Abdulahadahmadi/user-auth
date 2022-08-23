<template lang="">
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow-lg  dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="data:image/png;base64,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" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Blog</span>
            </a>
            <div class="flex md:order-2">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Search</span>
                </button>
                <div class="hidden relative md:block">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
                </div>
                <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <span class="sr-only">Open menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
                <div class="relative mt-3 md:hidden">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
                </div>
                <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>