const ratingEls = document.querySelectorAll('.rating');
const btn = document.getElementById('btn');
const container = document.getElementById('container');

let checkedRating = '';

ratingEls.forEach((item) => {
  item.addEventListener('click', (e) => {
    // console.log(e.target.innerText || e.target.parentNode.innerText);
    removeActive();
    checkedRating = e.target.innerText;
    e.target.classList.add('active');
    e.target.parentNode.classList.toggle('active');
  });
});

function removeActive() {
  ratingEls.forEach((item) => {
    item.classList.remove('active');
  });
}

// rating.addEventListener('click', () => {
//   rating.classList.toggle('active');
//   if (rating.classList.contains('!active')) {
//     rating.classList.add('active');
//   } else {
//     rating.classList.remove('active');
//   }
// });

btn.addEventListener('click', () => {
  if (checkedRating != '') {
    container.innerHTML = `<strong>Thank You!</strong>
    <br>
    <br>
    <strong>Feedback : ${checkedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>
    `;
  }
  // let checkedRating = document.querySelector('.rating.active').innerText;
});
