window.onload = () => {
    const basket = document.getElementById("basket");
    basket.addEventListener("mouseover", () => {
        document.getElementById("basketWhite").style.display = "none";
        document.getElementById("basketYellow").style.display = "inline-block";
    })
    basket.addEventListener("mouseout", () => {
        document.getElementById("basketWhite").style.display = "inline-block";
        document.getElementById("basketYellow").style.display = "none";
    })

}

