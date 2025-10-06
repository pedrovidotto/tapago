document.addEventListener('DOMContentLoaded', () => {

    const frasesMotivacionais = [
        "A jornada de mil quilômetros começa com um único passo. Você já está no caminho.", "Não se compare com os outros. Compare-se com a pessoa que você era ontem.", "A consistência transforma o esforço em resultado.", "Acredite no seu potencial. Você é mais forte do que imagina.", "Cada gota de suor é um degrau a mais na escada do seu objetivo.", "Feito é melhor que perfeito. Apenas comece.", "A dor que você sente hoje é a força que você sentirá amanhã.", "Sua mente desistirá cem vezes antes do seu corpo.", "A motivação te faz começar. O hábito te faz continuar.", "Um pequeno progresso a cada dia resulta em grandes resultados.", "O corpo alcança o que a mente acredita.", "Não diminua o objetivo. Aumente o esforço.", "Você não encontrará a força de vontade, você precisa criá-la.", "Se você quer algo que nunca teve, precisa fazer algo que nunca fez.", "O segredo do sucesso é a constância no propósito."
    ];

    // NOVA LISTA DE MENSAGENS DE CONCLUSÃO
    const mensagensDeConclusao = [
        "Mandou bem hoje! O descanso é parte do processo. Volte com tudo no próximo treino!",
        "Treino concluído com sucesso! Cada dia é um tijolo na construção do seu objetivo. Nos vemos no próximo!",
        "Parabéns pelo esforço! A consistência é a chave. Descanse e prepare-se para superar seus limites da próxima vez!",
        "Excelente! Mais um passo dado. O trabalho de hoje garante os resultados de amanhã. Até o próximo treino!",
        "Missão cumprida! Sinta orgulho do seu progresso. Estamos te esperando para o próximo desafio!"
    ];

    const dadosTreino = [
        {
            dia: "Push", iconEmoji: "💪", exercicios: [
                { nome: "Supino na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-maquina.gif", instrucoes: "Mantenha as costas retas e o peito estufado. Empurre de forma controlada e retorne lentamente." },
                { nome: "Desenvolvimento na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/desenvolvimento-maquina.gif", instrucoes: "Mantenha as costas apoiadas e empurre para cima sem travar os cotovelos. Desça de forma controlada." },
                { nome: "Elevação Lateral com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-lateral.gif", instrucoes: "Com os cotovelos levemente dobrados, levante os braços para os lados até a altura dos ombros. Desça devagar." },
                { nome: "Tríceps na Polia (Barra)", series: 4, reps: "12-15 reps", gifUrl: "gifs/triceps-polia.gif", instrucoes: "Mantenha os cotovelos colados ao corpo. Empurre a barra para baixo até estender totalmente os braços." }
            ]
        },
        {
            dia: "Pull", iconEmoji: "🏋️", exercicios: [
                { nome: "Puxada Frontal (Pulldown)", series: 3, reps: "10-12 reps", gifUrl: "gifs/puxada-frontal.gif", instrucoes: "Estufe o peito e puxe a barra em direção a ele. Pense em puxar com os cotovelos, não com as mãos." },
                { nome: "Remada na Máquina", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-maquina.gif", instrucoes: "Puxe os pegadores em direção ao abdômen, juntando as escápulas no final do movimento." },
                { nome: "Crucifixo Invertido na Máquina", series: 3, reps: "15 reps", gifUrl: "gifs/crucifixo-invertido-maquina.gif", instrucoes: "Ajuste a máquina e puxe os pegadores para trás em um grande arco. Foque na parte de trás dos ombros." },
                { nome: "Rosca Direta com Halteres", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-direta.gif", instrucoes: "Mantenha os cotovelos fixos ao lado do corpo. Suba o peso de forma controlada e desça mais lentamente ainda." }
            ]
        },
        {
            dia: "Legs", iconEmoji: "🦵", exercicios: [
                { nome: "Leg Press", series: 3, reps: "10-12 reps", gifUrl: "gifs/leg-press.gif", instrucoes: "Mantenha as costas e o quadril bem apoiados. Desça de forma controlada e não trave os joelhos ao empurrar." },
                { nome: "Cadeira Extensora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-extensora.gif", instrucoes: "Estenda as pernas e segure a contração por 1 segundo no topo." },
                { nome: "Cadeira Flexora", series: 3, reps: "12-15 reps", gifUrl: "gifs/cadeira-flexora.gif", instrucoes: "Puxe os calcanhares em direção aos glúteos de forma controlada." },
                { nome: "Elevação Pélvica", series: 3, reps: "15 reps", gifUrl: "gifs/elevacao-pelvica.gif", instrucoes: "Com as costas apoiadas num banco, eleve o quadril e contraia os glúteos com força no topo." },
                { nome: "Panturrilha em Pé", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-pe.gif", instrucoes: "Alongue bem na descida e suba o máximo que conseguir, segurando no topo." }
            ]
        },
        {
            dia: "Upper", iconEmoji: "💪", exercicios: [
                { nome: "Remada Curvada com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/remada-curvada.gif", instrucoes: "Incline o tronco para a frente com as costas retas. Puxe os halteres em direção ao seu quadril." },
                { nome: "Supino Inclinado com Halteres", series: 3, reps: "10-12 reps", gifUrl: "gifs/supino-inclinado.gif", instrucoes: "Em um banco inclinado, desça os halteres até a linha do peito, alongando bem." },
                { nome: "Elevação Frontal com Halteres", series: 3, reps: "12-15 reps", gifUrl: "gifs/elevacao-frontal.gif", instrucoes: "Eleve um halter de cada vez à sua frente, até a altura dos ombros, sem usar o impulso do corpo." },
                { nome: "Rosca Martelo", series: 4, reps: "10-12 reps", gifUrl: "gifs/rosca-martelo.gif", instrucoes: "Segure os halteres como se fossem martelos e levante-os sem girar os punhos." }
            ]
        },
        {
            dia: "Lower", iconEmoji: "🦵", exercicios: [
                { nome: "Agachamento Goblet", series: 3, reps: "10-12 reps", gifUrl: "gifs/agachamento-goblet.gif", instrucoes: "Segure um halter junto ao peito. Agache como se fosse sentar, mantendo as costas retas." },
                { nome: "Afundo (Lunge)", series: 3, reps: "12-15 reps por perna", gifUrl: "gifs/afundo.gif", instrucoes: "Dê um passo à frente e flexione ambos os joelhos a 90 graus. Mantenha o tronco reto." },
                { nome: "Stiff com Halteres", series: 3, reps: "15 reps", gifUrl: "gifs/stiff-halteres.gif", instrucoes: "Mantenha as pernas quase retas e desça o tronco com as costas retas, sentindo alongar a parte de trás da coxa." },
                { nome: "Panturrilha Sentado", series: 4, reps: "15-20 reps", gifUrl: "gifs/panturrilha-sentado.gif", instrucoes: "Use a amplitude completa e segure a contração no topo." }
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
        mensagemParabens: document.getElementById('mensagem-parabens'),
        modal: {
            overlay: document.getElementById('modal-info-overlay'),
            fecharBtn: document.getElementById('modal-info-fechar-btn'),
            titulo: document.getElementById('modal-info-titulo'),
            gif: document.getElementById('modal-info-gif'),
            instrucoes: document.getElementById('modal-info-instrucoes')
        }
    };
    
    let progresso = {};
    let diaAtivoIndex = 0;

    const carregarProgresso = () => { progresso = JSON.parse(localStorage.getItem('minhaRotinaInterativaLocal')) || {}; };
    const salvarProgresso = () => { localStorage.setItem('minhaRotinaInterativaLocal', JSON.stringify(progresso)); };

    // FUNÇÃO ATUALIZADA
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

        // Lógica para exibir a mensagem e os confetes
        if (porcentagem === 100 && elementos.mensagemParabens.classList.contains('hidden')) {
            const mensagem = mensagensDeConclusao[Math.floor(Math.random() * mensagensDeConclusao.length)];
            elementos.mensagemParabens.textContent = `🎉 ${mensagem} 🎉`;
            elementos.mensagemParabens.classList.remove('hidden');
            confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
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
        elementos.mensagemParabens.classList.add('hidden'); // Garante que a mensagem suma ao trocar de dia

        if (!diaData.exercicios) return;

        const exerciciosOrdenados = [];
        const exerciciosFinalizados = [];

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
