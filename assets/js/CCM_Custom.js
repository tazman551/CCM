//var myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
    // window.addEventListener('DOMContentLoaded', function() {
    // var myModal = bootstrap.Modal.getOrCreateInstance("#myModal");

    //     if(this.localStorage.getItem("popup") == null){
    //         setTimeout(function() {
    //             myModal.show();
    //         }, 2000);

    //         localStorage.setItem("popup", "1");
    //     }

    // });
function show(){
    var myModal = bootstrap.Modal.getOrCreateInstance("#myModal");
    if(this.localStorage.getItem("popup") == null){
        setTimeout(function() {
            myModal.show();
        }, 2000);

        localStorage.setItem("popup", "1");
    }
}

function close(){
    myModal.hide();
}

function scrollerToCall(){
    console.log("called scroll")
    const element = document.getElementById("Quote");
    element.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}