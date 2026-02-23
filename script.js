let interviewList = [];
let rejectionList = [];
let currentStatus = "all-filter-btn";

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview-count");
let rejectionCount = document.getElementById("rejection-count");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectionFilterBtn = document.getElementById("rejection-filter-btn");

const allCardsSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");
const noJobs = document.getElementById("no-job");

function calculateCount() {
  total.innerText = allCardsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectionCount.innerText = rejectionList.length;
}

calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-blue-500", "text-white");
  interviewFilterBtn.classList.remove("bg-blue-500", "text-white");
  rejectionFilterBtn.classList.remove("bg-blue-500", "text-white");

  allFilterBtn.classList.add("bg-white", "text-black");
  interviewFilterBtn.classList.add("bg-white", "text-black");
  rejectionFilterBtn.classList.add("bg-white", "text-black");

  const selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.remove("bg-white", "text-black");
  selected.classList.add("bg-blue-500", "text-white");

  filteredJobs();
}

function filteredJobs() {
  filteredSection.innerHTML = "";

  if (currentStatus == "all-filter-btn") {
    allCardsSection.classList.remove("hidden");
    filteredSection.classList.add("hidden");
    noJobs.classList.add("hidden");
    return;
  }

  allCardsSection.classList.add("hidden");

  if (currentStatus == "interview-filter-btn") {
    if (interviewList.length == 0) {
      noJobs.classList.remove("hidden");
      filteredSection.classList.add("hidden");
    } else {
      noJobs.classList.add("hidden");
      filteredSection.classList.remove("hidden");
      renderInterview();
    }
  }

  if (currentStatus == "rejection-filter-btn") {
    if (rejectionList.length == 0) {
      noJobs.classList.remove("hidden");
      filteredSection.classList.add("hidden");
    } else {
      noJobs.classList.add("hidden");
      filteredSection.classList.remove("hidden");
      renderRejection();
    }
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interveiw-btn")) {
    let parentNode = event.target.parentNode.parentNode;
    let jobTitle = parentNode.querySelector(".job-title").innerText;
    let skill = parentNode.querySelector(".skill").innerText;
    let jobKind = parentNode.querySelector(".job-kind").innerText;
    let status = parentNode.querySelector(".status").innerText;
    let notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".status").innerText = "INTERVIEW";

    let cardInfo = {
      jobTitle,
      skill,
      jobKind,
      status: "INTERVIEW",
      notes,
    };

    const jobExist = interviewList.find(
      (item) => item.jobTitle == cardInfo.jobTitle,
    );

    if (!jobExist) {
      interviewList.push(cardInfo);
    }
    rejectionList = rejectionList.filter(
      (item) => item.jobTitle != cardInfo.jobTitle,
    );

    calculateCount();
    filteredJobs();
  } else if (event.target.classList.contains("rejection-btn")) {
    let parentNode = event.target.parentNode.parentNode;
    let jobTitle = parentNode.querySelector(".job-title").innerText;
    let skill = parentNode.querySelector(".skill").innerText;
    let jobKind = parentNode.querySelector(".job-kind").innerText;
    let status = parentNode.querySelector(".status").innerText;
    let notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".status").innerText = "REJECTED";

    let cardInfo = {
      jobTitle,
      skill,
      jobKind,
      status: "REJECTED",
      notes,
    };

    const jobExist = rejectionList.find(
      (item) => item.jobTitle == cardInfo.jobTitle,
    );

    if (!jobExist) {
      rejectionList.push(cardInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.jobTitle != cardInfo.jobTitle,
    );

    calculateCount();
    filteredJobs();
  }

  // delete logic
  else if (event.target.parentNode.classList.contains("delete-btn")) {
    let card;

    if (event.target.parentNode.classList.contains("delete-btn")) {
      card = event.target.parentNode.parentNode;
    }
    const jobTitle = card.querySelector(".job-title").innerText;

    card.remove();

    interviewList = interviewList.filter((item) => item.jobTitle !== jobTitle);

    rejectionList = rejectionList.filter((item) => item.jobTitle !== jobTitle);

    filteredJobs();
    calculateCount();
  }
});

function renderInterview() {
  filteredSection.innerHTML = "";

  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement("div");
    div.className = "flex bg-[#FFFFFF] p-5 rounded-[8px] justify-between";
    div.innerHTML = ` <div>
            <p class="job-title font-bold">${interview.jobTitle}</p>
            <p class="skill text-[#64748B]">${interview.skill}</p>
            <p class="job-kind my-[20px] text-[#64748B] text-[14px]">
              ${interview.jobKind}
            </p>
            <p class="status font-bold bg-[#EEF4FF] mb-2 px-6 py-3 w-fit rounded-[8px]">
               ${interview.status}
            </p>
            <p class="notes mb-5">
             ${interview.notes}
            </p>
            <div class="">
              <button
                class="interveiw-btn px-5 py-2 font-bold border text-green-400 border-green-400 rounded-[8px]"
              >
                INTERVIEW
              </button>
              <button
                class="rejection-btn px-5 py-2 font-bold text-red-400 border border-red-400 rounded-[8px]"
              >
                REJECTED
              </button>
            </div>
          </div>
          <div class="delete-btn flex-shrink-0"><img src="./Group 1.png" alt="" /></div>`;

    filteredSection.appendChild(div);
  }
}

function renderRejection() {
  filteredSection.innerHTML = "";

  for (let rejection of rejectionList) {
    console.log(rejection);
    let div = document.createElement("div");
    div.className = "flex bg-[#FFFFFF] p-5 rounded-[8px] justify-between";
    div.innerHTML = ` <div>
            <p class="job-title font-bold">${rejection.jobTitle}</p>
            <p class="skill text-[#64748B]">${rejection.skill}</p>
            <p class="job-kind my-[20px] text-[#64748B] text-[14px]">
              ${rejection.jobKind}
            </p>
            <p class="status font-bold bg-[#EEF4FF] mb-2 px-6 py-3 w-fit rounded-[8px]">
               ${rejection.status}
            </p>
            <p class="notes mb-5">
             ${rejection.notes}
            </p>
            <div class="">
              <button
                class="interveiw-btn px-5 py-2 font-bold border text-green-400 border-green-400 rounded-[8px]"
              >
                INTERVIEW
              </button>
              <button
                class="rejection-btn px-5 py-2 font-bold text-red-400 border border-red-400 rounded-[8px]"
              >
                REJECTED
              </button>
            </div>
          </div>
          <div class="delete-btn flex-shrink-0"><img src="./Group 1.png" alt="" /></div>`;

    filteredSection.appendChild(div);
  }
}
