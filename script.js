const courses = [
    {
        "name": "食品感官检验技术",
        "time": "1-2节",
        "weeks": [12],
        "location": "实训楼2-305",
        "teacher": "周聪",
        "day": "Monday",
    },
    {
        "name": "食品感官检验技术",
        "time": "3-4节",
        "weeks": [12],
        "location": "实训楼2-305",
        "teacher": "周聪",
        "day": "Monday",
    },
    {
        "name": "食品添加剂应用技术",
        "time": "3-4节",
        "weeks": Array.from({ length: 8 - 4 }, (v, k) => k + 4),  // [4, 5, 6, 7]
        "location": "实训楼1-501",
        "teacher": "周聪",
        "day": "Monday",
    },
    {
        "name": "食品感官检验技术",
        "time": "3-4节",
        "weeks": Array.from({ length: 12 - 9 }, (v, k) => k + 9),  // [9, 10, 11]
        "location": "实训楼2-305",
        "teacher": "周聪",
        "day": "Monday",
    },
    {
        "name": "食品安全与质量管理",
        "time": "5-6节",
        "weeks": Array.from({ length: 9 - 1 }, (v, k) => k + 1),  // [1, 2, 3, 4, 5, 6, 7, 8]
        "location": "实训楼1-503",
        "teacher": "郭慧",
        "day": "Monday",
    },
    {
        "name": "食品安全与质量管理",
        "time": "7-8节",
        "weeks": Array.from({ length: 9 - 1 }, (v, k) => k + 1),  // [1, 2, 3, 4, 5, 6, 7, 8]
        "location": "实训楼1-503",
        "teacher": "郭慧",
        "day": "Monday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "7-8节",
        "weeks": [13, 14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Monday",
    },
    {
        "name": "检测实验室管理规范",
        "time": "9-10节",
        "weeks": Array.from({ length: 10 - 1 }, (v, k) => k + 1),  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
        "location": "实训楼1-503",
        "teacher": "外聘邱琳",
        "day": "Monday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "1-2节",
        "weeks": [13, 14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Tuesday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "3-4节",
        "weeks": [13, 14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Tuesday",
    },
    {
        "name": "食品感官检验技术",
        "time": "3-4节",
        "weeks": Array.from({ length: 13 - 2 }, (v, k) => k + 2),  // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        "location": "实训楼2-305",
        "teacher": "周聪",
        "day": "Tuesday",
    },
    {
        "name": "食品安全与质量管理",
        "time": "5-6节",
        "weeks": [5, 6, 7, 8],
        "location": "实训楼1-503",
        "teacher": "郭慧",
        "day": "Tuesday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "5-6节",
        "weeks": [13, 14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Tuesday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "7-8节",
        "weeks": [13, 14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Tuesday",
    },
    {
        "name": "检测实验室管理规范",
        "time": "9-10节",
        "weeks": [1, 2, 4, 6, 7, 9],
        "location": "实训楼1-503",
        "teacher": "外聘邱琳",
        "day": "Tuesday",
    },
    {
        "name": "食品安全与质量管理",
        "time": "1-2节",
        "weeks": [1, 2, 3, 4],
        "location": "实训楼1-503",
        "teacher": "郭慧",
        "day": "Wednesday",
    },
    {
        "name": "食品添加剂应用技术",
        "time": "1-2节",
        "weeks": [12],
        "location": "实训楼1-503",
        "teacher": "周聪",
        "day": "Wednesday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "1-2节",
        "weeks": [13, 14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Wednesday",
    },
    {
        "name": "食品添加剂应用技术",
        "time": "3-4节",
        "weeks": [12],
        "location": "实训楼1-503",
        "teacher": "周聪",
        "day": "Wednesday",
    },
    {
        "name": "食品添加剂应用技术",
        "time": "3-4节",
        "weeks": Array.from({ length: 12 - 2 }, (v, k) => k + 2),  // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        "location": "实训楼1-503",
        "teacher": "周聪",
        "day": "Wednesday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "3-4节",
        "weeks": [13, 14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Wednesday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "1-2节",
        "weeks": [13, 14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Thursday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "3-4节",
        "weeks": [13, 14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Thursday",
    },
    {
        "name": "食品安全与质量管理",
        "time": "3-4节",
        "weeks": Array.from({ length: 9 - 1 }, (v, k) => k + 1),  // [1, 2, 3, 4, 5, 6, 7, 8]
        "location": "实训楼1-503",
        "teacher": "郭慧",
        "day": "Thursday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "5-6节",
        "weeks": [13, 14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Thursday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "7-8节",
        "weeks": [13, 14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Thursday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "1-2节",
        "weeks": [14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Friday",
    },
    {
        "name": "现代仪器综合实训",
        "time": "3-4节",
        "weeks": [14],
        "location": "实训楼1-501",
        "teacher": "冯文文, 雷倩, 郭慧",
        "day": "Friday",
    },
];
let currentWeek = 1;
const totalWeeks = 14;
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timesOfDay = ["1-2节", "3-4节", "5-6节", "7-8节", "9-10节"];

// 计算每一天的日期
function getDatesOfWeek(weekNumber) {
    const startDate = new Date(2024, 8, 2); // 2024年9月2日是第1周的周一
    startDate.setDate(startDate.getDate() + (weekNumber - 1) * 7);

    return daysOfWeek.map((_, index) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + index);
        return date.toLocaleDateString('zh-CN'); // 按中文日期格式显示
    });
}

// 渲染表格
function renderTable(week) {
    const table = document.getElementById("schedule-table");
    const weekTitle = document.getElementById("week-title");
    weekTitle.textContent = `第${week}周的课程表`;

    const dates = getDatesOfWeek(week);

    table.innerHTML = `
        <tr>
            <th>时间段</th>
            ${dates.map((date, index) => `<th>${daysOfWeek[index]}<br>${date}</th>`).join('')}
        </tr>
    `;

    timesOfDay.forEach(time => {
        const row = document.createElement("tr");
        const timeCell = document.createElement("td");
        timeCell.textContent = time;
        row.appendChild(timeCell);

        daysOfWeek.forEach(day => {
            const cell = document.createElement("td");
            const course = courses.find(c => c.day === day && c.time === time && c.weeks.includes(week));
            if (course) {
                cell.innerHTML = `<strong>${course.name}</strong><br>${course.location}<br>${course.teacher}`;
            } else {
                cell.textContent = ""; // 没有课程时为空
            }
            row.appendChild(cell);
        });

        table.appendChild(row);
    });
}

// 更新按钮状态
function updateButtons() {
    const prevButton = document.getElementById("prev-week");
    const nextButton = document.getElementById("next-week");

    prevButton.disabled = currentWeek <= 1;
    nextButton.disabled = currentWeek >= totalWeeks;
}

// 处理按钮点击事件
function handleButtonClick(event) {
    if (event.target.id === "prev-week" && currentWeek > 1) {
        currentWeek--;
    } else if (event.target.id === "next-week" && currentWeek < totalWeeks) {
        currentWeek++;
    }
    renderTable(currentWeek);
    updateButtons();
}

// 处理下拉菜单选择
function handleWeekSelectChange() {
    const weekSelect = document.getElementById("week-select");
    currentWeek = parseInt(weekSelect.value, 10);
    renderTable(currentWeek);
    updateButtons();
}

// 初始化
function initialize() {
    renderTable(currentWeek);
    updateButtons();

    document.getElementById("prev-week").addEventListener("click", handleButtonClick);
    document.getElementById("next-week").addEventListener("click", handleButtonClick);
    document.getElementById("week-select").addEventListener("change", handleWeekSelectChange);
}

document.addEventListener('DOMContentLoaded', initialize);