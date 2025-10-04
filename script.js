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
            dia: "Peito",
            foco: "Foco total no peitoral",
            exercicios: [
                { nome: "Supino na Máquina", detalhes: "3 séries de 10-12 reps", gifUrl: "https://i.ibb.co/L5T1b2s/Machine-Chest-Press.gif", instrucoes: "Mantenha as costas retas e o peito estufado. Empurre de forma controlada e retorne lentamente." },
                { nome: "Supino Inclinado com Halteres", detalhes: "3 séries de 10-12 reps", gifUrl: "https://i.ibb.co/GFLCg78/incline-dumbbell-press.gif", instrucoes: "Em um banco inclinado, desça os halteres até a linha do peito, alongando bem. Empurre para cima sem bater um no outro." },
                { nome: "Crucifixo na Máquina (Peck Deck)", detalhes: "3 séries de 12-15 reps", gifUrl: "https://i.ibb.co/VWVwzG4/Pec-Deck-Fly.gif", instrucoes: "Junte os pegadores à sua frente em um movimento de arco. Contraia o peitoral por um segundo no pico do movimento." },
                { nome: "Flexões", detalhes: "3 séries até a falha", gifUrl: "https://i.ibb.co/bJCJzxB/push-up.gif", instrucoes: "Mantenha o corpo reto e o abdômen contraído. Desça até o peito quase tocar o chão. Se for difícil, apoie os joelhos no chão." }
            ]
        },
        {
            dia: "Costas",
            foco: "Construindo costas fortes",
            exercicios: [
                { nome: "Puxada Frontal (Lat Pulldown)", detalhes: "3 séries de 10-12 reps", gifUrl: "https://i.ibb.co/gDFvYQ4/Lat-Pulldown.gif", instrucoes: "Estufe o peito e puxe a barra em direção a ele. Pense em puxar com os cotovelos, não com as mãos." },
                { nome: "Remada na Máquina", detalhes: "3 séries de 10-12 reps", gifUrl: "https://i.ibb.co/tBS2L0M/Seated-Machine-Row.gif", instrucoes: "Puxe os pegadores em direção ao abdômen, juntando as escápulas (omoplatas) no final do movimento." },
                { nome: "Remada Serrote", detalhes: "3 séries de 10-12 reps por lado", gifUrl: "https://i.ibb.co/zXgqgq1/Dumbbell-Row.gif", instrucoes: "Com um joelho e mão apoiados no banco, puxe o halter em direção ao seu quadril, mantendo as costas retas." },
                { nome: "Hiperextensão", detalhes: "3 séries de 15 reps", gifUrl: "https://i.ibb.co/FkGj1bS/Hyperextension.gif", instrucoes: "No banco específico, desça o tronco e suba contraindo a lombar e os glúteos. Faça de forma controlada e sem peso no início." }
            ]
        },
        {
            dia: "Ombros",
            foco: "Desenvolvendo ombros completos",
             exercicios: [
                { nome: "Desenvolvimento na Máquina", detalhes: "3 séries de 10-12 reps", gifUrl: "https://i.ibb.co/1MjJd4C/Machine-Shoulder-Press.gif", instrucoes: "Mantenha as costas apoiadas e empurre para cima sem travar os cotovelos. Desça de forma controlada." },
                { nome: "Elevação Lateral com Halteres", detalhes: "3 séries de 12-15 reps", gifUrl: "https://i.ibb.co/Dtd4m85/Dumbbell-Lateral-Raise.gif", instrucoes: "Com os cotovelos levemente dobrados, levante os braços para os lados até a altura dos ombros. Desça devagar." },
                { nome: "Elevação Frontal com Halteres", detalhes: "3 séries de 12-15 reps", gifUrl: "https://i.ibb.co/n6kG1Gf/Dumbbell-Front-Raise.gif", instrucoes: "Eleve um halter de cada vez à sua frente, até a altura dos ombros, sem usar o impulso do corpo." },
                { nome: "Crucifixo Invertido na Máquina", detalhes: "3 séries de 15 reps", gifUrl: "https://i.ibb.co/6y4tBmf/Reverse-Pec-Deck.gif", instrucoes: "Ajuste a máquina e puxe os pegadores para trás em um grande arco. Foque na parte de trás dos ombros." }
            ]
        },
        {
            dia: "Pernas",
            foco: "Foco total em pernas e glúteos",
            exercicios: [
                { nome: "Leg Press", detalhes: "3 séries de 10-12 reps", gifUrl: "https://i.ibb.co/wK5zV2b/Leg-Press.gif", instrucoes: "Mantenha as costas e o quadril bem apoiados. Desça de forma controlada e não trave os joelhos ao empurrar." },
                { nome: "Cadeira Extensora", detalhes: "3 séries de 12-15 reps", gifUrl: "https://i.ibb.co/mHq3cNb/Leg-Extension.gif", instrucoes: "Estenda as pernas e segure a contração por 1 segundo no topo. O importante é sentir o músculo trabalhar." },
                { nome: "Cadeira Flexora", detalhes: "3 séries de 12-15 reps", gifUrl: "https://i.ibb.co/f2sN9sY/Seated-Leg-Curl.gif", instrucoes: "Puxe os calcanhares em direção aos glúteos de forma controlada, sentindo a parte de trás da coxa." },
                { nome: "Elevação Pélvica", detalhes: "3 séries de 15 reps", gifUrl: "https://i.ibb.co/rpx7sV1/Glute-Bridge.gif", instrucoes: "Com as costas apoiadas num banco, eleve o quadril e contraia os glúteos com força no topo. Pode ser feito sem peso no início." },
                { nome: "Panturrilha em Pé", detalhes: "3 séries de 15-20 reps", gifUrl: "https://i.ibb.co/d62Q2zQ/Standing-Calf-Raise.gif", instrucoes: "Alongue bem na descida e suba o máximo que conseguir, segurando no topo por um instante." }
            ]
        },
        {
            dia: "Braços",
            foco: "Bíceps e Tríceps",
            exercicios: [
                { nome: "Rosca Direta com Halteres", detalhes: "3 séries de 10-12 reps", gifUrl: "https://i.ibb.co/G0BfGzH/Dumbbell-Bicep-Curl.gif", instrucoes: "Mantenha os cotovelos fixos ao lado do corpo. Suba o peso de forma controlada e desça mais lentamente ainda." },
                { nome: "Tríceps na Polia (Barra)", detalhes: "3 séries de 10-12 reps", gifUrl: "https://i.ibb.co/f49bXVn/Triceps-Pushdown.gif", instrucoes: "Mantenha os cotovelos colados ao corpo. Empurre a barra para baixo até estender totalmente os braços." },
                { nome: "Rosca Martelo", detalhes: "3 séries de 10-12 reps", gifUrl: "https://i.ibb.co/kH2Qx7w/Hammer-Curl.gif", instrucoes: "Segure os halteres como se fossem martelos (palmas viradas para dentro). Levante-os sem girar os punhos." },
                { nome: "Tríceps Francês com Halter", detalhes: "3 séries de 12-15 reps", gifUrl: "https://i.ibb.co/kSLM0gR/Overhead-Dumbbell-Triceps-Extension.gif", instrucoes: "Sentado, segure um halter com as duas mãos acima da cabeça. Desça o peso atrás da cabeça, alongando o tríceps, e depois estenda." }
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

    const carregarProgresso = () => { progresso = JSON.parse(localStorage.getItem('minhaRotina5dias')) || {}; };
    const salvarProgresso = () => { localStorage.setItem('minhaRotina5dias', JSON.stringify(progresso)); };

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
