document.addEventListener('DOMContentLoaded', function() {
    let check = document.getElementById('check');
    let deployableDiv = document.getElementById('deployable');
    console.log(check.checked);
    check.addEventListener('change', () => {
        deployableDiv.style.opacity = check.checked ? '1' : '0';
    })

});