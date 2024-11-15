# PreparaAprova


Visão Geral
O Prepara Aprova é uma plataforma interativa desenvolvida para ajudar estudantes a se prepararem para o Enem, vestibulares e diversos concursos públicos. A plataforma apresenta uma interface amigável onde os usuários podem praticar questões, acompanhar seu progresso e identificar áreas de melhoria.

Funcionalidades Principais
Interface de Usuário Intuitiva: Navegue facilmente por uma vasta coleção de perguntas organizadas por disciplina e tema.
Responsividade: Acompanhe o progresso e identifique pontos fortes e áreas de melhoria.
Interatividade Dinâmica: Enfrente desafios acadêmicos e mensure o resultado através de gráficos e indicadores de desempenho.
Tecnologias Utilizadas
Frontend: HTML, CSS, JavaScript (jQuery e Chart.js)
Backend: Node.js com Express
Bibliotecas Externas: jQuery, Chart.js
Estrutura do Projeto
HTML/CSS/JS: Arquivos para o frontend estão localizados na pasta public.
Server: Configuração do servidor utilizando Node.js está no arquivo server.js.
Como Executar Localmente
Para executar o Prepara Aprova localmente, siga os passos abaixo:

Clone o Repositório:

git clone <repository-url>
Navegue até o Diretório do Projeto:

cd prepara-aprova
Instale as Dependências:

npm install
Inicie o Servidor:

npm run start
Acesse o Localhost:
Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.
Scripts Disponíveis
start: Inicia o servidor Express localizado em server.js.
Recursos Externos
API de Questões: Utiliza uma API externa para buscar as provas e questões hospedadas em https://apisunsale.azurewebsites.net.
Estrutura de Código-Chave
HTML
O arquivo principal HTML (index.html) serve como o esqueleto para a aplicação, contendo a estrutura básica de elementos e divisões estilizadas correspondentes.

CSS
O arquivo style.css contém o estilo visual da aplicação, garantindo um design moderno e responsivo.

JavaScript
Frontend (index.html): Gerencia a lógica do aplicativo, incluindo o controle de navegação entre questões, cronometragem de simulados e exibição de resultados.
Servidor (server.js): Serve os arquivos estáticos e inicia o servidor na porta designada.
APP.JS
Este arquivo controla a interação e carregamento dinâmico de matérias e questões, utilizando funções assíncronas.

Melhorias Futuras
Inclusão de Testes Automatizados: Para garantir a estabilidade e qualidade do código.
Aprimoramento de Usabilidade Móvel: Otimizar ainda mais a responsividade para dispositivos móveis.
Funcionalidades Sociais: Possibilitar o compartilhamento de resultados e desafios entre amigos.
Contribuições
Contribuições ao projeto são bem-vindas. Por favor, envie um pull request com suas sugestões ou correções.

Licença
Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo de licença incluído no repositório.

Esperamos que o Prepara Aprova seja uma ferramenta valiosa na preparação para os exames acadêmicos! Se tiver alguma dúvida ou sugestão, por favor, entre em contato conosco.
