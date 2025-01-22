import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])

    // getting current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(currentDate.getDate() + i)

      let endTime = new Date()
      endTime.setDate(today.getDate() + 1)
      endTime.setHours(21, 0, 0, 0)
      if (today.getDay() === currentDate.getDate()) {
        // Add your logic here
      }
    }
  }

  useEffect(() => {
    fetchDocInfo()
    getAvailableSlots()
  }, [docId])

  return docInfo && (
    <div>
      {/*------doc details------*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm-max-w-72 rounded-lg' src={docInfo.image} alt=''/> 
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
          {/*-----doc info: name,degree, experience-----*/}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
             <img className='w-5' src={assets.verified_icon} alt=''/>
              </p>
              <div className='flex items-center gap-3 text-sm mt-1 text-gray-600'>
                <p>{docInfo.degree}- {docInfo.speciality}</p>
                <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
              </div>
              {/*------Doctor about-------*/}
              <div>
                <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt=''/></p>
                <p className='text-sm text-gray-500 max-w-[700] mt-1'>{docInfo.about}</p>
              </div>
              <p className='text-gray-500 font-medium mt-4'>Appointment fee:
                 <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Appointment