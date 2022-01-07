let liBtn = document.querySelectorAll(".section__3-tabs ul li");
let tabContent = document.querySelectorAll(".section__3-tab-content .tab-content");


function btnReset() {
    for(let i=0; i<liBtn.length; i++) {
        liBtn[i].className = "";
        tabContent[i].className = "tab-content";
    }
}

liBtn.forEach(li => {
    li.addEventListener("click", function(e) {
        btnReset();

        li.className = "active";
        let tabContentId = li.dataset.tabId;

        let tabContent = document.querySelector(tabContentId);
        tabContent.className = "tab-content active";
    })
})
