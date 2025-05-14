
let layers = document.querySelectorAll('.key_layer');
let finalButton = document.getElementById('finalButton'); // 抓到你的按鈕！

window.addEventListener("scroll", function () {
    let fromTop = window.scrollY;

    for (let layer of layers) {
        let initialOffset = parseInt(layer.getAttribute('initial-offset'), 10);
        let start = initialOffset * -1; // 設定觸發的起點
        let stop = start + 200; // 讓圖片在這範圍內切換

        if (fromTop >= start && fromTop < stop) {
            layer.style.opacity = 1; // 圖片顯示
        } else {
            layer.style.opacity = 0; // 圖片隱藏
        }
    }

    if (fromTop >= 1000) {
        finalButton.disabled = false; // 讓按鈕可以點
        finalButton.style.cursor = 'pointer'; 
    } 
    else {
        finalButton.disabled = true; // 讓按鈕不能點
        finalButton.style.cursor = 'default'; // 變成一般箭頭
    }

    
 
});

let finalImage = document.getElementById('finalImage'); // 選取目標圖片層

window.addEventListener("scroll", function () {
    let fromTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let documentHeight = document.body.scrollHeight;

    // 滾動到最底部時
    if (fromTop + windowHeight >= documentHeight) {
        finalImage.style.opacity = 1; // 淡入圖片
    } else {
        finalImage.style.opacity = 0; // 滾回上方時再次隱藏圖片
    }
});
