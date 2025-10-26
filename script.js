document.addEventListener('DOMContentLoaded', () => {

    const mensagensDeConclusao = [
        "Mandou bem! Descanse, recupere e volte com tudo!", "Treino concluído! Vitória do dia. Nos vemos no próximo!", "Parabéns! Consistência é tudo. Até a próxima!", "Excelente! O esforço de hoje vale a pena. Volte amanhã!", "Missão cumprida! Orgulhe-se. Te esperamos!"
    ];

    // Adiciona nomeCompleto e atualiza instruções
    const dadosTreino = [ 
        { dia: "Push", nomeCompleto: "Empurrar", exercicios: [
                { nome: "Supino na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-maquina.gif", instrucoes: ["Sente-se com as costas bem apoiadas e ajuste o banco para que os pegadores fiquem na altura do meio do seu peito.", "Empurre os pegadores para a frente de forma controlada, sem travar os cotovelos. Retorne lentamente, sentindo o peitoral alongar.", "Mantenha os ombros para trás durante todo o movimento."] },
                { nome: "Desenvolvimento na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/desenvolvimento-maquina.gif", instrucoes: ["Sente-se com as costas apoiadas e segure os pegadores na altura dos ombros, com as palmas das mãos para frente.", "Empurre para cima até os braços estarem quase estendidos. Desça de forma controlada até a posição inicial.", "Mantenha o abdômen contraído para não arquear as costas."] },
                { nome: "Elevação Lateral com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-lateral.gif", instrucoes: ["Em pé, com os pés na largura dos ombros e halteres ao lado do corpo.", "Com os cotovelos levemente dobrados, levante os braços para os lados até a altura dos ombros. Desça ainda mais lentamente.", "Evite usar o impulso do corpo. O movimento deve ser focado nos ombros."] },
                { nome: "Tríceps na Polia (Barra)", series: 4, reps: "12-15 reps", gifUrl: "gifs/triceps-polia.gif", instrucoes: ["Fique de pé em frente à polia alta. Mantenha os cotovelos 'colados' na lateral do seu corpo.", "Empurre a barra para baixo até estender completamente os braços. Faça uma pequena pausa e retorne de forma controlada.", "Apenas o antebraço se move; o resto do braço fica parado."] }
            ]},
        { dia: "Pull", nomeCompleto: "Puxar", exercicios: [
                { nome: "Puxada Frontal (Pulldown)", series: 3, reps: "10-12 reps", gifUrl: "gifs/puxada-frontal.gif", instrucoes: ["Sente-se e ajuste o apoio dos joelhos. Segure a barra com uma pegada mais aberta que os ombros.", "Incline o tronco levemente para trás e puxe a barra em direção à parte de cima do peito. Volte de forma controlada, alongando bem as costas.", "Puxe com os cotovelos, imaginando que suas mãos são apenas ganchos."] },
                { nome: "Remada na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-maquina.gif", instrucoes: ["Sente-se com o peito bem apoiado na máquina.", "Puxe os pegadores em direção ao abdômen. No final do movimento, junte as escápulas (omoplatas) com força.", "Mantenha as costas retas e não dê solavancos."] },
                { nome: "Crucifixo Invertido na Máquina", series: 3, reps: "15 reps", gifUrl: "gifs/crucifixo-invertido-maquina.gif", instrucoes: ["Sente-se virado para a máquina, com o peito apoiado.", "Com os braços quase retos, abra-os em um grande arco para trás, contraindo a parte de trás dos ombros.", "O movimento deve ser controlado, sem impulso."] },
                { nome: "Rosca Direta com Halteres", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-direta.gif", instrucoes: ["Em pé, com os halteres ao lado do corpo e palmas para frente.", "Mantendo os cotovelos parados ao lado do corpo, levante um halter de cada vez em direção ao ombro. Desça lentamente.", "Não balance o corpo para ajudar a levantar o peso."] }
            ]},
        { dia: "Legs", nomeCompleto: "Pernas", exercicios: [
                { nome: "Leg Press", series: 3, reps: "10-12 reps", gifUrl: "gifs/leg-press.gif", instrucoes: ["Sente-se com costas e quadril totalmente apoiados. Pés na plataforma, na largura dos ombros.", "Desça o peso de forma controlada até os joelhos formarem 90 graus. Empurre de volta sem travar os joelhos no final.", "A força deve vir dos calcanhares, não da ponta dos pés."] },
                { nome: "Cadeira Extensora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-extensora.gif", instrucoes: ["Sente-se com as costas bem apoiadas.", "Estenda as pernas e segure a contração máxima por 1 a 2 segundos no topo.", "A qualidade da contração no topo é mais importante que a quantidade de peso."] },
                { nome: "Cadeira Flexora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-flexora.gif", instrucoes: ["Ajuste a máquina para que o apoio fique acima dos tornozelos.", "Puxe os calcanhares em direção aos glúteos de forma controlada. Sinta a contração na parte de trás da coxa.", "Faça a fase de volta (negativa) de forma lenta."] },
                { nome: "Elevação Pélvica", series: 3, reps: "15 reps", gifUrl: "gifs/elevacao-pelvica.gif", instrucoes: ["Deite-se com as costas apoiadas em um banco e os pés no chão.", "Eleve o quadril até o corpo ficar reto, contraindo os glúteos com força no topo. Segure por 2 segundos e desça.", "Mantenha o queixo levemente para baixo."] },
                { nome: "Panturrilha em Pé", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-pe.gif", instrucoes: ["Em um degrau ou na máquina, com os calcanhares para fora.", "Alongue o máximo na descida. Suba até a ponta do pé e segure a contração por 2 segundos no topo.", "Não faça o movimento 'saltitando'. Amplitude é a chave."] }
            ]},
        { dia: "Upper", nomeCompleto: "Superior", exercicios: [
                { nome: "Remada Curvada com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-curvada.gif", instrucoes: ["Incline o tronco para a frente, mantendo as costas retas. Segure os halteres com os braços estendidos.", "Puxe os halteres em direção ao seu quadril, mantendo os cotovelos próximos ao corpo.", "Imagine que está guardando os halteres nos bolsos da calça."] },
                { nome: "Supino Inclinado com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-inclinado.gif", instrucoes: ["Deite-se em um banco inclinado (30-45 graus) com os halteres na altura do peito.", "Empurre os pesos para cima até os braços estarem quase estendidos. Desça lentamente até sentir o peito alongar.", "Não bata um halter no outro no topo do movimento."] },
                { nome: "Elevação Frontal com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-frontal.gif", instrucoes: ["Em pé, segurando os halteres à frente do corpo.", "Eleve um halter de cada vez à sua frente, até a altura dos ombros, mantendo o braço reto. Desça devagar.", "Evite balançar o corpo para levantar o peso."] },
                { nome: "Rosca Martelo", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-martelo.gif", instrucoes: ["Segure os halteres com as palmas das mãos viradas uma para a outra (pegada de martelo).", "Levante os halteres, alternadamente ou juntos, sem girar os punhos.", "Mantenha os cotovelos parados ao lado do corpo."] }
            ]},
        { dia: "Lower", nomeCompleto: "Inferior", exercicios: [
                { nome: "Agachamento Goblet", series: 3, reps: "10-12 reps", gifUrl: "gifs/agachamento-goblet.gif", instrucoes: ["Segure um halter na vertical, colado ao peito. Pés um pouco mais afastados que os ombros.", "Agache como se fosse sentar em uma cadeira, mantendo as costas retas e o peito para cima. Empurre o chão com os calcanhares para subir.", "A profundidade é importante, mas não sacrifique a boa forma."] },
                { nome: "Afundo (Lunge)", series: 3, reps: "12-15 reps por perna", gifUrl: "gifs/afundo.gif", instrucoes: ["Em pé, segurando halteres (opcional).", "Dê um passo grande para a frente e flexione ambos os joelhos a 90 graus. O joelho de trás deve quase tocar o chão. Volte à posição inicial.", "Mantenha o tronco reto e o abdômen firme para ter equilíbrio."] },
                { nome: "Stiff com Halteres", series: 3, reps: "15 reps", gifUrl: "gifs/stiff-halteres.gif", instrucoes: ["Em pé, com halteres à frente das coxas.", "Mantendo as pernas quase retas, desça o tronco com as costas retas, como se fosse 'varrer' o chão com os pesos. Sinta alongar a parte de trás da coxa.", "Não precisa descer até o chão. Vá até o seu limite de flexibilidade."] },
                { nome: "Panturrilha Sentado", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-sentado.gif", instrucoes: ["Sentado na máquina, com o apoio sobre os joelhos.", "Alongue o máximo na descida e eleve os calcanhares o máximo possível. Segure a contração por 2 segundos no topo.", "Este exercício trabalha uma parte diferente da panturrilha. Faça devagar."] }
            ] }
    ];


    const elementos = {
        themeToggleBtn: document.getElementById('theme-toggle-btn'),
        inlineDaySelector: document.getElementById('day-selector-inline'),
        workoutDayTitle: document.getElementById('workout-day-title'),
        workoutCard: document.getElementById('workout-card'),
        listaExercicios: document.getElementById('lista-exercicios'),
        completedList: document.getElementById('completed-list'),
        completedSection: document.getElementById('completed-section'),
        progressBar: document.getElementById('progress-bar'),
        botaoResetar: document.getElementById('botao-resetar'),
        modal: { /* ... */ },
        completion: { /* ... */ },
        reset: { /* ... */ }
    };

     // Adiciona referências aos elementos do modal
     elementos.modal.overlay = document.getElementById('modal-info-overlay');
     elementos.modal.fecharBtn = document.getElementById('modal-info-fechar-btn');
     elementos.modal.titulo = document.getElementById('modal-info-titulo');
     elementos.modal.gif = document.getElementById('modal-info-gif');
     elementos.modal.instrucoes = document.getElementById('modal-info-instrucoes');
 
     // Adiciona referências aos elementos de conclusão
     elementos.completion.overlay = document.getElementById('completion-overlay');
     elementos.completion.title = document.getElementById('completion-title');
     elementos.completion.text = document.getElementById('completion-text');
     elementos.completion.closeBtn = document.getElementById('completion-close-btn');
 
     // Adiciona referências aos elementos de reset
     elementos.reset.overlay = document.getElementById('reset-overlay');
     elementos.reset.confirmBtn = document.getElementById('confirm-reset-btn');
     elementos.reset.cancelBtn = document.getElementById('cancel-reset-btn');

    let progresso = {};
    let diaAtivoIndex = 0;
    let currentTheme = localStorage.getItem('theme') || 'light';

    const aplicarTema = (theme) => {
        document.body.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        currentTheme = theme;
    };

    const carregarProgresso = () => { progresso = JSON.parse(localStorage.getItem('minhaRotinaPaletaNova')) || {}; };
    const salvarProgresso = () => { localStorage.setItem('minhaRotinaPaletaNova', JSON.stringify(progresso)); };

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
        // Garante que completedSection existe antes de tentar acessá-lo
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

    // Atualiza o background fill E o contador de texto
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

            if (estavaFinalizado && elementos.listaExercicios) { 
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
        diaAtivoIndex = index;
        const diaData = dadosTreino[index];

        elementos.workoutDayTitle.textContent = diaData.nomeCompleto || diaData.dia;
        elementos.listaExercicios.innerHTML = '';
        if (elementos.completedList) elementos.completedList.innerHTML = '';
        elementos.completion.overlay.classList.add('hidden');

        // Atualiza botões inline
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

            // Adiciona o contador de séries
            li.innerHTML = `
                <div class="exercicio-progress-fill"></div>
                <div class="set-counter">${seriesFeitas}/${ex.series}</div>
                <div class="detalhes-exercicio">
                    <h3>${ex.nome}</h3>
                    <p>${ex.reps}</p>
                </div>
                <button class="btn-info">i</button>
            `;

            atualizarVisualCardExercicio(li, id, ex); // Atualiza visual inicial
            li.addEventListener('click', handleClickExercicio);
            li.addEventListener('contextmenu', handleRightClickExercicio);

            li.querySelector('.btn-info').addEventListener('click', (e) => {
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

        // Cria os botões de navegação INLINE
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

        // Event listener para o botão de tema
        elementos.themeToggleBtn.addEventListener('click', () => {
            const novoTema = currentTheme === 'light' ? 'dark' : 'light';
            aplicarTema(novoTema);
        });

        // Event listeners dos modais e reset
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
        renderizarTreino(hoje);
    };

    init();
});
