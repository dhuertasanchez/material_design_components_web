mdc.autoInit();

[].slice.call(document.querySelectorAll('.mdc-button')).forEach((ele) => mdc.ripple.MDCRipple.attachTo(ele));