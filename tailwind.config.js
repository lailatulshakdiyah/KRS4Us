import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        colors : {
            transparent : 'transparent',
            
            'black' : '#000000',
            'white' : '#FFFFFF',
            'primary' : {
                p5: '#E6F1FC',
                p75: '#99C6F4',
                p100: '#6EAEEF',
                p200: '#308CE9',
                p300: '#0574E4',
                p400: '#0451A0',
                p500: '#03478B'},
            'grey' : {
                B75: '#A7A9AC',
                B100: '#828589',
                B200: '#4D5157',
                B300: '#282D34'},
            'warning' : {
                W50: '#FFF9E9',
                W75: '#FDE5A5',
                W100: '#FDDA80',
                W200: '#FCCA49',
                W300: '#FBBF24'},
            'green' : {
                S100: '#74D6B6',
                S200: '#39C596',
                S300: '#10B981',
                S400: '#0B825A',
                S500: '#0A714F'},
        },
        
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
