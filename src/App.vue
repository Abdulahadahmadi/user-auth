<script setup>

</script>

<template>
    <div>
        <nav
        class="bg-white border-gray-200 px-2 sm:px-4 py-2 rounded shadow-lg dark:bg-gray-900"
        >
        <div
            class="container flex flex-wrap justify-between items-center mx-auto"
        >
            <a href="#" class="flex items-center">
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEX///8AAACbm5vc3Nz09PQtLS25ubm0tLTKysrx8fHo6OghISHQ0NCqqqr5+fnHx8c0NDRvb29bW1tNTU2Hh4ccHBykpKR/f39HR0cJCQl0dHQYGBhBQUG/v79SUlJnZ2eQkJDSybsPAAADaUlEQVRoge2b57qjIBCGNWo8Gkui6aac+7/KVZihSdhoJOw+D98vKc4rMlQxCLy8vL6rvC5Xy6us87+Bq3uzCe1o09wrE7poLYGp2uI1emWVPGj1Cr23jg7DvbnU+7SIllaR7i+GkheQZnSID1RB2TR1XhE32xi84WMVpAm148LdXz3UknDCuI/iG6MbLiTy2hs1Nifvw1ZdoypSr2oPVxsawIIizbhWIsshMrXOTgdMqUSu7HvaoELnVYQdWWdHnu3Znu3Znu3Znu3Znv3fs+Mw4WqvqTSdz1ZtImkb97HXZEskmS1o5AZn3++xZXVXTs+3oZqaBTDDVyfaR4hEy3PYYXj5gaTqMUo7DOwcAkfRbEPjbvFHbLaU+RmnEHZ8o4GHaBYyXDE8lx3mPKeGHZwgJFiF/QS+2JrNbszsNYQKxWqv7GM2tarbjCK2MwgIpqG6z2xtPYV9KnudEgwJ7GOWc9GbzuLrGVTBfb8sZgqb7k/kOxraCmzNevkXbmKlRLfkC+4p7DUUgBapi4zsGm7C1sgeJmZZZrARWBjZ2KLY9gVWN88xh73mJTKwYTf2AS9d43z22NgEwPdGdWCTjV0J7KBpOht77AD2TElbZB2/2Mkuw14HGgGNblvqBpdl2Nv2POiWiVZSuI0YukNAHFSXYaMkdiTedqXXSaVmsMMOYFrx7C+rG7/+Chs7376sETie5JQ22cI4ipfSBNQmGyu8DIInvTpXo/TF2MqGNLSyfhw90KvT+Nk+ZpeZOHQzQV92YX2cvGFtsV/jQ3aBU2b54ayyM/TuJ3v5X2PjmN1AdSufIuyyca6C7/5zdvo2O5LZlSZ1Ipu678U8X6OS0E8lcQa7oB6UZG+wdyL7qCROYadVHMfZsQMHYjkN7KPIVlf0U9jbYYju0FIqsNsd1zVWzaPUB5u9JiJLfN2a6CJ16kKCWt3z2XeeU9ZBYp94wmhiNZcN3cR6nCKzcxafqOi5bOyh8m6UJLO5t6kfPmeyE+7XqZqmsvHghOaL9nR216Si9TpR2J3CDsq+N9/oWuFb+2viQYnxiRz1KIUGot+r+9f39jzbsz3bsz3bsz3bsz37FdvRuT2X5xVdntN0eT7V5blcp+eRXZ7Ddnn+3Om5e6f/Gzj9z8Lp/yVO/6sZ5Ox/Ii8vr4X1B5ikL1M/jYVKAAAAAElFTkSuQmCC"
                class="ml-10 h-6 sm:h-9"
                alt="dev blog logo"
            />
            </a>
            <div class="flex md:order-2">
            <router-link
            to="/login"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Login
            </router-link>
            <button
                data-collapse-toggle="navbar-cta"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                ></path>
                </svg>
            </button>
            </div>
            <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
            >
            <ul
                class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
                <li>
                <router-link
                    to="/"
                    class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                    >Home</router-link
                >
                </li>
                <li>
                <router-link
                    to="/blog"
                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >Blog</router-link
                >
                </li>
                <li>
                <router-link
                    to="/posts"
                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >Posts</router-link
                >
                </li>
                <li>
                <router-link
                    to="/register"
                    class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ring-1 dark:border-gray-700"
                    >Register</router-link
                >
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  <router-view/>
</template>
