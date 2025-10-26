document.addEventListener('DOMContentLoaded', () => {

    const frasesMotivacionais = [
        "A jornada de mil quilômetros começa com um único passo.", "Consistência é a chave.", "Acredite no seu potencial.", "Cada gota de suor conta.", "Feito é melhor que perfeito.", "A dor de hoje é a força de amanhã.", "Sua mente desiste antes do corpo.", "Hábito > Motivação.", "Pequenos progressos = Grandes resultados.", "O corpo alcança o que a mente acredita.", "Aumente o esforço, não diminua a meta.", "Crie sua força de vontade.", "Faça o que nunca fez.", "Constância no propósito."
    ];
    const mensagensDeConclusao = [
        "Mandou bem! Descanse, recupere e volte com tudo!", "Treino concluído! Vitória do dia. Nos vemos no próximo!", "Parabéns! Consistência é tudo. Até a próxima!", "Excelente! O esforço de hoje vale a pena. Volte amanhã!", "Missão cumprida! Orgulhe-se. Te esperamos no próximo!"
    ];

    // INSTRUÇÕES ATUALIZADAS PARA FORMATO DE LISTA
    const dadosTreino = [
        {
            dia: "Push", iconEmoji: "💪", exercicios: [
                { nome: "Supino na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-maquina.gif", instrucoes: ["Sente-se com as costas bem apoiadas e ajuste o banco para que os pegadores fiquem na altura do meio do seu peito.", "Empurre os pegadores para a frente de forma controlada, sem travar os cotovelos. Retorne lentamente, sentindo o peitoral alongar.", "Mantenha os ombros para trás durante todo o movimento."] },
                { nome: "Desenvolvimento na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/desenvolvimento-maquina.gif", instrucoes: ["Sente-se com as costas apoiadas e segure os pegadores na altura dos ombros, com as palmas das mãos para frente.", "Empurre para cima até os braços estarem quase estendidos. Desça de forma controlada até a posição inicial.", "Mantenha o abdômen contraído para não arquear as costas."] },
                { nome: "Elevação Lateral com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-lateral.gif", instrucoes: ["Em pé, com os pés na largura dos ombros e halteres ao lado do corpo.", "Com os cotovelos levemente dobrados, levante os braços para os lados até a altura dos ombros. Desça ainda mais lentamente.", "Evite usar o impulso do corpo. O movimento deve ser focado nos ombros."] },
                { nome: "Tríceps na Polia (Barra)", series: 4, reps: "12-15 reps", gifUrl: "gifs/triceps-polia.gif", instrucoes: ["Fique de pé em frente à polia alta. Mantenha os cotovelos 'colados' na lateral do seu corpo.", "Empurre a barra para baixo até estender completamente os braços. Faça uma pequena pausa e retorne de forma controlada.", "Apenas o antebraço se move; o resto do braço fica parado."] }
            ]
        },
        {
            dia: "Pull", iconEmoji: "🏋️", exercicios: [
                { nome: "Puxada Frontal (Pulldown)", series: 3, reps: "10-12 reps", gifUrl: "gifs/puxada-frontal.gif", instrucoes: ["Sente-se e ajuste o apoio dos joelhos. Segure a barra com uma pegada mais aberta que os ombros.", "Incline o tronco levemente para trás e puxe a barra em direção à parte de cima do peito. Volte de forma controlada, alongando bem as costas.", "Puxe com os cotovelos, imaginando que suas mãos são apenas ganchos."] },
                { nome: "Remada na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-maquina.gif", instrucoes: ["Sente-se com o peito bem apoiado na máquina.", "Puxe os pegadores em direção ao abdômen. No final do movimento, junte as escápulas (omoplatas) com força.", "Mantenha as costas retas e não dê solavancos."] },
                { nome: "Crucifixo Invertido na Máquina", series: 3, reps: "15 reps", gifUrl: "gifs/crucifixo-invertido-maquina.gif", instrucoes: ["Sente-se virado para a máquina, com o peito apoiado.", "Com os braços quase retos, abra-os em um grande arco para trás, contraindo a parte de trás dos ombros.", "O movimento deve ser controlado, sem impulso."] },
                { nome: "Rosca Direta com Halteres", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-direta.gif", instrucoes: ["Em pé, com os halteres ao lado do corpo e palmas para frente.", "Mantendo os cotovelos parados ao lado do corpo, levante um halter de cada vez em direção ao ombro. Desça lentamente.", "Não balance o corpo para ajudar a levantar o peso."] }
            ]
        },
        {
            dia: "Legs", iconEmoji: "🦵", exercicios: [
                { nome: "Leg Press", series: 3, reps: "10-12 reps", gifUrl: "gifs/leg-press.gif", instrucoes: ["Sente-se com costas e quadril totalmente apoiados. Pés na plataforma, na largura dos ombros.", "Desça o peso de forma controlada até os joelhos formarem 90 graus. Empurre de volta sem travar os joelhos no final.", "A força deve vir dos calcanhares, não da ponta dos pés."] },
                { nome: "Cadeira Extensora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-extensora.gif", instrucoes: ["Sente-se com as costas bem apoiadas.", "Estenda as pernas e segure a contração máxima por 1 a 2 segundos no topo.", "A qualidade da contração no topo é mais importante que a quantidade de peso."] },
                { nome: "Cadeira Flexora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-flexora.gif", instrucoes: ["Ajuste a máquina para que o apoio fique acima dos tornozelos.", "Puxe os calcanhares em direção aos glúteos de forma controlada. Sinta a contração na parte de trás da coxa.", "Faça a fase de volta (negativa) de forma lenta."] },
                { nome: "Elevação Pélvica", series: 3, reps: "15 reps", gifUrl: "gifs/elevacao-pelvica.gif", instrucoes: ["Deite-se com as costas apoiadas em um banco e os pés no chão.", "Eleve o quadril até o corpo ficar reto, contraindo os glúteos com força no topo. Segure por 2 segundos e desça.", "Mantenha o queixo levemente para baixo."] },
                { nome: "Panturrilha em Pé", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-pe.gif", instrucoes: ["Em um degrau ou na máquina, com os calcanhares para fora.", "Alongue o máximo na descida. Suba até a ponta do pé e segure a contração por 2 segundos no topo.", "Não faça o movimento 'saltitando'. Amplitude é a chave."] }
            ]
        },
        {
            dia: "Upper", iconEmoji: "💪", exercicios: [
                { nome: "Remada Curvada com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-curvada.gif", instrucoes: ["Incline o tronco para a frente, mantendo as costas retas. Segure os halteres com os braços estendidos.", "Puxe os halteres em direção ao seu quadril, mantendo os cotovelos próximos ao corpo.", "Imagine que está guardando os halteres nos bolsos da calça."] },
                { nome: "Supino Inclinado com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-inclinado.gif", instrucoes: ["Deite-se em um banco inclinado (30-45 graus) com os halteres na altura do peito.", "Empurre os pesos para cima até os braços estarem quase estendidos. Desça lentamente até sentir o peito alongar.", "Não bata um halter no outro no topo do movimento."] },
                { nome: "Elevação Frontal com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-frontal.gif", instrucoes: ["Em pé, segurando os halteres à frente do corpo.", "Eleve um halter de cada vez à sua frente, até a altura dos ombros, mantendo o braço reto. Desça devagar.", "Evite balançar o corpo para levantar o peso."] },
                { nome: "Rosca Martelo", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-martelo.gif", instrucoes: ["Segure os halteres com as palmas das mãos viradas uma para a outra (pegada de martelo).", "Levante os halteres, alternadamente ou juntos, sem girar os punhos.", "Mantenha os cotovelos parados ao lado do corpo."] }
            ]
        },
        {
            dia: "Lower", iconEmoji: "🦵", exercicios: [
                { nome: "Agachamento Goblet", series: 3, reps: "10-12 reps", gifUrl: "gifs/agachamento-goblet.gif", instrucoes: ["Segure um halter na vertical, colado ao peito. Pés um pouco mais afastados que os ombros.", "Agache como se fosse sentar em uma cadeira, mantendo as costas retas e o peito para cima. Empurre o chão com os calcanhares para subir.", "A profundidade é importante, mas não sacrifique a boa forma."] },
                { nome: "Afundo (Lunge)", series: 3, reps: "12-15 reps por perna", gifUrl: "gifs/afundo.gif", instrucoes: ["Em pé, segurando halteres (opcional).", "Dê um passo grande para a frente e flexione ambos os joelhos a 90 graus. O joelho de trás deve quase tocar o chão. Volte à posição inicial.", "Mantenha o tronco reto e o abdômen firme para ter equilíbrio."] },
                { nome: "Stiff com Halteres", series: 3, reps: "15 reps", gifUrl: "gifs/stiff-halteres.gif", instrucoes: ["Em pé, com halteres à frente das coxas.", "Mantendo as pernas quase retas, desça o tronco com as costas retas, como se fosse 'varrer' o chão com os pesos. Sinta alongar a parte de trás da coxa.", "Não precisa descer até o chão. Vá até o seu limite de flexibilidade."] },
                { nome: "Panturrilha Sentado", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-sentado.gif", instrucoes: ["Sentado na máquina, com o apoio sobre os joelhos.", "Alongue o máximo na descida e eleve os calcanhares o máximo possível. Segure a contração por 2 segundos no topo.", "Este exercício trabalha uma parte diferente da panturrilha. Faça devagar."] }
            ]
        }
    ];

    const elementos = {
        dayCardsContainer: document.getElementById('day-cards-container'),
        todayWorkoutName: document.getElementById('today-workout-name'),
        botaoResetar: document.getElementById('botao-resetar'),
        modal: { 
            overlay: document.getElementById('modal-info-overlay'),
            fecharBtn: document.getElementById('modal-info-fechar-btn'),
            titulo: document.getElementById('modal-info-titulo'),
            gif: document.getElementById('modal-info-gif'),
            instrucoes: document.getElementById('modal-info-instrucoes') // Agora é um <ol>
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

    const carregarProgresso = () => { progresso = JSON.parse(localStorage.getItem('minhaRotinaCartoesFinalV3')) || {}; };
    const salvarProgresso = () => { localStorage.setItem('minhaRotinaCartoesFinalV3', JSON.stringify(progresso)); };

    const verificarConclusaoSemanal = () => {
        if (diaAtivoIndex !== dadosTreino.length - 1) return false; 
        const ultimoDiaExercicios = dadosTreino[diaAtivoIndex].exercicios;
        return ultimoDiaExercicios.every((ex, exIndex) => {
            const id = `dia${diaAtivoIndex}-ex${exIndex}`;
            return (progresso[id] || 0) >= ex.series;
        });
    };

    const atualizarProgressoGeral = (index) => {
        const diaData = dadosTreino[index];
        const cardContent = document.querySelector(`.day-card[data-index="${index}"] .day-card-content`);
        if (!diaData.exercicios || !cardContent) return;

        const totalExercicios = diaData.exercicios.length;
        let concluidos = diaData.exercicios.filter((ex, i) => (progresso[`dia${index}-ex${i}`] || 0) >= ex.series).length;
        const porcentagem = totalExercicios > 0 ? (concluidos / totalExercicios) * 100 : 0;
        
        const progressBar = cardContent.querySelector('.progress-bar');
        if(progressBar) progressBar.style.width = `${porcentagem}%`;

        const listaConcluidos = cardContent.querySelector('#completed-list');
        const completedSection = cardContent.querySelector('#completed-section');
        if (completedSection && listaConcluidos) {
             completedSection.classList.toggle('hidden', listaConcluidos.children.length === 0);
        }

        if (porcentagem === 100 && elementos.completion.overlay.classList.contains('hidden')) {
            setTimeout(() => {
                const aindaConcluidos = dadosTreino[index].exercicios.every((ex, i) => (progresso[`dia${index}-ex${i}`] || 0) >= ex.series);
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

    const atualizarVisualCardExercicio = (card, id, ex) => {
        const seriesFeitas = progresso[id] || 0;
        const porcentagem = seriesFeitas / ex.series; 
        const fillElement = card.querySelector('.exercicio-progress-fill');
        if (fillElement) fillElement.style.transform = `scaleY(${porcentagem})`;
        card.classList.toggle('finalizado', seriesFeitas >= ex.series);
    };

    const moverCardExercicioParaListaCorreta = (card, id, ex) => {
        const seriesFeitas = progresso[id] || 0;
        const cardContent = card.closest('.day-card-content');
        if (!cardContent) return;

        let listaDestino = seriesFeitas >= ex.series
            ? cardContent.querySelector('#completed-list')
            : cardContent.querySelector('#lista-exercicios');

        let completedSection = cardContent.querySelector('#completed-section');
        if (seriesFeitas >= ex.series) {
            if (!completedSection) {
                completedSection = document.createElement('div');
                completedSection.id = 'completed-section';
                completedSection.innerHTML = `<h3 id="completed-title" class="category-title">Concluídos</h3><ul id="completed-list"></ul>`;
                cardContent.appendChild(completedSection);
            }
             if (!completedSection.querySelector('#completed-list')) { 
                 const ul = document.createElement('ul');
                 ul.id = 'completed-list';
                 completedSection.appendChild(ul);
             }
            listaDestino = completedSection.querySelector('#completed-list'); 
            completedSection.classList.remove('hidden'); 
        } else {
             if (!listaDestino) {
                 listaDestino = document.createElement('ul');
                 listaDestino.id = 'lista-exercicios';
                 if (completedSection) {
                     cardContent.insertBefore(listaDestino, completedSection);
                 } else {
                     cardContent.prepend(listaDestino); 
                 }
             }
        }
        
        if (!listaDestino) return; 

        card.classList.add('movendo');
        setTimeout(() => {
            listaDestino.appendChild(card); 
            card.classList.remove('movendo');
             if (completedSection) {
                 const listaConcluidosAtual = completedSection.querySelector('#completed-list');
                 completedSection.classList.toggle('hidden', !listaConcluidosAtual || listaConcluidosAtual.children.length === 0);
             }
            atualizarProgressoGeral(diaAtivoIndex);
        }, 300);
    };

    const handleClickExercicio = (e) => {
        const card = e.currentTarget;
        const id = card.dataset.id;
        const exIndex = parseInt(card.dataset.exIndex);
        const dayIndex = parseInt(card.dataset.dayIndex); 
        const ex = dadosTreino[dayIndex].exercicios[exIndex];

        if (card.classList.contains('finalizado')) return;
        let seriesFeitas = progresso[id] || 0;
        seriesFeitas++;
        progresso[id] = seriesFeitas;
        atualizarVisualCardExercicio(card, id, ex);
        salvarProgresso();
        
        if (seriesFeitas >= ex.series) {
            moverCardExercicioParaListaCorreta(card, id, ex);
            atualizarProgressoGeral(dayIndex); 
        }
    };

    const handleRightClickExercicio = (e) => {
        e.preventDefault();
        const card = e.currentTarget;
        const id = card.dataset.id;
        const exIndex = parseInt(card.dataset.exIndex);
        const dayIndex = parseInt(card.dataset.dayIndex);
        const ex = dadosTreino[dayIndex].exercicios[exIndex];

        let seriesFeitas = progresso[id] || 0;
        if (seriesFeitas > 0) {
            const estavaFinalizado = card.classList.contains('finalizado');
            seriesFeitas--;
            progresso[id] = seriesFeitas;
            atualizarVisualCardExercicio(card, id, ex);
            salvarProgresso();
            
            if (estavaFinalizado) {
                 moverCardExercicioParaListaCorreta(card, id, ex);
            }
        }
        atualizarProgressoGeral(dayIndex);
    };

    // FUNÇÃO ATUALIZADA PARA FORMATAR INSTRUÇÕES
    const abrirModalInfo = (ex) => {
        elementos.modal.titulo.textContent = ex.nome;
        elementos.modal.gif.src = ex.gifUrl;
        
        // Limpa lista anterior
        elementos.modal.instrucoes.innerHTML = ''; 
        
        // Adiciona cada instrução como um item de lista <li>
        if (Array.isArray(ex.instrucoes)) {
            ex.instrucoes.forEach(passo => {
                const li = document.createElement('li');
                li.textContent = passo;
                elementos.modal.instrucoes.appendChild(li);
            });
        } else {
             // Caso ainda esteja como string (fallback)
             elementos.modal.instrucoes.textContent = ex.instrucoes;
        }

        elementos.modal.overlay.classList.remove('hidden');
    };

    const renderizarExercicios = (dayIndex, containerExercicios) => {
        const diaData = dadosTreino[dayIndex];
        containerExercicios.innerHTML = ''; 

        if (!diaData.exercicios) return;

        containerExercicios.innerHTML = `
            <div class="progress-container">
                <div class="progress-bar" style="width: 0%;"></div> 
            </div>
            <ul id="lista-exercicios"></ul>
            <div id="completed-section" class="hidden">
               <h3 id="completed-title" class="category-title">Concluídos</h3>
               <ul id="completed-list"></ul>
            </div>
        `;
        
        const listaExercicios = containerExercicios.querySelector('#lista-exercicios');
        const completedList = containerExercicios.querySelector('#completed-list');

        diaData.exercicios.forEach((ex, exIndex) => {
            const id = `dia${dayIndex}-ex${exIndex}`;
            const li = document.createElement('li');
            li.className = 'exercicio-item';
            li.dataset.id = id;
            li.dataset.exIndex = exIndex;
            li.dataset.dayIndex = dayIndex;
            
            li.innerHTML = `
                <div class="exercicio-progress-fill"></div>
                <div class="exercicio-icon">${diaData.iconEmoji}</div>
                <div class="detalhes-exercicio">
                    <h3>${ex.nome}</h3>
                    <p>${ex.series} séries de ${ex.reps}</p>
                </div>
                <button class="btn-info">i</button>
            `;
            
            atualizarVisualCardExercicio(li, id, ex);
            li.addEventListener('click', handleClickExercicio);
            li.addEventListener('contextmenu', handleRightClickExercicio);
            
            li.querySelector('.btn-info').addEventListener('click', (e) => {
                e.stopPropagation();
                abrirModalInfo(ex); // Chama a função atualizada
            });

            if (li.classList.contains('finalizado')) {
                completedList.appendChild(li);
            } else {
                listaExercicios.appendChild(li);
            }
        });
        atualizarProgressoGeral(dayIndex); 
    };

    const toggleDayCard = (index) => {
        const allCards = document.querySelectorAll('.day-card');
        allCards.forEach((card, i) => {
            const content = card.querySelector('.day-card-content');
            if (i === index) {
                if (!card.classList.contains('active')) { 
                    card.classList.add('active');
                    diaAtivoIndex = index; 
                    if (!content.dataset.rendered) { 
                        renderizarExercicios(index, content);
                        content.dataset.rendered = 'true';
                    }
                }
                // Se já estiver ativo, não faz nada (mantém aberto)
            } else {
                card.classList.remove('active');
                // Não limpar o conteúdo para manter o estado visual
            }
        });
        elementos.todayWorkoutName.textContent = dadosTreino[diaAtivoIndex].dia;
    };
    
    const init = () => {
        carregarProgresso();
        
        // Cria os cartões dos dias
        dadosTreino.forEach((dia, index) => {
            const card = document.createElement('div');
            card.className = 'day-card';
            card.dataset.index = index;
            card.innerHTML = `
                <div class="day-card-header">
                    <h3>${dia.dia}</h3>
                    <svg class="day-card-toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                       <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="day-card-content">
                    <!-- Conteúdo será renderizado aqui -->
                </div>
            `;
            elementos.dayCardsContainer.appendChild(card);

            card.querySelector('.day-card-header').addEventListener('click', () => {
                toggleDayCard(index);
            });
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
        
        let hoje = new Date().getDay() - 1;
        if(hoje < 0 || hoje > 4) hoje = 0;
        toggleDayCard(hoje); 
    };

    init();
});
