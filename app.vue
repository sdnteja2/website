<template>
  <div>
    <NavBar />
    <UCard>
      INI HOME
    </UCard>
    <div>
      <!-- Hero -->
      <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div class="max-w-2xl text-center mx-auto">
            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
              Designed for you to get more <span class="text-merah-600">simple</span>
            </h1>
            <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              Build your business here. Take it anywhere.
            </p>
          </div>

          <div class="mt-10 relative max-w-5xl mx-auto">
            <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80')] bg-no-repeat bg-center bg-cover rounded-xl" />

            <div class="absolute inset-0 size-full">
              <div class="flex flex-col justify-center items-center size-full">
                <a class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                  <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  Play the overview
                </a>
              </div>
            </div>

            <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
              <div class="bg-white size-48 rounded-lg dark:bg-neutral-900" />
            </div>

            <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-merah-600 to-cyan-400 p-px rounded-full">
              <div class="bg-white size-48 rounded-full dark:bg-neutral-900" />
            </div>
          </div>
        </div>
      </div>
      <!-- End Hero -->
      <!-- Icon Blocks -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
          <!-- Icon Block -->
          <a class="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            <div class="flex justify-center items-center size-12 bg-merah-600 rounded-xl">
              <svg class="shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
            </div>
            <div class="mt-5">
              <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Responsive</h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">Responsive, and mobile-first project on the web</p>
              <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-merah-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                Learn more
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </div>
          </a>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <a class="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            <div class="flex justify-center items-center size-12 bg-merah-600 rounded-xl">
              <svg class="shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg>
            </div>
            <div class="mt-5">
              <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Customizable</h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">Components are easily customized and extendable</p>
              <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-merah-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                Learn more
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </div>
          </a>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <a class="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            <div class="flex justify-center items-center size-12 bg-merah-600 rounded-xl">
              <svg class="shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            </div>
            <div class="mt-5">
              <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Documentation</h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">Every component and plugin is well documented</p>
              <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-merah-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                Learn more
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </div>
          </a>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <a class="group flex flex-col justify-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            <div class="flex justify-center items-center size-12 bg-merah-600 rounded-xl">
              <svg class="shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
            </div>
            <div class="mt-5">
              <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">24/7 Support</h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">Contact us 24 hours a day, 7 days a week</p>
              <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-merah-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                Learn more
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </div>
          </a>
          <!-- End Icon Block -->
        </div>
      </div>
      <!-- End Icon Blocks -->
    </div>

    <!-- End Card Section -->
  </div>
</template>
