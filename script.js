document.addEventListener('DOMContentLoaded', () => {

    const dadosTreino = [
        {
            dia: "Push",
            iconEmoji: "💪",
            exercicios: [
                { nome: "Supino na Máquina", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Machine-Chest-Press.gif", instrucoes: "Mantenha as costas retas e o peito estufado. Empurre de forma controlada e retorne lentamente." },
                { nome: "Desenvolvimento na Máquina", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Leverage-Shoulder-Press.gif", instrucoes: "Mantenha as costas apoiadas e empurre para cima sem travar os cotovelos. Desça de forma controlada." },
                { nome: "Elevação Lateral com Halteres", detalhes: "3 séries de 12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", instrucoes: "Com os cotovelos levemente dobrados, levante os braços para os lados até a altura dos ombros. Desça devagar." },
                { nome: "Tríceps na Polia (Barra)", detalhes: "3 séries de 12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/05/triceps-pushdown-V-bar.gif", instrucoes: "Mantenha os cotovelos colados ao corpo. Empurre a barra para baixo até estender totalmente os braços." }
            ]
        },
        {
            dia: "Pull",
            iconEmoji: "🏋️",
            exercicios: [
                { nome: "Puxada Frontal (Pulldown)", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", instrucoes: "Estufe o peito e puxe a barra em direção a ele. Pense em puxar com os cotovelos, não com as mãos." },
                { nome: "Remada na Máquina", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leverage-Machine-Row.gif", instrucoes: "Puxe os pegadores em direção ao abdômen, juntando as escápulas (omoplatas) no final do movimento." },
                { nome: "Crucifixo Invertido na Máquina", detalhes: "3 séries de 15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2022/03/Reverse-Pec-Deck-Fly.gif", instrucoes: "Ajuste a máquina e puxe os pegadores para trás em um grande arco. Foque na parte de trás dos ombros para melhorar a postura." },
                { nome: "Rosca Direta com Halteres", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Bicep-Curl.gif", instrucoes: "Mantenha os cotovelos fixos ao lado do corpo. Suba o peso de forma controlada e desça mais lentamente ainda." }
            ]
        },
        {
            dia: "Legs",
            iconEmoji: "🦵",
             exercicios: [
                { nome: "Leg Press", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Leg-Press.gif", instrucoes: "Mantenha as costas e o quadril bem apoiados. Desça de forma controlada e não trave os joelhos ao empurrar." },
                { nome: "Cadeira Extensora", detalhes: "3 séries de 12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Leg-Extension.gif", instrucoes: "Estenda as pernas e segure a contração por 1 segundo no topo. O importante é sentir o músculo trabalhar." },
                { nome: "Cadeira Flexora", detalhes: "3 séries de 12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif", instrucoes: "Puxe os calcanhares em direção aos glúteos de forma controlada, sentindo a parte de trás da coxa." },
                { nome: "Elevação Pélvica", detalhes: "3 séries de 15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Barbell-Hip-Thrust.gif", instrucoes: "Com as costas apoiadas num banco, eleve o quadril e contraia os glúteos com força no topo. Pode ser feito sem peso no início." },
                { nome: "Panturrilha em Pé", detalhes: "3 séries de 15-20 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lever-Standing-Calf-Raise.gif", instrucoes: "Alongue bem na descida e suba o máximo que conseguir, segurando no topo por um instante." }
            ]
        },
        {
            dia: "Upper",
            iconEmoji: "💪",
            exercicios: [
                { nome: "Remada Curvada com Halteres", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Bent-Over-Row.gif", instrucoes: "Incline o tronco para a frente com as costas retas. Puxe os halteres em direção ao seu quadril, juntando as escápulas." },
                { nome: "Supino Inclinado com Halteres", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif", instrucoes: "Em um banco inclinado, desça os halteres até a linha do peito, alongando bem. Empurre para cima sem bater um no outro." },
                { nome: "Elevação Frontal com Halteres", detalhes: "3 séries de 12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Front-Raise.gif", instrucoes: "Eleve um halter de cada vez à sua frente, até a altura dos ombros, sem usar o impulso do corpo." },
                { nome: "Rosca Martelo", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif", instrucoes: "Segure os halteres como se fossem martelos (palmas viradas para dentro). Levante-os sem girar os punhos." },
                { nome: "Tríceps Francês com um Halter", detalhes: "3 séries de 12-15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-One-Arm-Triceps-Extension.gif", instrucoes: "Sentado, segure um halter com as duas mãos acima da cabeça. Desça o peso atrás da cabeça, alongando o tríceps, e depois estenda." }
            ]
        },
        {
            dia: "Lower",
            iconEmoji: "🦵",
            exercicios: [
                { nome: "Agachamento Goblet", detalhes: "3 séries de 10-12 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Goblet-Squat.gif", instrucoes: "Segure um halter junto ao peito. Agache como se fosse sentar, mantendo as costas retas." },
                { nome: "Afundo (Lunge)", detalhes: "3 séries de 12-15 reps por perna", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif", instrucoes: "Dê um passo à frente e flexione ambos os joelhos a 90 graus. Mantenha o tronco reto. Comece sem peso para aprender o equilíbrio." },
                { nome: "Stiff com Halteres", detalhes: "3 séries de 15 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Stiff-Leg-Deadlift.gif", instrucoes: "Mantenha as pernas quase retas e desça o tronco com as costas retas, sentindo alongar a parte de trás da coxa. Não precisa descer muito." },
                { nome: "Panturrilha Sentado", detalhes: "3 séries de 15-20 reps", gifUrl: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif", instrucoes: "Este exercício foca numa parte diferente da panturrilha. Use a amplitude completa e segure a contração no topo." }
            ]
        }
    ];

    const seletorDias = document.getElementById('seletor-dias');
    const headerTitle = document.getElementById('header-title');
    const listaExercicios = document.getElementById('lista-exercicios');
    const progressBar = document.getElementById('progress-bar');
    const mensagemParabens = document.getElementById('mensagem-parabens');
    
    const modalInfoOverlay = document.getElementById('modal-info-overlay');
    const modalInfoFecharBtn = document.getElementById('modal-info-fechar-btn');
    const modalInfoTitulo = document.getElementById('modal-info-titulo');
    const modalInfoGif = document.getElementById('modal-info-gif');
    const modalInfoInstrucoes = document.getElementById('modal-info-instrucoes');
    
    let progresso = {};
    let diaAtivoIndex = 0;

    const carregarProgresso = () => { progresso = JSON.parse(localStorage.getItem('minhaRotinaPPLUL-v4')) || {}; };
    const salvarProgresso = () => { localStorage.setItem('minhaRotinaPPLUL-v4', JSON.stringify(progresso)); };

    const atualizarProgressoBar = () => {
        const diaData = dadosTreino[diaAtivoIndex];
        if (!diaData.exercicios) return;
        
        const totalExercicios = diaData.exercicios.length;
        const concluidos = diaData.exercicios.filter((_, index) => progresso[`dia${diaAtivoIndex}-ex${index}`]).length;
        const porcentagem = totalExercicios > 0 ? (concluidos / totalExercicios) * 100 : 0;
        progressBar.style.width = `${porcentagem}%`;

        mensagemParabens.classList.toggle('hidden', porcentagem < 100);
    };

    const renderizarTreino = (index) => {
        diaAtivoIndex = index;
        const diaData = dadosTreino[index];

        headerTitle.textContent = `Treino de ${diaData.dia}`;
        listaExercicios.innerHTML = '';

        if (!diaData.exercicios) return;

        diaData.exercicios.forEach((ex, exIndex) => {
            const id = `dia${index}-ex${exIndex}`;
            const isCompleted = progresso[id];
            const li = document.createElement('li');
            li.className = `exercicio-item ${isCompleted ? 'completed' : ''}`;
            li.innerHTML = `
                <div class="exercicio-icon">${diaData.iconEmoji}</div>
                <div class="detalhes-exercicio">
                    <h3>${ex.nome}</h3>
                    <p>${ex.detalhes}</p>
                </div>
                <button class="btn-info" data-ex-index="${exIndex}">i</button>
            `;
            // Checkbox was removed from the main flow to simplify the card, we can add it back or use another interaction
            // For now, let's make the card itself clickable to toggle completion
            li.addEventListener('click', (e) => {
                if(e.target.classList.contains('btn-info')) return; // Don't toggle if info button is clicked

                progresso[id] = !progresso[id];
                salvarProgresso();
                li.classList.toggle('completed', progresso[id]);
                atualizarProgressoBar();
            });


            li.querySelector('.btn-info').addEventListener('click', () => {
                modalInfoTitulo.textContent = ex.nome;
                modalInfoGif.src = ex.gifUrl;
                modalInfoInstrucoes.textContent = ex.instrucoes;
                modalInfoOverlay.classList.remove('hidden');
            });

            listaExercicios.appendChild(li);
        });
        atualizarProgressoBar();
    };
    
    const init = () => {
        carregarProgresso();
        
        dadosTreino.forEach((dia, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn-dia';
            btn.textContent = dia.dia;
            btn.dataset.index = index;
            seletorDias.appendChild(btn);
            btn.addEventListener('click', () => {
                document.querySelectorAll('.btn-dia').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderizarTreino(index);
            });
        });

        modalInfoFecharBtn.addEventListener('click', () => modalInfoOverlay.classList.add('hidden'));
        
        let hoje = new Date().getDay() - 1; // Seg=0, Ter=1... Dom=6
        if(hoje < 0 || hoje > 4) hoje = 0; // Se for FDS, mostra segunda
        document.querySelectorAll('.btn-dia')[hoje].click();
    };

    init();
});
