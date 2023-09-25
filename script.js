    const basket = document.getElementById("basket");
    basket.addEventListener("mouseover", () => {
        document.getElementById("basketWhite").style.display = "none";
        document.getElementById("basketYellow").style.display = "inline-block";
    })
    basket.addEventListener("mouseout", () => {
        document.getElementById("basketWhite").style.display = "inline-block";
        document.getElementById("basketYellow").style.display = "none";
    })


    function showMenu() {
        const burgerMenu = document.getElementById("burgerMenu");
        if (burgerMenu.style.display === "block") {
            burgerMenu.style.display = "none";
        } else {
            burgerMenu.style.display = "block";
        }

    }


