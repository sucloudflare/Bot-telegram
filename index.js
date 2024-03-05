var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const axios = require("axios");

// Configuração do body-parser
app.use(bodyParser.json()); // para analisar application/json
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // para analisar application/x-www-form-urlencoded

// Rota que a API irá chamar
app.post("/new-message", function (req, res) {
  const { message } = req.body;

  // Cada mensagem contém "text" e um objeto "chat", que possui um "id" que é o id do chat

  if (!message || message.text.toLowerCase().indexOf("Bruno") < 0) {
    // Se a mensagem estiver ausente ou se nossa mensagem não tiver a palavra "Bruno", verifique outras condições
    if (
      message.text.toLowerCase().includes("como você está") ||
      message.text.toLowerCase().includes("como vai você")
    ) {
      // Responda ao usuário perguntando como o bot está
      sendMessage("Estou bem, obrigado por perguntar! 😊", message.chat.id);
      return;
    }

    // Se nenhuma das condições for atendida, não faça nada e retorne uma resposta vazia
    return res.end();
  }

  // Se chegamos até aqui, significa que recebemos uma mensagem contendo a palavra "marco".
  // Responda chamando a API do bot do Telegram e respondendo ao chat_id apropriado com a palavra "Polo!!"
  sendMessage("Polo!! 😄 Como posso ajudar mais?", message.chat.id);
});

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Telegram app listening on port ${PORT}`);
});

// Função para enviar mensagem usando a API do Telegram
function sendMessage(text, chatId) {
  const botToken = process.env.BOT_TOKEN; // Obtenha o token do bot da variável de ambiente

  axios
    .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: text,
    })
    .then((response) => {
      // Estamos aqui se a mensagem for postada com sucesso
      console.log("Message posted");
    })
    .catch((err) => {
      // E aqui se não foi
      console.log("Error:", err);
    });
}
