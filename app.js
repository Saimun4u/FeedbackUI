const ratingEls = document.querySelectorAll('.rating');
const btn = document.getElementById('btn');
const container = document.getElementById('container');

ratingEls.forEach((item) => {
  item.addEventListener('click', (e) => {
    // console.log(e.target.innerText || e.target.parentNode.innerText);
    console.log(e.target.innerText);
    e.target.classList.add('active');
    e.target.parentNode.classList.toggle('active');
  });
});

// rating.addEventListener('click', () => {
//   rating.classList.toggle('active');
//   if (rating.classList.contains('!active')) {
//     rating.classList.add('active');
//   } else {
//     rating.classList.remove('active');
//   }
// });

btn.addEventListener('click', () => {
  let content = rating.childNodes[2].textContent;
  container.innerHTML = `<h3>Thank you!</h3>
  <h3>Feedback : ${content}</h3
  <p>We'll use your feedback to improve our customer support.</p>
  `;
});
