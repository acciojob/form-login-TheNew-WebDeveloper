let inps = document.querySelectorAll("input");

function getFormvalue() {
    //Write your code here
    let fname = inps[0].value.trim();
    let lname = inps[1].value.trim();
    return alert(`${fname} ${lname}`);
}

inps[2].addEventListener('submit', getFormvalue);