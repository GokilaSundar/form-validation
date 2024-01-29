"use client"
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import FormModel from '../component/FormModel'

const records = [
  { caseNo: 1,key:"covai", place: "coimbatore", description: "case number one" },
  { caseNo: 2, key:"tirupr", place: "tiruppur", description: "case number two" },
  { caseNo: 3, key:"selam", place: "selam", description: "case number three" },
  { caseNo: 4, key:"madurai", place: "madurai", description: "case number four" },
  { caseNo: 5, key:"erode", place: "erode", description: "case number five" },
  { caseNo: 6, key:"chennai", place: "chennai", description: "case number six" },
]

const page = () => {
  const [enabled, setEnabled] = useState(records.map(()=>false))
const handleChange=(index)=>{
    const changedData=[...enabled]
    changedData[index]=!changedData[index]
    setEnabled(changedData)
}
  return (
    <div className="container mx-auto">
      <h1 className='text-2xl font-semibold py-5'>Record of the Cases</h1>
      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="">
              <th className="py-2 px-4 border-b hidden sm:table-cell text-start">Case No</th>
              <th className="py-2 px-4 border-b hidden sm:table-cell text-start">Place</th>
              <th className="py-2 px-4 border-b hidden sm:table-cell text-start">Description</th>
              <th className="py-2 px-4 border-b hidden sm:table-cell text-start">Is Verify</th>
            </tr>
          </thead>
          <tbody className='divide-y-2 divide-slate-100'>
            {records?.map((item,index) => (
              <tr key={index}>
                <td className="py-2 px-4 sm:border-b border-0 block sm:table-cell">
                  <div className='flex gap-7'>
                    <h1 className='block sm:hidden font-bold'>Case No</h1>
                   {item?.caseNo}
                  </div>
                </td>
                <td className="py-2 px-4 sm:border-b border-0 block sm:table-cell">
                  <div className='flex gap-7'>
                    <h1 className='block sm:hidden font-bold'>Place</h1>
                    {item?.place}</div></td>
                <td className="py-2 px-4 sm:border-b border-0 block sm:table-cell">
                  <div className='flex gap-7'>
                    <h1 className='block sm:hidden font-bold'>Description</h1>
                    {item?.description}</div></td>
                <td className="py-2 px-4 sm:border-b border-0 block sm:table-cell">
                  <div className='flex gap-7'>
                    <h1 className='block sm:hidden font-bold'>Is Verified</h1>
                    <div>
                      <Switch
                        checked={enabled[index]}
                        onChange={()=>handleChange(index)}
                        className={`${enabled[index] ? 'bg-teal-900' : 'bg-teal-700'}
relative inline-flex h-[28px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                      >
                        <span
                          aria-hidden="true"
                          className={`${enabled[index] ? 'translate-x-8' : 'translate-x-0'}
pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
           </tbody>
        </table>
      </div>
      {records.map((item, index) => (
        <FormModel key={index} enable={enabled[index]} onClose={()=>handleChange(index)} />
      ))}
    </div>
  )
}

export default page