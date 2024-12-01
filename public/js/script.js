document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    const hiddenSkills = document.querySelectorAll('.skill-card.hidden');
  
    readMoreBtn.addEventListener('click', () => {
      hiddenSkills.forEach(skill => skill.classList.remove('hidden'));
      readMoreBtn.classList.add('hidden');
      showLessBtn.classList.remove('hidden');
    });
  
    showLessBtn.addEventListener('click', () => {
      hiddenSkills.forEach(skill => skill.classList.add('hidden'));
      showLessBtn.classList.add('hidden');
      readMoreBtn.classList.remove('hidden');
    });
  });
  