const quiz1 = [
  {question: "火災が発生した際、最初に取るべき行動は何ですか？", options: ["消火器を探す", "119番に通報する", "窓を開ける", "安全な場所に避難する"], answer: 3, explanation: "火災が発生した場合、まずは命を守るために安全な場所へ避難することが最優先です。その後、状況に応じて通報や消火活動を行います。"},
  {question: "煙が充満している場所を避難する際の正しい行動はどれですか？", options: ["普通に立って走る", "煙を吸わないように口を布で覆い、低い姿勢で進む", "煙が少ない方向を探して待機する", "窓を開けて換気を行う"], answer: 1, explanation: "煙は上昇するため、低い姿勢を保つことで比較的空気がきれいな層を移動できます。"},
  {question: "調理中に油が発火した場合、最も適切な対応は？", options: ["水をかけて火を消す", "濡れたタオルやフタで覆う", "火を吹き消す", "窓を開けて換気する"], answer: 1, explanation: "油火災の場合、水をかけると火が飛び散るため、濡れたタオルやフタで覆い酸素を遮断して消火します。"},
  {question: "火災報知器が作動した際、どのような行動を取るべきですか？", options: ["音を止めて異常がないか確認する", "すぐに建物から避難する", "火元を探して消火器を準備する", "周囲に知らせて火災の有無を確認する"], answer: 1, explanation: "火災報知器が作動したらすぐに避難することが最も安全です。無理に火元を確認しようとしないでください。"},
  {question: "火災による避難の際にエレベーターを使うべきですか？", options: ["使うべきである", "使用しても問題ない", "使用してはいけない", "建物の状況による"], answer: 2, explanation: "火災時にはエレベーターが停止したり閉じ込められる危険があるため、非常階段を使用します。"},
  {question: "火災時に119番通報する際に必要な情報はどれですか？", options: ["火元の状況と正確な住所", "通報者の氏名と年齢", "燃えている物の詳細", "現在の天候"], answer: 0, explanation: "消防隊が迅速に対応できるよう、火元の状況と正確な住所を伝えることが重要です。"},
  {question: "避難時に家を出る際、忘れてはいけない行動は何ですか？", options: ["貴重品を持ち出す", "窓を閉める", "ドアを閉める", "煙を確認する"], answer: 2, explanation: "ドアを閉めることで火の広がりを防ぎ、延焼を遅らせることができます。"},
  {question: "火災予防のために日常生活で注意すべきことはどれですか？", options: ["コンセントを差しっぱなしにする", "タコ足配線を避ける", "灯油を家の中に保管する", "ガスの元栓を常時開けておく"], answer: 1, explanation: "タコ足配線は過熱やショートの原因になるため避けるべきです。他にも定期的な点検が重要です。"},
  {question: "マンションで火災が起きた場合、避難する順番として最適なのは？", options: ["階段を下りる", "ベランダから外に出る", "屋上に上がる", "火の逆方向に避難する"], answer: 3, explanation: "火のある方向とは逆に、安全なルートで避難することが適切です。"},
  {question: "火災避難訓練の際に必ず確認すべきポイントは？", options: ["出口の位置と非常階段のルート", "訓練終了後の集合場所", "消火器の使い方", "すべて"], answer: 3, explanation: "訓練では非常口の位置や避難経路、集合場所、消火器の使用法を確認することが大切です。"}
];


const quiz2 = [
  {question: "コンロ使用中に火が広がった場合の適切な初動対応は？", options: ["コンロのスイッチを切る", "水をかける", "窓を開ける", "換気扇を強くする"], answer: 0, explanation: "火が広がった場合、まず燃料の供給を断つためにコンロのスイッチを切る必要があります。その後、安全に避難します。"},
  {question: "初期消火が可能な火災の範囲はどのくらいですか？", options: ["火の高さが自分の膝程度まで", "火の高さが自分の腰程度まで", "火の高さが自分の胸程度まで", "火の高さが自分より高い場合"], answer: 0, explanation: "火の高さが膝程度までの小さな火災なら初期消火が可能ですが、それ以上の場合は避難が優先です。"},
  {question: "火災が発生した際、避難中に開けてはいけないドアや窓の特徴は？", options: ["閉まっているドア", "外が見える窓", "ドアノブが熱くなっているドア", "鍵がかかっているドア"], answer: 2, explanation: "ドアノブが熱い場合、その向こう側に火がある可能性が高いので開けてはいけません。"},
  {question: "停電時の火災予防で避けるべき行動は？", options: ["懐中電灯を使う", "ろうそくを使う", "ガスを止める", "ブレーカーを確認する"], answer: 1, explanation: "ろうそくの火は転倒や不注意によって火災の原因となるため、懐中電灯などを使用しましょう。" },
  {question: "電気火災が発生した際に最初に行うべき対応は？", options: ["水で消火する", "ブレーカーを落とす", "燃えている箇所を覆う", "消火器を使う"], answer: 1, explanation: "電気火災の場合、まず電源を切ることで火の拡大を防ぎます。その後に消火を行います。"},
  {question: "火災の際に消火器を使用する正しい順番は？", options: ["安全ピンを抜く→火元に向ける→レバーを握る", "レバーを握る→火元に向ける→安全ピンを抜く", "火元に向ける→レバーを握る→安全ピンを抜く", "火元に向ける→安全ピンを抜く→レバーを握る"], answer: 0, explanation: "消火器の使用順は、安全ピンを抜き、火元に向け、レバーを握るです。"},
  {question: "煙探知器を設置するべき場所はどこですか？", options: ["台所のみ", "各部屋の天井", "窓際", "廊下だけ"], answer: 1, explanation: "煙探知器は火災の早期発見に役立つため、各部屋の天井に設置することが推奨されます。"},
  {question: "マンションで火災が発生した際、最も適切な避難方法は？", options: ["屋上に逃げる", "エレベーターを使用する", "階段を使い、下の階に避難する", "部屋にとどまり、救助を待つ"], answer: 2, explanation: "階段を使い、火災のない方向へ避難することが安全です。"},
  {question: "消火器の中に入っている消火剤で、最も一般的に使用されるものは？", options: ["水", "二酸化炭素", "泡", "粉末"], answer: 3, explanation: "粉末消火剤は多くの種類の火災に対応できるため、一般家庭で広く使用されています。"},
  {question: "冬場に起こりやすい火災の原因として最も多いものは？", options: ["ガス爆発", "暖房器具の不適切な使用", "電気のショート", "料理中の油火災"], answer: 1, explanation: "冬場は暖房器具を使用する機会が多く、不適切な使用が火災原因になることが多いです。"},
  {question: "調理中の油火災が発生した場合、適切な対応はどれですか？", options: ["水をかける", "濡れた布巾をかける", "窓を開ける", "換気扇を強くする"], answer: 1, explanation: "油火災には水をかけると火が広がる危険があります。濡れた布巾で火元を覆うことで酸素を遮断し、消火が可能です。"},
  {question: "火災時、逃げ遅れを防ぐために重要な防災対策はどれですか？", options: ["消火器を複数設置する", "家族全員で避難経路を確認する", "火災報知器を毎月点検する", "扉を常に開けておく"], answer: 1, explanation: "家族全員で避難経路を事前に確認し、火災時に迅速に避難できるようにしておくことが重要です。"},
  {question: "電気毛布を使用する際に火災を防ぐための注意点は？", options: ["常に最大の温度で使用する", "使わないときは電源を切る", "電気毛布の上に重いものを置く", "ベッドの下に敷いて使う"], answer: 1, explanation: "電気毛布の電源を切ることは、使用中の過熱や不注意による火災を防ぐために必要です。"},
  {question: "煙に巻き込まれた際、適切な避難方法はどれですか？", options: ["直立して歩く", "速やかに走る", "背を丸めて低い姿勢で進む", "その場で助けを待つ"], answer: 2, explanation: "煙は上に上昇するため、低い姿勢を保つことで有毒ガスを吸い込むリスクを減らせます。"},
  {question: "避難経路において、優先して避けるべき行動はどれですか？", options: ["近道を探す", "既定の避難ルートを使う", "煙を避ける", "確認せずにドアを開ける"], answer: 3, explanation: "確認せずにドアを開けると、火や煙が広がる可能性があるため、慎重に確認してから行動しましょう。"},
  {question: "火災報知器の電池が切れる際、どのような音が鳴りますか？", options: ["持続的な警報音", "定期的な短いビープ音", "電源が切れる音", "全く音がしない"], answer: 1, explanation: "火災報知器の電池が切れそうになると、短いビープ音で警告が出ます。電池交換のサインです。"},
  {question: "火災時、家の中で火が回りきるまでにかかる時間の目安は？", options: ["1～2分", "5～10分", "20～30分", "1時間以上"], answer: 1, explanation: "火災は短時間で急激に広がるため、迅速な避難が必要です。一般的に、火が家中に回るまで約5～10分程度と言われています。"},
  {question: "災害用に用意するべき非常持ち出し品に含めるべきではないものはどれですか？", options: ["貴重品", "食料と水", "火のつけやすい素材の衣類", "常備薬"], answer: 2, explanation: "火のつけやすい衣類は避けるべきです。防災用の衣類は火に強い素材を選びましょう。"},
  {question: "火災発生時、周囲に火災を知らせる最適な方法はどれですか？", options: ["小声で助けを呼ぶ", "防災ベルを鳴らす", "窓から手を振るだけ", "一人で避難する"], answer: 1, explanation: "防災ベルや警報機を使うことで、多くの人に迅速に危険を知らせることができます。"},
  {question: "火災後に火が再び燃え上がる現象を何と言いますか？", options: ["再燃火災", "延焼", "フラッシュオーバー", "リバウンド火災"], answer: 2, explanation: "フラッシュオーバーとは、火災後に残った可燃物が再燃する現象で、非常に危険です。"}
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function getRandomQuestions(quizArray, n) {
  return quizArray.sort(() => 0.5 - Math.random()).slice(0, n);
}

function displayQuestion() {
  const question = selectedQuestions[currentQuestionIndex];
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <p>${question.question}</p>
    ${question.options.map((option, i) => `
      <label>
        <input type="radio" name="question" value="${i}"> ${option}
      </label>
    `).join('')}
  `;
  updateProgress();
}

function handleAnswer() {
  const selectedOption = document.querySelector('input[name="question"]:checked');
  if (!selectedOption) {
    alert("選択肢を選んでください");
    return;
  }

  const selectedAnswerIndex = parseInt(selectedOption.value);
  const currentQuestion = selectedQuestions[currentQuestionIndex];

  document.querySelectorAll('label').forEach((label, index) => {
    if (index === currentQuestion.answer) label.classList.add("correct");
    if (index === selectedAnswerIndex && index !== currentQuestion.answer) label.classList.add("incorrect");
  });

  const selectedAnswerContainer = document.getElementById("selected-answer");
  selectedAnswerContainer.innerHTML = `
    <p>あなたの答え: ${currentQuestion.options[selectedAnswerIndex]}</p>
    <p>正解: ${currentQuestion.options[currentQuestion.answer]}</p>
  `;
  document.getElementById("explanation").innerText = currentQuestion.explanation;

  if (selectedAnswerIndex === currentQuestion.answer) score++;

  // 最後の問題かどうかを確認
  if (currentQuestionIndex === selectedQuestions.length - 1) {
    const nextBtn = document.getElementById("next-btn");
    nextBtn.innerText = "結果を見る";  // ボタンのテキストを変更
    nextBtn.onclick = showResult;      // 結果表示画面へ遷移
  } 

  setTimeout(() => switchPage("explanation-page"), 1000);
}


function handleNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    displayQuestion();
    switchPage("question-page");
  } else {
    showResult();
  }
}

function showResult() {
  const totalScore = Math.round((score / selectedQuestions.length) * 100);
  const comment = totalScore >= 80 ? "素晴らしい結果です！" : totalScore >= 60 ? "まあまあの結果です！" : "もっと頑張りましょう！";

  document.getElementById("result").innerText = `あなたのスコア: ${totalScore}点`;
  document.getElementById("comment").innerText = comment;
 // スコア共有テキストをURLエンコード
 const encodedScore = encodeURIComponent(`私のスコア: ${totalScore}点 - ${comment}`);
 const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedScore}`;
 const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https://example.com&quote=${encodedScore}`;

 // 「スコアをシェアする」ボタンのクリックイベント
 const shareButton = document.getElementById("share-btn");
 shareButton.onclick = () => {
   document.getElementById("sns-buttons").style.display = "block"; // SNSボタンを表示
 };

 // 各SNSボタンのクリックイベント
 document.getElementById("twitter-share").onclick = () => {
   window.open(twitterUrl, "_blank");
 };
 document.getElementById("facebook-share").onclick = () => {
   window.open(facebookUrl, "_blank");
 }; 

  switchPage("result-page");
}

function updateProgress() {
  const progress = document.getElementById("progress");
  const progressPercent = Math.round(((currentQuestionIndex + 1) / selectedQuestions.length) * 100);
  progress.style.width = `${progressPercent}%`;
  document.getElementById("progress-text").innerText = `${progressPercent}%`;
}

function switchPage(pageId) {
  document.querySelectorAll(".container").forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

window.onload = () => {
  selectedQuestions = [...getRandomQuestions(quiz1, 3), ...getRandomQuestions(quiz2, 2)];
  displayQuestion();
};

document.getElementById("answer-btn").addEventListener("click", handleAnswer);
document.getElementById("next-btn").addEventListener("click", handleNextQuestion);



