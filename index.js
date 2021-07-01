let numberInputDom = document.querySelectorAll('.inputBlock>div>input[type=number]');
numberInputDom.forEach((item) => {
  item.addEventListener("input", (e) => {
    e.target.nextElementSibling.value = e.target.value;
  });
});

let rangeInputDom = document.querySelectorAll('.inputBlock>div>input[type=range]');
rangeInputDom.forEach((item) => {
  item.addEventListener("input", (e) => {
    e.target.previousElementSibling.value = e.target.value;
  });
});
