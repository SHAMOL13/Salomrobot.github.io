let money = 0;
let tajcoin = 1;
let bot = 0;
let storage = 0;

/* Ишга тушганда аввалги маълумотларни local storage-дан оламиз */
window.onload = function() {
  if(localStorage.getItem("farmData")) {
    let savedData = JSON.parse(localStorage.getItem("farmData"));
    money = savedData.money;
    tajcoin = savedData.tajcoin;
    bot = savedData.bot;
    storage = savedData.storage;

    updateDisplay();
  }
}

setInterval(botadd, 2000);

function botadd() {
  bot += tajcoin;
  updateBots();
  saveData(); 
}

function collect() {
  if (bot >= 500) {
    storage += bot;
    bot = 0;
    updateStorage();
    updateBots();
    saveData(); // Маълумотни саклаш
  } else {
    
  }
}

function sell() {
  if (storage >= 5000) {
    money += storage;
    storage -= 5000;
    updateMoney();
    updateStorage();
    saveData(); // Маълумотни саклаш
  } else {
    
  }
}

function buy() {
  if (money >= 10000) {
    tajcoin++;
    money -= 10000;
    updateMoney();
    updateTajcoin();
    saveData(); // Маълумотни саклаш
  } else {
    
  }
}

/* LocalStorage'да маълумотларни сақлаш функцияси */
function saveData() {
  let farmData = {
    money: money,
    tajcoin: tajcoin,
    bot: bot,
    storage: storage
  };
  localStorage.setItem("farmData", JSON.stringify(farmData));
}

/* Янгиланган маълумотларни экранда кўрсатувчи функциялар */
function updateMoney() {
  document.getElementById("moneyid").innerHTML = " " + money.toLocaleString();
}

function updateTajcoin() {
  document.getElementById("tajcoinid").innerHTML = " " + tajcoin.toLocaleString();
}

function updateBots() {
  document.getElementById("botid").innerHTML = " " + bot.toLocaleString();
}

function updateStorage() {
  document.getElementById("storageid").innerHTML = " " + storage.toLocaleString();
}

function updateDisplay() {
  updateMoney();
  updateTajcoin();
  updateBots();
  updateStorage();
}

/* Ракамларни форматлаш учун toLocaleString() функцияси фойдаланилади */

// Унсурҳои DOM-ро интихоб кунед
const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".content");
const dragIcon = bottomSheet.querySelector(".drag-icon");

// Тағйирёбандаҳои глобалӣ барои пайгирии рӯйдодҳои кашолакунӣ
let isDragging = false, startY, startHeight;

// Варақи поёниро нишон диҳед, панели ҳаракати амудии баданро пинҳон кунед ва updateSheetHeight-ро даъват кунед
const showBottomSheet = () => {
    bottomSheet.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeight(50);
}

const updateSheetHeight = (height) => {
    sheetContent.style.height = `${height}vh`; //баландии мундариҷаи варақаро навсозӣ мекунад
     // Агар баландӣ ба 100 баробар бошад, синфи пурраи экранро ба поёни Sheet иваз мекунад
    bottomSheet.classList.toggle("fullscreen", height === 100);
}

// Варақи поёнро пинҳон кунед ва панели ҳаракати амудии баданро нишон диҳед
const hideBottomSheet = () => {
    bottomSheet.classList.remove("show");
    document.body.style.overflowY = "auto";
}

// Мавқеи кашолакунӣ, баландии варақи мундариҷаро муқаррар мекунад ва синфи кашолакуниро ба варақи поён илова мекунад
const dragStart = (e) => {
    isDragging = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(sheetContent.style.height);
    bottomSheet.classList.add("dragging");
}

// Баландии навро барои мундариҷаи варақ ҳисоб мекунад ва функсияи updateSheetHeight -ро даъват мекунад
const dragging = (e) => {
    if(!isDragging) return;
    const delta = startY - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeight + delta / window.innerHeight * 100;
    updateSheetHeight(newHeight);
}

// Муайян мекунад, ки оё пинҳон кардан, ба экрани пурра гузоштан ё ба пешфарз гузоштан 
 // баландӣ дар асоси баландии ҷории мундариҷаи варақ
const dragStop = () => {
    isDragging = false;
    bottomSheet.classList.remove("dragging");
    const sheetHeight = parseInt(sheetContent.style.height);
    sheetHeight < 25 ? hideBottomSheet() : sheetHeight > 75 ? updateSheetHeight(100) : updateSheetHeight(50);
}

dragIcon.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

dragIcon.addEventListener("touchstart", dragStart);
document.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);

sheetOverlay.addEventListener("click", hideBottomSheet);
showModalBtn.addEventListener("click", showBottomSheet);
/* профил */

//loading function
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 5.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);




