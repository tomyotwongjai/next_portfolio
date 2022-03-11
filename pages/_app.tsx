import Navbar from '../components/Navbar';
import DarkModeToggle from '../components/DarkModeToggle';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps, router, theme }) {
  return (
    <>
      <ThemeProvider key={theme} attribute='class'>
        <div className=' shadow-neo-2 dark:shadow-custom-dark my-14 grid  py-20  px-5 sm:px-20  md:mb-16 md:px-32 lg:mb-0 lg:px-36 xl:px-48'>
          <div className=' col-span-12 flex flex-col overflow-hidden lg:col-span-9'>
            <DarkModeToggle />
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
// grid grid-cols-12 content-center gap-6

export default MyApp;
