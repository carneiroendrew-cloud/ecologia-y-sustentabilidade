// Aguarda o carregamento do DOM para executar os códigos com segurança
document.addEventListener("DOMContentLoaded", () => {

    // =========================================================================
    // REQUISITO 1: Variáveis para armazenar e processar informações (Nome)
    // REQUISITO 2: Manipular o DOM alterando texto e mostrando/escondendo divs
    // =========================================================================
    
    const btnEnviar = document.getElementById("btn-enviar");
    const inputNome = document.getElementById("input-nome");
    const msgBoasVindas = document.getElementById("boas-vindas-msg");

    btnEnviar.addEventListener("click", () => {
        // Armazenando a informação do input em uma variável
        let nomeUsuario = inputNome.value.trim();

        if (nomeUsuario !== "") {
            // Processando a informação antes de exibir
            let mensagemPersonalizada = `Olá, ${nomeUsuario}! Maravilhoso ter você aqui. Acompanhe a história que o Agrinho preparou para você logo abaixo 👇`;
            
            // Alterando o texto do elemento HTML
            msgBoasVindas.textContent = mensagemPersonalizada;
            
            // Alterando a visibilidade tirando a classe 'escondido' e adicionando 'mostrado'
            msgBoasVindas.className = "mostrado";
        } else {
            msgBoasVindas.textContent = "Por favor, digite seu nome para que o Agrinho possa falar com você!";
            msgBoasVindas.className = "mostrado";
            msgBoasVindas.style.color = "red";
        }
    });

    // =========================================================================
    // REQUISITO EXTRA: Atualização de um contador/cálculo na tela
    // =========================================================================
    
    const btnCalcular = document.getElementById("btn-calcular");
    const inputPlacas = document.getElementById("input-placas");
    const resultadoCalculo = document.getElementById("resultado-calculo");

    btnCalcular.addEventListener("click", () => {
        // Armazenando o valor numérico em uma variável
        let quantidadePlacas = parseInt(inputPlacas.value);
        
        if (!isNaN(quantidadePlacas) && quantidadePlacas > 0) {
            // Processamento lógico da variável: simulando que cada placa economiza em média R$ 50,00 reais/mês
            let economiaEstimada = quantidadePlacas * 50;
            
            // Atualiza o texto na tela de forma funcional
            resultadoCalculo.textContent = `Com ${quantidadePlacas} placas solares, essa fazenda economiza aproximadamente R$ ${economiaEstimada},00 por mês na conta de luz! ☀️💸`;
            resultadoCalculo.style.color = "#235227";
        } else {
            resultadoCalculo.textContent = "Por favor, insira um número válido de placas maior que zero.";
            resultadoCalculo.style.color = "red";
        }
    });
});
