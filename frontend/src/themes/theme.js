import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: {
      50: "#e9f2ff",
      100: "#c9dbff",
      200: "#a5c2ff",
      300: "#80a8ff",
      400: "#5b8fff",
      500: "#356fff",  // 🌟 Bleu moderne principal
      600: "#2a59cc",
      700: "#1f4299",
      800: "#142c66",
      900: "#091633",
    },
    secondary: {
      50: "#fff5e6",
      100: "#ffe4b8",
      200: "#ffd48a",
      300: "#ffc15c",
      400: "#ffaf2e",
      500: "#ff9c00",  // 🟠 Accent doré/orange
      600: "#cc7d00",
      700: "#995e00",
      800: "#664000",
      900: "#332000",
    },
    background: {
      light: "#F7FAFC",  // Fond clair
      dark: "#1A202C",  // Fond sombre
    },
    text: {
      light: {
        primary: "#2D3748",  // Texte normal en mode clair
        secondary: "#4A5568",  // Texte d’accentuation
        muted: "#718096",  // Texte moins important
        inverse: "#F7FAFC",  // Texte sur fond foncé
        link: "#356fff",  // Couleur des liens
      },
      dark: {
        primary: "#E2E8F0",  // Texte normal en mode sombre
        secondary: "#A0AEC0",  // Texte d’accentuation
        muted: "#CBD5E0",  // Texte moins important
        inverse: "#1A202C",  // Texte sur fond clair
        link: "#80A8FF",  // Couleur des liens
      },
    },    footer: {
      light: "#2C3E50",  // Bleu foncé en mode clair
      dark: "#1A202C",   // Gris anthracite en mode sombre
    },
    surface: {
      light: {
        100: "#EDF2F7",
        200: "#E2E8F0",
        300: "#CBD5E0",
      },
      dark: {
        100: "#2D3748",
        200: "#4A5568",
        300: "#718096",
      },
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
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "primary.500",
          color: "white",
          _hover: {
            bg: "primary.600",
          },
        },
        outline: {
          borderColor: "primary.500",
          color: "primary.500",
          _hover: {
            bg: "primary.100",
          },
        },
      },
    },
    Link: {
      baseStyle: {
        fontWeight: "medium",
        _hover: {
          textDecoration: "none",
          color: "secondary.500",
        },
      },
    },
  },
});

export default customTheme;
