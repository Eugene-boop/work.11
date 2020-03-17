'use strict';

const sendForms = scrollWidth => {
  document.addEventListener('submit', e => e.preventDefault());

  const send = (form) => {
    const errorMessage = 'Что-то пошло не так',
      successMessage = 'Спасибо! Скоро свяжемся';

    const statusMessage = document.createElement('div');
    statusMessage.textContent =  'Загрузка...';;
    statusMessage.style.fontSize = '1.5rem';
    statusMessage.style.color = 'white';
    statusMessage.style.marginTop = '5px';
    

    const statusAlert = document.createElement('div');
    statusAlert.style.cssText = 'font-size:1.5rem; color: white; height: 100%; width: 100%; text-align: center;';
    statusAlert.classList.add('status-alert');

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
      form.appendChild(statusMessage);
      if (form.closest('#cards')) statusMessage.style.color = 'black';

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
          if (form.closest('#banner') || form.closest('#footer')) {
            showPopup();
            return;
          }
          form.querySelectorAll('*').forEach(item => {
            item.style.display = 'none';
          });
          form.parentNode.style.cssText = 'display: flex;  align-items: center;  justify-content: center;';
          if (form.closest('#cards')) statusAlert.style.color = 'black';
          form.insertAdjacentElement('afterbegin', statusAlert);
          
        })
        .catch(error => {
          statusAlert.textContent = errorMessage;
          if (form.closest('#banner') || form.closest('#footer')) {
            showPopup(error);
            return;
          }
          form.querySelectorAll('*').forEach(item => {
            item.style.display = 'none';
          });
          form.parentNode.style.cssText = 'display: flex;  align-items: center;  justify-content: center;';
          if (form.closest('#cards')) statusAlert.style.color = 'black';
          form.insertAdjacentElement('afterbegin', statusAlert);
          console.log(error);
        })
        .finally( () => {
          form.removeChild(statusMessage);
          form.querySelectorAll('input').forEach(item => {
            item.value = '';
          });
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