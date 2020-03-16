'use strict';

const sendForms = scrollWidth => {
  document.addEventListener('submit', e => e.preventDefault());

  const send = (form) => {
    const errorMessage = 'Что-то пошло не так',
      successMessage = 'Спасибо! Скоро свяжемся',
      loadMessage = 'Загрузка...';

    const statusMessage = document.createElement('div');
    statusMessage.textContent = ``;
    statusMessage.style.fontSize = '1.5rem';
    statusMessage.style.color = 'white';
    statusMessage.style.marginTop = '5px';
    form.appendChild(statusMessage);

    const statusAlert = document.createElement('div');
    statusAlert.style.cssText = 'font-size:1.5rem; color: white; height: 100%; width: 100%; text-align: center;';

    const showPopup = msg => {
      const popup = document.getElementById('thanks');
      if (msg) {
        popup.querySelector('h4').textContent = 'Ошибка';
        popup.querySelector('p').innerHTML = `Сообщите оператору или на почту </br> ${msg}`;
      }
      popup.style.display = 'block';
      document.body.style.cssText = `margin-right: ${scrollWidth}px; overflow: hidden; width: 100%`;

      const hide = e => {
        const target = e.target;
        if (!target.closest('.form-content') || target.matches('.close-btn')) {
          popup.style.display = 'none';
          document.body.style.cssText = ``;
          popup.removeEventListener('click', hide);
        }
      };

      popup.addEventListener('click', hide)
    };

    form.addEventListener('submit', e => {
      statusMessage.style.display = 'block';
      if (form.closest('#cards')) statusMessage.style.color = 'black';
      statusMessage.textContent = loadMessage;

      const formData = new FormData(form);
      const body = {};
      formData.forEach((val, key) => {
        if (!key.startsWith('mask')) {
          body[key] = val;
        }
      });

      postData(body)
        .then(response => {
          if (response.status !== 200)  throw new Error(response.statusText);
          statusAlert.textContent = successMessage;
          form.querySelectorAll('input').forEach(item => {
            item.classList.remove('success');
            item.value = '';
          });
          console.log(form.closest('.form-wrapper'));
          if (form.closest('.form-wrapper')) {
            showPopup();
            return;
          }
          form.innerHTML = '';
          form.parentNode.style.cssText = 'display: flex;  align-items: center;  justify-content: center;';
          if (form.closest('#cards')) statusAlert.style.color = 'black';
          form.insertAdjacentElement('afterbegin', statusAlert);
          
        })
        .catch(error => {
          statusAlert.textContent = errorMessage;
          if (form.closest('.form-wrapper')) {
            showPopup(error);
            return;
          }
          form.innerHTML = '';
          form.parentNode.style.cssText = 'display: flex;  align-items: center;  justify-content: center;';
          if (form.closest('#cards')) statusAlert.style.color = 'black';
          form.insertAdjacentElement('afterbegin', statusAlert);
          console.log(error);
        })
        .finally( () => {
          statusMessage.style.display = 'none';
        });



    });

    const postData = data => fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    });
  };

  const forms = document.querySelectorAll('form');
  forms.forEach(item => {
    send(item);
  });
};

export default sendForms;