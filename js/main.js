function ativaScrollSuave(selector) {
    $(selector).click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000)
    });
}

ativaScrollSuave('a[href*=sobre]');
ativaScrollSuave('a[href*=sobre-palestrantes]');
ativaScrollSuave('a[href*=contato]');

const nome = document.querySelector('input[name="nome"]');
const email = document.querySelector('input[name="email"]');
const btn = document.querySelector("#botao-final");

btn.addEventListener('click', function () {
    if (nome.value.length == 0 || email.value.length == 0) {
        alert("Por favor preecha os campos");
    }
    else {
        alert("Incrição efetuada com sucesso!");
    }
})
