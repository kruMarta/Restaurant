var dropdownButton = document.getElementById('dropdown-button');
var dropdownContainer = document.getElementById('dropdown-container');

dropdownButton.addEventListener('click', function() {
    if(dropdownContainer.style.display==='none'){
        dropdownContainer.style.display = 'block';
        dropdownButton.style.backgroundImage = 'url("../images/menu/less-button.png")';
    }
    else{
        dropdownContainer.style.display = 'none';
        dropdownButton.style.backgroundImage = 'url("../images/menu/more-button.png")';
    }
});
