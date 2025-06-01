import React from 'react'

const FirstPage = () => {
  return (
    <div >

           <div className='pb-10 text-left  w-full'>Get new e-PAN</div>
        <div className=' bg-white     rounded-[30px] p-20'>
          
        <div className=' flex flex-col   gap-[10px]'>
<p className='pb-10'><strong>Remember:</strong>Its and Adhar e-KYC base process and allotment of PAN is free of cost.A pdf file of PAN will be generated and issued to the applicant.help?</p>
<p className='font-semibold text-start '>Enter your 12 didgit Adadhar Number for PAN allotment<span className='text-red-500'>*</span></p>
        <input
         type="number"
         className='border rounded-md w-40 px-4 py-2'
         placeholder="aadhar number"
         />
         
         <div className='flex gap-4 items-center  pb-10'>
<input type='checkbox' />
<span>I confirm that <span className='text-red-500'>*</span></span>
         </div>
         <ul>
  <li>1.I have never been alloted a permanent account number</li>
  <li>2.My active mobile number is linked with aadhar.</li>
  <li>3.My complete dat eof birth (DD-MM-YYYY) is available on aadhar card.</li>
  <li>4.I am not minor as an application date of Permanant Account Number </li>
         </ul>
       
        </div>
        </div>
       
    </div>
  )
}

export default FirstPage