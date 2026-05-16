const mealInput = document.getElementById('mealInput');
const preview = document.getElementById('preview');
const analyzeBtn = document.getElementById('analyzeBtn');
const results = document.getElementById('results');

mealInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    preview.src = reader.result;
    preview.classList.remove('hidden');
  };

  reader.readAsDataURL(file);
});

analyzeBtn.addEventListener('click', () => {
  results.classList.remove('hidden');

  const fakeResults = [
    {
      calories: 620,
      protein: '38g',
      carbs: '55g',
      fat: '22g'
    },
    {
      calories: 540,
      protein: '42g',
      carbs: '48g',
      fat: '18g'
    },
    {
      calories: 710,
      protein: '51g',
      carbs: '66g',
      fat: '27g'
    }
  ];

  const random = fakeResults[Math.floor(Math.random() * fakeResults.length)];

  document.getElementById('calories').textContent = random.calories;
  document.getElementById('protein').textContent = random.protein;
  document.getElementById('carbs').textContent = random.carbs;
  document.getElementById('fat').textContent = random.fat;
});
