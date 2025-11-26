import React, { useState } from 'react'

function Contact() {
  const formData={
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    message:""
  }

  const[formDetails,setFormDetails]=useState(formData);
  const[buttonText,setButtonText]=useState('Send');
  const [status,setStatus]=useState({})

  const onformUpdate= (category,value)=>{
    setFormDetails({
      ...formDetails,
      [category]:value
    })
  }
  const hadleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <>

    <div id="connect">
        <h1 className="scroll-reveal mt-30 text-4xl text-center font-bold text-gradient bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-700 bg-clip-text text-transparent mt-8">
     Get in Touch
      </h1>

      <div className="flex items-center justify-center mt-10">

        <div className="formcard w-180 mt-10 p-5 flex items-center justify-center">
        <form onSubmit={hadleSubmit}>
         <div className="flex gap-15 mt-10">
           <div>
            <label className='text-white'>First Name*</label>
          <br />
          <input type="text" 
          className="w-70 mt-2 px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder='First Name' onChange={(e)=>onformUpdate('firstName',e.target.value)}
          value={formDetails.firstName}/>
          </div>
          <div>
             <label className='text-white '>Last Name*</label>
             <br />
              <input type="text" 
              className='w-70 mt-2 mb-10 px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
               placeholder='Last Name' onChange={(e)=>onformUpdate('lastName',e.target.value)}
          value={formDetails.lastName}/>
          <br />
          </div>
         </div>
         
         <label className='text-white'>Email*</label>
             <br />
          <input type="email" 
          className='w-155 mt-2 mb-10 px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
           placeholder='Email' onChange={(e)=>onformUpdate('email',e.target.value)}
          value={formDetails.email}/>
 <br />
          <label className='text-white '>Phone No</label>
             <br />
          <input type="tel"
          className='w-155 mt-2 mb-10 px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Phone No.' onChange={(e)=>onformUpdate('phone',e.target.value)}
          value={formDetails.phone}/>
          <br />
             <label className='text-white '>Message*</label>
             <br />
          <textarea  
           className='w-155 h-50 mt-2 mb-10 px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Message' onChange={(e)=>onformUpdate('message',e.target.value)}
          value={formDetails.message}/>
       <div className="flex items-center justify-center">
           <button type='submit' 
          
          className="btn bg-blue-600 hover:bg-blue-500 transition-all px-6 py-2 rounded-md font-semibold cursor-pointer
          text-white"
          >Send</button>
       </div>
          {
            status.message &&
            <p className={status.success === false ? "danger" : "Success" }>{status.message}</p>
          }
          
        </form>
</div>
      </div>
    </div>

      
    </>
  )
}

export default Contact
