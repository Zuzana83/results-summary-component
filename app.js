const url = "./data.json";
const summaryList = document.querySelector(".summary-list");

const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    displayData(data);
}

const displayData = (data) => {
    summaryList.innerHTML = data.map((sumItem) => {
        const {category, score, icon} = sumItem;

        return ` <li class="summary-item">
           <div class="summary-scope">
            <img src="${icon}" alt="${category} category" class="summary-icon" />
            <span>${category}</span>
           </div>
           <div class="score-wrapper">
            <span class="real-score">${score}</span>
            <span>/100</span>
           </div>
          </li>`;
    }).join("");
}
 
fetchData();