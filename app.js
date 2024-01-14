// Дэлгэцтэй ажиллах модуль
var uiController = (function () {})();

// Санхүүтэй ажиллах модуль
var financeController = (function () {})();

// Програмын холбоостой ажиллах модуль
var appController = (function (uiController, financeController) {
    document.querySelector(".add__btn").addEventListener("click", function () {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
        // 2. Олж авсан өгөгдлүүдээ санхүүгийн модули руу дамжуулж хадгална.
        // 3. Олж авсан өгөгдлүүдээ вэб дээр тохирох хэсэг тавьна.
        // 4. Төсвийг тооцоолно.
        // 5. Эцсийн үлдэгдэл тооцооог дэлгэцэнд гаргана.
    });

    document.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            console.log("ajilttai");
        }
    });
})(uiController, financeController);
