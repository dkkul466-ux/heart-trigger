// ===== 캐릭터 정보: [ ] 부분을 팀 내용으로 바꾸세요 =====

const characters = [
  {
    name: "서이현",
    desc: "거합도를 취미로 하는 무뚝뚝한 체육 선생님. 학생들을 세심하게 살피고 위기가 닥치면 가장 먼저 움직인다. 학생을 지키다 노이즈의 습격으로 한쪽 눈에 큰 상처를 입었다.",
    img: "images/char-seo.png",
    color: "#6f87a8"
  },
  {
    name: "류호연",
    desc: "명랑하고 능글맞은 태권소녀. 어릴 적 노이즈 구역에서 독기에 노출된 후유증으로 남의 시선을 신경 쓰지만, 주인공과 가까워지며 있는 그대로의 자신을 받아들이게 된다.",
    img: "images/char-ryu.png",
    color: "#ff5a2a"
  },
  {
    name: "정유나",
    desc: "중2병에 걸린 4차원 선배, 자칭 'Dark Flame Adapter'. 당당한 겉모습 뒤에 평범해진 자신에 대한 열등감을 숨기고 있으며, 주인공만이 그 상처를 알아본다.",
    img: "images/char-jung.png",
    color: "#9b4dff"
  }
];

// 캐릭터 버튼을 누르면 이름, 소개, 그림, 색이 바뀜
const charButtons = document.querySelectorAll(".char-btn");
const charImg = document.querySelector(".char-img");
const charSection = document.querySelector(".characters");


function showCharacter(index) {
  const c = characters[index];
  charButtons.forEach((b) => b.classList.toggle("is-active", Number(b.dataset.char) === index));
  document.querySelector(".char-name").textContent = c.name;
  document.querySelector(".char-desc").textContent = c.desc;
  charImg.src = c.img;
  charImg.alt = c.name;
  charSection.style.setProperty("--char-color", c.color);

  // 애니메이션을 처음부터 다시 재생
  charImg.classList.remove("is-switching");
  void charImg.offsetWidth;
  charImg.classList.add("is-switching");
}

charButtons.forEach((btn) => {
  btn.addEventListener("click", () => showCharacter(Number(btn.dataset.char)));
});
showCharacter(0);

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

// ===== 사전예약 달성률 표시 =====

// 테스트용 숫자 (실제 예약자 수 아님)
const currentReservations = 0;
const targetReservations = 50000;

const progress = Math.min(
  100,
  (currentReservations / targetReservations) * 100
);

document.getElementById("milestoneFill").style.width =
  progress + "%";

document.getElementById("milestoneCount").textContent =
  `현재 ${currentReservations.toLocaleString()}명 / 목표 ${targetReservations.toLocaleString()}명`;
