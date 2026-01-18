document.addEventListener('DOMContentLoaded', () => {

    const mensagensDeConclusao = [
        "Mandou muito bem!", "Vitória do dia!", "Consistência é tudo.", "Excelente esforço!", "Missão cumprida!"
    ];

    // --- DADOS DE TREINO (6 DIAS: Seg a Sáb) ---
    const dadosTreino = [ 
        { 
            dia: "Seg", nomeCompleto: "Segunda - Empurrar", exercicios: [
                { nome: "Supino na Máquina", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Lying-Chest-Press-Machine.gif", instrucoes: ["Ajuste o banco", "Empurre para frente", "Volte devagar"] },
                { nome: "Desenvolvimento Máquina", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif", instrucoes: ["Pegada na altura do ombro", "Empurre para cima", "Controle a descida"] },
                { nome: "Elevação Lateral", series: 3, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", instrucoes: ["Eleve até o ombro", "Sem impulso", "Desça devagar"] },
                { nome: "Tríceps Polia", series: 4, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif", instrucoes: ["Cotovelo colado", "Estenda o braço", "Controle a volta"] }
            ]
        },
        { 
            dia: "Ter", nomeCompleto: "Terça - Puxar", exercicios: [
                { nome: "Puxada Frontal", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Front-Pulldown.gif", instrucoes: ["Puxe até o peito", "Incline levemente", "Alongue na volta"] },
                { nome: "Remada Máquina", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/close-grip-cable-row.gif", instrucoes: ["Costas retas", "Puxe no abdômen", "Aperte as costas"] },
                { nome: "Crucifixo Invertido", series: 3, reps: "15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rear-Delt-Machine-Flys.gif", instrucoes: ["Abra os braços", "Foco no posterior", "Não balance"] },
                { nome: "Rosca Direta", series: 4, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif", instrucoes: ["Cotovelos parados", "Suba o peso", "Controle a descida"] }
            ]
        },
        { 
            dia: "Qua", nomeCompleto: "Quarta - Pernas", exercicios: [
                { nome: "Leg Press", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Lever-Horizontal-Leg-Press.gif", instrucoes: ["Pés largura ombro", "Desça 90 graus", "Empurre calcanhar"] },
                { nome: "Cadeira Extensora", series: 3, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif", instrucoes: ["Estenda tudo", "Segure 1s", "Desça devagar"] },
                { nome: "Cadeira Flexora", series: 3, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif", instrucoes: ["Puxe calcanhar", "Controle a volta", "Costas apoiadas"] },
                { nome: "Elevação Pélvica", series: 3, reps: "15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", instrucoes: ["Suba quadril", "Contraia glúteo", "Olhe pra frente"] },
                { nome: "Panturrilha", series: 4, reps: "15-20 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Hack-Squat-Calf-Raise.gif", instrucoes: ["Amplitude máxima", "Alongue bem", "Suba tudo"] }
            ]
        },
        { 
            dia: "Qui", nomeCompleto: "Quinta - Superior", exercicios: [
                { nome: "Remada Curvada", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/10/Dumbbell-Bent-Over-Reverse-Row.gif", instrucoes: ["Tronco inclinado", "Coluna reta", "Puxe no quadril"] },
                { nome: "Supino Inclinado", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif", instrucoes: ["Banco 30 graus", "Empurre pra cima", "Desça até ombro"] },
                { nome: "Elevação Frontal", series: 3, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Alternating-Dumbbell-Front-Raise.gif", instrucoes: ["Até altura ombro", "Abdômen firme", "Sem balanço"] },
                { nome: "Rosca Martelo", series: 4, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Seated-Hammer-Curl.gif", instrucoes: ["Pegada neutra", "Sem girar punho", "Bíceps/Antebraço"] },
                { nome: "Tríceps Francês", series: 3, reps: "12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Seated-Dumbbell-Triceps-Extension.gif", instrucoes: ["Peso atrás cabeça", "Cotovelos fechados", "Estenda tudo"] }
            ]
        },
        { 
            dia: "Sex", nomeCompleto: "Sexta - Inferior", exercicios: [
                { nome: "Agachamento Goblet", series: 3, reps: "10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2023/01/Dumbbell-Goblet-Squat.gif", instrucoes: ["Peso no peito", "Agache fundo", "Peito aberto"] },
                { nome: "Afundo (Lunge)", series: 3, reps: "12 reps/perna", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Rear-Lunge.gif", instrucoes: ["Passo pra trás", "Joelho chão", "Troca perna"] },
                { nome: "Stiff", series: 3, reps: "15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Straight-Leg-Deadlift.gif", instrucoes: ["Perna semi-reta", "Quadril pra trás", "Coluna reta"] },
                { nome: "Panturrilha Sentado", series: 4, reps: "15-20 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Calf-Press-on-Leg-Press-Machine.gif", instrucoes: ["Sente máquina", "Amplitude total", "Controle"] }
            ] 
        },
        { 
            dia: "Sáb", nomeCompleto: "Sábado - Cardio/Core", exercicios: [
                { nome: "Agachamento Livre (Cardio)", series: 3, reps: "20 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2023/01/Dumbbell-Goblet-Squat.gif", instrucoes: ["Sem peso, ritmo constante", "Aqueça o corpo", "Mantenha postura"] },
                { nome: "Alongamento Stiff", series: 3, reps: "30 seg", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Straight-Leg-Deadlift.gif", instrucoes: ["Use peso leve ou sem peso", "Foque na flexibilidade", "Relaxe a lombar"] }
            ] 
        }
    ];

    const el = {
        daySelector: document.getElementById('day-selector-inline'),
        dayTitle: document.getElementById('workout-day-title'),
        currentDayLabel: document.getElementById('current-day-label'),
        list: document.getElementById('lista-exercicios'),
        completedList: document.getElementById('completed-list'),
        completedSection: document.getElementById('completed-section'),
        progressBar: document.getElementById('progress-bar'),
        progressPercent: document.getElementById('progress-percent'),
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
                cancel: document.getElementById('cancel-reset-btn')
            }
        }
    };

    let progresso = {};
    let diaAtivo = 0;
    let semanaCompletaFlag = false; // Flag para controlar o modal de semana

    const carregarDados = () => {
        try {
            progresso = JSON.parse(localStorage.getItem('goFitnessProgresso')) || {};
        } catch (e) {
            progresso = {};
        }
    };

    const salvarDados = () => {
        localStorage.setItem('goFitnessProgresso', JSON.stringify(progresso));
        atualizarStatusDias(); 
    };

    const atualizarStatusDias = () => {
        const botoes = document.querySelectorAll('.inline-day-btn');
        let diasCompletosCount = 0;

        dadosTreino.forEach((dadosDia, indexDia) => {
            const exercicios = dadosDia.exercicios;
            let diaCompleto = true;

            for (let i = 0; i < exercicios.length; i++) {
                const id = `d${indexDia}-e${i}`;
                const seriesFeitas = progresso[id] || 0;
                if (seriesFeitas < exercicios[i].series) {
                    diaCompleto = false;
                    break;
                }
            }

            if (botoes[indexDia]) {
                if (diaCompleto) {
                    botoes[indexDia].classList.add('completed');
                    diasCompletosCount++;
                } else {
                    botoes[indexDia].classList.remove('completed');
                }
            }
        });

        return diasCompletosCount === dadosTreino.length;
    };

    const atualizarDashboard = () => {
        if (!dadosTreino[diaAtivo]) return;
        
        const exs = dadosTreino[diaAtivo].exercicios;
        let seriesTotais = 0;
        let seriesFeitas = 0;

        exs.forEach((ex, idx) => {
            const id = `d${diaAtivo}-e${idx}`;
            seriesTotais += ex.series;
            seriesFeitas += Math.min(progresso[id] || 0, ex.series);
        });

        const porcentagem = seriesTotais === 0 ? 0 : Math.round((seriesFeitas / seriesTotais) * 100);
        
        el.progressPercent.textContent = porcentagem;
        el.progressBar.style.width = `${porcentagem}%`;

        // LÓGICA DE CONCLUSÃO
        if (porcentagem >= 100) {
            // Verifica se é a conclusão do dia atual (evita spam ao recarregar)
            const diaJaConcluidoStorage = localStorage.getItem(`diaConcluido_${diaAtivo}`);
            
            if (!diaJaConcluidoStorage) {
                mostrarConclusaoDia();
                localStorage.setItem(`diaConcluido_${diaAtivo}`, 'true');
            }

            // Verifica se a SEMANA TODA foi concluída
            const semanaCompleta = atualizarStatusDias();
            if (semanaCompleta && !semanaCompletaFlag) {
                semanaCompletaFlag = true;
                setTimeout(() => {
                    mostrarConclusaoSemana();
                }, 1000); // Espera um pouco após o modal do dia
            }
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
                <button class="btn-info-inline" aria-label="Info">i</button>
            </div>
            
            <div class="exercicio-controls">
                <button class="btn-control remove" aria-label="Menos">-</button>
                <div class="set-counter">${seriesFeitas}/${ex.series}</div>
                <button class="btn-control add" aria-label="Mais" ${estaCompleto ? 'disabled' : ''}>+</button>
            </div>
        `;

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
        
        el.dayTitle.textContent = dados.nomeCompleto; 
        el.currentDayLabel.textContent = dados.nomeCompleto; 
        
        document.querySelectorAll('.inline-day-btn').forEach((btn, idx) => {
            btn.classList.toggle('active', idx === index);
        });

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
        }

        el.completedSection.classList.toggle('hidden', !temCompletos);
        atualizarDashboard();
        atualizarStatusDias(); 
    };

    const alterarSeries = (id, delta, max) => {
        const atual = progresso[id] || 0;
        const novo = Math.max(0, Math.min(atual + delta, max));
        
        if (atual !== novo) {
            progresso[id] = novo;
            salvarDados();
            renderizarDia(diaAtivo);
        }
    };

    // --- MODALS ---
    const abrirModalInfo = (ex) => {
        el.modals.info.title.textContent = ex.nome;
        el.modals.info.gif.src = ex.gifUrl;
        el.modals.info.list.innerHTML = ex.instrucoes.map(i => `<li>${i}</li>`).join('');
        el.modals.info.overlay.classList.remove('hidden');
    };

    const mostrarConclusaoDia = () => {
        el.modals.complete.title.textContent = "Dia Completo!";
        el.modals.complete.text.textContent = mensagensDeConclusao[Math.floor(Math.random() * mensagensDeConclusao.length)];
        
        // Configura botão para apenas fechar
        el.modals.complete.close.textContent = "Continuar";
        el.modals.complete.close.onclick = () => fecharModal(el.modals.complete.overlay);

        el.modals.complete.overlay.classList.remove('hidden');
        if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    };

    const mostrarConclusaoSemana = () => {
        el.modals.complete.title.textContent = "Semana Finalizada!";
        el.modals.complete.text.textContent = "Parabéns! Você completou todos os treinos da semana. O progresso será reiniciado para a próxima semana.";
        
        // Configura botão para resetar
        el.modals.complete.close.textContent = "Iniciar Nova Semana";
        el.modals.complete.close.onclick = () => {
            resetarSemana();
        };

        el.modals.complete.overlay.classList.remove('hidden');
        if (typeof confetti === 'function') confetti({ particleCount: 300, spread: 100, origin: { y: 0.6 } });
    };

    const fecharModal = (overlay) => {
        overlay.classList.add('hidden');
    };

    const resetarSemana = () => {
        progresso = {};
        // Limpa também as flags de "Dia Concluído"
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('diaConcluido_')) localStorage.removeItem(key);
        });
        salvarDados();
        location.reload();
    }

    // Events
    el.modals.info.close.addEventListener('click', () => fecharModal(el.modals.info.overlay));
    // O evento de click do complete.close é definido dinamicamente (Dia vs Semana)
    
    // Reset Logic (Manual)
    el.resetBtn.addEventListener('click', () => el.modals.reset.overlay.classList.remove('hidden'));
    el.modals.reset.cancel.addEventListener('click', () => fecharModal(el.modals.reset.overlay));
    el.modals.reset.confirm.addEventListener('click', resetarSemana);

    const init = () => {
        carregarDados();
        
        dadosTreino.forEach((dia, idx) => {
            const btn = document.createElement('button');
            btn.className = 'inline-day-btn';
            btn.textContent = dia.dia;
            btn.addEventListener('click', () => renderizarDia(idx));
            el.daySelector.appendChild(btn);
        });

        const hoje = new Date().getDay(); 
        let diaInicial = hoje - 1; 
        if (diaInicial < 0 || diaInicial > 5) diaInicial = 0; // Ajuste para 0-5
        
        renderizarDia(diaInicial);
        atualizarStatusDias(); 
    };

    init();
});
