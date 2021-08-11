var toggle = document.getElementById('toggle');
var close = document.getElementById("close");
var modal = document.getElementById("header__modal");
toggle.onclick = function() {
    modal.style.display='block';
    close.style.display='block';
    toggle.style.display='none';
};

close.onclick = function() {
    modal.style.display='none';
    close.style.display='none';
    toggle.style.display='block';
}

