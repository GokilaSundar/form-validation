import { Dialog, Transition } from '@headlessui/react'
import { Field, Form, Formik } from 'formik'
import { Fragment } from 'react'
const FormModel = ({ enable,onClose }) => {


    return (
        <>

        <Transition appear show={enable } as={Fragment}>
                <Dialog as="div" className="relative z-10"  onClose={onClose
          }>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Drug verification
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <Formik initialValues={{
                                            region: "",
                                            date: "",
                                            subRegion: "",
                                            drug: "",
                                            quantity: "",
                                            seizurePlace: "",
                                            seizureLocation: "",
                                            transportation: "",
                                            sourceType: "",
                                        }}
                                            onSubmit={(values, { resetForm }) => {
                                                console.log(values)
                                                resetForm()
                                                   onClose()
                                            }}
                                        >
                                            <Form>
                                                <div className="grid grid-cols-2  py-5 gap-4">
                                                    <div className='flex flex-col gap-2'>
                                                        <label className="text-base font-normal">Region</label>
                                                        <Field name="region" type="text" className="px-5 py-1 border border-slate-200 rounded-md" />
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <label className="text-base font-normal">Date</label>
                                                        <Field name="date" type="date" className="px-5 py-1 border border-slate-200 rounded-md" />
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <label className="text-base font-normal">Sub-Region</label>
                                                        <Field name="subRegion" type="text" className="px-5 py-1 border border-slate-200 rounded-md" />
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <label className="text-base font-normal">Drug</label>
                                                        <Field name="drug" type="text" className="px-5 py-1 border border-slate-200 rounded-md" />
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <label className="text-base font-normal">Drug Quantity</label>
                                                        <Field name="quantity" type="text" className="px-5 py-1 border border-slate-200 rounded-md" />
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <label className="text-base font-normal">Place of Seizure</label>
                                                        <Field name="seizurePlace" type="text" className="px-5 py-1 border border-slate-200 rounded-md" />
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <label className="text-base font-normal">Site location of seizure</label>
                                                        <Field name="seizureLocation" type="text" className="px-5 py-1 border border-slate-200 rounded-md" />
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <label className="text-base font-normal">Transportation</label>
                                                        <Field name="transportation" type="text" className="px-5 py-1 border border-slate-200 rounded-md" />
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <label className="text-base font-normal">Source Type</label>
                                                        <Field name="sourceType" type="text" className="px-5 py-1 border border-slate-200 rounded-md" />
                                                    </div>
                                                    <button 
                                                        type="submit"
                                                        className="inline-flex col-span-2 mt-6 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </Form>
                                        </Formik>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default FormModel
