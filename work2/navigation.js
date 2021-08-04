function dispalyDrop(i) {
    switch (i) {
        case 1:
            x = document.getElementById("overview");
            break;
        case 2:
            x = document.getElementById("college");
            break;
        case 3:
            x = document.getElementById("talent");
            break;
        case 4:
            x = document.getElementById("research");
            break;
        case 5:
            x = document.getElementById("society");
            break;
        case 6:
            x = document.getElementById("culture");
            break;
        case 7:
            x = document.getElementById("cooperation");
            break;
        case 8:
            x = document.getElementById("job");
            break;
        default:
            x = document.getElementById("recruit");
    }
    x.style.display = "block";
}

function getRecover(j) {
    switch (j) {
        case 1:
            x = document.getElementById("overview");
            break;
        case 2:
            x = document.getElementById("college");
            break;
        case 3:
            x = document.getElementById("talent");
            break;
        case 4:
            x = document.getElementById("research");
            break;
        case 5:
            x = document.getElementById("society");
            break;
        case 6:
            x = document.getElementById("culture");
            break;
        case 7:
            x = document.getElementById("cooperation");
            break;
        case 8:
            x = document.getElementById("job");
            break;
        default:
            x = document.getElementById("recruit");
    }
    x.style.display = "none";
}