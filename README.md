 <h1>Bot Telegram com Node.js</h1>

   <p>Este é um projeto simples para criar um bot interativo no Telegram usando Node.js.</p>
    <h2>Configuração</h2>

   <ol>
      <li>
            <strong>Crie um Bot no Telegram:</strong>
            <ul>
                <li>Abra o aplicativo Telegram e pesquise por <code>botfather</code>.</li>
                <li>Inicie uma conversa com o BotFather e siga as instruções para criar um novo bot.</li>
                <li>Anote o token do bot gerado.</li>
            </ul>
        </li>
        <li>
            <strong>Configure o Arquivo .env:</strong>
            <ul>
                <li>Crie um arquivo chamado <code>.env</code> no diretório raiz do seu projeto.</li>
                <li>Adicione as seguintes linhas ao arquivo e substitua <code>&lt;SEU_TOKEN&gt;</code> pelo token do seu bot:</li>
            </ul>
      
   <pre>
         <code>TELEGRAM_BOT_TOKEN=&lt;SEU_TOKEN&gt;</code>
        </pre>
   </li>
     <li>
            <strong>Instale as Dependências:</strong>
            <ul>
                <li>Execute o comando no terminal para instalar as dependências:</li>
            </ul>
            
  <pre>
          <code>npm install</code>
           </pre>
   </li>
  </ol>

 <h2>Executando o Bot</h2>

<p>Execute o seguinte comando para iniciar o servidor do bot:</p>
    
   <pre>
       <code>npm start</code>
    </pre>

   <p>O bot agora está ouvindo em <code>http://localhost:3000</code>. Certifique-se de que o seu webhook do Telegram esteja configurado corretamente.</p>

   <h2>Como Interagir com o Bot</h2>

  <ul>
        <li>Encontre o seu bot no Telegram pesquisando pelo nome de usuário.</li>
        <li>Inicie uma conversa clicando em "Iniciar".</li>
        <li>Envie mensagens para interagir com o bot.</li>
    </ul>

   <h2>Licença</h2>

  <p>Este projeto é licenciado sob a licença MIT - veja o arquivo <code>LICENSE</code> para mais detalhes.</p>

   <p>Lembre-se de personalizar as instruções e as informações específicas do seu bot conforme necessário. Isso fornece uma estrutura básica para orientar os usuários sobre a configuração e execução do seu projeto.</p>
