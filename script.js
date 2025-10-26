document.addEventListener('DOMContentLoaded', () => {

    // Frases motivacionais removidas
    // const frasesMotivacionais = [...];

    const mensagensDeConclusao = [
        "Mandou bem! Descanse, recupere e volte com tudo!", "Treino concluído! Vitória do dia. Nos vemos no próximo!", "Parabéns! Consistência é tudo. Até a próxima!", "Excelente! O esforço de hoje vale a pena. Volte amanhã!", "Missão cumprida! Orgulhe-se. Te esperamos no próximo!"
    ];

    // Adiciona nomeCompleto para os botões inferiores
    const dadosTreino = [ 
        { dia: "Push", nomeCompleto: "Empurrar", exercicios: [
                { nome: "Supino na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-maquina.gif", instrucoes: ["Sente-se com as costas bem apoiadas...", "Empurre os pegadores para a frente...", "Mantenha os ombros para trás."] },
                { nome: "Desenvolvimento na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/desenvolvimento-maquina.gif", instrucoes: ["Sente-se com as costas apoiadas...", "Empurre para cima...", "Mantenha o abdômen contraído."] },
                { nome: "Elevação Lateral com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-lateral.gif", instrucoes: ["Em pé, com os halteres ao lado...", "Levante os braços para os lados...", "Evite usar o impulso."] },
                { nome: "Tríceps na Polia (Barra)", series: 4, reps: "12-15 reps", gifUrl: "gifs/triceps-polia.gif", instrucoes: ["Fique de pé em frente à polia...", "Empurre a barra para baixo...", "Apenas o antebraço se move."] }
            ]},
        { dia: "Pull", nomeCompleto: "Puxar", exercicios: [
                { nome: "Puxada Frontal (Pulldown)", series: 3, reps: "10-12 reps", gifUrl: "gifs/puxada-frontal.gif", instrucoes: ["Sente-se e ajuste o apoio...", "Puxe a barra em direção ao peito...", "Puxe com os cotovelos."] },
                { nome: "Remada na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-maquina.gif", instrucoes: ["Sente-se com o peito apoiado...", "Puxe os pegadores em direção ao abdômen...", "Junte as escápulas."] },
                { nome: "Crucifixo Invertido na Máquina", series: 3, reps: "15 reps", gifUrl: "gifs/crucifixo-invertido-maquina.gif", instrucoes: ["Sente-se virado para a máquina...", "Abra os braços em um grande arco...", "Movimento controlado."] },
                { nome: "Rosca Direta com Halteres", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-direta.gif", instrucoes: ["Em pé, com halteres ao lado...", "Levante um halter de cada vez...", "Não balance o corpo."] }
            ]},
        { dia: "Legs", nomeCompleto: "Pernas", exercicios: [
                { nome: "Leg Press", series: 3, reps: "10-12 reps", gifUrl: "gifs/leg-press.gif", instrucoes: ["Sente-se com costas e quadril apoiados...", "Desça o peso de forma controlada...", "A força deve vir dos calcanhares."] },
                { nome: "Cadeira Extensora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-extensora.gif", instrucoes: ["Sente-se com as costas apoiadas...", "Estenda as pernas e segure a contração...", "A qualidade da contração é chave."] },
                { nome: "Cadeira Flexora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-flexora.gif", instrucoes: ["Ajuste o apoio acima dos tornozelos...", "Puxe os calcanhares em direção aos glúteos...", "Faça a volta de forma lenta."] },
                { nome: "Elevação Pélvica", series: 3, reps: "15 reps", gifUrl: "gifs/elevacao-pelvica.gif", instrucoes: ["Costas apoiadas em um banco...", "Eleve o quadril e contraia os glúteos...", "Mantenha o queixo para baixo."] },
                { nome: "Panturrilha em Pé", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-pe.gif", instrucoes: ["Em um degrau ou máquina...", "Alongue o máximo na descida e suba...", "Amplitude é a chave."] }
            ]},
        { dia: "Upper", nomeCompleto: "Superior", exercicios: [
                { nome: "Remada Curvada com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-curvada.gif", instrucoes: ["Incline o tronco com as costas retas...", "Puxe os halteres em direção ao quadril...", "Imagine guardar os halteres nos bolsos."] },
                { nome: "Supino Inclinado com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-inclinado.gif", instrucoes: ["Deite-se em um banco inclinado...", "Empurre os pesos para cima...", "Não bata um halter no outro."] },
                { nome: "Elevação Frontal com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-frontal.gif", instrucoes: ["Em pé, com halteres à frente...", "Eleve um halter de cada vez...", "Evite balançar o corpo."] },
                { nome: "Rosca Martelo", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-martelo.gif", instrucoes: ["Segure os halteres como martelos...", "Levante-os sem girar os punhos...", "Mantenha os cotovelos parados."] }
            ]},
        { dia: "Lower", nomeCompleto: "Inferior", exercicios: [
                { nome: "Agachamento Goblet", series: 3, reps: "10-12 reps", gifUrl: "gifs/agachamento-goblet.gif", instrucoes: ["Segure um halter junto ao peito...", "Agache como se fosse sentar...", "Não sacrifique a boa forma pela profundidade."] },
                { nome: "Afundo (Lunge)", series: 3, reps: "12-15 reps por perna", gifUrl: "gifs/afundo.gif", instrucoes: ["Em pé, com halteres (opcional)...", "Dê um passo à frente e flexione...", "Mantenha o tronco reto."] },
                { nome: "Stiff com Halteres", series: 3, reps: "15 reps", gifUrl: "gifs/stiff-halteres.gif", instrucoes: ["Em pé, com halteres à frente...", "Desça o tronco com as costas retas...", "Vá até seu limite de flexibilidade."] },
                { nome: "Panturrilha Sentado", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-sentado.gif", instrucoes: ["Sentado na máquina...", "Eleve os calcanhares o máximo possível...", "Faça devagar."] }
            ] }
    ];

    const elementos = {
        bottomDaySelector: document.getElementById('bottom-day-selector'),
        workoutDayTitle: document.getElementById('workout-day-title'), 
        listaExercicios: document.getElementById('lista-exercicios'),
        completedList: document.getElementById('completed-list'),
        completedSection: document.getElementById('completed-section'),
        progressBar: document.getElementById('progress-bar'),
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

    const carregarProgresso = () => { progresso = JSON.parse(localStorage.getItem('minhaRotinaCleanV2')) || {}; };
    const salvarProgresso = () => { localStorage.setItem('minhaRotinaCleanV2', JSON.stringify(progresso)); };

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
        // Verifica se completedList existe antes de acessar children
        elementos.completedSection.classList.toggle('hidden', !listaConcluidos || listaConcluidos.children.length === 0);

        if (porcentagem === 100 && elementos.completion.overlay.classList.contains('hidden')) {
            setTimeout(() => {
                const aindaConcluidos = dadosTreino[diaAtivoIndex].exercicios.every((ex, i) => (progresso[`dia${diaAtivoIndex}-ex${i}`] || 0) >= ex.series);
                if (!aindaConcluidos) return;

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
        const porcentagem = seriesFeitas / ex.series; 
        const fillElement = card.querySelector('.exercicio-progress-fill');
        if (fillElement) fillElement.style.transform = `scaleY(${porcentagem})`;
        card.classList.toggle('finalizado', seriesFeitas >= ex.series);
    };

    const moverCardExercicioParaListaCorreta = (card, listaDestino) => {
        card.classList.add('movendo');
        setTimeout(() => {
            // Garante que a lista de destino exista antes de adicionar
            if (listaDestino) {
                listaDestino.appendChild(card);
            }
            card.classList.remove('movendo');
            atualizarProgressoGeral(); 
        }, 300);
    };

    const handleClickExercicio = (e) => {
        const card = e.currentTarget;
        const id = card.dataset.id;
        const exIndex = parseInt(card.dataset.exIndex);
        const ex = dadosTreino[diaAtivoIndex].exercicios[exIndex];

        if (card.classList.contains('finalizado')) return;
        let seriesFeitas = progresso[id] || 0;
        seriesFeitas++;
        progresso[id] = seriesFeitas;
        atualizarVisualCardExercicio(card, id, ex);
        salvarProgresso();
        
        if (seriesFeitas >= ex.series) {
            moverCardExercicioParaListaCorreta(card, elementos.completedList); 
            atualizarProgressoGeral(); 
        }
    };

    const handleRightClickExercicio = (e) => {
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
            atualizarVisualCardExercicio(card, id, ex);
            salvarProgresso();
            
            if (estavaFinalizado) {
                 moverCardExercicioParaListaCorreta(card, elementos.listaExercicios); 
            }
        }
        atualizarProgressoGeral();
    };

    const abrirModalInfo = (ex) => {
        elementos.modal.titulo.textContent = ex.nome;
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

    const renderizarTreino = (index) => {
        diaAtivoIndex = index; // Define o dia ativo
        const diaData = dadosTreino[index];

        elementos.workoutDayTitle.textContent = diaData.nomeCompleto || diaData.dia; // Atualiza o título grande
        elementos.listaExercicios.innerHTML = ''; // Limpa lista de ativos
        
        // Garante que completedList existe antes de limpar
        if (elementos.completedList) {
            elementos.completedList.innerHTML = ''; // Limpa lista de concluídos
        }
        elementos.completion.overlay.classList.add('hidden'); // Esconde pop-up de conclusão

        // Atualiza botões inferiores
        document.querySelectorAll('.bottom-day-btn').forEach((btn, btnIndex) => {
            btn.classList.toggle('active', btnIndex === index);
        });

        if (!diaData.exercicios) {
             // Garante que completedSection existe antes de esconder
             if (elementos.completedSection) {
                 elementos.completedSection.classList.add('hidden');
             }
             return; 
        }

        diaData.exercicios.forEach((ex, exIndex) => {
            const id = `dia${index}-ex${exIndex}`;
            // seriesFeitas não é necessário aqui, será pego do progresso
            const li = document.createElement('li');
            li.className = 'exercicio-item';
            li.dataset.id = id;
            li.dataset.exIndex = exIndex;
            
            // Ícone Emoji removido do item
            li.innerHTML = `
                <div class="exercicio-progress-fill"></div>
                <div class="detalhes-exercicio">
                    <h3>${ex.nome}</h3>
                    <p>${ex.series} séries de ${ex.reps}</p>
                </div>
                <button class="btn-info">i</button>
            `;
            
            atualizarVisualCardExercicio(li, id, ex); // Atualiza visual com base no progresso
            li.addEventListener('click', handleClickExercicio);
            li.addEventListener('contextmenu', handleRightClickExercicio);
            
            li.querySelector('.btn-info').addEventListener('click', (e) => {
                e.stopPropagation();
                abrirModalInfo(ex);
            });

            // Decide em qual lista colocar inicialmente
             if (li.classList.contains('finalizado')) {
                 // Garante que completedList existe antes de adicionar
                 if (elementos.completedList) {
                     elementos.completedList.appendChild(li);
                 }
             } else {
                 elementos.listaExercicios.appendChild(li);
             }
        });
        atualizarProgressoGeral(); // Atualiza barra e visibilidade da seção "Concluídos"
    };
    
    // Função de inicialização
    const init = () => {
        carregarProgresso();
        
        // Cria os botões de navegação INFERIORES
        dadosTreino.forEach((dia, index) => {
            const btn = document.createElement('button');
            btn.className = 'bottom-day-btn';
            btn.textContent = dia.nomeCompleto || dia.dia; // Usa nome completo traduzido
            btn.dataset.index = index;
            // Insere antes do botão de reset
            elementos.bottomDaySelector.insertBefore(btn, elementos.botaoResetar);
            
            btn.addEventListener('click', () => {
                renderizarTreino(index); 
            });
        });

        // Event listeners dos modais e reset (permanecem iguais)
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
        
        // Define e renderiza o dia atual
        let hoje = new Date().getDay() - 1; // Seg=0, Ter=1... Dom=6
        if(hoje < 0 || hoje > 4) hoje = 0; // Se for fim de semana, mostra segunda
        renderizarTreino(hoje); // Renderiza o treino do dia correto
    };

    init();
});
