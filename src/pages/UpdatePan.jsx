import React from 'react'

const UpdatePan = () => {
  return (
   <div className='min-w-[80%]'>
        <p className='pb-[20px]'>Get New E-pan</p>
  <div className=' bg-white    rounded-[30px] '>
          <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
<div className='w-[50%] flex items-center '>
Photo
</div>
<div className='w-[50%]'>
<div className='h-[150px] w-[150px] rounded-full bg-gray-400'>

</div>
</div>
          </div>
             <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
<div className='w-[50%] flex items-center '>
Aadhar Number 
</div>
<div className='w-[50%]'>
xxxx xxxx x545
</div>
          </div>
              <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
<div className='w-[50%] flex items-center '>
Name 
</div>
<div className='w-[50%]'>
xxx
</div>
          </div>
              <div className='w-[100%] flex border-b-4 border-[#ebebea] py-4 px-4'>
<div className='w-[50%] flex items-center '>
Date of birth
</div>
<div className='w-[50%]'>
xxx
</div>
          </div>
    
        </div>
        <div className='mt-[20px] flex gap-2 items-center relative '>
   <input type='checkbox' className='top-[5px] absolute ' /><span className='ml-[20px]'>I accept that</span><span className='text-red-500'>*</span>
        </div>
     <div>
        <ul>
            <li> <span className='mr-1'>1.</span>The above details are correct and I hereby certify that I do not have any PAN allotted to me.
﻿﻿﻿ In case I am found be in possession of more than one PAN then I shall be liable for penalty of Rs. 10,000/-under section 272B(1).
﻿﻿﻿ .</li>
            <li><span className='mr-1'>2.</span>I agree that Permanent Account Number may be allotted based on Aadhaar as per with Rule 114 (1B) of
Income-Tax Rules 1962</li>
        </ul>
     </div>
    </div>
   
  )
}

export default UpdatePan