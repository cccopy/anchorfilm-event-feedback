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

// handle inputs
Array.from(document.querySelectorAll("section input[data-config]"))
    .forEach(conf => {
        var confs = conf.getAttribute('data-config').split(',');
        
        var type = confs[0];    // multiple, single
        var maxCount = parseInt(confs[1]) || -1; 
        var fieldName = confs[2];
        
        var section = conf.parentNode;
        var field = section.querySelector("input[name=" + fieldName + "]");
        
        // for buttons
        var btns = Array.from(section.querySelectorAll("button"));
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains("active")) {
                    btn.classList.toggle("active");
                } else {
                    if (type === "multiple") {
                        var count = btns.filter(b => b.classList.contains("active")).length;
                        if (maxCount != -1 && count >= maxCount) {
                            // return none
                        } else {
                            btn.classList.toggle("active");
                        }
                    } else {
                        btns.forEach(b => b.classList.remove("active"));
                        btn.classList.toggle("active");
                    }     
                }

                field.value = btns
                    .filter(b => b.classList.contains("active"))
                    .map(b => b.getAttribute('data-value'))
                    .join(";");
            }); 
        });

        // for pin buttons
        var pins = Array.from(section.querySelectorAll("input.pin-btn"));
        pins.forEach(pin => {
            pin.addEventListener('change', () => {
                var checkedPins = pins.filter(p => p.checked);
                field.value = pins
                    .filter(p => p.checked)
                    .map(p => p.getAttribute('data-value'))
                    .join(";");
                if (type === "multiple") {
                    var checkedCount = checkedPins.length;
                    var uncheckedPins = pins.filter(p => !p.checked);
                    if (maxCount != -1 && checkedCount >= maxCount) {
                        uncheckedPins.forEach(p => p.setAttribute('disabled', ''));
                    } else {
                        uncheckedPins.forEach(p => p.removeAttribute('disabled'));
                    }
                } else {
                    var previousPins = pins.filter(p => p.checked && p != pin);
                    previousPins.forEach(p => p.checked = false);
                }
            });
        });
    });

// handle anchor action
var sections = Array.from(document.querySelectorAll("form section"));
sections.forEach((sec, sidx) => {
    var backBtn = sec.querySelector(".bottom .btn-gray");
    var confirmBtn = sec.querySelector(".bottom .btn-primary");
    confirmBtn && confirmBtn.addEventListener('click', function(){
        var target = sections[sidx + 1];
        if (target.id) location.href = "#" + target.id;
    });
    backBtn && backBtn.addEventListener('click', function(){
        var target = sections[sidx - 1];
        if (target.id) location.href = "#" + target.id;
    });
});
