import React from 'react';
import Navbar from './components/Navbar';
import TitleGradient from './components/TitleGradient';
import BodyText from './components/BodyText';
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <div className="layout h-screen">
      <BackgroundVideo />
      {/* Header Section */}
      <Navbar />
      {/* Hello Section */}
      <div id="home" className="relative flex flex-col pt-32 lg:pt-52">
        <TitleGradient text="Prynss Maia" />
        <BodyText text="Losing myself to design and some web projects while listen to music." />
        {/* Socials Section */}
        <ul className="mt-36 flex w-36 justify-between md:mt-40 md:w-44 lg:mt-52 lg:w-48">
          <li className="transform rounded-full transition-all duration-700 hover:scale-90 hover:shadow-pink">
            <a href="https://www.instagram.com/prynssmaia/" target="_blank">
              <svg
                className="lg:h-10 lg:w-10"
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.6667 2.66663H9.33335C5.65146 2.66663 2.66669 5.65139 2.66669 9.33329V22.6666C2.66669 26.3485 5.65146 29.3333 9.33335 29.3333H22.6667C26.3486 29.3333 29.3334 26.3485 29.3334 22.6666V9.33329C29.3334 5.65139 26.3486 2.66663 22.6667 2.66663Z"
                  stroke="#350207"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.3334 15.16C21.4979 16.2697 21.3084 17.403 20.7917 18.3987C20.275 19.3945 19.4575 20.2019 18.4555 20.7063C17.4535 21.2106 16.3179 21.3862 15.2104 21.2079C14.1029 21.0297 13.0797 20.5068 12.2865 19.7136C11.4932 18.9204 10.9703 17.8972 10.7921 16.7897C10.6139 15.6821 10.7894 14.5466 11.2938 13.5445C11.7981 12.5425 12.6056 11.725 13.6013 11.2084C14.5971 10.6917 15.7304 10.5022 16.84 10.6667C17.9719 10.8345 19.0198 11.362 19.8289 12.1711C20.6381 12.9802 21.1655 14.0281 21.3334 15.16Z"
                  stroke="#350207"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.3333 8.66663H23.3466"
                  stroke="#350207"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </li>
          <li className="transform rounded-full transition-all duration-700 hover:scale-90 hover:shadow-red">
            <a href="https://github.com/prynssmaia" target="_blank">
              <svg
                className="lg:h-10 lg:w-10"
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3334 29.3333V24.1733C21.3834 23.5375 21.2975 22.8984 21.0814 22.2984C20.8653 21.6984 20.5239 21.1512 20.08 20.6933C24.2667 20.2267 28.6667 18.64 28.6667 11.36C28.6663 9.49843 27.9503 7.70826 26.6667 6.36C27.2745 4.73134 27.2315 2.93113 26.5467 1.33333C26.5467 1.33333 24.9734 0.866665 21.3334 3.30666C18.2774 2.47843 15.056 2.47843 12 3.30666C8.36002 0.866665 6.78669 1.33333 6.78669 1.33333C6.10186 2.93113 6.05888 4.73134 6.66669 6.36C5.37352 7.71826 4.65672 9.52462 4.66669 11.4C4.66669 18.6267 9.06669 20.2133 13.2534 20.7333C12.8147 21.1866 12.4764 21.7272 12.2604 22.3199C12.0445 22.9126 11.9558 23.5441 12 24.1733V29.3333M12 25.3333C5.33335 27.3333 5.33335 22 2.66669 21.3333L12 25.3333Z"
                  stroke="#350207"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </li>
          <li className="transform rounded-full transition-all duration-700 hover:scale-90 hover:shadow-blue">
            <a
              href="https://www.linkedin.com/in/prynss-maia-da-silva-689866241/"
              target="_blank"
            >
              <svg
                className="lg:h-10 lg:w-10"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2 10.8C18.473 10.8 19.6939 11.3058 20.5941 12.2059C21.4943 13.1061 22 14.327 22 15.6001V21.2001H18.8V15.6001C18.8 15.1757 18.6314 14.7687 18.3313 14.4687C18.0313 14.1686 17.6243 14.0001 17.2 14.0001C16.7756 14.0001 16.3687 14.1686 16.0686 14.4687C15.7685 14.7687 15.6 15.1757 15.6 15.6001V21.2001H12.4V15.6001C12.4 14.327 12.9057 13.1061 13.8059 12.2059C14.706 11.3058 15.9269 10.8 17.2 10.8V10.8Z"
                  stroke="#350207"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.20001 11.6001H6V21.2001H9.20001V11.6001Z"
                  stroke="#350207"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.6 9.20001C8.48366 9.20001 9.20001 8.48366 9.20001 7.6C9.20001 6.71635 8.48366 6 7.6 6C6.71635 6 6 6.71635 6 7.6C6 8.48366 6.71635 9.20001 7.6 9.20001Z"
                  stroke="#350207"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.1667 0.93335H5.83332C2.22506 0.93335 0.933319 2.22509 0.933319 5.83335V22.1667C0.933319 25.7749 2.22506 27.0667 5.83332 27.0667H22.1667C25.7749 27.0667 27.0667 25.7749 27.0667 22.1667V5.83335C27.0667 2.22509 25.7749 0.93335 22.1667 0.93335Z"
                  stroke="#350207"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
