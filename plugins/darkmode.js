var isOn = true;

function darkMode () {
    if(!isOn) {
        document.documentElement.setAttribute('data-theme', 'light');
        isOn = true;
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        isOn = false;
    }
}