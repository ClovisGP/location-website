/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
    container: {
        center: true,
        padding: "2rem",
        screens: {
            "2xl": "1400px",
        },
    },
    extend: {
        colors: {
            'customYellow': {
                DEFAULT: 'hsl(var(--yellow-base))',
                alt: 'hsl(var(--yellow-base))'
            },
            "customPurple": {
                DEFAULT: 'hsl(var(--brown-base))',
                alt: 'hsl(var(--purple-alt))',
                hover: 'hsl(var(--purple-hover))'
            },
            "customGray": {
                DEFAULT: 'hsl(var(--gray-base))',
                alt: 'hsl(var(--gray-base))'
            },
            "customMauve": {
                DEFAULT: 'hsl(var(--mauve-base))',
                alt: 'hsl(var(--mauve-alt))',
                hover: 'hsl(var(--mauve-hover))'
            },
            "customSalmon": {
                DEFAULT: 'hsl(var(--salmon-base))',
                alt: 'hsl(var(--salmon-alt))',
                hover: 'hsl(var(--salmon-hover))'
            },
            "customWhite": {
                DEFAULT: 'hsl(var(--white-base))',
                alt: 'hsl(var(--white-alt))'
            },
            "customBrown": {
                DEFAULT: 'hsl(var(--brown-base))',
                alt: 'hsl(var(--brown-alt))'
            },

            /* SHADCN */
            "border": "hsl(var(--border))",
            "input": "hsl(var(--input))",
            "ring": "hsl(var(--ring))",
            "background": "hsl(var(--background))",
            "foreground": "hsl(var(--foreground))",
            "primary": {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
            },
            "secondary": {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
            },
            "destructive": {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
            },
            "muted": {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
            },
            "accent": {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
            },
            "popover": {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
            },
            "card": {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
            },
        },
        borderRadius: {
            "lg": "var(--radius)",
            "md": "calc(var(--radius) - 2px)",
            "sm": "calc(var(--radius) - 4px)",
        },
        keyframes: {
            "accordion-down": {
                from: { height: "0" },
                to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: "0" },
            },
            "wiggle": {
                "0%, 100%": { transform: "rotate(-15deg)" },
                "50%": { transform: "rotate(15deg)" },
            },
            "half-rotate": {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(180deg)" },
            },
        },
        animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "wiggle": "wiggle 2s ease-in-out infinite",
            "rotate-half": "half-rotate 0.5s ease-in-out",
        },
    },
};
export const plugins = [require("tailwindcss-animate")];
