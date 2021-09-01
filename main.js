const checkboxes = document.querySelectorAll("input[type='checkbox']");
let firstItemIndex;
let lastItemIndex;


checkboxes.forEach((checkbox, checkIndex) => {
    checkbox.addEventListener("change", e => {
        if (e.target.checked) {
            firstItemIndex = checkIndex;
            shiftKey(checkIndex);
        }
    })
})

function shiftKey(checkIndex) {
    checkboxes.forEach((checkbox, shiftIndex) => {
        checkbox.addEventListener("click", (e) => {
            if (e.shiftKey) {
                lastItemIndex = shiftIndex;
                checkingElements(firstItemIndex, lastItemIndex);
            } else {
                firstItemIndex = checkIndex;
            }
        })
    })
}


function checkingElements(firstItemIndex, lastItemIndex) {
    if (firstItemIndex < lastItemIndex) {
        for (let i = firstItemIndex; i < lastItemIndex; i++) {
            checkboxes[i].checked = true;
        }
    } else {
        for (let i = lastItemIndex; i < firstItemIndex; i++) {
            checkboxes[i].checked = true;
        }
    }
}



