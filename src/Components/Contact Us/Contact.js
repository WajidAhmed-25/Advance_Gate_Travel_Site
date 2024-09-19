export default function Travel_Contact(){

//   #f58d03 yellow

// #007fac blue

    return(

        <>
        
        
        <h2 className="pb-2 mt-12 text-4xl font-bold text-center text-[#007fac]">Message us Now !!</h2>
  <div class="w-[300px] h-1 mx-auto mt-2 mb-4  bg-[#f58d03]"></div>

  <p className="mb-6 text-xl text-center text-gray-500">We Offer 24/7 Customer support</p>
        
        <div class="flex flex-wrap justify-center items-center h-auto  pl-[6%] pt-[3%] mb-12" >
            
        <div class="w-full md:w-2/5 p-4">




          <h2 class="text-xl md:text-6xl font-semibold mb-5 text-[#007fac]">GET IN TOUCH!</h2>
          <form class="space-y-4">
            <div>
              <input type="text" id="fullName" name="fullName" placeholder='Full Name' class="mt-1 p-4 w-full rounded-md border-2 border-[#007fac]/50" />
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder='Email' class="mt-1 p-4 w-full border-2 border-[#007fac]/50 rounded-md" />
            </div>
            <div>
              <textarea id="message" name="message" placeholder='Message' class="mt-1 p-4 w-full  rounded-md border-2 border-[#007fac]/50" rows="4"></textarea>
            </div>
            <button type="submit" class="px-6 py-4 text-lg rounded-md bg-[#007fac] text-white tracking-wide hover:bg-[#007eaccc] md:ml-[80%] ml-[65%] font-bold">Submit</button>
          </form>
        </div>
        <div class="w-full md:w-1/2 p-4 flex justify-center">
          <div class="rounded-full overflow-hidden w-[35rem] h-[35rem] border-[#f58d03] border-2">
            <iframe
              class="w-[35rem] h-[35rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d-74.25986568785095!3d40.697670063849574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMTUnMzUuNyJX!5e0!3m2!1sen!2sus!4v1652901957916"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
        
        
        
        
        
        
        
        </>
    )
}