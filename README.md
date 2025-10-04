# Webapp de Acompanhamento de Treino PPL

Um webapp estático e moderno para acompanhar uma rotina de treino PPL (Push, Pull, Legs) para iniciantes. O foco é ser amigável, motivacional e fácil de usar.

## Funcionalidades

-   **Interface 100% em Português:** Todos os textos, exercícios e instruções estão em Português do Brasil.
-   **Rotina PPL Integrada:** O plano de treino PPL para 4 dias semanais já vem carregado no app.
-   **Acompanhamento de Progresso:** Marque os exercícios concluídos. Seu progresso é salvo automaticamente no navegador (`localStorage`).
-   **Barra de Progresso Visual:** Veja o quão perto você está de concluir o treino do dia.
-   **Frases Motivacionais Diárias:** Uma nova frase inspiradora a cada dia para manter o foco.
-   **Design Responsivo:** Funciona perfeitamente em celulares, tablets e desktops.
-   **Instalável (PWA):** Adicione o app à tela inicial do seu celular para uma experiência de aplicativo nativo.

## Como Usar

1.  **Salve os arquivos:** Baixe `index.html`, `styles.css`, `script.js` e `manifest.json` para a mesma pasta no seu computador.
2.  **Abra no Navegador:** Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Safari, etc.).
3.  **Navegue pelos dias:** Use os botões no topo para selecionar o treino do dia. O dia atual é selecionado automaticamente.
4.  **Acompanhe seu treino:** Marque a caixa de seleção (`checkbox`) ao lado de cada exercício que você completar.
5.  **Veja as instruções:** Clique no botão `i` para ver um modal com as instruções detalhadas de como realizar o exercício.
6.  **Resetar:** Use o botão "Resetar Progresso Semanal" no final da página para limpar todos os exercícios marcados e começar uma nova semana.

## Arquivos do Projeto

-   `index.html`: A estrutura principal da página (HTML5).
-   `styles.css`: A estilização visual, incluindo a paleta de cores, layout e responsividade.
-   `script.js`: O cérebro da aplicação, contendo os dados do treino, a lógica de salvamento, a renderização dos exercícios e as funcionalidades interativas.
-   `manifest.json`: Permite que o site seja um Progressive Web App (PWA).

*(Nota: Você precisará fornecer seus próprios ícones `icon-192.png` e `icon-512.png` ou remover as referências a eles no `index.html` e `manifest.json`)*
