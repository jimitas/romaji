//効果音の設定
const pi = new Audio("./Sounds/pi.mp3");
const set = new Audio("./Sounds/set.mp3");
const seikai1 = new Audio("./Sounds/seikai.mp3");
const seikai2 = new Audio("./Sounds/seikai2.mp3");
const cancel = new Audio("./Sounds/move2.mp3");
const cancel2 = new Audio("./Sounds/move1.mp3");

function roma() {

  var index = 0;
  // ローカルストレージからスコアを復元
  var score = parseInt(localStorage.getItem('romajiScore')) || 0;
  var flag = false;
  var capsFlag = false;
  var myAnswer = ""
  var mode = 1;

  const data = [
    { id: 1, word: "あお", ans_1: "ao", ans_2: "", ans_3: "", ans_4: "" },
    { id: 2, word: "いえ", ans_1: "ie", ans_2: "", ans_3: "", ans_4: "" },
    { id: 3, word: "うえ", ans_1: "ue", ans_2: "", ans_3: "", ans_4: "" },
    { id: 4, word: "かい", ans_1: "kai", ans_2: "", ans_3: "", ans_4: "" },
    { id: 5, word: "きく", ans_1: "kiku", ans_2: "", ans_3: "", ans_4: "" },
    { id: 6, word: "いけ", ans_1: "ike", ans_2: "", ans_3: "", ans_4: "" },
    { id: 7, word: "こい", ans_1: "koi", ans_2: "", ans_3: "", ans_4: "" },
    { id: 8, word: "さか", ans_1: "saka", ans_2: "", ans_3: "", ans_4: "" },
    { id: 9, word: "しせい", ans_1: "sisei", ans_2: "shisei", ans_3: "", ans_4: "" },
    { id: 10, word: "せかい", ans_1: "sekai", ans_2: "", ans_3: "", ans_4: "" },
    { id: 11, word: "そこ", ans_1: "soko", ans_2: "", ans_3: "", ans_4: "" },
    { id: 12, word: "たこ", ans_1: "tako", ans_2: "", ans_3: "", ans_4: "" },
    { id: 13, word: "くち", ans_1: "kuti", ans_2: "kuchi", ans_3: "", ans_4: "" },
    { id: 14, word: "てつ", ans_1: "tetu", ans_2: "tetsu", ans_3: "", ans_4: "" },
    { id: 15, word: "とけい", ans_1: "tokei", ans_2: "", ans_3: "", ans_4: "" },
    { id: 16, word: "なす", ans_1: "nasu", ans_2: "", ans_3: "", ans_4: "" },
    { id: 17, word: "にく", ans_1: "niku", ans_2: "", ans_3: "", ans_4: "" },
    { id: 18, word: "ぬの", ans_1: "nuno", ans_2: "", ans_3: "", ans_4: "" },
    { id: 19, word: "ねこ", ans_1: "neko", ans_2: "", ans_3: "", ans_4: "" },
    { id: 20, word: "はと", ans_1: "hato", ans_2: "", ans_3: "", ans_4: "" },
    { id: 21, word: "ひふ", ans_1: "hihu", ans_2: "hifu", ans_3: "", ans_4: "" },
    { id: 22, word: "へそ", ans_1: "heso", ans_2: "", ans_3: "", ans_4: "" },
    { id: 23, word: "ほし", ans_1: "hosi", ans_2: "hoshi", ans_3: "", ans_4: "" },
    { id: 24, word: "まめ", ans_1: "mame", ans_2: "", ans_3: "", ans_4: "" },
    { id: 25, word: "うみ", ans_1: "umi", ans_2: "", ans_3: "", ans_4: "" },
    { id: 26, word: "むし", ans_1: "musi", ans_2: "mushi", ans_3: "", ans_4: "" },
    { id: 27, word: "もも", ans_1: "momo", ans_2: "", ans_3: "", ans_4: "" },
    { id: 28, word: "やま", ans_1: "yama", ans_2: "", ans_3: "", ans_4: "" },
    { id: 29, word: "やさい", ans_1: "yasai", ans_2: "", ans_3: "", ans_4: "" },
    { id: 30, word: "ゆき", ans_1: "yuki", ans_2: "", ans_3: "", ans_4: "" },
    { id: 31, word: "ひよこ", ans_1: "hiyoko", ans_2: "", ans_3: "", ans_4: "" },
    { id: 32, word: "とら", ans_1: "tora", ans_2: "", ans_3: "", ans_4: "" },
    { id: 33, word: "ほたる", ans_1: "hotaru", ans_2: "", ans_3: "", ans_4: "" },
    { id: 34, word: "すみれ", ans_1: "sumire", ans_2: "", ans_3: "", ans_4: "" },
    { id: 35, word: "いろり", ans_1: "irori", ans_2: "", ans_3: "", ans_4: "" },
    { id: 36, word: "わに", ans_1: "wani", ans_2: "", ans_3: "", ans_4: "" },
    { id: 37, word: "みかん", ans_1: "mikan", ans_2: "", ans_3: "", ans_4: "" },
    { id: 38, word: "うさぎ", ans_1: "usagi", ans_2: "", ans_3: "", ans_4: "" },
    { id: 39, word: "えのぐ", ans_1: "enogu", ans_2: "", ans_3: "", ans_4: "" },
    { id: 40, word: "げき", ans_1: "geki", ans_2: "", ans_3: "", ans_4: "" },
    { id: 41, word: "りんご", ans_1: "ringo", ans_2: "", ans_3: "", ans_4: "" },
    { id: 42, word: "ざりがに", ans_1: "zarigani", ans_2: "", ans_3: "", ans_4: "" },
    { id: 43, word: "もじ", ans_1: "mozi", ans_2: "moji", ans_3: "", ans_4: "" },
    { id: 44, word: "かぜ", ans_1: "kaze", ans_2: "", ans_3: "", ans_4: "" },
    { id: 45, word: "かぞく", ans_1: "kazoku", ans_2: "", ans_3: "", ans_4: "" },
    { id: 46, word: "ぱんだ", ans_1: "panda", ans_2: "", ans_3: "", ans_4: "" },
    { id: 47, word: "えんぴつ", ans_1: "enpitu", ans_2: "enpitsu", ans_3: "", ans_4: "" },
    { id: 48, word: "てんぷら", ans_1: "tenpura", ans_2: "", ans_3: "", ans_4: "" },
    { id: 49, word: "たんぽぽ", ans_1: "tanpopo", ans_2: "", ans_3: "", ans_4: "" },
    { id: 50, word: "きゃべつ", ans_1: "kyabetu", ans_2: "kyabetsu", ans_3: "", ans_4: "" },
    { id: 51, word: "でんしゃ", ans_1: "densya", ans_2: "densha", ans_3: "", ans_4: "" },
    { id: 52, word: "ちょきん", ans_1: "tyokin", ans_2: "chokin", ans_3: "", ans_4: "" },
    { id: 53, word: "おもちゃ", ans_1: "omotya", ans_2: "omocha", ans_3: "", ans_4: "" },
    { id: 54, word: "ひゃくえん", ans_1: "hyakuen", ans_2: "", ans_3: "", ans_4: "" },
    { id: 55, word: "みゃく", ans_1: "myaku", ans_2: "", ans_3: "", ans_4: "" },
    { id: 56, word: "りょかん", ans_1: "ryokan", ans_2: "", ans_3: "", ans_4: "" },
    { id: 57, word: "きんぎょ", ans_1: "kingyo", ans_2: "", ans_3: "", ans_4: "" },
    { id: 58, word: "じゃがいも", ans_1: "zyagaimo", ans_2: "jagaimo", ans_3: "", ans_4: "" },
    { id: 59, word: "しんじゅ", ans_1: "sinzyu", ans_2: "sinju", ans_3: "shinzyu", ans_4: "shinju" },
    { id: 60, word: "おかあさん", ans_1: "okâsan", ans_2: "", ans_3: "", ans_4: "" },
    { id: 61, word: "おにいさん", ans_1: "onîsan", ans_2: "", ans_3: "", ans_4: "" },
    { id: 62, word: "ひこうき", ans_1: "hikôki", ans_2: "", ans_3: "", ans_4: "" },
    { id: 63, word: "ねっこ", ans_1: "nekko", ans_2: "", ans_3: "", ans_4: "" },
    { id: 64, word: "ざっし", ans_1: "zassi", ans_2: "zasshi", ans_3: "", ans_4: "" },
    { id: 65, word: "らっぱ", ans_1: "rappa", ans_2: "", ans_3: "", ans_4: "" },

]

  const text_box1 = document.getElementById("text_box1");
  const text_box2 = document.getElementById("text_box2");
  const btnDelete = document.getElementById("btnDelete");
  const btnClear = document.getElementById("btnClear");
  const keyPallet = document.getElementById("keyPallet");
  const btnQuestion = document.getElementById("btnQuestion");
  const btnCaps = document.getElementById("btnCaps");
  const btnShow = document.getElementById("btnShow");

  // QWERTY配列のキーレイアウト（3行 + 長音記号行）
  const qwertyLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['â', 'î', 'û', 'ê', 'ô']
  ];

  const qwertyLayoutUpper = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ['Ā', 'Ī', 'Ū', 'Ē', 'Ō']
  ];

  // 実際に使用する文字（これ以外のキーは無効化）
  const activeLower = ['a', 'i', 'u', 'e', 'o', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', 'g', 'z', 'd', 'b', 'p', 'f', 'j', 'c', 'â', 'î', 'û', 'ê', 'ô'];
  const activeUpper = ['A', 'I', 'U', 'E', 'O', 'K', 'S', 'T', 'N', 'H', 'M', 'Y', 'R', 'W', 'G', 'Z', 'D', 'B', 'P', 'F', 'J', 'C', 'Ā', 'Ī', 'Ū', 'Ē', 'Ō'];

  // 母音と長音記号（背景をオレンジにする）
  const vowelLower = ['a', 'i', 'u', 'e', 'o', 'â', 'î', 'û', 'ê', 'ô'];
  const vowelUpper = ['A', 'I', 'U', 'E', 'O', 'Ā', 'Ī', 'Ū', 'Ē', 'Ō'];

  btnQuestion.addEventListener("click", () => { question() }, false);
  btnShow.addEventListener("click", () => { showAnswer() }, false);
  btnClear.addEventListener("click", () => { textClear() }, false);
  btnDelete.addEventListener("click", () => { textDelete() }, false);
  btnCaps.addEventListener("click", () => { changeCaps() }, false);

  // ラジオボタンのイベントリスナーを設定
  document.getElementById("mode_1").addEventListener("change", () => { changeMode(1) }, false);
  document.getElementById("mode_2").addEventListener("change", () => { changeMode(2) }, false);
  document.getElementById("mode_3").addEventListener("change", () => { changeMode(3) }, false);

  createButtons();
  loadScore(); // 保存されているスコアを復元

  function createButtons() {
    keyPallet.innerHTML = "";
    const layout = capsFlag ? qwertyLayoutUpper : qwertyLayout;
    const activeKeys = capsFlag ? activeUpper : activeLower;
    const vowelKeys = capsFlag ? vowelUpper : vowelLower;

    // 各行ごとにキーボードを生成
    layout.forEach((row, rowIndex) => {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("keyboard-row");

      row.forEach(letter => {
        const btn = document.createElement("button");
        const isActive = activeKeys.includes(letter);
        const isVowel = vowelKeys.includes(letter);

        if (isActive) {
          // 母音と長音記号は特別なクラスを追加
          if (isVowel) {
            btn.classList = "btn btn-primary m-1 letter vowel";
          } else {
            btn.classList = "btn btn-primary m-1 letter";
          }
          btn.innerHTML = letter;
          btn.addEventListener("click", () => {
            if (!flag) return;
            myAnswer = myAnswer + letter;
            myAnswerWrite();
            checkAnswer();
            pi.currentTime = 0;
            pi.play();
          });
        } else {
          btn.classList = "btn btn-secondary m-1 letter disabled";
          btn.innerHTML = letter;
          btn.disabled = true;
        }

        rowDiv.appendChild(btn);
      });

      keyPallet.appendChild(rowDiv);
    });
  }

  function changeMode(num) {
    set.currentTime = 0;
    set.play();
    mode = num;
  }

  function changeCaps() {
    set.currentTime = 0;
    set.play();
    capsFlag = !capsFlag;
    createButtons();
  }

  function textDelete() {
    if (!flag) return;
    if (myAnswer.length < 1) return;
    cancel2.currentTime = 0;
    cancel2.play();
    myAnswer = myAnswer.substring(0, myAnswer.length - 1);
    myAnswerWrite();
  }

  function textClear() {
    if (!flag) return;
    if (myAnswer.length < 1) return;
    cancel.currentTime = 0;
    cancel.play();
    myAnswer = "";
    myAnswerWrite();
  }

  function question() {
    set.currentTime = 0;
    set.play();
    flag = true;
    if (mode === 1) index = Math.floor(Math.random() * 36);
    if (mode === 2) index = Math.floor(Math.random() * 29 + 36);
    if (mode === 3) index = Math.floor(Math.random() * data.length);
    text_box1.style.color = "black";
    text_box1.innerHTML = data[index].word;
    myAnswer = "";
    myAnswerWrite();
  }

  function showAnswer() {
    if (!flag) return;
    seikai2.currentTime = 0;
    seikai2.play();
    let answers = data[index].ans_1;
    if (data[index].ans_2) answers = answers + "," + data[index].ans_2;
    if (data[index].ans_3) answers = answers + "," + data[index].ans_3;
    if (data[index].ans_4) answers = answers + "," + data[index].ans_4;
    myAnswer = answers;
    myAnswerWrite();
  }

  // 長音記号を含む文字列を正規化する関数
  function normalizeAnswer(str) {
    return str
      .toLowerCase()
      .replace(/ā/gi, 'â')
      .replace(/ī/gi, 'î')
      .replace(/ū/gi, 'û')
      .replace(/ē/gi, 'ê')
      .replace(/ō/gi, 'ô');
  }

  function checkAnswer() {
    if (!flag) return;
    const answer = normalizeAnswer(myAnswer);
    const ans1 = normalizeAnswer(data[index].ans_1);
    const ans2 = normalizeAnswer(data[index].ans_2);
    const ans3 = normalizeAnswer(data[index].ans_3);
    const ans4 = normalizeAnswer(data[index].ans_4);
    if (ans1 == answer || ans2 == answer || ans3 == answer || ans4 == answer) sendRight();
  }

  function myAnswerWrite() {
    text_box2.innerHTML = myAnswer;
  }

  function sendRight() {
    flag = false;
    text_box1.innerHTML = "せいかい！";
    text_box1.style.color = "red";
    score++;
    scoreWrite();
    seikai1.currentTime = 0;
    seikai1.play();
  }

  function scoreWrite() {
    const scorePallet = document.getElementById("scorePallet");
    const img = document.createElement("img");
    img.src = "./image/coin.png";
    scorePallet.appendChild(img);
    // ローカルストレージにスコアを保存
    localStorage.setItem('romajiScore', score);
  }

  // ページ読み込み時に保存されているスコアを復元
  function loadScore() {
    const scorePallet = document.getElementById("scorePallet");
    scorePallet.innerHTML = ""; // 既存のコインをクリア
    for (let i = 0; i < score; i++) {
      const img = document.createElement("img");
      img.src = "./image/coin.png";
      scorePallet.appendChild(img);
    }
  }
}

// ページ読み込み時にローマ字練習を開始
window.onload = function () {
  roma();
};