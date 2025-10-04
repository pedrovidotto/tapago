document.addEventListener('DOMContentLoaded', () => {

    // --- DADOS DO TREINO ---
    const dadosAquecimento = {
        titulo: "Aquecimento Geral e Específico",
        duracao: "5-10 minutos",
        passos: "1. **Cardio Leve:** 5 min de bicicleta ou caminhada rápida.\n2. **Mobilidade Articular:** Gire os braços, pulsos, quadris e tornozelos.\n3. **Séries de Ativação:** Faça 1-2 séries do primeiro exercício do dia com 50% do peso que você irá usar."
    };
    const dadosDesaquecimento = {
        titulo: "Desaquecimento e Alongamento",
        duracao: "5 minutos",
        passos: "Concentre-se em alongamentos suaves para os músculos trabalhados no dia. Mantenha cada posição por 20-30 segundos, sem forçar.\n- **Superior:** Peito, costas, ombros, bíceps e tríceps.\n- **Inferior:** Quadríceps, posteriores, glúteos e panturrilhas."
    };
    const dadosTreino = [
        {
            dia: "Superior A",
            foco: "Foco em Empurrar (Peito e Ombros)",
            exercicios: [
                { nome: "Supino na Máquina", series: 3, reps: "10-12", descanso: 90, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Machine-Chest-Press.gif", instrucoes: "Ajuste o banco para que os pegadores fiquem na altura do meio do peito. Mantenha os ombros para trás e o peito estufado. Empurre de forma controlada e retorne lentamente." },
                { nome: "Desenvolvimento com Halteres", series: 3, reps: "10-12", descanso: 90, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Dumbbell-Shoulder-Press.gif", instrucoes: "Sentado, com as costas apoiadas, eleve os halteres até a altura dos ombros. Empurre para cima sem travar os cotovelos no final. Desça de forma controlada." },
                { nome: "Remada na Máquina", series: 3, reps: "10-12", descanso: 60, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leverage-Machine-Row.gif", instrucoes: "Puxe os pegadores em direção ao abdômen, juntando as escápulas no final do movimento. Alongue bem os braços na volta." },
                { nome: "Elevação Lateral com Halteres", series: 3, reps: "12-15", descanso: 60, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", instrucoes: "Com os cotovelos levemente flexionados, eleve os braços para os lados até a altura dos ombros. Desça mais lentamente do que subiu." },
                { nome: "Tríceps na Polia (Corda)", series: 3, reps: "12-15", descanso: 60, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/triceps-pushdown-V-bar.gif", instrucoes: "Mantenha os cotovelos colados ao corpo. Empurre a corda para baixo, abrindo-a no final. Apenas o antebraço se move." }
            ]
        },
        {
            dia: "Inferior A",
            foco: "Foco em Agachamento (Quadríceps)",
            exercicios: [
                { nome: "Agachamento Goblet", series: 3, reps: "10-12", descanso: 90, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Goblet-Squat.gif", instrucoes: "Segure um halter junto ao peito. Agache como se fosse sentar, mantendo as costas retas e o peito para cima. Empurre o chão com os calcanhares para subir." },
                { nome: "Cadeira Extensora", series: 3, reps: "12-15", descanso: 60, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Leg-Extension.gif", instrucoes: "Estenda as pernas e segure a contração máxima por 2 segundos no topo. A qualidade da contração é mais importante que o peso." },
                { nome: "Cadeira Flexora", series: 3, reps: "12-15", descanso: 60, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif", instrucoes: "Puxe os calcanhares em direção aos glúteos de forma controlada. Sinta a contração na parte de trás da coxa." },
                { nome: "Panturrilha em Pé", series: 4, reps: "15-20", descanso: 60, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lever-Standing-Calf-Raise.gif", instrucoes: "Alongue o máximo na descida e segure a contração máxima por 2 segundos no topo. Sem pressa." }
            ]
        },
        { dia: "Descanso", foco: "Recuperação é fundamental" },
        {
            dia: "Superior B",
            foco: "Foco em Puxar (Costas e Bíceps)",
            exercicios: [
                 { nome: "Puxada Frontal (Pulldown)", series: 3, reps: "10-12", descanso: 90, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", instrucoes: "Segure a barra com as mãos um pouco mais afastadas que os ombros. Puxe em direção ao peito, estufando o peito. Alongue bem as costas na subida." },
                 { nome: "Supino Inclinado com Halteres", series: 3, reps: "10-12", descanso: 90, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif", instrucoes: "Em um banco inclinado, desça os halteres até a linha do peito, alongando bem. Empurre para cima sem bater um no outro." },
                 { nome: "Crucifixo Invertido na Máquina", series: 3, reps: "12-15", descanso: 60, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2022/03/Reverse-Pec-Deck-Fly.gif", instrucoes: "Ajuste a máquina e puxe os pegadores para trás em um grande arco. Foque em esmagar os músculos da parte de trás dos ombros e do meio das costas." },
                 { nome: "Rosca Direta com Halteres", series: 3, reps: "10-12", descanso: 60, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Bicep-Curl.gif", instrucoes: "Mantenha os cotovelos fixos ao lado do corpo. Suba o peso de forma controlada e desça mais lentamente ainda. Evite balançar." }
            ]
        },
        {
            dia: "Inferior B",
            foco: "Foco no Quadril (Glúteos e Posterior)",
             exercicios: [
                { nome: "Elevação Pélvica (Hip Thrust)", series: 3, reps: "12-15", descanso: 90, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Barbell-Hip-Thrust.gif", instrucoes: "Com as costas apoiadas em um banco, eleve o quadril até o corpo ficar reto. Contraia os glúteos com força máxima por 2 segundos no topo." },
                { nome: "Leg Press", series: 3, reps: "10-12", descanso: 90, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Leg-Press.gif", instrucoes: "Posicione os pés um pouco mais altos na plataforma para focar mais em glúteos e posteriores. Desça de forma controlada e não trave os joelhos." },
                { nome: "Afundo (Lunge)", series: 3, reps: "12-15", descanso: 60, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif", instrucoes: "Dê um passo à frente e flexione ambos os joelhos a 90 graus. Mantenha o tronco reto. Faça todas as repetições de uma perna e depois troque." },
                { nome: "Panturrilha Sentado", series: 4, reps: "15-20", descanso: 60, gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif", instrucoes: "Este exercício foca em uma parte diferente da panturrilha. Use a amplitude completa e segure a contração no topo." }
            ]
        }
    ];

    // --- ELEMENTOS DO DOM ---
    const seletorDias = document.getElementById('seletor-dias');
    const tituloTreino = document.getElementById('titulo-treino');
    const focoTreino = document.getElementById('foco-treino');
    const sessaoAquecimento = document.getElementById('sessao-aquecimento');
    const listaExercicios = document.getElementById('lista-exercicios');
    const sessaoDesaquecimento = document.getElementById('sessao-desaquecimento');
    const resumoTreino = document.getElementById('resumo-treino');
    const volumeTotalEl = document.getElementById('volume-total');

    // Modais
    const modalInfoOverlay = document.getElementById('modal-info-overlay');
    const modalInfoFecharBtn = document.getElementById('modal-info-fechar-btn');
    const modalInfoTitulo = document.getElementById('modal-info-titulo');
    const modalInfoGif = document.getElementById('modal-info-gif');
    const modalInfoInstrucoes = document.getElementById('modal-info-instrucoes');
    
    const modalTimerOverlay = document.getElementById('modal-timer-overlay');
    const timerDisplay = document.getElementById('timer-display');
    const timerPararBtn = document.getElementById('timer-parar-btn');

    // --- ESTADO E LÓGICA ---
    let progresso = {};
    let timerInterval = null;
    let diaAtivoIndex = 0;

    const carregarProgresso = () => {
        progresso = JSON.parse(localStorage.getItem('progressoCicloV2')) || {};
    };
    const salvarProgresso = () => {
        localStorage.setItem('progressoCicloV2', JSON.stringify(progresso));
    };

    const abrirModalInfo = (exercicio) => {
        modalInfoTitulo.textContent = exercicio.nome;
        modalInfoGif.src = exercicio.gifUrl;
        modalInfoInstrucoes.textContent = exercicio.instrucoes;
        modalInfoOverlay.classList.remove('hidden');
    };
    const fecharModalInfo = () => modalInfoOverlay.classList.add('hidden');

    const iniciarTimer = (segundos) => {
        clearInterval(timerInterval);
        let tempoRestante = segundos;
        timerDisplay.textContent = tempoRestante;
        modalTimerOverlay.classList.remove('hidden');

        timerInterval = setInterval(() => {
            tempoRestante--;
            timerDisplay.textContent = tempoRestante;
            if (tempoRestante <= 0) {
                clearInterval(timerInterval);
                fecharTimer();
                alert('Descanso finalizado!');
            }
        }, 1000);
    };
    const fecharTimer = () => {
        clearInterval(timerInterval);
        modalTimerOverlay.classList.add('hidden');
    };

    const calcularResumo = () => {
        const diaData = dadosTreino[diaAtivoIndex];
        if (!diaData.exercicios) return;
        
        let volumeTotal = 0;
        diaData.exercicios.forEach((ex, exIndex) => {
            for (let i = 0; i < ex.series; i++) {
                const setId = `dia${diaAtivoIndex}-ex${exIndex}-set${i}`;
                if (progresso[setId] && progresso[setId].done) {
                    const peso = parseFloat(progresso[setId].kg) || 0;
                    const reps = parseInt(progresso[setId].reps) || 0;
                    volumeTotal += peso * reps;
                }
            }
        });

        if(volumeTotal > 0){
            resumoTreino.classList.remove('hidden');
            volumeTotalEl.textContent = `${volumeTotal.toFixed(1)} kg`;
        } else {
            resumoTreino.classList.add('hidden');
        }
    };

    const renderizarTreino = (index) => {
        diaAtivoIndex = index;
        const diaData = dadosTreino[index];

        tituloTreino.textContent = `Dia ${index + 1}: ${diaData.dia}`;
        focoTreino.textContent = diaData.foco;
        listaExercicios.innerHTML = '';
        resumoTreino.classList.add('hidden');

        // Renderizar Aquecimento e Desaquecimento
        const renderBloco = (container, dados) => {
            container.innerHTML = `<div class="sessao-bloco"><h3>${dados.titulo} (${dados.duracao})</h3><p>${dados.passos.replace(/\n/g, '<br>')}</p></div>`;
        }
        renderBloco(sessaoAquecimento, dadosAquecimento);
        renderBloco(sessaoDesaquecimento, dadosDesaquecimento);
        
        if (!diaData.exercicios) {
             sessaoAquecimento.classList.add('hidden');
             sessaoDesaquecimento.classList.add('hidden');
             return;
        }

        sessaoAquecimento.classList.remove('hidden');
        sessaoDesaquecimento.classList.remove('hidden');

        diaData.exercicios.forEach((ex, exIndex) => {
            const exercicioEl = document.createElement('li');
            exercicioEl.className = 'exercicio-item';
            
            let setsHtml = '';
            for (let i = 0; i < ex.series; i++) {
                const setId = `dia${index}-ex${exIndex}-set${i}`;
                const setProgresso = progresso[setId] || { kg: '', reps: '', done: false };

                setsHtml += `
                    <div class="set-linha">
                        <span class="set-numero">${i + 1}</span>
                        <div class="input-container">
                            <label for="${setId}-kg">Peso (kg)</label>
                            <input type="number" class="input-kg" id="${setId}-kg" value="${setProgresso.kg}" data-set-id="${setId}">
                        </div>
                        <div class="input-container">
                            <label for="${setId}-reps">Reps</label>
                            <input type="number" class="input-reps" id="${setId}-reps" value="${setProgresso.reps}" data-set-id="${setId}">
                        </div>
                        <button class="btn-timer" data-descanso="${ex.descanso}">⏱️ ${ex.descanso}s</button>
                        <input type="checkbox" class="set-checkbox" id="${setId}-done" ${setProgresso.done ? 'checked' : ''} data-set-id="${setId}">
                    </div>
                `;
            }

            exercicioEl.innerHTML = `
                <div class="exercicio-header">
                    <h3>${ex.nome}</h3>
                    <button class="btn-info" data-ex-index="${exIndex}">i</button>
                </div>
                <div class="sets-container">${setsHtml}</div>
            `;
            listaExercicios.appendChild(exercicioEl);
        });

        calcularResumo();
    };
    
    // --- EVENT LISTENERS ---
    seletorDias.addEventListener('click', e => {
        if (e.target.matches('.btn-dia')) {
            const index = parseInt(e.target.dataset.index);
            document.querySelectorAll('.btn-dia').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            renderizarTreino(index);
        }
    });

    listaExercicios.addEventListener('click', e => {
        if (e.target.matches('.btn-info')) {
            const exIndex = parseInt(e.target.dataset.exIndex);
            abrirModalInfo(dadosTreino[diaAtivoIndex].exercicios[exIndex]);
        }
        if (e.target.matches('.btn-timer')) {
            const descanso = parseInt(e.target.dataset.descanso);
            iniciarTimer(descanso);
        }
    });

    listaExercicios.addEventListener('change', e => {
        if(e.target.matches('.input-kg, .input-reps, .set-checkbox')){
            const setId = e.target.dataset.setId;
            if(!progresso[setId]) progresso[setId] = {};
            
            const kgInput = document.getElementById(`${setId}-kg`);
            const repsInput = document.getElementById(`${setId}-reps`);
            const doneCheckbox = document.getElementById(`${setId}-done`);
            
            progresso[setId].kg = kgInput.value;
            progresso[setId].reps = repsInput.value;
            progresso[setId].done = doneCheckbox.checked;
            
            salvarProgresso();
            calcularResumo();
        }
    });

    modalInfoFecharBtn.addEventListener('click', fecharModalInfo);
    timerPararBtn.addEventListener('click', fecharTimer);

    // --- INICIALIZAÇÃO ---
    const init = () => {
        dadosTreino.forEach((dia, index) => {
            if(index === 2 || index > 4) return; // Simplificação para 5 dias na semana
            const btn = document.createElement('button');
            btn.className = 'btn-dia';
            btn.textContent = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'][index];
            btn.dataset.index = index;
            seletorDias.appendChild(btn);
        });
        carregarProgresso();
        const hoje = new Date().getDay(); // Dom=0, Seg=1...
        const diaInicial = (hoje === 0 || hoje === 6) ? 0 : [0, 1, 3, 4, 0][hoje - 1]; // Mapeia para os dias de treino
        
        document.querySelector(`.btn-dia[data-index='${diaInicial}']`).classList.add('active');
        renderizarTreino(diaInicial);
    };

    init();
});
