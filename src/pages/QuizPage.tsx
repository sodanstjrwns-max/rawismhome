// Wine Quiz Page - "나에게 맞는 샴페인은?"
// 5문항 취향 테스트 → 결과 카드 → SNS 공유

export const QuizPage = () => {
  return (
    <div class="min-h-screen bg-[#080808] text-[#E0E0E0]">
      {/* Navigation */}
      <nav class="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-sm border-b border-[#B8A060]/10">
        <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" class="text-[11px] tracking-[0.25em] uppercase text-[#B8A060] hover:text-[#E0E0E0] transition-colors">← 메인으로</a>
          <a href="/" class="font-['Playfair_Display'] text-lg text-[#B8A060]">RAWISM</a>
          <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener" class="text-[11px] tracking-[0.15em] uppercase bg-[#B8A060] text-[#080808] px-3 py-1.5 hover:bg-[#C9A962] transition-colors">예약</a>
        </div>
      </nav>

      {/* Quiz Container */}
      <div class="pt-20 pb-16 px-4 max-w-2xl mx-auto" id="quiz-app">
        
        {/* Intro Screen */}
        <div id="quiz-intro" class="text-center py-16">
          <p class="text-6xl mb-6">🍾</p>
          <p class="text-[11px] tracking-[0.3em] uppercase text-[#B8A060] mb-4">RAWISM Wine Quiz</p>
          <h1 class="font-['Playfair_Display'] text-3xl md:text-4xl text-[#E0E0E0] mb-4">
            나에게 맞는 <span class="text-[#B8A060]">샴페인</span>은?
          </h1>
          <p class="text-sm text-[#999] max-w-md mx-auto leading-relaxed mb-8">
            5가지 질문에 답하면 RAWISM 소믈리에가<br/>
            당신의 취향에 딱 맞는 샴페인을 추천해드립니다
          </p>
          <p class="text-xs text-[#555] mb-8">소요시간 약 1분 · 총 5문항</p>
          <button 
            id="start-quiz-btn"
            class="text-[11px] tracking-[0.2em] uppercase bg-[#B8A060] text-[#080808] px-10 py-4 hover:bg-[#C9A962] transition-all cursor-pointer"
          >
            테스트 시작하기 →
          </button>
        </div>

        {/* Questions - Hidden initially */}
        <div id="quiz-questions" class="hidden">
          {/* Progress Bar */}
          <div class="mb-8 pt-8">
            <div class="flex justify-between text-[10px] text-[#555] mb-2">
              <span id="q-progress-text">Question 1 / 5</span>
              <span id="q-progress-pct">20%</span>
            </div>
            <div class="h-[2px] bg-[#1a1a1a]">
              <div id="q-progress-bar" class="h-full bg-[#B8A060] transition-all duration-500" style="width: 20%"></div>
            </div>
          </div>

          {/* Question Card */}
          <div id="q-card" class="border border-[#1a1a1a] p-8 md:p-10">
            <p id="q-number" class="text-[10px] tracking-[0.3em] text-[#B8A060] uppercase mb-4">Q1</p>
            <h2 id="q-title" class="font-['Playfair_Display'] text-xl md:text-2xl text-[#E0E0E0] mb-8 leading-relaxed">
            </h2>
            <div id="q-options" class="space-y-3">
            </div>
          </div>
        </div>

        {/* Result Screen - Hidden initially */}
        <div id="quiz-result" class="hidden text-center py-8">
          <p class="text-[11px] tracking-[0.3em] uppercase text-[#B8A060] mb-2">Your Result</p>
          <p class="text-5xl mb-4" id="result-emoji">🥂</p>
          <h2 id="result-type" class="font-['Playfair_Display'] text-2xl md:text-3xl text-[#E0E0E0] mb-2"></h2>
          <p id="result-subtitle" class="text-sm text-[#B8A060] mb-6"></p>
          
          <div class="border border-[#B8A060]/20 p-6 md:p-8 mb-8 text-left">
            <p id="result-desc" class="text-sm text-[#999] leading-relaxed mb-6"></p>
            
            <div class="border-t border-[#1a1a1a] pt-6">
              <p class="text-[10px] tracking-[0.2em] uppercase text-[#B8A060] mb-3">추천 샴페인</p>
              <div id="result-wines" class="space-y-3"></div>
            </div>

            <div class="border-t border-[#1a1a1a] pt-6 mt-6">
              <p class="text-[10px] tracking-[0.2em] uppercase text-[#B8A060] mb-3">추천 페어링</p>
              <p id="result-pairing" class="text-sm text-[#999]"></p>
            </div>
          </div>

          {/* Share Buttons */}
          <div class="mb-8">
            <p class="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-4">결과 공유하기</p>
            <div class="flex justify-center gap-3">
              <button id="share-kakao" class="text-xs px-5 py-2.5 border border-[#FEE500] text-[#FEE500] hover:bg-[#FEE500] hover:text-[#080808] transition-all">카카오톡</button>
              <button id="share-copy" class="text-xs px-5 py-2.5 border border-[#B8A060] text-[#B8A060] hover:bg-[#B8A060] hover:text-[#080808] transition-all">링크 복사</button>
              <button id="share-insta" class="text-xs px-5 py-2.5 border border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all">인스타 스토리</button>
            </div>
            <p id="share-msg" class="text-[10px] text-[#B8A060] mt-2 hidden">✓ 링크가 복사되었습니다!</p>
          </div>

          {/* CTA */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <a href="https://naver.me/5qLSfCNC" target="_blank" rel="noopener"
               class="text-[11px] tracking-[0.15em] uppercase bg-[#B8A060] text-[#080808] px-6 py-3 hover:bg-[#C9A962] transition-colors text-center">
              RAWISM에서 맛보기 →
            </a>
            <a id="result-column-link" href="/wine"
               class="text-[11px] tracking-[0.15em] uppercase border border-[#B8A060] text-[#B8A060] px-6 py-3 hover:bg-[#B8A060] hover:text-[#080808] transition-all text-center">
              관련 칼럼 읽기 →
            </a>
          </div>

          <button id="retry-btn" class="text-xs text-[#555] hover:text-[#B8A060] transition-colors cursor-pointer">
            다시 테스트하기
          </button>
        </div>
      </div>

      {/* Quiz Logic */}
      {<script dangerouslySetInnerHTML={{ __html: `
(function() {
  var questions = [
    {
      q: "금요일 저녁, 당신의 이상적인 디너는?",
      opts: [
        { text: "조용한 레스토랑에서 코스 요리", type: "elegant" },
        { text: "분위기 좋은 바에서 가볍게 한잔", type: "casual" },
        { text: "특별한 날 프라이빗 다이닝", type: "luxury" },
        { text: "친구들과 활기찬 파티", type: "festive" }
      ]
    },
    {
      q: "음식 맛 중 가장 끌리는 것은?",
      opts: [
        { text: "섬세하고 깔끔한 맛 (회, 카르파초)", type: "elegant" },
        { text: "고소하고 부드러운 맛 (치즈, 크림)", type: "casual" },
        { text: "깊고 풍부한 맛 (트러플, 숙성육)", type: "luxury" },
        { text: "매콤하고 자극적인 맛 (육회, 타코)", type: "festive" }
      ]
    },
    {
      q: "와인/샴페인에서 가장 중요한 것은?",
      opts: [
        { text: "우아한 향과 긴 여운", type: "elegant" },
        { text: "마시기 편하고 기분 좋은 산뜻함", type: "casual" },
        { text: "복합적인 풍미와 숙성의 깊이", type: "luxury" },
        { text: "화사한 과일향과 달콤한 터치", type: "festive" }
      ]
    },
    {
      q: "선물을 고를 때 당신의 스타일은?",
      opts: [
        { text: "클래식하고 격조 있는 것", type: "elegant" },
        { text: "실용적이면서 센스 있는 것", type: "casual" },
        { text: "남들이 모르는 특별한 것", type: "luxury" },
        { text: "화려하고 눈에 띄는 것", type: "festive" }
      ]
    },
    {
      q: "RAWISM에서 고르라면?",
      opts: [
        { text: "블랑 드 블랑 + 아보카도 카프레제", type: "elegant" },
        { text: "브뤼 NV + 치즈 셀렉션", type: "casual" },
        { text: "빈티지 샴페인 + 트러플 뭉티기", type: "luxury" },
        { text: "로제 샴페인 + 청양 오일 육회", type: "festive" }
      ]
    }
  ];

  var results = {
    elegant: {
      emoji: "🥂",
      type: "블랑 드 블랑 타입",
      subtitle: "The Elegant Connoisseur",
      desc: "당신은 섬세함과 우아함을 아는 사람입니다. 가볍지만 깊은 맛, 절제된 아름다움을 추구하죠. 블랑 드 블랑(Blanc de Blancs)처럼 샤르도네 100%의 순수한 우아함이 당신의 취향입니다. 첫 모금에서 느껴지는 레몬, 백도, 브리오슈 향이 당신의 저녁을 완성해줄 거예요.",
      wines: ["Pierre Gimonnet Cuis 1er Cru", "Delamotte Blanc de Blancs", "Pol Roger Blanc de Blancs"],
      pairing: "아보카도 카프레제, 부라타 치즈, 가벼운 해산물",
      column: "/wine/blanc-de-blancs-vs-noirs"
    },
    casual: {
      emoji: "🍾",
      type: "브뤼 NV 타입",
      subtitle: "The Easy-going Enthusiast",
      desc: "당신은 편안함 속에서 즐거움을 찾는 사람입니다. 너무 무겁지 않으면서도 기분 좋은 한잔, 대화가 자연스럽게 이어지는 분위기를 좋아하죠. 브뤼 NV(Non-Vintage) 샴페인처럼, 언제 마셔도 좋은 균형 잡힌 맛이 당신의 스타일입니다.",
      wines: ["Moët & Chandon Imperial", "Veuve Clicquot Yellow Label", "Laurent-Perrier La Cuvée"],
      pairing: "치즈 셀렉션, 하몽, 올리브, 가벼운 핑거푸드",
      column: "/wine/champagne-sweetness-brut"
    },
    luxury: {
      emoji: "✨",
      type: "프레스티지 큐베 타입",
      subtitle: "The Luxury Seeker",
      desc: "당신은 최고를 알아보는 눈이 있습니다. 표면적인 화려함이 아닌, 진짜 깊이와 장인정신에 가치를 두죠. 돔 페리뇽, 크뤼그처럼 수년간의 숙성이 빚어낸 복합적인 풍미가 당신을 사로잡습니다. 트러플 한우 뭉티기와의 페어링은 잊지 못할 경험이 될 거예요.",
      wines: ["Dom Pérignon Vintage", "Krug Grande Cuvée", "Louis Roederer Cristal"],
      pairing: "트러플 한우 뭉티기 + 부라타, 숙성 치즈, 푸아그라",
      column: "/wine/dom-krug-roederer-comparison"
    },
    festive: {
      emoji: "🌹",
      type: "로제 샴페인 타입",
      subtitle: "The Vibrant Socialite",
      desc: "당신은 삶의 즐거움을 온전히 누리는 사람입니다. 화사한 색감, 생동감 넘치는 향, 약간의 달콤함이 어우러진 로제 샴페인이야말로 당신의 에너지와 딱 맞습니다. 인스타에 올리기도 예쁘고, 맛도 화려하죠!",
      wines: ["Billecart-Salmon Brut Rosé", "Ruinart Rosé", "Laurent-Perrier Cuvée Rosé"],
      pairing: "청양 오일 육회, 연어, 딸기 디저트, 가벼운 파스타",
      column: "/wine/rose-champagne-guide"
    }
  };

  var answers = [];
  var currentQ = 0;

  function init() {
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    document.getElementById('retry-btn').addEventListener('click', retry);
    document.getElementById('share-copy').addEventListener('click', copyLink);
    document.getElementById('share-kakao').addEventListener('click', shareKakao);
    document.getElementById('share-insta').addEventListener('click', shareInsta);
  }

  function startQuiz() {
    answers = [];
    currentQ = 0;
    document.getElementById('quiz-intro').classList.add('hidden');
    document.getElementById('quiz-questions').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    showQuestion(0);
  }

  function showQuestion(idx) {
    var q = questions[idx];
    document.getElementById('q-number').textContent = 'Q' + (idx + 1);
    document.getElementById('q-title').textContent = q.q;
    document.getElementById('q-progress-text').textContent = 'Question ' + (idx + 1) + ' / 5';
    document.getElementById('q-progress-pct').textContent = ((idx + 1) * 20) + '%';
    document.getElementById('q-progress-bar').style.width = ((idx + 1) * 20) + '%';

    var optHtml = '';
    for (var i = 0; i < q.opts.length; i++) {
      optHtml += '<button data-type="' + q.opts[i].type + '" class="quiz-opt w-full text-left px-5 py-4 border border-[#1a1a1a] hover:border-[#B8A060]/50 hover:bg-[#B8A060]/5 transition-all duration-300 text-sm text-[#999] hover:text-[#E0E0E0] cursor-pointer">' +
        '<span class="text-[#B8A060]/50 mr-3">' + String.fromCharCode(65 + i) + '.</span>' + q.opts[i].text + '</button>';
    }
    document.getElementById('q-options').innerHTML = optHtml;

    var opts = document.querySelectorAll('.quiz-opt');
    for (var j = 0; j < opts.length; j++) {
      opts[j].addEventListener('click', function() {
        var t = this.getAttribute('data-type');
        answers.push(t);
        // Highlight selected
        this.classList.add('border-[#B8A060]', 'bg-[#B8A060]/10', 'text-[#E0E0E0]');
        
        setTimeout(function() {
          currentQ++;
          if (currentQ < questions.length) {
            showQuestion(currentQ);
          } else {
            showResult();
          }
        }, 400);
      });
    }
  }

  function showResult() {
    // Count types
    var counts = {};
    for (var i = 0; i < answers.length; i++) {
      counts[answers[i]] = (counts[answers[i]] || 0) + 1;
    }
    var maxType = 'casual';
    var maxCount = 0;
    for (var type in counts) {
      if (counts[type] > maxCount) { maxCount = counts[type]; maxType = type; }
    }

    var r = results[maxType];
    document.getElementById('quiz-questions').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
    document.getElementById('result-emoji').textContent = r.emoji;
    document.getElementById('result-type').textContent = r.type;
    document.getElementById('result-subtitle').textContent = r.subtitle;
    document.getElementById('result-desc').textContent = r.desc;
    document.getElementById('result-pairing').textContent = r.pairing;
    document.getElementById('result-column-link').href = r.column;

    var wineHtml = '';
    for (var w = 0; w < r.wines.length; w++) {
      wineHtml += '<p class="text-sm text-[#E0E0E0]"><span class="text-[#B8A060] mr-2">•</span>' + r.wines[w] + '</p>';
    }
    document.getElementById('result-wines').innerHTML = wineHtml;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function retry() {
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-intro').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function copyLink() {
    var text = '🍾 나의 샴페인 타입은? RAWISM 와인 퀴즈 결과: ' + document.getElementById('result-type').textContent + '! https://rawism.kr/quiz';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      var ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    var msg = document.getElementById('share-msg');
    msg.classList.remove('hidden');
    setTimeout(function() { msg.classList.add('hidden'); }, 2000);
  }

  function shareKakao() {
    var resultType = document.getElementById('result-type').textContent;
    var url = 'https://sharer.kakao.com/talk/friends/picker/link?app_key=javascript&url=' + encodeURIComponent('https://rawism.kr/quiz') + '&text=' + encodeURIComponent('🍾 나의 샴페인 타입: ' + resultType + '! 너도 해봐!');
    window.open(url, '_blank', 'width=480,height=700');
  }

  function shareInsta() {
    var resultType = document.getElementById('result-type').textContent;
    var text = '🍾 나의 샴페인 타입은 [' + resultType + ']! @rawism_theblack 에서 테스트 해보세요 👉 rawism.kr/quiz';
    if (navigator.clipboard) { navigator.clipboard.writeText(text); }
    alert('텍스트가 복사되었습니다!\\n인스타그램 스토리에 붙여넣기 해주세요 📸');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
      ` }} />}

      {/* Footer */}
      <footer class="py-6 text-center text-[10px] text-[#555] border-t border-[#1a1a1a] px-4">
        <p>© 2024 RAWISM The Black. All rights reserved.</p>
        <div class="flex justify-center gap-4 mt-3">
          <a href="/wine" class="text-[#777] hover:text-[#B8A060] transition-colors">Wine Guide</a>
          <a href="/gallery" class="text-[#777] hover:text-[#B8A060] transition-colors">Gallery</a>
          <a href="/blog" class="text-[#777] hover:text-[#B8A060] transition-colors">Blog</a>
          <a href="/menu" class="text-[#777] hover:text-[#B8A060] transition-colors">Menu</a>
        </div>
      </footer>
    </div>
  )
}
