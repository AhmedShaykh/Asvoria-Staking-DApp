// material-ui
import { useTheme } from '@mui/material/styles';
import Logos from 'assets/logo.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {

    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Mantis" width="100" />
         *
         */
        <>
            <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.3199 10.6379L29.6896 3.25799C29.597 3.20074 29.4941 3.16431 29.3964 3.11227L23.9996 0L18.7314 3.04981C18.5925 3.12268 18.4485 3.17993 18.3147 3.25799L5.6845 10.6379C2.17582 12.6885 -0.000386774 16.5033 -0.000386774 20.6045V34.9532V35.3591V36.452C-0.0261102 36.4364 0.0253367 36.4729 -0.000386774 36.452C0.364886 40.1004 2.51022 43.4677 5.68964 45.3204L12.8768 49.5204L12.9077 49.5361L18.3199 52.7004C18.361 52.7212 18.4022 52.7368 18.4433 52.7628L23.9996 56L29.525 52.7784C29.5765 52.7472 29.633 52.7316 29.6845 52.7004L42.3147 45.3204C45.8234 43.2699 47.9996 39.455 47.9996 35.3539V20.5993C48.0048 16.5033 45.8285 12.6833 42.3199 10.6379ZM8.7816 16.0714L23.9996 7.18736L39.2176 16.0714C40.8176 17.0082 41.8003 18.7309 41.8003 20.5993V24.6848L29.6845 17.6067C29.5919 17.5494 29.489 17.513 29.3913 17.461L23.9996 14.3487L18.7314 17.3985C18.5925 17.4714 18.4485 17.5286 18.3147 17.6067L6.19897 24.6848V20.5993C6.19897 18.7309 7.1816 17.0082 8.7816 16.0714ZM39.2176 39.887L23.9996 48.7658L8.7816 39.887C7.1816 38.9502 6.19897 37.2275 6.19897 35.3591V34.9532C6.19897 33.0848 7.18675 31.3569 8.7816 30.4253L23.9996 21.5361L39.2176 30.4201C40.8176 31.3569 41.8003 33.0796 41.8003 34.948V35.3539C41.8003 37.2275 40.8176 38.9502 39.2176 39.887Z" fill="url(#paint0_linear_1074_4803)"/>
            <defs>
            <linearGradient id="paint0_linear_1074_4803" x1="10.8118" y1="6.6702" x2="39.4011" y2="51.7927" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00FFA3"/>
            <stop offset="0.4759" stop-color="#03E1FF"/>
            <stop offset="0.9372" stop-color="#DC1FFF"/>
            </linearGradient>
            </defs>
            </svg>

{/* 
            <img
                style={{
                    width: "40%",
                    height: "40%"
                }}
                src={Logos}
                alt="logo"
            /> */}
        </>
    );
};

export default Logo;