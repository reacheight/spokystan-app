/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg_color: '#000000',
        text_color: '#FFFFFF',
        hint_color: '#8E8E93',
        link_color: '#007AFF',
        button_color: '#007AFF',
        secondary_button_color: '#FFFFFF70',
        button_text_color: '#FFFFFF',
        secondary_bg_color: '#EFEFF4',
        header_bg_color: '#EFEFF3',
        accent_text_color: '#FFFFFF',
        section_bg_color: '#000000',
        section_header_text_color: '#FFFFFF',
        section_separator_color: '#CCCCCC',
        subtitle_text_color: '#888888',
        destructive_text_color: '#FF0000',
      },
    },
  },
  // plugins: [
  //   function({ addBase }) {
  //     addBase({
  //       ':root': {
  //         '--tg-color-scheme': 'light',
  //       },
  //       '@media (prefers-color-scheme: dark)': {
  //         ':root': {
  //           '--tg-color-scheme': 'dark',
  //         },
  //       },
  //       'body[data-theme="dark"]': {
  //         '--tg-color-scheme': 'dark',
  //       },
  //       'body[data-theme="light"]': {
  //         '--tg-color-scheme': 'light',
  //       },
  //     });
  //   },
  // ],
}
