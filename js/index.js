// Import modules
import watchInputs from './modules/watchInputs';
import formValidation from './modules/formValidation';
import dropDown from './modules/dropDown';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import slider from './modules/slider';
import sendForm from './modules/sendForm';
import calculator from './modules/calculator';
import toTop from './modules/toTop';


// Execute modules
window.addEventListener('DOMContentLoaded', ()=>{
    'use strict';
    // Watch entered value
    watchInputs();
    // Validation for all forms
    // Possible part of the sendForm in the future
    formValidation();
    // Select Fitness Club
    dropDown();
    // Menu
    toggleMenu();
    // Popup
    togglePopUp();
    // Slider
    slider();
    // Calculator
    calculator();
    // Send Data (AJAX) via JSON
    sendForm();
    // Smooth back to page start
    toTop();
});