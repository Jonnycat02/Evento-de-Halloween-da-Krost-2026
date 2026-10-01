// ==========================================
// PERGUNTAS DO EVENTO
// ==========================================
//
// Você pode adicionar quantas perguntas quiser.
//
// "pergunta" = o que aparecerá na tela
// "resposta" = resposta correta
//
// IMPORTANTE:
// coloque as respostas sempre em letras minúsculas.
//
// ==========================================


const perguntas = [

    {
        pergunta: "5 13 / 17 21 1 12 / 4 9 1 / 4 1 / 19 5 13 1 14 1 / 6 15 9 / 16 21 2 12 9 3 1 4 15 / 15 / 4 5 19 5 14 8 15 / 4 1 / 11 18 15 19 20 9 14 1",
        resposta: "Domingo"
    },

    {
        pergunta: "Vivo por sonhos, e também nos servidores. Posso realizar desejos através de comandos.",
        resposta: "Loritta"
    },

    {
        pergunta: "Én voltam az első, utánam jött Naruto, én voltam az első, de a legrosszabb és a legelfeledettebb is. Egy eldugott piacon találhatóak vagyunk, CK történelmének részét képezik. (Írd le pontosan úgy, ahogy ott van, de csak az írásmódját használva)",
        resposta: "ONE-FOR-ALL"
    },

    {
        pergunta: "Para adquirir a resposta, talvez você precesira de ajuda, pois você precisa estar presente desde o começo de tudo. Qual é o primeiro nome registrado no servidor?",
        resposta: "Os Uchihas"
    },

    {
        pergunta: "Numa noite escura de lua cheia, quando todos se reunirem para uma ocasião especial, você encontrará a resposta. ᴍᴀɴᴅᴇ ᴜᴍᴀ ᴘʀɪɴᴛ ᴅᴇꜱᴛᴀ ᴛᴇʟᴀ ᴘᴀʀᴀ ᴊᴏɴɴʏ ᴘᴀʀᴀ ᴅᴇꜱᴄᴏʙʀɪʀ ᴀ ᴅᴀᴛᴀ ᴅᴀ ᴘʀóxɪᴍᴀ ɴᴏɪᴛᴇ ᴅᴇ ʟᴜᴀ ᴄʜᴇɪᴀ",
        resposta: "ravenwood"
    }

];


// ==========================================
// CONTROLE
// ==========================================

let perguntaAtual = 0;


// ==========================================
// MOSTRAR PRIMEIRA PERGUNTA
// ==========================================

mostrarPergunta();


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function mostrarPergunta() {

    const pergunta =
        document.getElementById("pergunta");

    const numero =
        document.getElementById("numeroPergunta");

    const campo =
        document.getElementById("resposta");


    pergunta.textContent =
        perguntas[perguntaAtual].pergunta;


    numero.textContent =
        perguntaAtual + 1;


    campo.value = "";

    campo.focus();

}


// ==========================================
// VERIFICAR RESPOSTA
// ==========================================

function verificarResposta() {

    const campo =
        document.getElementById("resposta");


    const mensagem =
        document.getElementById("mensagem");


    // Remove espaços e deixa tudo minúsculo

    const respostaUsuario =
        campo.value
            .trim()
            .toLowerCase();


    const respostaCorreta =
        perguntas[perguntaAtual].resposta
            .trim()
            .toLowerCase();


    // Não respondeu

    if (respostaUsuario === "") {

        mensagem.textContent =
            "👻 Você precisa digitar uma resposta!";

        mensagem.style.color =
            "#ffb347";

        return;

    }


    // RESPOSTA CORRETA

    if (respostaUsuario === respostaCorreta) {

        mensagem.textContent =
            "🎃 Correto! A próxima pista foi revelada...";

        mensagem.style.color =
            "#7CFC98";


        perguntaAtual++;


        // Se ainda existem perguntas

        if (perguntaAtual < perguntas.length) {

            setTimeout(() => {

                mensagem.textContent = "";

                mostrarPergunta();

            }, 1000);

        }


        // TERMINOU TODAS AS PERGUNTAS

        else {

            setTimeout(() => {

                document
                    .getElementById("desafio")
                    .classList.add("escondido");


                document
                    .getElementById("final")
                    .classList.remove("escondido");


            }, 1200);

        }

    }


    // RESPOSTA ERRADA

    else {

        mensagem.textContent =
            "👻 Resposta incorreta... procure mais pistas no servidor!";

        mensagem.style.color =
            "#ff6666";


        campo.value = "";

        campo.focus();

    }

}


// ==========================================
// PRESSIONAR ENTER PARA RESPONDER
// ==========================================

document
    .getElementById("resposta")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            verificarResposta();

        }

    });