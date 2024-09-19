$(document).ready(function () {
    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open')

    };
    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }
    });

    $('#inputPhone').mask('+375 (99) 999-99-99');

    const form = document.querySelector('.order-info-form');

    form.addEventListener('submit', function (event) {

        form.classList.remove('was-validated');

        event.preventDefault();
        event.stopPropagation();

        form.classList.add('was-validated');

        $('.order-info-form input').each(function () {

            if (!this.checkValidity()) {
                $(this).addClass('is-invalid');
                $(this).next().css({
                    display: 'block'
                })
            } else {
                $(this).removeClass('is-invalid');
                $(this).next().css({
                    display: 'none'
                })
            }
        });
        const loader = $('.loader-container');

        if (form.checkValidity()) {
            form.classList.remove('was-validated');

            let product = $('#inputProduct').val();
            let name = $('#inputName').val();
            let phone = $('#inputPhone').val();

            loader.css('display', 'flex');
            $.ajax({
                url: 'https://testologia.ru/checkout',
                type: 'POST',
                data: {
                    product: product,
                    name: name,
                    phone: phone
                },
                success: function (response) {
                    if (response.success === 1) {
                        successInfo('Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!', form)
                    } else {
                        successInfo('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ', form)
                    }
                    loader.hide();
                },
                error: function (xhr, status, error) {
                    console.error('Произошла ошибка:', error);
                }
            });
        }
    });
});

function successInfo(message, form) {

    $('.order-info-form').css('display', 'none');
    $('.order-success-info').css('display', 'flex').text(message);
    form.reset();
}
