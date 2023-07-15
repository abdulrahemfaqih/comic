/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html"],
   theme: {
      container: {
         center: true,
         padding: "20px",
      },
      extend: {
         fontFamily: {
            poppins: "Poppins",
            jakarta : "Plus Jakarta Sans"
         },
         screens: {
            "2xl": "1360px",
         },
      },
   },
   plugins: [],
};

