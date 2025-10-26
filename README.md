# Webapp de Acompanhamento de Treino

Um webapp estático e moderno para acompanhar uma rotina de treino PPLUL (Push, Pull, Legs, Upper, Lower) para iniciantes. O foco é ser amigável, motivacional e fácil de usar.

## Funcionalidades

-   **Interface 100% em Português:** Todos os textos, exercícios e instruções estão em Português do Brasil.
-   **Rotina PPLUL Integrada:** O plano de treino de 5 dias semanais já vem carregado no app.
-   **Acompanhamento de Progresso:** Marque as séries concluídas. Seu progresso é salvo automaticamente no navegador (`localStorage`).
-   **Barra de Progresso Visual:** Veja o quão perto você está de concluir o treino do dia.
-   **Feedback Motivacional:** Mensagens de conclusão e *confetti* ao terminar um treino.
-   **Design Responsivo:** Funciona perfeitamente em celulares, tablets e desktops.
-   **Instalável (PWA):** Adicione o app à tela inicial do seu celular para uma experiência de aplicativo nativo.

## Como Usar

1.  **Salve os arquivos:** Baixe `index.html`, `styles.css`, `script.js`, `manifest.json` e os ícones para a mesma pasta.
2.  **Abra no Navegador:** Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Safari, etc.).
3.  **Navegue pelos dias:** Use os botões no topo para selecionar o treino do dia. O dia atual é selecionado automaticamente.
4.  **Acompanhe seu treino:**
    * **Clique no card** do exercício para adicionar uma série.
    * **Clique no contador de séries (ex: "1/3")** para remover uma série.
5.  **Veja as instruções:** Clique no botão `i` para ver um modal com as instruções detalhadas e um GIF de como realizar o exercício.
6.  **Resetar:** Use o botão "Resetar Progresso" no final da página para limpar todos os exercícios marcados e começar uma nova semana.

## Arquivos do Projeto

-   `index.html`: A estrutura principal da página (HTML5).
-   `styles.css`: A estilização visual, incluindo a paleta de cores, layout e responsividade.
-   `script.js`: O cérebro da aplicação, contendo os dados do treino, a lógica de salvamento, a renderização dos exercícios e as funcionalidades interativas.
-   `manifest.json`: Permite que o site seja um Progressive Web App (PWA).
-   `icon-192.png` / `icon-512.png`: Ícones do aplicativo.
