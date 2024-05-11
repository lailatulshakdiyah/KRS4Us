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
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                inter: ['Inter', 'sans-serif']
            },
            colors: {
                white: {
                    0: '#ffffff',
                    50: '#fefefe',
                    75: '#fcfcfc',
                    100: '#fbfbfb',
                    200: '#f9f9f9',
                    300: '#f8f8f8',
                    400: '#aeaeae',
                    500: '#979797'
                },
                gray: {
                    50: '#eaeaeb',
                    75: '#a7a9ac',
                    100: '#828589',
                    200: '#4d5157',
                    300: '#282d34',
                    400: '#1c1f24',
                    500: '#181b20'
                },
                primary: {
                    50: '#e6f1fc',
                    75: '#99c6f4',
                    100: '#6eaeef',
                    200: '#308ce9',
                    300: '#0574e4',
                    400: '#0451a0',
                    500: '#03478b'
                },
                warning: {
                    50: '#fff9e9',
                    75: '#fde5a5',
                    100: '#fdda80',
                    200: '#fcca49',
                    300: '#fbbf24',
                    400: '#b08619',
                    500: '#997516'
                },
                danger: {
                    50: '#fdecec',
                    75: '#f8b2b2',
                    100: '#f69393',
                    200: '#f26464',
                    300: '#ef4444',
                    400: '#a73030',
                    500: '#922929'
                },
                success: {
                    50: '#e7f8f2',
                    75: '#9de2cb',
                    100: '#74d6b6',
                    200: '#39c596',
                    300: '#10b981',
                    400: '#0b825a',
                    500: '#0a714f'
                }
            }
        },
    },

    plugins: [forms],
};
