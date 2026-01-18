document.addEventListener('DOMContentLoaded', () => {

    // --- MENSAGENS MOTIVACIONAIS ---
    const mensagensDeConclusao = [
        "Mandou muito bem! Descanse e recupere.",
        "Vitória do dia! Nos vemos no próximo treino.",
        "Consistência é o segredo. Parabéns!",
        "Excelente! O esforço de hoje constrói o amanhã.",
        "Missão cumprida! Sinta orgulho de você."
    ];

    // --- DADOS DE TREINO COM GIFS CORRIGIDOS  ---
    const dadosTreino = [ 
        { 
            dia: "Push", nomeCompleto: "Empurrar", exercicios: [
                { nome: "Supino na Máquina", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Lying-Chest-Press-Machine.gif", instrucoes: ["Ajuste a altura do banco para alinhar os pegadores com o meio do peito.", "Empurre para frente soltando o ar.", "Volte devagar inspirando."]},
                { nome: "Desenvolvimento na Máquina", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif", instrucoes: ["Ajuste o banco. Pegadores na altura dos ombros.", "Empurre para cima sem travar os cotovelos.", "Desça controlando o peso."]},
                { nome: "Elevação Lateral com Halteres", series: 3, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", instrucoes: ["Tronco firme. Eleve os braços até a altura dos ombros.", "Não use impulso.", "Desça devagar."]},
                { nome: "Tríceps na Polia (Barra)", series: 4, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif", instrucoes: ["Cotovelos colados no corpo.", "Empurre a barra para baixo estendendo o braço.", "Controle a subida."]}
            ]
        },
        { 
            dia: "Pull", nomeCompleto: "Puxar", exercicios: [
                { nome: "Puxada Frontal", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Front-Pulldown.gif", instrucoes: ["Incline levemente o corpo para trás.", "Puxe a barra até a altura do peito.", "Estenda os braços totalmente na volta."]},
                { nome: "Remada na Máquina", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/close-grip-cable-row.gif", instrucoes: ["Costas retas.", "Puxe em direção ao abdômen.", "Aperte as costas no final do movimento."]},
                { nome: "Crucifixo Invertido", series: 3, reps: "15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif", instrucoes: ["Braços quase esticados.", "Abra os braços para trás.", "Foco na parte de trás do ombro."]},
                { nome: "Rosca Direta Halteres", series: 4, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif", instrucoes: ["Cotovelos parados ao lado do corpo.", "Suba o peso contraindo o bíceps.", "Não balance o corpo."]}
            ]
        },
        { 
            dia: "Legs", nomeCompleto: "Pernas", exercicios: [
                { nome: "Leg Press", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Lever-Horizontal-Leg-Press.gif", instrucoes: ["Pés na largura dos ombros.", "Desça até 90 graus.", "Empurre com o calcanhar."]},
                { nome: "Cadeira Extensora", series: 3, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif", instrucoes: ["Ajuste o rolo no tornozelo.", "Estenda a perna totalmente.", "Segure 1 segundo em cima."]},
                { nome: "Cadeira Flexora", series: 3, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif", instrucoes: ["Puxe o calcanhar em direção ao glúteo.", "Retorne devagar."]},
                { nome: "Elevação Pélvica", series: 3, reps: "15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", instrucoes: ["Apoie as costas no banco.", "Suba o quadril contraindo o glúteo.", "Olhe para frente."]},
                { nome: "Panturrilha em Pé", series: 4, reps: "15-20 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Hack-Squat-Calf-Raise.gif", instrucoes: ["Suba o máximo possível na ponta dos pés.", "Desça alongando bem."]}
            ]
        },
        { 
            dia: "Upper", nomeCompleto: "Superior", exercicios: [
                { nome: "Remada Curvada", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/10/Dumbbell-Bent-Over-Reverse-Row.gif", instrucoes: ["Incline o tronco mantendo a coluna reta.", "Puxe os pesos em direção ao quadril."]},
                { nome: "Supino Inclinado", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif", instrucoes: ["Banco inclinado (30-45 graus).", "Empurre para cima e para o centro.", "Desça até a altura do ombro."]},
                { nome: "Elevação Frontal", series: 3, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Alternating-Dumbbell-Front-Raise.gif", instrucoes: ["Eleve o braço para frente até a altura do ombro.", "Mantenha o abdômen firme."]},
                { nome: "Rosca Martelo", series: 4, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Seated-Hammer-Curl.gif", instrucoes: ["Palmas das mãos viradas uma para a outra.", "Suba o peso sem girar o punho."]},
                /* Adicionado Exercicio Faltante do PDF  */
                { nome: "Tríceps Francês", series: 3, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-Dumbbell-Triceps-Extension.gif", instrucoes: ["Segure o peso atrás da cabeça.", "Estenda os braços para cima.", "Mantenha os cotovelos fechados."]}
            ]
        },
        { 
            dia: "Lower", nomeCompleto: "Inferior", exercicios: [
                { nome: "Agachamento Goblet", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2023/01/Dumbbell-Goblet-Squat.gif", instrucoes: ["Segure o peso no peito.", "Agache jogando o quadril para trás.", "Mantenha o peito aberto."]},
                { nome: "Afundo (Lunge)", series: 3, reps: "12 reps/perna", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Rear-Lunge.gif", instrucoes: ["Dê um passo para trás.", "Desça até o joelho quase tocar o chão.", "Troque as pernas."]},
                { nome: "Stiff", series: 3, reps: "15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Straight-Leg-Deadlift.gif", instrucoes: ["Pernas semi-flexionadas.", "Desça o tronco mantendo a coluna reta.", "Sinta alongar atrás da coxa."]},
                { nome: "Panturrilha Sentado", series: 4, reps: "15-20 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Calf-Press-on-Leg-Press-Machine.gif", instrucoes: ["Sente-se na máquina.", "Suba e desça os calcanhares com amplitude máxima."]}
            ] 
        }
    ];

    // ELEMENTOS DOM
    const el = {
        themeBtn: document.getElementById('theme-toggle-btn'),
        daySelector: document.getElementById('day-selector-inline'),
        dayTitle: document.getElementById('workout-day-title'),
        list: document.getElementById('lista-exercicios'),
        completedList: document.getElementById('completed-list'),
        completedSection: document.getElementById('completed-section'),
        progressBar: document.getElementById('progress-bar'),
        resetBtn: document.getElementById('botao-resetar'),
        modals: {
            info: {
                overlay: document.getElementById('modal-info-overlay'),
                title: document.getElementById('modal-info-titulo'),
                gif: document.getElementById('modal-info-gif'),
                list: document.getElementById('modal-info-instrucoes'),
                close: document.getElementById('modal-info-fechar-btn')
            },
            complete: {
                overlay: document.getElementById('completion-overlay'),
                title: document.getElementById('completion-title'),
                text: document.getElementById('completion-text'),
                close: document.getElementById('completion-close-btn')
            },
            reset: {
                overlay: document.getElementById('reset-overlay'),
                confirm: document.getElementById('confirm-reset-btn'),
                cancel: document.getElementById('cancel-reset-btn'),
                close: document.getElementById('reset-modal-close-btn')
            }
        }
    };

    // ESTADO
    let progresso = {};
    let diaAtivo = 0;

    // --- FUNÇÕES DE ARMAZENAMENTO ---
    const carregarDados = () => {
        try {
            progresso = JSON.parse(localStorage.getItem('goFitnessProgresso')) || {};
            // Migração de tema antigo se necessário
            const temaSalvo = localStorage.getItem('theme') || 'light';
            document.body.dataset.theme = temaSalvo;
        } catch (e) {
            console.error("Erro ao carregar dados", e);
            progresso = {};
        }
    };

    const salvarDados = () => {
        localStorage.setItem('goFitnessProgresso', JSON.stringify(progresso));
    };

    // --- RENDERIZAÇÃO ---
    const atualizarBarraProgresso = () => {
        if (!dadosTreino[diaAtivo] || !dadosTreino[diaAtivo].exercicios) return;
        
        const exs = dadosTreino[diaAtivo].exercicios;
        let seriesTotais = 0;
        let seriesFeitas = 0;

        exs.forEach((ex, idx) => {
            const id = `d${diaAtivo}-e${idx}`;
            seriesTotais += ex.series;
            seriesFeitas += Math.min(progresso[id] || 0, ex.series);
        });

        const porcentagem = seriesTotais === 0 ? 0 : (seriesFeitas / seriesTotais) * 100;
        el.progressBar.style.width = `${porcentagem}%`;
        el.progressBar.setAttribute('aria-valuenow', Math.round(porcentagem));

        // Verifica completude do dia
        if (porcentagem >= 100 && !el.modals.complete.overlay.classList.contains('shown-today')) {
            mostrarConclusao();
            el.modals.complete.overlay.classList.add('shown-today'); // Evita spam
        }
    };

    const criarCardExercicio = (ex, index) => {
        const id = `d${diaAtivo}-e${index}`;
        const seriesFeitas = progresso[id] || 0;
        const estaCompleto = seriesFeitas >= ex.series;

        const li = document.createElement('li');
        li.className = `exercicio-item ${estaCompleto ? 'finalizado' : ''}`;
        li.innerHTML = `
            <div class="detalhes-header">
                <div class="detalhes-exercicio">
                    <h3>${ex.nome}</h3>
                    <div class="exercicio-meta">${ex.series} Séries • ${ex.reps}</div>
                </div>
                <button class="btn-info-inline" aria-label="Ver instruções de ${ex.nome}">i</button>
            </div>
            
            <div class="exercicio-controls">
                <button class="btn-control remove" aria-label="Diminuir séries">-</button>
                <div class="set-counter" aria-live="polite" aria-label="${seriesFeitas} de ${ex.series} séries feitas">
                    ${seriesFeitas}/${ex.series}
                </div>
                <button class="btn-control add" aria-label="Aumentar séries" ${estaCompleto ? 'disabled' : ''}>+</button>
            </div>
        `;

        // Lógica de Botões
        const btnAdd = li.querySelector('.add');
        const btnRemove = li.querySelector('.remove');
        const btnInfo = li.querySelector('.btn-info-inline');

        btnAdd.addEventListener('click', () => alterarSeries(id, 1, ex.series));
        btnRemove.addEventListener('click', () => alterarSeries(id, -1, ex.series));
        btnInfo.addEventListener('click', () => abrirModalInfo(ex));

        return li;
    };

    const renderizarDia = (index) => {
        diaAtivo = index;
        const dados = dadosTreino[index];
        
        // Atualiza Títulos
        el.dayTitle.textContent = dados.nomeCompleto;
        
        // Atualiza Botões de Navegação
        document.querySelectorAll('.inline-day-btn').forEach((btn, idx) => {
            const isActive = idx === index;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive);
        });

        // Limpa Listas
        el.list.innerHTML = '';
        el.completedList.innerHTML = '';
        
        let temCompletos = false;

        if (dados.exercicios) {
            dados.exercicios.forEach((ex, i) => {
                const id = `d${diaAtivo}-e${i}`;
                const feito = (progresso[id] || 0) >= ex.series;
                const card = criarCardExercicio(ex, i);

                if (feito) {
                    el.completedList.appendChild(card);
                    temCompletos = true;
                } else {
                    el.list.appendChild(card);
                }
            });
        } else {
            el.list.innerHTML = '<li style="padding:20px; text-align:center; color:var(--cor-texto-secundario)">Dia de descanso! Aproveite para recuperar.</li>';
        }

        el.completedSection.classList.toggle('hidden', !temCompletos);
        atualizarBarraProgresso();
    };

    const alterarSeries = (id, delta, max) => {
        const atual = progresso[id] || 0;
        const novo = Math.max(0, Math.min(atual + delta, max));
        
        if (atual !== novo) {
            progresso[id] = novo;
            salvarDados();
            renderizarDia(diaAtivo); // Re-renderiza para mover entre listas
        }
    };

    // --- MODAIS ---
    const abrirModalInfo = (ex) => {
        el.modals.info.title.textContent = ex.nome;
        el.modals.info.gif.src = ex.gifUrl;
        el.modals.info.list.innerHTML = ex.instrucoes.map(i => `<li>${i}</li>`).join('');
        
        el.modals.info.overlay.classList.remove('hidden');
        el.modals.info.overlay.setAttribute('aria-hidden', 'false');
    };

    const mostrarConclusao = () => {
        const msg = mensagensDeConclusao[Math.floor(Math.random() * mensagensDeConclusao.length)];
        el.modals.complete.text.textContent = msg;
        el.modals.complete.overlay.classList.remove('hidden');
        
        if (typeof confetti === 'function') {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }
    };

    // --- EVENT LISTENERS GERAIS ---
    
    // Fechar Modais
    const fecharModal = (overlay) => {
        overlay.classList.add('hidden');
        overlay.setAttribute('aria-hidden', 'true');
    };

    el.modals.info.close.addEventListener('click', () => fecharModal(el.modals.info.overlay));
    el.modals.complete.close.addEventListener('click', () => fecharModal(el.modals.complete.overlay));
    
    // Reset Logic
    el.resetBtn.addEventListener('click', () => el.modals.reset.overlay.classList.remove('hidden'));
    el.modals.reset.close.addEventListener('click', () => fecharModal(el.modals.reset.overlay));
    el.modals.reset.cancel.addEventListener('click', () => fecharModal(el.modals.reset.overlay));
    
    el.modals.reset.confirm.addEventListener('click', () => {
        progresso = {};
        salvarDados();
        location.reload();
    });

    // Theme Toggle
    el.themeBtn.addEventListener('click', () => {
        const atual = document.body.dataset.theme;
        const novo = atual === 'light' ? 'dark' : 'light';
        document.body.dataset.theme = novo;
        localStorage.setItem('theme', novo);
    });

    // --- INICIALIZAÇÃO ---
    const init = () => {
        carregarDados();
        
        // Criar menu de dias
        dadosTreino.forEach((dia, idx) => {
            const btn = document.createElement('button');
            btn.className = 'inline-day-btn';
            btn.textContent = dia.dia;
            btn.addEventListener('click', () => renderizarDia(idx));
            el.daySelector.appendChild(btn);
        });

        // Selecionar dia (Dia da semana 0-6 -> Correção para 0-4 PPL)
        const hoje = new Date().getDay(); // 0 Dom, 1 Seg...
        let diaInicial = hoje - 1; // Seg = 0
        if (diaInicial < 0 || diaInicial > 4) diaInicial = 0; // Fim de semana vai para o dia 1
        
        renderizarDia(diaInicial);
    };

    init();
});
