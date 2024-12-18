$(document).ready(function() {
    $('#formContato').submit(function(event) {
        event.preventDefault();

        // Recuperar os valores dos campos
        let nome = $('#nome').val().trim();
        let sobrenome = $('#sobrenome').val().trim();
        let email = $('#email').val().trim();
        let assunto = $('#assunto').val().trim();
        let mensagem = $('#mensagem').val().trim();
        let dataEvento = $('#dataEvento').val();
        let participantes = $('#participantes').val();
        let tipoContato = $('#tipoContato').val();

        // Limpar mensagens de erro anteriores
        $('input, textarea, select').css('border', '1px solid #ccc');

        // Validação
        if (nome === '') {
            alert('Por favor, preencha o campo Nome.');
            $('#nome').css('border', '1px solid red');
            return;
        }
        if (sobrenome === '') {
            alert('Por favor, preencha o campo Sobrenome.');
            $('#sobrenome').css('border', '1px solid red');
            return;
        }
        if (email === '') {
            alert('Por favor, preencha o campo E-mail.');
            $('#email').css('border', '1px solid red');
            return;
        }
        if (!validateEmail(email)) {
            alert('E-mail inválido.');
            $('#email').css('border', '1px solid red');
            return;
        }
        if (assunto === '') {
            alert('Por favor, preencha o campo Assunto.');
            $('#assunto').css('border', '1px solid red');
            return;
        }
        if (mensagem === '') {
            alert('Por favor, preencha o campo Mensagem.');
            $('#mensagem').css('border', '1px solid red');
            return;
        }
        if (tipoContato === '') {
            alert('Selecione um tipo de contato.');
            $('#tipoContato').css('border', '1px solid red');
            return;
        }

        // Verificação de Checkboxes
        if ($("input[name='pergunta']:checked").length === 0) {
            alert('Selecione pelo menos uma opção em "Perguntando sobre".');
            return;
        }

        alert('Formulário enviado com sucesso!');
        $('#formContato')[0].reset();
    });

    // Função para validar e-mail
    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
