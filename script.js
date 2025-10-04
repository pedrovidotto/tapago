document.addEventListener('DOMContentLoaded', () => {

    const frasesMotivacionais = [
        "O primeiro passo é o mais importante. Você já deu.",
        "Consistência é mais importante que intensidade.",
        "Seu corpo pode fazer qualquer coisa. É sua mente que você precisa convencer.",
        "Hoje você está mais forte do que ontem.",
        "Um passo de cada vez. É assim que se chega longe."
    ];

    const dadosTreino = [
        {
            dia: "Superior A",
            foco: "Peito e Ombros",
            exercicios: [
                { nome: "Supino na Máquina", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Machine-Chest-Press.gif", instrucoes: "Mantenha as costas retas e o peito estufado. Empurre de forma controlada e retorne lentamente." },
                { nome: "Remada na Máquina", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leverage-Machine-Row.gif", instrucoes: "Puxe os pegadores em direção ao abdômen, juntando as escápulas (omoplatas) no final do movimento." },
                { nome: "Elevação Lateral com Halteres", detalhes: "3 séries de 12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", instrucoes: "Com os cotovelos levemente dobrados, levante os braços para os lados até a altura dos ombros. Desça devagar." },
                { nome: "Tríceps na Polia", detalhes: "3 séries de 12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/triceps-pushdown-V-bar.gif", instrucoes: "Mantenha os cotovelos colados ao corpo. Apenas o antebraço se move. Empurre para baixo de forma controlada." }
            ]
        },
        {
            dia: "Inferior A",
            foco: "Pernas e Glúteos",
            exercicios: [
                { nome: "Agachamento Goblet", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Goblet-Squat.gif", instrucoes: "Segure um halter junto ao peito. Agache como se fosse sentar, mantendo as costas retas." },
                { nome: "Cadeira Extensora", detalhes: "3 séries de 12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Leg-Extension.gif", instrucoes: "Estenda as pernas e segure a contração por 1 segundo no topo. O importante é sentir o músculo trabalhar." },
                { nome: "Cadeira Flexora", detalhes: "3 séries de 12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif", instrucoes: "Puxe os calcanhares em direção aos glúteos de forma controlada, sentindo a parte de trás da coxa." },
                { nome: "Panturrilha em Pé", detalhes: "3 séries de 15-20 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lever-Standing-Calf-Raise.gif", instrucoes: "Alongue bem na descida e suba o máximo que conseguir, segurando no topo por um instante." }
            ]
        },
        { dia: "Descanso", foco: "Seu corpo se fortalece no descanso!" },
        {
            dia: "Superior B",
            foco: "Costas e Braços",
            exercicios: [
                { nome: "Puxada Frontal (Pulldown)", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", instrucoes: "Estufe o peito e puxe a barra em direção a ele. Pense em puxar com os cotovelos, não com as mãos." },
                { nome: "Desenvolvimento na Máquina", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Leverage-Shoulder-Press.gif", instrucoes: "Mantenha as costas apoiadas e empurre para cima sem travar os cotovelos. Desça de forma controlada." },
                { nome: "Remada Curvada com Halteres", detalhes: "3 séries de 10-12 reps", gifUrl: "https://i.pinimg.com/originals/c5/bc/6f/c5bc6f658e5a4Ab107e0a29440a3c276.gif", instrucoes: "Incline o tronco para a frente com as costas retas. Puxe os halteres em direção ao seu quadril, juntando as escápulas." },
                { nome: "Rosca Direta com Halteres", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Bicep-Curl.gif", instrucoes: "Mantenha os cotovelos fixos ao lado do corpo. Suba o peso de forma controlada e desça mais lentamente ainda." }
            ]
        },
        {
            dia: "Inferior B",
            foco: "Pernas e Panturrilhas",
             exercicios: [
                { nome: "Leg Press", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Leg-Press.gif", instrucoes: "Mantenha as costas e o quadril bem apoiados. Desça de forma controlada e não trave os joelhos ao empurrar." },
                { nome: "Elevação Pélvica", detalhes: "3 séries de 12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Barbell-Hip-Thrust.gif", instrucoes: "Com as costas apoiadas num banco, eleve o quadril e contraia os glúteos com força no topo. Pode ser feito sem peso no início." },
                { nome: "Afundo (Lunge)", detalhes: "3 séries de 12-15 reps por perna", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif", instrucoes: "Dê um passo à frente e flexione ambos os joelhos a 90 graus. Mantenha o tronco reto. Comece sem peso para aprender o equilíbrio." },
                { nome: "Panturrilha Sentado", detalhes: "3 séries de 15-20 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif", instrucoes: "Este exercício foca numa parte diferente da panturrilha. Use a amplitude completa e segure a contração no topo." }
            ]
        }
    ];

    const seletorDias = document.getElementById('seletor-dias');
    const tituloTreino = document.getElementById('titulo-treino');
    const listaExercicios = document.getElementById('lista-exercicios');
    const progressBar = document.getElementById('progress-bar');
    const mensagemParabens = document.getElementById('mensagem-parabens');
    const quoteContainer = document.getElementById('quote-container');
    const botaoResetar = document.getElementById('botao-resetar');
    
    const modalInfoOverlay = document.getElementById('modal-info-overlay');
    const modalInfoFecharBtn = document.getElementById('modal-info-fechar-btn');
    const modalInfoTitulo = document.getElementById('modal-info-titulo');
    const modalInfoGif = document.getElementById('modal-info-gif');
    const modalInfoInstrucoes = document.getElementById('modal-info-instrucoes');
    
    let progresso = {};
    let diaAtivoIndex = 0;

    const carregarProgresso = () => { progresso = JSON.parse(localStorage.getItem('minhaPrimeiraRotina')) || {}; };
    const salvarProgresso = () => { localStorage.setItem('minhaPrimeiraRotina', JSON.stringify(progresso)); };

    const atualizarProgressoBar = () => {
        const diaData = dadosTreino[diaAtivoIndex];
        if (!diaData.exercicios) {
            progressBar.style.width = '0%';
            mensagemParabens.classList.add('hidden');
            return;
        }
        const totalExercicios = diaData.exercicios.length;
        const concluidos = diaData.exercicios.filter((_, index) => progresso[`dia${diaAtivoIndex}-ex${index}`]).length;
        const porcentagem = totalExercicios > 0 ? (concluidos / totalExercicios) * 100 : 0;
        progressBar.style.width = `${porcentagem}%`;

        mensagemParabens.classList.toggle('hidden', porcentagem < 100);
    };

    const renderizarTreino = (index) => {
        diaAtivoIndex = index;
        const diaData = dadosTreino[index];

        tituloTreino.textContent = diaData.dia;
        listaExercicios.innerHTML = '';

        if (!diaData.exercicios) {
            listaExercicios.innerHTML = `<p style="text-align:center;">${diaData.foco}</p>`;
            atualizarProgressoBar();
            return;
        }

        diaData.exercicios.forEach((ex, exIndex) => {
            const id = `dia${index}-ex${exIndex}`;
            const isCompleted = progresso[id];
            const li = document.createElement('li');
            li.className = `exercicio-item ${isCompleted ? 'completed' : ''}`;
            li.innerHTML = `
                <input type="checkbox" class="checkbox" id="${id}" ${isCompleted ? 'checked' : ''}>
                <div class="detalhes-exercicio">
                    <h3>${ex.nome}</h3>
                    <p>${ex.detalhes}</p>
                </div>
                <button class="btn-info" data-ex-index="${exIndex}">i</button>
            `;
            listaExercicios.appendChild(li);

            li.querySelector('.checkbox').addEventListener('change', (e) => {
                progresso[id] = e.target.checked;
                salvarProgresso();
                li.classList.toggle('completed', e.target.checked);
                atualizarProgressoBar();
            });

            li.querySelector('.btn-info').addEventListener('click', () => {
                modalInfoTitulo.textContent = ex.nome;
                modalInfoGif.src = ex.gifUrl;
                modalInfoInstrucoes.textContent = ex.instrucoes;
                modalInfoOverlay.classList.remove('hidden');
            });
        });
        atualizarProgressoBar();
    };
    
    const init = () => {
        carregarProgresso();
        quoteContainer.textContent = frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)];
        const diasDaSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
        diasDaSemana.forEach((diaNome, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn-dia';
            btn.textContent = diaNome;
            btn.dataset.index = index;
            seletorDias.appendChild(btn);
            btn.addEventListener('click', () => {
                document.querySelectorAll('.btn-dia').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderizarTreino(index);
            });
        });

        modalInfoFecharBtn.addEventListener('click', () => modalInfoOverlay.classList.add('hidden'));
        botaoResetar.addEventListener('click', () => {
            if(confirm('Tem certeza que quer apagar todo o progresso?')){
                progresso = {};
                salvarProgresso();
                renderizarTreino(diaAtivoIndex);
            }
        });
        
        let hoje = new Date().getDay() - 1; // Seg=0, Ter=1... Dom=6
        if(hoje < 0 || hoje > 4) hoje = 0; // Se for FDS, mostra segunda
        document.querySelectorAll('.btn-dia')[hoje].click();
    };

    init();
});
