document.addEventListener('DOMContentLoaded', () => {

    const frasesMotivacionais = [
        "A jornada de mil quilômetros começa com um único passo. Você já está no caminho.", "Não se compare com os outros. Compare-se com a pessoa que você era ontem.", "A consistência transforma o esforço em resultado.", "Acredite no seu potencial. Você é mais forte do que imagina.", "Cada gota de suor é um degrau a mais na escada do seu objetivo.", "Feito é melhor que perfeito. Apenas comece.", "A dor que você sente hoje é a força que você sentirá amanhã.", "Sua mente desistirá cem vezes antes do seu corpo.", "A motivação te faz começar. O hábito te faz continuar.", "Um pequeno progresso a cada dia resulta em grandes resultados.", "O corpo alcança o que a mente acredita.", "Não diminua o objetivo. Aumente o esforço.", "Você não encontrará a força de vontade, você precisa criá-la.", "Se você quer algo que nunca teve, precisa fazer algo que nunca fez.", "O segredo do sucesso é a constância no propósito."
    ];

    const mensagensDeConclusao = [
        "Mandou bem hoje! O descanso é parte do processo. Volte com tudo no próximo treino!",
        "Treino concluído com sucesso! Cada dia é um tijolo na construção do seu objetivo. Nos vemos no próximo!",
        "Parabéns pelo esforço! A consistência é a chave. Descanse e prepare-se para superar seus limites da próxima vez!",
        "Excelente! Mais um passo dado. O trabalho de hoje garante os resultados de amanhã. Até o próximo treino!",
        "Missão cumprida! Sinta orgulho do seu progresso. Estamos te esperando para o próximo desafio!"
    ];

    // INSTRUÇÕES ATUALIZADAS PARA FORMATO DE LISTA
    const dadosTreino = [
        {
            dia: "Push", iconEmoji: "💪", exercicios: [
                { nome: "Supino na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-maquina.gif", instrucoes: "1. Posição: Sente-se com as costas bem apoiadas e ajuste o banco para que os pegadores fiquem na altura do meio do seu peito.\n2. Execução: Empurre os pegadores para a frente de forma controlada, sem travar os cotovelos. Retorne lentamente, sentindo o peitoral alongar.\n3. Dica: Mantenha os ombros para trás durante todo o movimento." },
                { nome: "Desenvolvimento na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/desenvolvimento-maquina.gif", instrucoes: "1. Posição: Sente-se com as costas apoiadas e segure os pegadores na altura dos ombros, com as palmas das mãos para frente.\n2. Execução: Empurre para cima até os braços estarem quase estendidos. Desça de forma controlada até a posição inicial.\n3. Dica: Mantenha o abdômen contraído para não arquear as costas." },
                { nome: "Elevação Lateral com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-lateral.gif", instrucoes: "1. Posição: Em pé, com os pés na largura dos ombros e halteres ao lado do corpo.\n2. Execução: Com os cotovelos levemente dobrados, levante os braços para os lados até a altura dos ombros. Desça ainda mais lentamente.\n3. Dica: Evite usar o impulso do corpo. O movimento deve ser focado nos ombros." },
                { nome: "Tríceps na Polia (Barra)", series: 4, reps: "12-15 reps", gifUrl: "gifs/triceps-polia.gif", instrucoes: "1. Posição: Fique de pé em frente à polia alta. Mantenha os cotovelos 'colados' na lateral do seu corpo.\n2. Execução: Empurre a barra para baixo até estender completamente os braços. Faça uma pequena pausa e retorne de forma controlada.\n3. Dica: Apenas o antebraço se move; o resto do braço fica parado." }
            ]
        },
        {
            dia: "Pull", iconEmoji: "🏋️", exercicios: [
                { nome: "Puxada Frontal (Pulldown)", series: 3, reps: "10-12 reps", gifUrl: "gifs/puxada-frontal.gif", instrucoes: "1. Posição: Sente-se e ajuste o apoio dos joelhos. Segure a barra com uma pegada mais aberta que os ombros.\n2. Execução: Incline o tronco levemente para trás e puxe a barra em direção à parte de cima do peito. Volte de forma controlada, alongando bem as costas.\n3. Dica: Puxe com os cotovelos, imaginando que suas mãos são apenas ganchos." },
                { nome: "Remada na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-maquina.gif", instrucoes: "1. Posição: Sente-se com o peito bem apoiado na máquina.\n2. Execução: Puxe os pegadores em direção ao abdômen. No final do movimento, junte as escápulas (omoplatas) com força.\n3. Dica: Mantenha as costas retas e não dê solavancos." },
                { nome: "Crucifixo Invertido na Máquina", series: 3, reps: "15 reps", gifUrl: "gifs/crucifixo-invertido-maquina.gif", instrucoes: "1. Posição: Sente-se virado para a máquina, com o peito apoiado.\n2. Execução: Com os braços quase retos, abra-os em um grande arco para trás, contraindo a parte de trás dos ombros.\n3. Dica: O movimento deve ser controlado, sem impulso." },
                { nome: "Rosca Direta com Halteres", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-direta.gif", instrucoes: "1. Posição: Em pé, com os halteres ao lado do corpo e palmas para frente.\n2. Execução: Mantendo os cotovelos parados ao lado do corpo, levante um halter de cada vez em direção ao ombro. Desça lentamente.\n3. Dica: Não balance o corpo para ajudar a levantar o peso." }
            ]
        },
        {
            dia: "Legs", iconEmoji: "🦵", exercicios: [
                { nome: "Leg Press", series: 3, reps: "10-12 reps", gifUrl: "gifs/leg-press.gif", instrucoes: "1. Posição: Sente-se com costas e quadril totalmente apoiados. Pés na plataforma, na largura dos ombros.\n2. Execução: Desça o peso de forma controlada até os joelhos formarem 90 graus. Empurre de volta sem travar os joelhos no final.\n3. Dica: A força deve vir dos calcanhares, não da ponta dos pés." },
                { nome: "Cadeira Extensora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-extensora.gif", instrucoes: "1. Posição: Sente-se com as costas bem apoiadas.\n2. Execução: Estenda as pernas e segure a contração máxima por 1 a 2 segundos no topo.\n3. Dica: A qualidade da contração no topo é mais importante que a quantidade de peso." },
                { nome: "Cadeira Flexora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-flexora.gif", instrucoes: "1. Posição: Ajuste a máquina para que o apoio fique acima dos tornozelos.\n2. Execução: Puxe os calcanhares em direção aos glúteos de forma controlada. Sinta a contração na parte de trás da coxa.\n3. Dica: Faça a fase de volta (negativa) de forma lenta." },
                { nome: "Elevação Pélvica", series: 3, reps: "15 reps", gifUrl: "gifs/elevacao-pelvica.gif", instrucoes: "1. Posição: Deite-se com as costas apoiadas em um banco e os pés no chão.\n2. Execução: Eleve o quadril até o corpo ficar reto, contraindo os glúteos com força no topo. Segure por 2 segundos e desça.\n3. Dica: Mantenha o queixo levemente para baixo." },
                { nome: "Panturrilha em Pé", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-pe.gif", instrucoes: "1. Posição: Em um degrau ou na máquina, com os calcanhares para fora.\n2. Execução: Alongue o máximo na descida. Suba até a ponta do pé e segure a contração por 2 segundos no topo.\n3. Dica: Não faça o movimento 'saltitando'. Amplitude é a chave." }
            ]
        },
        {
            dia: "Upper", iconEmoji: "💪", exercicios: [
                { nome: "Remada Curvada com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-curvada.gif", instrucoes: "1. Posição: Incline o tronco para a frente, mantendo as costas retas. Segure os halteres com os braços estendidos.\n2. Execução: Puxe os halteres em direção ao seu quadril, mantendo os cotovelos próximos ao corpo.\n3. Dica: Imagine que está guardando os halteres nos bolsos da calça." },
                { nome: "Supino Inclinado com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-inclinado.gif", instrucoes: "1. Posição: Deite-se em um banco inclinado (30-45 graus) com os halteres na altura do peito.\n2. Execução: Empurre os pesos para cima até os braços estarem quase estendidos. Desça lentamente até sentir o peito alongar.\n3. Dica: Não bata um halter no outro no topo do movimento." },
                { nome: "Elevação Frontal com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-frontal.gif", instrucoes: "1. Posição: Em pé, segurando os halteres à frente do corpo.\n2. Execução: Eleve um halter de cada vez à sua frente, até a altura dos ombros, mantendo o braço reto. Desça devagar.\n3. Dica: Evite balançar o corpo para levantar o peso." },
                { nome: "Rosca Martelo", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-martelo.gif", instrucoes: "1. Posição: Segure os halteres com as palmas das mãos viradas uma para a outra (pegada de martelo).\n2. Execução: Levante os halteres, alternadamente ou juntos, sem girar os punhos.\n3. Dica: Mantenha os cotovelos parados ao lado do corpo." }
            ]
        },
        {
            dia: "Lower", iconEmoji: "🦵", exercicios: [
                { nome: "Agachamento Goblet", series: 3, reps: "10-12 reps", gifUrl: "gifs/agachamento-goblet.gif", instrucoes: "1. Posição: Segure um halter na vertical, colado ao peito. Pés um pouco mais afastados que os ombros.\n2. Execução: Agache como se fosse sentar em uma cadeira, mantendo as costas retas e o peito para cima. Empurre o chão com os calcanhares para subir.\n3. Dica: A profundidade é importante, mas não sacrifique a boa forma." },
                { nome: "Afundo (Lunge)", series: 3, reps: "12-15 reps por perna", gifUrl: "gifs/afundo.gif", instrucoes: "1. Posição: Em pé, segurando halteres (opcional).\n2. Execução: Dê um passo grande para a frente e flexione ambos os joelhos a 90 graus. O joelho de trás deve quase tocar o chão. Volte à posição inicial.\n3. Dica: Mantenha o tronco reto e o abdômen firme para ter equilíbrio." },
                { nome: "Stiff com Halteres", series: 3, reps: "15 reps", gifUrl: "gifs/stiff-halteres.gif", instrucoes: "1. Posição: Em pé, com halteres à frente das coxas.\n2. Execução: Mantendo as pernas quase retas, desça o tronco com as costas retas, como se fosse 'varrer' o chão com os pesos. Sinta alongar a parte de trás da coxa.\n3. Dica: Não precisa descer até o chão. Vá até o seu limite de flexibilidade." },
                { nome: "Panturrilha Sentado", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-sentado.gif", instrucoes: "1. Posição: Sentado na máquina, com o apoio sobre os joelhos.\n2. Execução: Alongue o máximo na descida e eleve os calcanhares o máximo possível. Segure a contração por 2 segundos no topo.\n3. Dica: Este exercício trabalha uma parte diferente da panturrilha. Faça devagar." }
            ]
        }
    ];

    const elementos = {
        seletorDias: document.getElementById('seletor-dias'),
        headerTitle: document.getElementById('header-title'),
        listaExercicios: document.getElementById('lista-exercicios'),
        progressBar: document.getElementById('progress-bar'),
        quoteText: document.getElementById('quote-text'),
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
            text: document.getElementById('completion-text'),
            closeBtn: document.getElementById('completion-close-btn')
        }
    };
    
    let progresso = {};
    let diaAtivoIndex = 0;

    const carregarProgresso = () => { progresso = JSON.parse(localStorage.getItem('minhaRotinaInterativaLocal')) || {}; };
    const salvarProgresso = () => { localStorage.setItem('minhaRotinaInterativaLocal', JSON.stringify(progresso)); };

    const atualizarProgressoGeral = () => {
        const exerciciosDoDia = dadosTreino[diaAtivoIndex].exercicios;
        if (!exerciciosDoDia) return;

        const totalExercicios = exerciciosDoDia.length;
        let concluidos = 0;
        exerciciosDoDia.forEach((ex, exIndex) => {
            const id = `dia${diaAtivoIndex}-ex${exIndex}`;
            const seriesFeitas = progresso[id] || 0;
            if (seriesFeitas >= ex.series) {
                concluidos++;
            }
        });
        const porcentagem = totalExercicios > 0 ? (concluidos / totalExercicios) * 100 : 0;
        elementos.progressBar.style.width = `${porcentagem}%`;

        if (porcentagem === 100 && elementos.completion.overlay.classList.contains('hidden')) {
            const mensagem = mensagensDeConclusao[Math.floor(Math.random() * mensagensDeConclusao.length)];
            elementos.completion.text.textContent = mensagem;
            elementos.completion.overlay.classList.remove('hidden');
            confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 }, zIndex: 2000 });
        }
    };

    const atualizarVisualCard = (card, id, ex) => {
        const seriesFeitas = progresso[id] || 0;
        const porcentagem = (seriesFeitas / ex.series) * 100;
        card.querySelector('.exercicio-progress-fill').style.width = `${porcentagem}%`;
        card.classList.toggle('finalizado', seriesFeitas >= ex.series);
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
            atualizarProgressoGeral();
            card.classList.add('movendo');
            setTimeout(() => {
                elementos.listaExercicios.appendChild(card);
                card.classList.remove('movendo');
            }, 400);
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
            seriesFeitas--;
            progresso[id] = seriesFeitas;
        }
        atualizarVisualCard(card, id, ex);
        salvarProgresso();
        atualizarProgressoGeral();
    };

    const renderizarTreino = (index) => {
        diaAtivoIndex = index;
        const diaData = dadosTreino[index];
        elementos.headerTitle.textContent = `Treino de Hoje: ${diaData.dia}`;
        elementos.listaExercicios.innerHTML = '';
        elementos.completion.overlay.classList.add('hidden');

        if (!diaData.exercicios) return;

        const exerciciosOrdenados = [], exerciciosFinalizados = [];
        diaData.exercicios.forEach((ex, exIndex) => {
            const id = `dia${index}-ex${exIndex}`;
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
                elementos.modal.gif.src = ex.gifUrl;
                elementos.modal.instrucoes.textContent = ex.instrucoes;
                elementos.modal.overlay.classList.remove('hidden');
            });

            if (li.classList.contains('finalizado')) {
                exerciciosFinalizados.push(li);
            } else {
                exerciciosOrdenados.push(li);
            }
        });

        exerciciosOrdenados.forEach(li => elementos.listaExercicios.appendChild(li));
        exerciciosFinalizados.forEach(li => elementos.listaExercicios.appendChild(li));
        atualizarProgressoGeral();
    };
    
    const init = () => {
        carregarProgresso();
        elementos.quoteText.textContent = frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)];

        dadosTreino.forEach((dia, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn-dia';
            btn.textContent = dia.dia;
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
            if (confirm('Tem certeza que quer apagar todo o progresso da semana?')) {
                progresso = {};
                salvarProgresso();
                renderizarTreino(diaAtivoIndex);
            }
        });
        
        let hoje = new Date().getDay() - 1;
        if(hoje < 0 || hoje > 4) hoje = 0;
        document.querySelectorAll('.btn-dia')[hoje].click();
    };

    init();
});
