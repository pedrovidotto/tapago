document.addEventListener('DOMContentLoaded', () => {

    // Frases motivacionais removidas
    // const frasesMotivacionais = [...];

    const mensagensDeConclusao = [
        "Mandou bem hoje! O descanso é parte do processo. Volte com tudo no próximo treino!",
        "Treino concluído com sucesso! Cada dia é um tijolo na construção do seu objetivo. Nos vemos no próximo!",
        "Parabéns pelo esforço! A consistência é a chave. Descanse e prepare-se para superar seus limites da próxima vez!",
        "Excelente! Mais um passo dado. O trabalho de hoje garante os resultados de amanhã. Até o próximo treino!",
        "Missão cumprida! Sinta orgulho do seu progresso. Estamos te esperando para o próximo desafio!"
    ];

    const dadosTreino = [ // Mantém a rotina PPLUL
        {
            dia: "Push", iconEmoji: "💪", exercicios: [
                { nome: "Supino na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-maquina.gif", instrucoes: "1. Posição: Sente-se com as costas bem apoiadas...\n2. Execução: Empurre os pegadores para a frente...\n3. Dica: Mantenha os ombros para trás." },
                { nome: "Desenvolvimento na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/desenvolvimento-maquina.gif", instrucoes: "1. Posição: Sente-se com as costas apoiadas...\n2. Execução: Empurre para cima...\n3. Dica: Mantenha o abdômen contraído." },
                { nome: "Elevação Lateral com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-lateral.gif", instrucoes: "1. Posição: Em pé, com os halteres ao lado...\n2. Execução: Levante os braços para os lados...\n3. Dica: Evite usar o impulso." },
                { nome: "Tríceps na Polia (Barra)", series: 4, reps: "12-15 reps", gifUrl: "gifs/triceps-polia.gif", instrucoes: "1. Posição: Fique de pé em frente à polia...\n2. Execução: Empurre a barra para baixo...\n3. Dica: Apenas o antebraço se move." }
            ]
        },
        {
            dia: "Pull", iconEmoji: "🏋️", exercicios: [
                { nome: "Puxada Frontal (Pulldown)", series: 3, reps: "10-12 reps", gifUrl: "gifs/puxada-frontal.gif", instrucoes: "1. Posição: Sente-se e ajuste o apoio...\n2. Execução: Puxe a barra em direção ao peito...\n3. Dica: Puxe com os cotovelos." },
                { nome: "Remada na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-maquina.gif", instrucoes: "1. Posição: Sente-se com o peito apoiado...\n2. Execução: Puxe os pegadores em direção ao abdômen...\n3. Dica: Junte as escápulas." },
                { nome: "Crucifixo Invertido na Máquina", series: 3, reps: "15 reps", gifUrl: "gifs/crucifixo-invertido-maquina.gif", instrucoes: "1. Posição: Sente-se virado para a máquina...\n2. Execução: Abra os braços em um grande arco...\n3. Dica: Movimento controlado." },
                { nome: "Rosca Direta com Halteres", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-direta.gif", instrucoes: "1. Posição: Em pé, com halteres ao lado...\n2. Execução: Levante um halter de cada vez...\n3. Dica: Não balance o corpo." }
            ]
        },
        {
            dia: "Legs", iconEmoji: "🦵", exercicios: [
                { nome: "Leg Press", series: 3, reps: "10-12 reps", gifUrl: "gifs/leg-press.gif", instrucoes: "1. Posição: Sente-se com costas e quadril apoiados...\n2. Execução: Desça o peso de forma controlada...\n3. Dica: A força deve vir dos calcanhares." },
                { nome: "Cadeira Extensora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-extensora.gif", instrucoes: "1. Posição: Sente-se com as costas apoiadas...\n2. Execução: Estenda as pernas e segure a contração...\n3. Dica: A qualidade da contração é chave." },
                { nome: "Cadeira Flexora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-flexora.gif", instrucoes: "1. Posição: Ajuste o apoio acima dos tornozelos...\n2. Execução: Puxe os calcanhares em direção aos glúteos...\n3. Dica: Faça a volta de forma lenta." },
                { nome: "Elevação Pélvica", series: 3, reps: "15 reps", gifUrl: "gifs/elevacao-pelvica.gif", instrucoes: "1. Posição: Costas apoiadas em um banco...\n2. Execução: Eleve o quadril e contraia os glúteos...\n3. Dica: Mantenha o queixo para baixo." },
                { nome: "Panturrilha em Pé", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-pe.gif", instrucoes: "1. Posição: Em um degrau ou máquina...\n2. Execução: Alongue o máximo na descida e suba...\n3. Dica: Amplitude é a chave." }
            ]
        },
        {
            dia: "Upper", iconEmoji: "💪", exercicios: [
                { nome: "Remada Curvada com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-curvada.gif", instrucoes: "1. Posição: Incline o tronco com as costas retas...\n2. Execução: Puxe os halteres em direção ao quadril...\n3. Dica: Imagine guardar os halteres nos bolsos." },
                { nome: "Supino Inclinado com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-inclinado.gif", instrucoes: "1. Posição: Deite-se em um banco inclinado...\n2. Execução: Empurre os pesos para cima...\n3. Dica: Não bata um halter no outro." },
                { nome: "Elevação Frontal com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-frontal.gif", instrucoes: "1. Posição: Em pé, com halteres à frente...\n2. Execução: Eleve um halter de cada vez...\n3. Dica: Evite balançar o corpo." },
                { nome: "Rosca Martelo", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-martelo.gif", instrucoes: "1. Posição: Segure os halteres como martelos...\n2. Execução: Levante-os sem girar os punhos...\n3. Dica: Mantenha os cotovelos parados." }
            ]
        },
        {
            dia: "Lower", iconEmoji: "🦵", exercicios: [
                { nome: "Agachamento Goblet", series: 3, reps: "10-12 reps", gifUrl: "gifs/agachamento-goblet.gif", instrucoes: "1. Posição: Segure um halter junto ao peito...\n2. Execução: Agache como se fosse sentar...\n3. Dica: Não sacrifique a boa forma pela profundidade." },
                { nome: "Afundo (Lunge)", series: 3, reps: "12-15 reps por perna", gifUrl: "gifs/afundo.gif", instrucoes: "1. Posição: Em pé, com halteres (opcional)...\n2. Execução: Dê um passo à frente e flexione...\n3. Dica: Mantenha o tronco reto." },
                { nome: "Stiff com Halteres", series: 3, reps: "15 reps", gifUrl: "gifs/stiff-halteres.gif", instrucoes: "1. Posição: Em pé, com halteres à frente...\n2. Execução: Desça o tronco com as costas retas...\n3. Dica: Vá até seu limite de flexibilidade." },
                { nome: "Panturrilha Sentado", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-sentado.gif", instrucoes: "1. Posição: Sentado na máquina...\n2. Execução: Eleve os calcanhares o máximo possível...\n3. Dica: Faça devagar." }
            ]
        }
    ];

    const elementos = {
        seletorDias: document.getElementById('seletor-dias'),
        headerTitle: document.getElementById('header-title'),
        listaExercicios: document.getElementById('lista-exercicios'),
        completedList: document.getElementById('completed-list'),
        completedSection: document.getElementById('completed-section'),
        progressBar: document.getElementById('progress-bar'),
        // quoteText: document.getElementById('quote-text'), // Removido
        botaoResetar: document.getElementById('botao-resetar'),
        modal: {
            overlay: document.getElementById('modal-info-overlay'),
            fecharBtn: document.getElementById('modal-info-fechar-btn'),
            titulo: document.getElementById('modal-info-titulo'),
            gif: document.getElementById('modal-info-gif'),
            instrucoes: document.getElementById('modal-info-instrucoes')
        },
        completion: {
            overlay: document.getElementById('completion-overlay'),
            title: document.getElementById('completion-title'),
            text: document.getElementById('completion-text'),
            closeBtn: document.getElementById('completion-close-btn')
        },
        reset: {
            overlay: document.getElementById('reset-overlay'),
            confirmBtn: document.getElementById('confirm-reset-btn'),
            cancelBtn: document.getElementById('cancel-reset-btn')
        }
    };
    
    let progresso = {};
    let diaAtivoIndex = 0;

    const carregarProgresso = () => { progresso = JSON.parse(localStorage.getItem('minhaRotinaMinimalInterativaFinalV2')) || {}; };
    const salvarProgresso = () => { localStorage.setItem('minhaRotinaMinimalInterativaFinalV2', JSON.stringify(progresso)); };

    const verificarConclusaoSemanal = () => {
        if (diaAtivoIndex !== dadosTreino.length - 1) return false;
        const ultimoDiaExercicios = dadosTreino[diaAtivoIndex].exercicios;
        return ultimoDiaExercicios.every((ex, exIndex) => {
            const id = `dia${diaAtivoIndex}-ex${exIndex}`;
            return (progresso[id] || 0) >= ex.series;
        });
    };

    const atualizarProgressoGeral = () => {
        const exerciciosDoDia = dadosTreino[diaAtivoIndex].exercicios;
        if (!exerciciosDoDia) return;

        let concluidos = exerciciosDoDia.filter((ex, i) => (progresso[`dia${diaAtivoIndex}-ex${i}`] || 0) >= ex.series).length;
        const porcentagem = exerciciosDoDia.length > 0 ? (concluidos / exerciciosDoDia.length) * 100 : 0;
        elementos.progressBar.style.width = `${porcentagem}%`;

        const listaConcluidos = elementos.completedList;
        elementos.completedSection.classList.toggle('hidden', listaConcluidos.children.length === 0);

        if (porcentagem === 100 && elementos.completion.overlay.classList.contains('hidden')) {
            setTimeout(() => {
                const aindaConcluidos = dadosTreino[diaAtivoIndex].exercicios.every((ex, i) => (progresso[`dia${diaAtivoIndex}-ex${i}`] || 0) >= ex.series);
                if (!aindaConcluidos) return;

                if (verificarConclusaoSemanal()) {
                    elementos.completion.title.textContent = "Semana Completa!";
                    elementos.completion.text.textContent = "PARABÉNS! Você completou todos os treinos! O ciclo reinicia em 5 seg.";
                    elementos.completion.overlay.classList.remove('hidden');
                    confetti({ particleCount: 300, spread: 180, startVelocity: 40, origin: { y: 0.6 }, zIndex: 2000 });
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
                    confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 }, zIndex: 2000 });
                }
            }, 500);
        }
    };

    // FUNÇÃO ATUALIZADA para usar width no fill do background
    const atualizarVisualCard = (card, id, ex) => {
        const seriesFeitas = progresso[id] || 0;
        const porcentagem = (seriesFeitas / ex.series) * 100; // Porcentagem de 0 a 100
        card.querySelector('.exercicio-progress-fill').style.width = `${porcentagem}%`; // Usa width
        card.classList.toggle('finalizado', seriesFeitas >= ex.series);
    };

    const moverCardParaListaCorreta = (card, listaDestino) => {
        card.classList.add('movendo');
        setTimeout(() => {
            listaDestino.appendChild(card);
            card.classList.remove('movendo');
            atualizarProgressoGeral(); 
        }, 300);
    };

    const handleClickCard = (e) => {
        const card = e.currentTarget;
        const id = card.dataset.id;
        const exIndex = parseInt(card.dataset.exIndex);
        const ex = dadosTreino[diaAtivoIndex].exercicios[exIndex];

        if (card.classList.contains('finalizado')) return;
        let seriesFeitas = progresso[id] || 0;
        seriesFeitas++;
        progresso[id] = seriesFeitas;
        atualizarVisualCard(card, id, ex);
        salvarProgresso();
        
        if (seriesFeitas >= ex.series) {
            moverCardParaListaCorreta(card, elementos.completedList); 
            atualizarProgressoGeral(); 
        }
    };

    const handleRightClickCard = (e) => {
        e.preventDefault();
        const card = e.currentTarget;
        const id = card.dataset.id;
        const exIndex = parseInt(card.dataset.exIndex);
        const ex = dadosTreino[diaAtivoIndex].exercicios[exIndex];

        let seriesFeitas = progresso[id] || 0;
        if (seriesFeitas > 0) {
            const estavaFinalizado = card.classList.contains('finalizado');
            seriesFeitas--;
            progresso[id] = seriesFeitas;
            atualizarVisualCard(card, id, ex);
            salvarProgresso();
            
            if (estavaFinalizado) {
                 moverCardParaListaCorreta(card, elementos.listaExercicios); 
            }
        }
        atualizarProgressoGeral();
    };

    const renderizarTreino = (index) => {
        diaAtivoIndex = index;
        const diaData = dadosTreino[index];
        elementos.headerTitle.textContent = `${diaData.dia}`;
        elementos.listaExercicios.innerHTML = '';
        elementos.completedList.innerHTML = '';
        elementos.completion.overlay.classList.add('hidden');

        if (!diaData.exercicios) return;

        diaData.exercicios.forEach((ex, exIndex) => {
            const id = `dia${index}-ex${exIndex}`;
            const seriesFeitas = progresso[id] || 0;
            const li = document.createElement('li');
            li.className = 'exercicio-item';
            li.dataset.id = id;
            li.dataset.exIndex = exIndex;
            
            li.innerHTML = `
                <div class="exercicio-progress-fill"></div>
                <div class="exercicio-icon">${diaData.iconEmoji}</div>
                <div class="detalhes-exercicio">
                    <h3>${ex.nome}</h3>
                    <p>${ex.series} séries de ${ex.reps}</p>
                </div>
                <button class="btn-info">i</button>
            `;
            
            atualizarVisualCard(li, id, ex);
            li.addEventListener('click', handleClickCard);
            li.addEventListener('contextmenu', handleRightClickCard);
            li.querySelector('.btn-info').addEventListener('click', (e) => {
                e.stopPropagation();
                elementos.modal.titulo.textContent = ex.nome;
                elementos.modal.gif.src = ex.gifUrl; // Usa o caminho local
                elementos.modal.instrucoes.textContent = ex.instrucoes;
                elementos.modal.overlay.classList.remove('hidden');
            });

            if (li.classList.contains('finalizado')) {
                elementos.completedList.appendChild(li);
            } else {
                elementos.listaExercicios.appendChild(li);
            }
        });
        atualizarProgressoGeral(); 
    };
    
    const init = () => {
        carregarProgresso();
        // Quote text removido

        dadosTreino.forEach((dia, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn-dia';
            btn.textContent = dia.dia.substring(0, 3); 
            btn.title = dia.dia;
            btn.dataset.index = index;
            elementos.seletorDias.appendChild(btn);
            btn.addEventListener('click', () => {
                document.querySelectorAll('.btn-dia').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderizarTreino(index);
            });
        });

        elementos.modal.fecharBtn.addEventListener('click', () => elementos.modal.overlay.classList.add('hidden'));
        elementos.completion.closeBtn.addEventListener('click', () => elementos.completion.overlay.classList.add('hidden'));
        
        elementos.botaoResetar.addEventListener('click', () => {
            elementos.reset.overlay.classList.remove('hidden');
        });
        elementos.reset.cancelBtn.addEventListener('click', () => {
            elementos.reset.overlay.classList.add('hidden');
        });
        elementos.reset.confirmBtn.addEventListener('click', () => {
            progresso = {};
            salvarProgresso();
            location.reload();
        });
        
        let hoje = new Date().getDay() - 1;
        if(hoje < 0 || hoje > 4) hoje = 0;
        document.querySelectorAll('.btn-dia')[hoje].click();
    };

    init();
});
