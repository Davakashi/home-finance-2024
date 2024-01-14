// Дэлгэцтэй ажиллах модуль
var uiController = (function () {
    var DOMstrings = {
        inputType: ".add__type",
        inputDesciption: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn",
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDesciption)
                    .value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        getDOMStrings: function () {
            return DOMstrings;
        },
    };
})();

// Санхүүтэй ажиллах модуль
var financeController = (function () {})();

// Програмын холбоостой ажиллах модуль
var appController = (function (uiController, financeController) {
    var ctrlAddItem = function () {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
        console.log(uiController.getInput());

        // 2. Олж авсан өгөгдлүүдээ санхүүгийн модули руу дамжуулж хадгална.
        // 3. Олж авсан өгөгдлүүдээ вэб дээр тохирох хэсэг тавьна.
        // 4. Төсвийг тооцоолно.
        // 5. Эцсийн үлдэгдэл тооцооог дэлгэцэнд гаргана.
    };

    var setupEventListeners = function () {
        var DOM = uiController.getDOMStrings();
        document
            .querySelector(DOM.addBtn)
            .addEventListener("click", function () {
                ctrlAddItem();
            });

        document.addEventListener("keypress", function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    return {
        init: function () {
            console.log("application started...");
            setupEventListeners();
        },
    };
})(uiController, financeController);

appController.init();
