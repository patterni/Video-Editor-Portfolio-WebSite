var checkElement = document.getElementById("check");

function changeText() {
checkElement.textContent = "Watch this";
}


setTimeout(changeText, 3000);

var videoEditorElement = document.getElementById("videoEditor");
videoEditorElement.style.opacity = 0;
videoEditorElement.style.transition = "opacity 2s";
setTimeout(function() {
    videoEditorElement.style.opacity = 1;
}, 1000);

function changeImage() {
    var image = document.getElementById("profileImage");
    if (image.src.endsWith("me.jpg")) {
        image.src = "me2.jpg";
    } else {
        image.src = "me.jpg";
    }
}

