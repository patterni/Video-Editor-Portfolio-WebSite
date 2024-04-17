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



function showMessage(formId) {
    var nameField = document.getElementById("name" + formId);
    var commentField = document.getElementById("comment" + formId);
    var name = nameField.value;
    var comment = commentField.value;
    alert("Comment submitted by " + name + ": " + comment);
    nameField.value = ""; 
    commentField.value = "";
    return false;
}


function changeImage() {
    var image = document.getElementById("profileImage");
    if (image.src.endsWith("me.jpg")) {
        image.src = "me2.jpg";
    } else {
        image.src = "me.jpg";
    }
}
