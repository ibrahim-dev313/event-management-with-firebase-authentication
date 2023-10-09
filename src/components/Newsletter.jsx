
const Newsletter = () => {
    return (
        <div>
            <div className="max-w-6xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-16">
                <div className="max-w-xl mx-auto text-center">
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Sign up to our newsletter</h2>
                    </div>

                    <form>
                        <div className="flex flex-col items-center gap-2 mt-5 lg:mt-8 sm:flex-row sm:gap-3">
                            <div className="w-full">
                                <label htmlFor="hero-input" className="sr-only">Search</label>
                                <input type="text" id="hero-input" name="hero-input" className="block w-full px-4 py-3 border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter your email" />
                            </div>
                            <a className="inline-flex items-center justify-center w-full px-4 py-3 font-medium text-center text-white transition bg-blue-600 border border-transparent rounded-md sm:w-auto whitespace-nowrap gap-x-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800" href="#">
                                Subscribe
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
