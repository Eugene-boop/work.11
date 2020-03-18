'use strict';

const sendForms = scrollWidth => {
  document.addEventListener('submit', e => e.preventDefault());
  
  const send = (form) => {
    const errorMessage = 'Что-то пошло не так',
      successMessage = 'Спасибо! Скоро свяжемся';
    
    const statusMessage = document.createElement('div');
    statusMessage.textContent =  'Загрузка...';
    statusMessage.style.fontSize = '1.5rem';
    statusMessage.style.color = 'white';
    statusMessage.style.marginTop = '5px';
    statusMessage.style.display = 'none';
    statusMessage.classList.add('statusMessage');
    form.appendChild(statusMessage);

    const statusAlert = document.createElement('div');
    statusAlert.style.cssText = 'font-size:1.5rem; color: white; height: 100%; width: 100%; text-align: center;';
    statusAlert.classList.add('status-alert');

    const wrapper = document.querySelectorAll('.wrapper');

    const showPopup = msg => {
      const popup = document.getElementById('thanks');
      if (msg) {
        popup.querySelector('h4').textContent = 'Ошибка';
        popup.querySelector('p').innerHTML = `Сообщите оператору или на почту </br> ${msg}`;
      }
      popup.style.display = 'block';
      document.body.style.cssText = ` overflow: hidden; width: 100%`;
      wrapper.forEach(element => {
        element.style.paddingRight = +getComputedStyle(element).paddingRight.slice(0, -2) + scrollWidth + 'px';
      });
      const hide = e => {
        const target = e.target;
        if (!target.closest('.form-content') || target.matches('.close-btn')) {
          popup.style.display = 'none';
          document.body.style.cssText = ``;
          wrapper.forEach(element => {
            element.style.paddingRight = '';
          });
          popup.removeEventListener('click', hide);
        }
      };

      popup.addEventListener('click', hide)
    };

    const informate = (error = null) => {
      if (error) {
        statusAlert.textContent = errorMessage;
      }else {
        statusAlert.textContent = successMessage;
      }
      if (form.closest('#banner') || form.closest('#footer')) {
        showPopup(error);
        return;
      }
      if (form.closest('#cards')) {
        if (error) {
          statusMessage.textContent =  errorMessage;
        }else {
          statusMessage.textContent =  successMessage;
        }
        return;
      };
      form.querySelectorAll('*').forEach(item => {
        item.style.display = 'none';
      });          
      form.parentNode.style.cssText = 'display: flex;  align-items: center;  justify-content: center;';
      form.insertAdjacentElement('afterbegin', statusAlert);
    };

    form.addEventListener('submit', e => {
      statusMessage.textContent =  'Загрузка...';
      statusMessage.style.display = '';
      if (form.closest('#cards')) statusMessage.style.color = 'black';

      const formData = new FormData(form);
      const body = {};
      formData.forEach((val, key) => {
        if (!key.startsWith('mask')) {
          body[key] = val;
        }
      });

      form.querySelectorAll('input').forEach(item => {
        if (item.type !== 'checkbox' && item.type !== 'radio' && item.name !== 'form_name'  ) {
          item.value = '';
        } else if ((form.matches('#card_order') && (item.value === '1' || item.value ===  'mozaika')) ||
        (form.matches('#footer_form') && item.value ===  'mozaika') || (form.matches('#card_order') && item.value === '1s')) {
          item.checked = true;
        } else item.checked = false;

      });

      postData(body)
        .then(response => {
          if (response.status !== 200)  throw new Error(response.statusText);
          informate();
        })
        .catch(error => {
          informate(error);
          console.log(error);
        })
        .finally( () => {
          if (form.closest('#cards')) {
            setTimeout(() => {
              statusMessage.style.display = 'none';
              statusMessage.textContent =  'Загрузка...';
            }, 3000);
            return;
          }
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