import React from 'react';

function ContactUs() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Contact us
                    </h1>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                        We'd love to talk about how we can help you.
                    </p>
                </div>
            </div>

            <div className="max-w-lg mx-auto mt-12">
                <div className="flex flex-col p-4 border rounded-xl sm:p-6 lg:p-8 dark:border-gray-700">
                    <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Fill in the form
                    </h2>

                    <form>
                        <div className="grid gap-4 lg:gap-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                                <div>
                                    <label htmlFor="hs-firstname-contacts-1" className="block text-sm font-medium text-gray-700 dark:text-white">First Name</label>
                                    <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md input input-bordered focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                                </div>

                                <div>
                                    <label htmlFor="hs-lastname-contacts-1" className="block text-sm font-medium text-gray-700 dark:text-white">Last Name</label>
                                    <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md input input-bordered focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                                <div>
                                    <label htmlFor="hs-email-contacts-1" className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
                                    <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autoComplete="email" className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md input input-bordered focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                                </div>

                                <div>
                                    <label htmlFor="hs-phone-number-1" className="block text-sm font-medium text-gray-700 dark:text-white">Phone Number</label>
                                    <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md input input-bordered focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="hs-about-contacts-1" className="block text-sm font-medium text-gray-700 dark:text-white">Details</label>
                                <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md textarea textarea-bordered textarea-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></textarea>
                            </div>
                        </div>

                        <div className="grid mt-6">
                            <button type="submit" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white transition bg-blue-600 border border-transparent rounded-md gap-x-3 hover:bg-blue-700 lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800">Send inquiry</button>
                        </div>

                        <div className="mt-3 text-center">
                            <p className="text-sm text-gray-500">
                                We'll get back to you in 1-2 business days.
                            </p>
                        </div>
                    </form>
                </div>
            </div>

           
        </div>
    );
}

export default ContactUs;
