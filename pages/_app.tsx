import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import DarkModeToggle from '../components/DarkModeToggle';

function MyApp({ Component, pageProps, router, theme }) {
  return (
    <>
      <ThemeProvider key={theme} attribute='class'>
        <div className=' shadow-neo-2 dark:shadow-custom-dark my-14 grid grid-cols-12 content-center gap-6 py-20  px-5 sm:px-20  md:mb-16 md:px-32 lg:mb-0 lg:px-36 xl:px-48'>
          <div className=' col-span-12  h-full p-4 text-center  text-base lg:col-span-3 '>
            <DarkModeToggle />
            <Sidebar />
          </div>
          <div className=' col-span-12 flex flex-col overflow-hidden lg:col-span-9'>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
