const envelope = document.getElementById("envelope");
const coverPage = document.getElementById("coverPage");
const invitePage = document.getElementById("invitePage");
const inviteCard = document.querySelector(".invite-card");
const music = document.getElementById("bgMusic");

const items = document.querySelectorAll(".item");

let opened = false;

envelope.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    music.volume = 0.8;
    music.play().catch(() => {});

    envelope.classList.add("open");

    setTimeout(() => {
        coverPage.style.display = "none";
        invitePage.classList.remove("hidden");

        setTimeout(() => {
            invitePage.classList.add("show");
            inviteCard.classList.add("show");
        }, 100);

        setTimeout(() => {
            showItemsSlowly();
        }, 1300);

    }, 950);
});

function showItemsSlowly(){
    let delay = 0;

    items.forEach((item) => {
        setTimeout(() => {
            item.classList.add("show");
        }, delay);

        delay += 1300; // سرعة ظهور الأسطر: زيدي الرقم لو تبينه أبطأ
    });
}