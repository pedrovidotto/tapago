// Dados do Treino PPL (Push, Pull, Legs)
const dadosTreino = [
  {
    "dia": 1,
    "titulo": "Push (Empurrar)",
    "exercicios": [
      {
        "nome": "Supino na Máquina",
        "detalhes": "3 séries de 10-12 reps | 60-90s de descanso",
        "instrucoes": "1. Sente-se na máquina com as costas retas e apoiadas.\n2. Posicione as mãos nos pegadores na largura dos ombros.\n3. Empurre os pegadores para a frente até que seus braços estejam quase totalmente estendidos (não trave os cotovelos).\n4. Retorne lentamente à posição inicial, sentindo o peito alongar."
      },
      {
        "nome": "Desenvolvimento de Ombros na Máquina",
        "detalhes": "3 séries de 10-12 reps | 60-90s de descanso",
        "instrucoes": "1. Sente-se na máquina com as costas bem apoiadas.\n2. Segure os pegadores com as palmas das mãos voltadas para a frente.\n3. Empurre para cima até que seus braços estejam quase estendidos.\n4. Desça de forma controlada até a altura dos ombros."
      },
      {
        "nome": "Elevação Lateral com Halteres",
        "detalhes": "3 séries de 12-15 reps | 60s de descanso",
        "instrucoes": "1. Em pé, com os pés na largura dos ombros e um halter em cada mão ao lado do corpo.\n2. Mantendo os cotovelos ligeiramente flexionados, levante os pesos para os lados até a altura dos ombros.\n3. Desça lentamente e de forma controlada. Não use impulso."
      },
      {
        "nome": "Tríceps na Polia com Corda",
        "detalhes": "3 séries de 10-12 reps | 60s de descanso",
        "instrucoes": "1. Fique de frente para a polia alta com uma corda. Mantenha os cotovelos fixos ao lado do corpo.\n2. Empurre a corda para baixo, separando as mãos no final do movimento.\n3. Retorne lentamente, sentindo o tríceps alongar."
      }
    ]
  },
  {
    "dia": 2,
    "titulo": "Pull (Puxar)",
    "exercicios": [
       {
        "nome": "Puxada Frontal (Lat Pulldown)",
        "detalhes": "3 séries de 10-12 reps | 60-90s de descanso",
        "instrucoes": "1. Sente-se na máquina e ajuste o apoio dos joelhos.\n2. Segure a barra com as mãos um pouco mais afastadas que a largura dos ombros.\n3. Puxe a barra para baixo em direção à parte superior do peito, estufando o peito.\n4. Retorne de forma controlada, alongando bem as costas."
      },
      {
        "nome": "Remada Sentada na Máquina",
        "detalhes": "3 séries de 10-12 reps | 60-90s de descanso",
        "instrucoes": "1. Sente-se na máquina com o peito apoiado.\n2. Puxe os pegadores em direção ao seu abdômen, juntando as escápulas (omoplatas) nas costas.\n3. Retorne lentamente até os braços estarem quase estendidos."
      },
      {
        "nome": "Rosca Direta com Halteres",
        "detalhes": "3 séries de 10-12 reps (cada braço) | 60s de descanso",
        "instrucoes": "1. Em pé, com um halter em cada mão, palmas voltadas para a frente.\n2. Mantendo os cotovelos fixos ao lado do corpo, levante um halter em direção ao ombro.\n3. Desça de forma controlada e repita com o outro braço."
      }
    ]
  },
  {
    "dia": 3,
    "titulo": "Cardio & Abdômen",
    "exercicios": [
      {
        "nome": "Cardio Moderado",
        "detalhes": "20-30 minutos",
        "instrucoes": "Escolha uma atividade como caminhada rápida na esteira, bicicleta ergométrica ou elíptico. Mantenha um ritmo que eleve sua frequência cardíaca, mas que ainda permita conversar."
      },
      {
        "nome": "Prancha Abdominal",
        "detalhes": "3 séries | Segure o máximo de tempo que conseguir",
        "instrucoes": "1. Apoie-se nos antebraços e na ponta dos pés.\n2. Mantenha o corpo reto como uma tábua, sem deixar o quadril cair ou levantar demais.\n3. Contraia o abdômen e os glúteos durante todo o tempo."
      },
      {
        "nome": "Elevação de Pernas Deitado",
        "detalhes": "3 séries de 15-20 reps",
        "instrucoes": "1. Deite-se de costas com as mãos sob o quadril para apoio.\n2. Mantendo as pernas retas, levante-as até formarem um ângulo de 90 graus com o chão.\n3. Desça lentamente, sem deixar os calcanhares tocarem o chão."
      }
    ]
  },
  {
    "dia": 4,
    "titulo": "Legs (Pernas)",
    "exercicios": [
       {
        "nome": "Agachamento Goblet",
        "detalhes": "3 séries de 10-12 reps | 90s de descanso",
        "instrucoes": "1. Segure um halter verticalmente contra o peito.\n2. Mantenha os pés um pouco mais afastados que a largura dos ombros.\n3. Agache como se fosse sentar em uma cadeira, mantendo as costas retas.\n4. Desça até suas coxas ficarem paralelas ao chão e depois suba."
      },
      {
        "nome": "Leg Press",
        "detalhes": "3 séries de 10-12 reps | 90s de descanso",
        "instrucoes": "1. Sente-se na máquina com as costas bem apoiadas.\n2. Coloque os pés na plataforma na largura dos ombros.\n3. Empurre a plataforma até suas pernas estarem quase estendidas (não trave os joelhos).\n4. Retorne lentamente à posição inicial."
      },
      {
        "nome": "Cadeira Flexora",
        "detalhes": "3 séries de 12-15 reps | 60s de descanso",
        "instrucoes": "1. Ajuste a máquina para que o apoio fique logo acima dos seus calcanhares.\n2. Dobre os joelhos para puxar o peso em direção aos seus glúteos.\n3. Retorne lentamente, controlando o movimento."
      },
      {
        "nome": "Elevação de Panturrilha em Pé",
        "detalhes": "3 séries de 15-20 reps | 45s de descanso",
        "instrucoes": "1. Fique em pé em um degrau ou na máquina.\n2. Empurre para cima com a ponta dos pés o mais alto que conseguir.\n3. Segure por um segundo no topo e desça lentamente, alongando a panturrilha."
      }
    ]
  },
   {
    "dia": 5, // Repete o primeiro treino do ciclo PPL
    "titulo": "Push (Empurrar)",
    "exercicios": [
      {
        "nome": "Supino na Máquina",
        "detalhes": "3 séries de 10-12 reps | 60-90s de descanso",
        "instrucoes": "1. Sente-se na máquina com as costas retas e apoiadas.\n2. Posicione as mãos nos pegadores na largura dos ombros.\n3. Empurre os pegadores para a frente até que seus braços estejam quase totalmente estendidos (não trave os cotovelos).\n4. Retorne lentamente à posição inicial, sentindo o peito alongar."
      },
      {
        "nome": "Desenvolvimento de Ombros na Máquina",
        "detalhes": "3 séries de 10-12 reps | 60-90s de descanso",
        "instrucoes": "1. Sente-se na máquina com as costas bem apoiadas.\n2. Segure os pegadores com as palmas das mãos voltadas para a frente.\n3. Empurre para cima até que seus braços estejam quase estendidos.\n4. Desça de forma controlada até a altura dos ombros."
      },
      {
        "nome": "Elevação Lateral com Halteres",
        "detalhes": "3 séries de 12-15 reps | 60s de descanso",
        "instrucoes": "1. Em pé, com os pés na largura dos ombros e um halter em cada mão ao lado do corpo.\n2. Mantendo os cotovelos ligeiramente flexionados, levante os pesos para os lados até a altura dos ombros.\n3. Desça lentamente e de forma controlada. Não use impulso."
      },
      {
        "nome": "Tríceps na Polia com Corda",
        "detalhes": "3 séries de 10-12 reps | 60s de descanso",
        "instrucoes": "1. Fique de frente para a polia alta com uma corda. Mantenha os cotovelos fixos ao lado do corpo.\n2. Empurre a corda para baixo, separando as mãos no final do movimento.\n3. Retorne lentamente, sentindo o tríceps alongar."
      }
    ]
  },
  {
    "dia": 6,
    "titulo": "Descanso",
    "exercicios": []
  },
    {
    "dia": 7,
    "titulo": "Descanso",
    "exercicios": []
  }
];

const frasesMotivacionais = [
    "A dor que você sente hoje é a força que você sentirá amanhã.",
    "O corpo alcança o que a mente acredita.",
    "A disciplina é a ponte entre metas e realizações.",
    "Não se trata de ser o melhor. Se trata de ser melhor do que você era ontem.",
    "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
    "A consistência é mais importante que a intensidade.",
    "Você não precisa ser extremo, apenas consistente."
];

// Elementos do DOM
const seletorDias = document.getElementById("seletor-dias");
const tituloTreino = document.getElementById("titulo-treino");
const listaExercicios = document.getElementById("lista-exercicios");
const botaoResetar = document.getElementById("botao-resetar");
const quoteContainer = document.getElementById("quote-container");
const progressBar = document.getElementById("progress-bar");

// Elementos do Modal de Informações
const modalInfoOverlay = document.getElementById("modal-info-overlay");
const modalInfoFecharBtn = document.getElementById("modal-info-fechar-btn");
const modalInfoTitulo = document.getElementById("modal-info-titulo");
const modalInfoInstrucoes = document.getElementById("modal-info-instrucoes");

// Elementos do Modal de Reset
const modalResetOverlay = document.getElementById("modal-reset-overlay");
const confirmarResetBtn = document.getElementById("confirmar-reset-btn");
const cancelarResetBtn = document.getElementById("cancelar-reset-btn");

// Estado
let progresso = {};

// Funções
function carregarProgresso() {
  try {
    const progressoSalvo = localStorage.getItem("progressoTreinoPPL");
    progresso = progressoSalvo ? JSON.parse(progressoSalvo) : {};
  } catch (e) {
    console.error("Não foi possível carregar o progresso do localStorage:", e);
    progresso = {};
  }
}

function salvarProgresso() {
  try {
    localStorage.setItem("progressoTreinoPPL", JSON.stringify(progresso));
  } catch (e) {
    console.error("Não foi possível salvar o progresso no localStorage:", e);
  }
}

function abrirModalInfo(titulo, instrucoes) {
  modalInfoTitulo.textContent = titulo;
  modalInfoInstrucoes.textContent = instrucoes;
  modalInfoOverlay.classList.remove("hidden");
  modalInfoOverlay.setAttribute('aria-hidden', 'false');
}

function fecharModalInfo() {
  modalInfoOverlay.classList.add("hidden");
  modalInfoOverlay.setAttribute('aria-hidden', 'true');
}

function abrirModalReset() {
  modalResetOverlay.classList.remove("hidden");
  modalResetOverlay.setAttribute('aria-hidden', 'false');
}

function fecharModalReset() {
  modalResetOverlay.classList.add("hidden");
  modalResetOverlay.setAttribute('aria-hidden', 'true');
}

function atualizarBarraProgresso(diaIndex) {
    const diaData = dadosTreino[diaIndex];
    const totalExercicios = diaData.exercicios.length;
    if (totalExercicios === 0) {
        progressBar.style.width = '0%';
        return;
    }

    let concluidos = 0;
    for (let i = 0; i < totalExercicios; i++) {
        const progressId = `dia${diaData.dia}-exercicio-${i}`;
        if (progresso[progressId]) {
            concluidos++;
        }
    }
    
    const porcentagem = totalExercicios > 0 ? (concluidos / totalExercicios) * 100 : 0;
    progressBar.style.width = `${porcentagem}%`;

    if (porcentagem === 100 && totalExercicios > 0) {
        setTimeout(() => alert(`Parabéns! Você completou o treino de ${diaData.titulo}! 💪`), 300);
    }
}

function renderizarTreino(diaIndex) {
  const diaData = dadosTreino[diaIndex];
  tituloTreino.textContent = diaData.titulo;
  listaExercicios.innerHTML = "";

  if (diaData.exercicios.length === 0) {
    listaExercicios.innerHTML =
      '<li class="item-exercicio" style="justify-content:center;"><div class="detalhes-exercicio"><h3>Aproveite seu descanso!</h3><p>Foque em nutrição, hidratação e sono para maximizar os resultados.</p></div></li>';
    atualizarBarraProgresso(diaIndex);
    return;
  }

  const criarItemExercicio = (exercicio, index) => {
    const li = document.createElement("li");
    li.className = 'item-exercicio';
    const progressId = `dia${diaData.dia}-exercicio-${index}`;

    li.innerHTML = `
        <input type="checkbox" class="checkbox" id="${progressId}" ${progresso[progressId] ? "checked" : ""}>
        <div class="detalhes-exercicio">
            <h3>${exercicio.nome}</h3>
            <p>${exercicio.detalhes}</p>
        </div>
        <button class="btn-info" aria-label="Abrir informações do exercício">i</button>
    `;

    if (progresso[progressId]) {
      li.classList.add("completed");
    }

    li.querySelector(".checkbox").addEventListener("change", (e) => {
      progresso[progressId] = e.target.checked;
      li.classList.toggle("completed");
      salvarProgresso();
      atualizarBarraProgresso(diaIndex);
    });

    li.querySelector(".btn-info").addEventListener("click", () => {
      abrirModalInfo(exercicio.nome, exercicio.instrucoes);
    });

    return li;
  };

  diaData.exercicios.forEach((ex, i) =>
    listaExercicios.appendChild(criarItemExercicio(ex, i))
  );

  atualizarBarraProgresso(diaIndex);
}

function setarDiaAtivo(diaIndex) {
  document
    .querySelectorAll(".btn-dia")
    .forEach((btn) => btn.classList.remove("active"));
  const btnAtual = document.querySelector(`.btn-dia[data-day="${diaIndex}"]`);
  if (btnAtual) {
    btnAtual.classList.add("active");
  }
  renderizarTreino(diaIndex);
}

// Inicialização do App
function init() {
  carregarProgresso();

  // Exibir frase motivacional
  const fraseIndex = new Date().getDay();
  quoteContainer.textContent = `"${frasesMotivacionais[fraseIndex % frasesMotivacionais.length]}"`;

  // Criar botões dos dias
  const nomesDias = ["Push", "Pull", "Cardio", "Pernas", "Push", "Descanso", "Descanso"];
  dadosTreino.forEach((dia, index) => {
    const btn = document.createElement("button");
    btn.className = "btn-dia";
    btn.textContent = nomesDias[index];
    btn.dataset.day = index;
    btn.addEventListener("click", () => setarDiaAtivo(index));
    seletorDias.appendChild(btn);
  });

  // Listeners dos Modais e Botão de Reset
  botaoResetar.addEventListener("click", abrirModalReset);
  confirmarResetBtn.addEventListener("click", () => {
    progresso = {};
    salvarProgresso();
    const diaAtivoIndex =
      document.querySelector(".btn-dia.active")?.dataset.day || 0;
    renderizarTreino(parseInt(diaAtivoIndex));
    fecharModalReset();
  });
  cancelarResetBtn.addEventListener("click", fecharModalReset);
  modalInfoFecharBtn.addEventListener("click", fecharModalInfo);
  modalInfoOverlay.addEventListener("click", (e) => {
    if (e.target === modalInfoOverlay) fecharModalInfo();
  });
  modalResetOverlay.addEventListener("click", (e) => {
    if (e.target === modalResetOverlay) fecharModalReset();
  });

  // Definir dia inicial
  const hoje = new Date().getDay(); // Domingo = 0, Segunda = 1 ...
  const diaInicialIndex = hoje === 0 ? 6 : hoje - 1; // Mapeia para nosso array (Segunda = 0 ... Domingo = 6)
  setarDiaAtivo(diaInicialIndex);
}

init();
