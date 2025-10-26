document.addEventListener('DOMContentLoaded', () => {

    const mensagensDeConclusao = [
        "Mandou bem! Descanse, recupere e volte com tudo!", "Treino concluído! Vitória do dia. Nos vemos no próximo!", "Parabéns! Consistência é tudo. Até a próxima!", "Excelente! O esforço de hoje vale a pena. Volte amanhã!", "Missão cumprida! Orgulhe-se. Te esperamos!"
    ];

    // --- DADOS DE TREINO COM INSTRUÇÕES DETALHADAS ---
    // ATENÇÃO: Substitua "URL_EXTERNA_AQUI" pelo link completo (https://...) de cada GIF.
    const dadosTreino = [ 
        { dia: "Push", nomeCompleto: "Empurrar", exercicios: [
                { nome: "Supino na Máquina", series: 3, reps: "10-12 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Ajuste a altura do banco para que os pegadores fiquem alinhados com o meio do seu peito.",
                    "Sente-se com as costas e a cabeça totalmente apoiadas no encosto. Mantenha os pés firmes no chão.",
                    "Empurre os pegadores para a frente até seus braços estarem quase totalmente estendidos (não trave os cotovelos). Solte o ar (expire) durante esse movimento.",
                    "Retorne lentamente à posição inicial, sentindo o peitoral alongar. Inspire o ar durante a volta.",
                    "Ponto-chave: Mantenha os ombros para trás e para baixo, longe das orelhas, durante todo o movimento."
                ]},
                { nome: "Desenvolvimento na Máquina", series: 3, reps: "10-12 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Ajuste o banco para que os pegadores fiquem na altura dos seus ombros ou ligeiramente acima.",
                    "Sente-se com as costas e a cabeça bem apoiadas. Contraia o abdômen para estabilizar a coluna.",
                    "Empurre os pegadores para cima, expirando o ar, até os braços estarem quase estendidos (não trave os cotovelos).",
                    "Desça de forma controlada, inspirando, até que os pegadores voltem à altura dos ombros.",
                    "Ponto-chave: Não deixe os cotovelos caírem para trás; mantenha-os ligeiramente à frente do seu tronco."
                ]},
                { nome: "Elevação Lateral com Halteres", series: 3, reps: "12-15 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Fique em pé com os pés na largura dos ombros, segurando um halter em cada mão ao lado do corpo.",
                    "Mantenha uma leve flexão nos cotovelos (imagine que está 'abraçando uma árvore grande'). As palmas das mãos devem estar viradas para o seu corpo.",
                    "Eleve os braços para os lados, expirando, até que os halteres cheguem à altura dos ombros. O seu corpo deve formar um 'T'.",
                    "Desça os pesos de forma controlada, inspirando, resistindo à gravidade. Não deixe os pesos despencarem.",
                    "Ponto-chave: Evite balançar o corpo ou usar impulso (trapézio). O movimento deve ser focado nos ombros."
                ]},
                { nome: "Tríceps na Polia (Barra)", series: 4, reps: "12-15 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Fique de pé em frente à polia alta. Segure a barra com as palmas das mãos viradas para baixo (pegada pronada), na largura dos ombros.",
                    "Mantenha os cotovelos colados ao lado do corpo. Eles são suas 'dobradiças' e não devem se mover para a frente ou para trás.",
                    "Empurre a barra para baixo, expirando, até estender completamente os braços, contraindo o tríceps (o 'músculo do tchau').",
                    "Retorne à posição inicial de forma controlada, inspirando, permitindo que a barra suba até a altura do peito, mas sem mover os cotovelos."
                ]}
            ]},
        { dia: "Pull", nomeCompleto: "Puxar", exercicios: [
                { nome: "Puxada Frontal (Pulldown)", series: 3, reps: "10-12 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Sente-se na máquina e ajuste o apoio dos joelhos para que suas pernas fiquem firmes.",
                    "Segure a barra com uma pegada mais larga que os ombros, com as palmas das mãos viradas para a frente.",
                    "Incline o tronco levemente para trás (cerca de 15 graus) e 'estufe' o peito.",
                    "Puxe a barra em direção à parte superior do seu peito, expirando. Pense em 'puxar com os cotovelos' para baixo e para trás.",
                    "Retorne a barra à posição inicial de forma controlada, inspirando, estendendo totalmente os braços e sentindo as costas alongarem."
                ]},
                { nome: "Remada na Máquina", series: 3, reps: "10-12 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Sente-se na máquina com o peito apoiado firmemente no encosto. Ajuste o banco se necessário.",
                    "Segure os pegadores com as palmas das mãos viradas uma para a outra (pegada neutra).",
                    "Mantendo as costas retas, puxe os pegadores em direção ao seu abdômen, expirando. Junte as escápulas (as 'asas' das costas) no final do movimento.",
                    "Retorne lentamente à posição inicial, inspirando, e sinta os músculos das costas alongarem antes de começar a próxima repetição.",
                    "Ponto-chave: Não puxe com o bíceps. A força deve vir das costas."
                ]},
                { nome: "Crucifixo Invertido na Máquina", series: 3, reps: "15 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Sente-se na máquina virado para ela, com o peito apoiado no encosto.",
                    "Ajuste a altura do banco para que seus ombros fiquem alinhados com os pegadores.",
                    "Segure os pegadores com os braços quase estendidos (uma leve flexão no cotovelo).",
                    "Abra os braços em um grande arco para trás, expirando, como se estivesse 'abrindo as asas'. Concentre-se em apertar os músculos da parte de trás dos ombros.",
                    "Retorne de forma controlada à posição inicial, inspirando. Não deixe os pesos baterem."
                ]},
                { nome: "Rosca Direta com Halteres", series: 4, reps: "10-12 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Fique em pé (ou sentado), com um halter em cada mão. As palmas das mãos devem estar viradas para a frente (pegada supinada).",
                    "Mantenha os cotovelos fixos ao lado do corpo. Não os mova para a frente ou para trás.",
                    "Levante um halter de cada vez (ou os dois juntos) em direção ao ombro, expirando. Contraia o bíceps no topo do movimento.",
                    "Desça o halter de forma controlada, inspirando, até o braço estar quase totalmente estendido.",
                    "Ponto-chave: Não balance o corpo para 'roubar' no movimento. Mantenha o tronco parado."
                ]}
            ]},
        { dia: "Legs", nomeCompleto: "Pernas", exercicios: [
                { nome: "Leg Press", series: 3, reps: "10-12 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Sente-se na máquina com as costas e o quadril firmemente apoiados no banco. Sua lombar não deve sair do apoio.",
                    "Posicione os pés no meio da plataforma, afastados na largura dos ombros, com os dedos ligeiramente apontados para fora.",
                    "Desça o peso de forma controlada, inspirando, flexionando os joelhos até formarem um ângulo de 90 graus (ou o máximo que conseguir sem levantar o quadril do banco).",
                    "Empurre a plataforma de volta à posição inicial, expirando, fazendo força com os calcanhares. Não estenda totalmente os joelhos no final (não 'trave' a articulação)."
                ]},
                { nome: "Cadeira Extensora", series: 3, reps: "12-15 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Ajuste a máquina: o eixo de rotação da máquina deve estar alinhado com os seus joelhos.",
                    "Ajuste o rolo acolchoado para que ele fique posicionado logo acima dos seus tornozelos (na frente da perna).",
                    "Sente-se com as costas bem apoiadas e segure as alças laterais para estabilidade.",
                    "Estenda as pernas, expirando, e segure a contração máxima do quadríceps (músculo da coxa) por 1 segundo.",
                    "Desça o peso de forma controlada, inspirando. A qualidade da contração é a chave aqui."
                ]},
                { nome: "Cadeira Flexora", series: 3, reps: "12-15 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Ajuste a máquina: o eixo de rotação deve estar alinhado com os seus joelhos.",
                    "Ajuste o rolo acolchoado para que ele fique posicionado logo acima dos seus tornozelos (na parte de trás da perna).",
                    "Sente-se com as costas bem apoiadas e segure as alças laterais.",
                    "Puxe os calcanhares em direção aos glúteos, expirando, contraindo o posterior da coxa.",
                    "Retorne à posição inicial lentamente, inspirando, resistindo ao peso durante todo o caminho de volta."
                ]},
                { nome: "Elevação Pélvica", series: 3, reps: "15 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Apoie a parte superior das costas (logo abaixo das escápulas) em um banco firme. Os pés devem estar firmes no chão, na largura dos ombros.",
                    "Coloque um peso (halter ou barra) sobre o seu quadril, segurando-o com as mãos para que não role.",
                    "Comece com o quadril baixo. Empurre o quadril para cima, expirando, usando a força dos glúteos, até seu corpo formar uma 'ponte' (tronco paralelo ao chão).",
                    "Contraia os glúteos no topo por 1 segundo. Mantenha o queixo levemente para baixo (olhando para a frente, não para o teto).",
                    "Desça o quadril de forma controlada, inspirando, quase tocando o chão antes de subir novamente."
                ]},
                { nome: "Panturrilha em Pé", series: 4, reps: "15-20 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Fique em pé em uma máquina específica (ou em um degrau/step segurando halteres). Apoie apenas a ponta dos pés, deixando os calcanhares livres.",
                    "Mantenha as pernas retas (sem travar os joelhos) e o corpo ereto.",
                    "Desça os calcanhares o máximo que puder, sentindo a panturrilha alongar (fase excêntrica).",
                    "Agora, suba na ponta dos pés o mais alto que conseguir, expirando. Tente segurar a contração máxima por 1 segundo.",
                    "Desça lentamente e repita. Amplitude é a chave: alongue tudo e contraia tudo."
                ]}
            ]},
        { dia: "Upper", nomeCompleto: "Superior", exercicios: [
                { nome: "Remada Curvada com Halteres", series: 3, reps: "10-12 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Segure um halter em cada mão. Incline o tronco para a frente a partir do quadril, mantendo as costas perfeitamente retas (sem curvar!).",
                    "Os joelhos devem estar levemente flexionados. Deixe os halteres pendurados em direção ao chão.",
                    "Puxe os halteres em direção ao seu quadril (imagine 'guardar os halteres nos bolsos'), expirando. Mantenha os cotovelos próximos ao corpo.",
                    "Desça os halteres de forma controlada, inspirando.",
                    "Ponto-chave: A sua coluna deve ficar neutra o tempo todo. Não levante o peito a cada repetição."
                ]},
                { nome: "Supino Inclinado com Halteres", series: 3, reps: "10-12 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Deite-se em um banco inclinado (30 a 45 graus). Sente-se com os halteres nos joelhos e 'chute' um de cada vez para cima enquanto deita.",
                    "Mantenha os pés firmes no chão e as costas apoiadas. Os halteres devem estar na altura do peito, com os cotovelos flexionados.",
                    "Empurre os pesos para cima e ligeiramente para dentro, expirando, até os braços estarem quase estendidos.",
                    "Desça os halteres de forma controlada, inspirando, até a altura da parte superior do peito.",
                    "Ponto-chave: Não bata um halter no outro no topo. Mantenha o controle."
                ]},
                { nome: "Elevação Frontal com Halteres", series: 3, reps: "12-15 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Fique em pé, com um halter em cada mão à frente das coxas. As palmas das mãos devem estar viradas para o seu corpo (pegada neutra).",
                    "Mantenha o abdômen contraído e o peito estufado. Evite balançar o corpo.",
                    "Eleve um halter de cada vez (ou os dois juntos) para a frente, com o braço reto (leve flexão no cotovelo), até a altura do ombro.",
                    "Desça o peso de forma controlada, inspirando. Alterne os braços a cada repetição (se estiver fazendo alternado)."
                ]},
                { nome: "Rosca Martelo", series: 4, reps: "10-12 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Fique em pé (ou sentado), segurando os halteres com uma pegada neutra (palmas das mãos viradas uma para a outra, como se segurasse um martelo).",
                    "Mantenha os cotovelos fixos ao lado do corpo.",
                    "Levante um halter de cada vez (ou os dois juntos) em direção ao ombro, expirando, sem girar o punho.",
                    "Desça o halter de forma controlada, inspirando, até o braço estar quase totalmente estendido.",
                    "Ponto-chave: Este exercício foca mais no antebraço e em uma parte diferente do bíceps. Não gire o punho."
                ]}
            ]},
        { dia: "Lower", nomeCompleto: "Inferior", exercicios: [
                { nome: "Agachamento Goblet", series: 3, reps: "10-12 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Segure um único halter verticalmente contra o peito com as duas mãos (como se segurasse uma 'taça').",
                    "Fique em pé com os pés ligeiramente mais largos que os ombros, com os dedos apontando um pouco para fora.",
                    "Agache como se fosse sentar em uma cadeira: mantenha as costas retas, o peito para cima e jogue o quadril para trás.",
                    "Desça até que seus cotovelos passem por dentro dos joelhos (ou o mais baixo que conseguir mantendo a boa forma), inspirando.",
                    "Suba empurrando o chão com os calcanhares, expirando, e contraia os glúteos no topo."
                ]},
                { nome: "Afundo (Lunge)", series: 3, reps: "12-15 reps por perna", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Fique em pé, segurando halteres ao lado do corpo (opcional, pode fazer sem peso).",
                    "Dê um passo largo à frente com uma perna. Mantenha o tronco reto e o abdômen contraído.",
                    "Desça o corpo verticalmente, flexionando os dois joelhos, até que o joelho de trás quase toque o chão. O joelho da frente não deve ultrapassar a ponta do pé.",
                    "Empurre com o calcanhar da perna da frente para voltar à posição inicial, expirando.",
                    "Repita todas as séries de uma perna antes de trocar, ou alterne as pernas a cada repetição."
                ]},
                { nome: "Stiff com Halteres", series: 3, reps: "15 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Fique em pé com os pés na largura do quadril, segurando halteres na frente das coxas (palmas viradas para você).",
                    "Mantenha as costas perfeitamente retas e os joelhos apenas levemente flexionados (quase retos, mas não travados).",
                    "Desça o tronco, empurrando o quadril para trás, como se fosse fechar uma porta com o bumbum. Os halteres devem deslizar próximos às suas pernas.",
                    "Desça até sentir um forte alongamento no posterior da coxa (vá até o seu limite de flexibilidade sem curvar a lombar).",
                    "Suba de volta à posição inicial, expirando, contraindo os glúteos e o posterior da coxa."
                ]},
                { nome: "Panturrilha Sentado", series: 4, reps: "15-20 reps", gifUrl: "URL_EXTERNA_AQUI", instrucoes: [
                    "Sente-se na máquina e posicione a ponta dos pés na plataforma, com os calcanhares livres.",
                    "Ajuste a almofada para que fique firme sobre a parte inferior das suas coxas (logo acima dos joelhos).",
                    "Desça os calcanhares o máximo que puder, alongando a panturrilha.",
                    "Empurre para cima, expirando, levantando os calcanhares o mais alto possível. Contraia no topo por 1 segundo.",
                    "Retorne lentamente à posição de alongamento. Este exercício foca em um músculo diferente (sóleo) da panturrilha em pé."
                ]}
            ] }
    ];
    // --- FIM DOS DADOS DE TREINO ---

    const elementos = {
        themeToggleBtn: document.getElementById('theme-toggle-btn'),
        inlineDaySelector: document.getElementById('day-selector-inline'),
        workoutDayTitle: document.getElementById('workout-day-title'),
        workoutCard: document.getElementById('workout-card'),
        listaExercicios: document.getElementById('lista-exercicios'),
        completedList: document.getElementById('completed-list'),
        completedSection: document.getElementById('completed-section'),
        progressBar: document.getElementById('progress-bar'),
        headerTreino: document.getElementById('cabecalho-treino'), 
        botaoResetar: document.getElementById('botao-resetar'),
        modal: {},
        completion: {},
        reset: {}
    };

     elementos.modal.overlay = document.getElementById('modal-info-overlay');
     elementos.modal.fecharBtn = document.getElementById('modal-info-fechar-btn');
     elementos.modal.titulo = document.getElementById('modal-info-titulo');
     elementos.modal.gif = document.getElementById('modal-info-gif');
     elementos.modal.instrucoes = document.getElementById('modal-info-instrucoes');
 
     elementos.completion.overlay = document.getElementById('completion-overlay');
     elementos.completion.title = document.getElementById('completion-title');
     elementos.completion.text = document.getElementById('completion-text');
     elementos.completion.closeBtn = document.getElementById('completion-close-btn');
 
     elementos.reset.overlay = document.getElementById('reset-overlay');
     elementos.reset.confirmBtn = document.getElementById('confirm-reset-btn');
     elementos.reset.cancelBtn = document.getElementById('cancel-reset-btn');
     elementos.reset.fecharBtn = document.getElementById('reset-modal-close-btn'); 

    let progresso = {};
    let diaAtivoIndex = 0;
    let currentTheme = localStorage.getItem('theme') || 'dark'; 

    const aplicarTema = (theme) => {
        document.body.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        currentTheme = theme;
    };

    const carregarProgresso = () => { progresso = JSON.parse(localStorage.getItem('minhaRotinaPaletaNovaV6')) || {}; };
    const salvarProgresso = () => { localStorage.setItem('minhaRotinaPaletaNovaV6', JSON.stringify(progresso)); };

    const verificarConclusaoSemanal = () => {
        if (diaAtivoIndex !== dadosTreino.length - 1) return false;
        const ultimoDiaExercicios = dadosTreino[diaAtivoIndex].exercicios;
        return ultimoDiaExercicios.every((ex, exIndex) => {
            const id = `dia${diaAtivoIndex}-ex${exIndex}`;
            return (progresso[id] || 0) >= ex.series;
        });
    };

    const atualizarProgressoGeral = () => {
        if (diaAtivoIndex < 0 || diaAtivoIndex >= dadosTreino.length) return; 
        const exerciciosDoDia = dadosTreino[diaAtivoIndex].exercicios;
        if (!exerciciosDoDia) return;

        let concluidos = exerciciosDoDia.filter((ex, i) => (progresso[`dia${diaAtivoIndex}-ex${i}`] || 0) >= ex.series).length;
        const porcentagem = exerciciosDoDia.length > 0 ? (concluidos / exerciciosDoDia.length) * 100 : 0;
        elementos.progressBar.style.width = `${porcentagem}%`;

        const listaConcluidos = elementos.completedList;
        if (elementos.completedSection) {
            elementos.completedSection.classList.toggle('hidden', !listaConcluidos || listaConcluidos.children.length === 0);
        }

        if (porcentagem === 100 && elementos.completion.overlay.classList.contains('hidden')) {
            setTimeout(() => {
                const aindaConcluidosHoje = dadosTreino[diaAtivoIndex].exercicios.every((ex, i) => (progresso[`dia${diaAtivoIndex}-ex${i}`] || 0) >= ex.series);
                 if (!aindaConcluidosHoje) return;

                if (verificarConclusaoSemanal()) {
                    elementos.completion.title.textContent = "Semana Completa!";
                    elementos.completion.text.textContent = "PARABÉNS! Você completou todos os treinos! O ciclo reinicia em 5 seg.";
                    elementos.completion.overlay.classList.remove('hidden');
                    if (typeof confetti === 'function') {
                        confetti({ particleCount: 300, spread: 180, startVelocity: 40, origin: { y: 0.6 }, zIndex: 2000 });
                    }
                    setTimeout(() => {
                        progresso = {};
                        salvarProgresso();
                        location.reload();
                    }, 5000);
                } else {
                    elementos.completion.title.textContent = "Ótimo Trabalho!";
                    const mensagem = mensagensDeConclusao[Math.floor(Math.random() * mensagensDeConclusao.length)];
                    elementos.completion.text.textContent = mensagem;
                    elementos.completion.overlay.classList.remove('hidden');
                     if (typeof confetti === 'function') {
                        confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 }, zIndex: 2000 });
                    }
                }
            }, 500);
        }
    };

    const atualizarVisualCardExercicio = (card, id, ex) => {
        const seriesFeitas = progresso[id] || 0;
        const porcentagem = (seriesFeitas / ex.series) * 100;
        const fillElement = card.querySelector('.exercicio-progress-fill');
        const counterElement = card.querySelector('.set-counter');

        if (fillElement) fillElement.style.width = `${porcentagem}%`;
        if (counterElement) counterElement.textContent = `${seriesFeitas}/${ex.series}`;

        card.classList.toggle('finalizado', seriesFeitas >= ex.series);
    };

    const moverCardExercicioParaListaCorreta = (card, listaDestino) => {
        card.classList.add('movendo');
        setTimeout(() => {
            if (listaDestino) listaDestino.appendChild(card);
            card.classList.remove('movendo');
            atualizarProgressoGeral();
        }, 300);
    };

    // LÓGICA DE CLIQUE (Adicionar/Remover)
    const handleClickExercicio = (e) => {
        const card = e.currentTarget;
        const id = card.dataset.id;
        const exIndex = parseInt(card.dataset.exIndex);
        const ex = dadosTreino[diaAtivoIndex].exercicios[exIndex];
        
        if (e.target.closest('.btn-info-inline')) return;
        
        let seriesFeitas = progresso[id] || 0;

        if (e.target.closest('.set-counter')) {
            if (seriesFeitas > 0) {
                const estavaFinalizado = card.classList.contains('finalizado');
                seriesFeitas--;
                progresso[id] = seriesFeitas;
                
                if (estavaFinalizado && elementos.listaExercicios) {
                    moverCardExercicioParaListaCorreta(card, elementos.listaExercicios);
                }
            }
        } 
        else {
            if (card.classList.contains('finalizado')) return; 
            
            seriesFeitas++;
            progresso[id] = seriesFeitas;

            if (seriesFeitas >= ex.series) {
                moverCardExercicioParaListaCorreta(card, elementos.completedList);
            }
        }
        
        atualizarVisualCardExercicio(card, id, ex);
        salvarProgresso();
        atualizarProgressoGeral();
    };

    const abrirModalInfo = (ex) => {
        elementos.modal.titulo.textContent = ex.nome;
        
        // ATUALIZADO: Define o GIF. Se a URL estiver vazia, ele pode quebrar. 
        // Certifique-se de que a URL_EXTERNA_AQUI foi preenchida.
        elementos.modal.gif.src = ex.gifUrl; 
        
        elementos.modal.instrucoes.innerHTML = '';
        if (Array.isArray(ex.instrucoes)) {
            ex.instrucoes.forEach(passo => {
                const li = document.createElement('li');
                li.textContent = passo;
                elementos.modal.instrucoes.appendChild(li);
            });
        } else {
             const li = document.createElement('li');
             li.textContent = ex.instrucoes;
             elementos.modal.instrucoes.appendChild(li);
        }
        elementos.modal.overlay.classList.remove('hidden');
    };

    const renderizarDiaDeDescanso = () => {
        diaAtivoIndex = -1; 
        elementos.workoutDayTitle.textContent = "Dia de Descanso";
        elementos.listaExercicios.innerHTML = '<li class="rest-day-message">Aproveite para recuperar. Você não tem treinos agendados para hoje.</li>';
        
        if (elementos.completedList) elementos.completedList.innerHTML = '';
        if (elementos.completedSection) elementos.completedSection.classList.add('hidden');
        if (elementos.headerTreino) elementos.headerTreino.classList.add('hidden'); 
        
        elementos.completion.overlay.classList.add('hidden');

        document.querySelectorAll('.inline-day-btn').forEach(btn => {
            btn.classList.remove('active');
        });
    }

    const renderizarTreino = (index) => {
        diaAtivoIndex = index;
        const diaData = dadosTreino[index];

        elementos.workoutDayTitle.textContent = diaData.nomeCompleto || diaData.dia;
        elementos.listaExercicios.innerHTML = '';
        if (elementos.completedList) elementos.completedList.innerHTML = '';
        if (elementos.headerTreino) elementos.headerTreino.classList.remove('hidden'); 
        elementos.completion.overlay.classList.add('hidden');

        document.querySelectorAll('.inline-day-btn').forEach((btn, btnIndex) => {
            btn.classList.toggle('active', btnIndex === index);
        });

        if (!diaData.exercicios) {
             if (elementos.completedSection) elementos.completedSection.classList.add('hidden');
             elementos.progressBar.style.width = '0%';
             return;
        }

        diaData.exercicios.forEach((ex, exIndex) => {
            const id = `dia${index}-ex${exIndex}`;
            const seriesFeitas = progresso[id] || 0;
            const li = document.createElement('li');
            li.className = 'exercicio-item';
            li.dataset.id = id;
            li.dataset.exIndex = exIndex;

            li.innerHTML = `
                <div class="exercicio-progress-fill"></div>
                <div class="set-counter">${seriesFeitas}/${ex.series}</div>
                <div class="detalhes-exercicio">
                    <h3>${ex.nome}</h3>
                    <div class="exercicio-meta">
                        <p>${ex.reps}</p>
                    </div>
                </div>
                <button class="btn-info-inline">i</button>
            `;

            atualizarVisualCardExercicio(li, id, ex);
            
            li.addEventListener('click', handleClickExercicio);

            li.querySelector('.btn-info-inline').addEventListener('click', (e) => {
                e.stopPropagation();
                abrirModalInfo(ex);
            });

             if (li.classList.contains('finalizado')) {
                 if (elementos.completedList) elementos.completedList.appendChild(li);
             } else {
                 elementos.listaExercicios.appendChild(li);
             }
        });
        atualizarProgressoGeral();
    };

    const init = () => {
        carregarProgresso();
        aplicarTema(currentTheme);

        dadosTreino.forEach((dia, index) => {
            const btn = document.createElement('button');
            btn.className = 'inline-day-btn';
            btn.textContent = dia.nomeCompleto || dia.dia;
            btn.dataset.index = index;
            elementos.inlineDaySelector.appendChild(btn);

            btn.addEventListener('click', () => {
                renderizarTreino(index);
            });
        });

        elementos.themeToggleBtn.addEventListener('click', () => {
            const novoTema = currentTheme === 'light' ? 'dark' : 'light';
            aplicarTema(novoTema);
        });

        elementos.modal.fecharBtn.addEventListener('click', () => elementos.modal.overlay.classList.add('hidden'));
        elementos.completion.closeBtn.addEventListener('click', () => elementos.completion.overlay.classList.add('hidden'));

        elementos.botaoResetar.addEventListener('click', () => {
            elementos.reset.overlay.classList.remove('hidden');
        });
        elementos.reset.cancelBtn.addEventListener('click', () => {
            elementos.reset.overlay.classList.add('hidden');
        });
        
         if(elementos.reset.fecharBtn) {
            elementos.reset.fecharBtn.addEventListener('click', () => elementos.reset.overlay.classList.add('hidden'));
         }

        elementos.reset.confirmBtn.addEventListener('click', () => {
            progresso = {};
            salvarProgresso();
            location.reload();
        });
        
        let hoje = new Date().getDay() - 1; 
        
        if (hoje === 5 || hoje === 6) { 
            renderizarDiaDeDescanso();
        } else if (hoje < 0 || hoje > 4) { 
             hoje = 0; 
             renderizarTreino(hoje);
        } else {
            renderizarTreino(hoje); 
        }
    };

    init();
});
