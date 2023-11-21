tailwind.config = {
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1200px',
            },
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.4rem',
            '3xl': '1.5rem',
            '4xl': '1.875rem',
            '5xl': '2rem',
            '6xl': '2.25rem',
            '7xl': '2.5rem',
            '8xl': '3rem',
            '9xl': '4rem',
        },
        letterSpacing: {
            tightest: '-.075rem',
            tighter: '-.05rem',
            tight: '-.025rem',
            normal: '0',
            wide: '.05rem',
            wider: '.1rem',
            widest: '.15rem',
        },
        extend: {
            colors: {
                'primary_md': '#224CE7',
                'primary_dark': '#00228A',
                'primary_light': '#DDE1FF',
                'secondary': '#F5A218',
                'secondary_dark': '#462A00',
                'secondary_light': '#FFEBD3',
                'hignlight': '#37B5FE',
                'hignlight_dark': '#00344F',
                'hignlight_light': '#CAE6FF',
                'comple_dark': '#241A00',
                'comple': '#FFCB24',
                'comple_light': '#FFEFD1'
            },
            lineHeight: {
                'extra-loose': '2.5',
            },
        }
    },
}