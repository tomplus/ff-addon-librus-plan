container = document.body.getElementsByClassName("container")[0];

if (container.style.display === "none") {
    // restore previous view
    container.style.display = "block";
    document.getElementById("plan-lekcji-m").remove();
} else {
    // hide existing plan
    container.style.display = "none";
    plan_lekcji_orig = document.body.getElementsByClassName("plan-lekcji")[0];

    // clone and hide some data
    plan_lekcji = plan_lekcji_orig.cloneNode(true)
    plan_lekcji.id = "plan-lekcji-m"
    document.body.appendChild(plan_lekcji);

    // thead / tr
    for (const child of plan_lekcji.children[0].children[0].children) {
        child.textContent = child.innerHTML.replace(/<br>.*$/, "").replaceAll("&nbsp;", " ");
    }
    // remove last 3 cols
    for (let i = 9; i >= 7; i--) {
        plan_lekcji.children[0].children[0].children[i].remove()
    }

    // tbody without teachers' names
    tbody = plan_lekcji.children[1]
    for (const tr of tbody.children) {
        if (tr.childElementCount > 3) {
            tr.style = "height: 40px"
            for (const td of tr.children) {
                console.log(td.childElementCount)
                if (td.childElementCount == 1) {
                    td.textContent = td.innerHTML.replace(/[\s\n]+/g, " ").replace(/.*<b>(.+)<\/b>.*/, "$1");
                    td.style = "font-weight: 900"
                }
            }
            for (let i = 9; i >= 7; i--) {
                tr.children[i].remove()
            }
        } else {
            tr.style.display = "none";
        }
    }

    // tfoot
    plan_lekcji.children[2].remove()
}
