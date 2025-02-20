import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  colors: {
    brand: {
      500: "#2C7A7B",
      600: "#285E61",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Inter, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "8px",
      },
    },
  },
});

export default theme;
