// ===== 캐릭터 정보: [ ] 부분을 팀 내용으로 바꾸세요 =====
const characters = [
 const characters = [
  {
    name: "서이현",
    desc: "거합도를 취미로 하는 무뚝뚝한 체육 선생님. 학생들을 세심하게 살피고 위기가 닥치면 가장 먼저 움직인다. 학생을 지키다 노이즈의 습격으로 한쪽 눈에 큰 상처를 입었다.",
  },
  {
    name: "류호연",
    desc: "명랑하고 능글맞은 태권소녀. 어릴 적 노이즈 구역에서 독기에 노출된 후유증으로 남의 시선을 신경 쓰지만, 주인공과 가까워지며 있는 그대로의 자신을 받아들이게 된다.",
  },
  {
    name: "정유나",
    desc: "중2병에 걸린 4차원 선배, 자칭 'Dark Flame Adapter'. 당당한 겉모습 뒤에 평범해진 자신에 대한 열등감을 숨기고 있으며, 주인공만이 그 상처를 알아본다.",
  },
];

// 캐릭터 버튼을 누르면 이름과 소개가 바뀜
const charButtons = document.querySelectorAll(".char-btn");
charButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    charButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const c = characters[btn.dataset.char];
    document.querySelector(".char-name").textContent = c.name;
    document.querySelector(".char-desc").textContent = c.desc;
  });
});

// 소식 탭: 누른 탭에 표시만 바뀜 (목록 바꾸기는 직접 추가해 보세요)
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
  });
});

// 스크롤 위치에 따라 오른쪽 점 표시 바꾸기
const dots = document.querySelectorAll(".dots-nav a, .nav-menu a");const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      dots.forEach((d) => d.classList.toggle("is-active", d.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll("section").forEach((s) => observer.observe(s));
document.addEventListener("pointerdown", (e) => {
  const glow = document.createElement("span");
  glow.className = "tap-glow";
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
  document.body.appendChild(glow);
  setTimeout(() => glow.remove(), 500);
});
// 사전예약 신청
const form = document.getElementById("preregForm");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // 페이지가 새로고침되지 않게 막기
  const msg = document.getElementById("formMsg");
  if (!document.getElementById("agree").checked) {
    msg.textContent = "개인정보 수집에 동의해 주세요.";
    return;
  }
  msg.textContent = "사전예약이 완료되었습니다!";
  form.reset();
});