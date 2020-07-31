document.addEventListener("DOMContentLoaded", function () {

    const db = firebase.firestore();
    const countElm = document.querySelector(".currentCount")
    const addElm = document.querySelector(".addOne")
    const subElm = document.querySelector(".subOne")
    const docRef = db.collection("persons").doc("ydWHhS0Mas7xyWvCfSET");

    docRef.onSnapshot({
        // Listen for document metadata changes
        includeMetadataChanges: true
    }, function (doc) {
        countElm.textContent = doc.data().count;
    });

    addElm.addEventListener('click', function () {
        docRef.update({
            count: firebase.firestore.FieldValue.increment(1)
        })
    })
    subElm.addEventListener('click', function () {
        docRef.update({
            count: firebase.firestore.FieldValue.increment(-1)
        })
    })
})