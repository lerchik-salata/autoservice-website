document.querySelector('.burger').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
    document.documentElement.classList.toggle('no-scroll');
});

document.querySelectorAll('.faq_question_btn').forEach(item => {
    item.addEventListener('click', function() {
      const container = this.closest('.faq_item');
      const answer = container.querySelector('.faq_answer');
      const closeBtn = container.querySelector('.faq_question_close');
      const openBtn = container.querySelector('.faq_question_open');
      
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.paddingTop = null;
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.paddingTop = '20px';
        closeBtn.style.display = 'block';
        openBtn.style.display = 'none';
      }
    });
  });
