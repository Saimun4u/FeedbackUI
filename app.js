const rating = document.querySelector('.rating');
const btn = document.getElementById('btn');
const container = document.getElementById('container');

rating.addEventListener('click', () => {
  rating.classList.toggle('active');
});

btn.addEventListener('click', () => {
  let content = rating.childNodes[2].textContent;
  container.innerHTML = `<h3>Thank you!</h3>
  <h3>Feedback : ${content}</h3
  <p>We'll use your feedback to improve our customer support.</p>
  `;
});
