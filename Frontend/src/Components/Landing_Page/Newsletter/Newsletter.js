export default function Newsletter() {
  
    // #f58d03 yellow

    // #007fac blue
  
  
  
  
    return (
        <>

    
    <div class="bg-[#007fac]">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-4 lg:px-8">
        <div class="px-6 py-6 md:px-12 lg:flex lg:items-center lg:px-16">
            <div class="lg:flex-1 xl:w-0">
                <h2 class="text-2xl font-extrabold tracking-tight text-[#f58d03] sm:text-3xl">Email Newsletter</h2>
                <p class="mt-3 max-w-3xl text-lg leading-6 text-white/90">Sign up for our email newsletter to stay up
                    to date.</p>
            </div>
            <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <form class="sm:flex" id="revue-form" target="_blank">
                    <input type="email" autocomplete="email" required="" class="w-full rounded-md border-[#f58d03] border-2 px-5 py-3 placeholder-gray-700 focus:outline-none focus:ring-0" placeholder="Enter your email"/><button type="submit" class="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-[#f58d03] px-5 py-3 text-base  text-[#007fac] font-semibold hover:text-white shadow hover:bg-black focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Subscribe</button>
                </form>
                <p class="mt-3 text-sm text-white">We will never send any spam emails. Promise.</p>
            </div>
        </div>
    </div>
</div>
        </>
    );
}
