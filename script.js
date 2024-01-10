const barValues = [
  [10, 10, 10],
  [30, 30, 30],
  [50, 50, 50],
  [60, 60, 60],
  [70, 70, 70]
];

const colors = ['#756AB6', '#4942E4', '#11009E'];

const barChartContainer = document.getElementById('barChartContainer');

barValues.forEach((values, barIndex) => {
  const bar = document.createElement('div');
  bar.className = 'bar';

  values.forEach((value, index) => {
    const valueElement = document.createElement('div');
    valueElement.className = 'value';
    valueElement.style.height = `${value}px`;
    valueElement.style.backgroundColor = colors[index];
    bar.appendChild(valueElement);
  });

  barChartContainer.appendChild(bar);
});

document.addEventListener("DOMContentLoaded", function () {
  const employeeContributionSlider = document.getElementById("employee-contribution");
  const retirementAgeSlider = document.getElementById("retirement-age");

  const employeeContributionValue = document.getElementById("employee-contribution-value");
  const retirementAgeValue = document.getElementById("retirement-age-value");

  employeeContributionSlider.addEventListener("input", function () {
      employeeContributionValue.textContent = `${this.value}%`;
  });

  retirementAgeSlider.addEventListener("input", function () {
      retirementAgeValue.textContent = `${this.value} years`;
  });

  anotherSlider.addEventListener("input", function () {
      anotherSliderValue.textContent = `${this.value} units`;
  });
});


document.getElementById('helpLink').addEventListener('click', function() {
  alert('Help Docs will be displayed.');
});


function handleClick(buttonName) {
  alert('Clicked ' + buttonName);

}