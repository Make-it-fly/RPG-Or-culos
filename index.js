
inicializar();

function inicializar(){
    const $socialOraclesWindow = document.getElementById('social-oracles');
    const $dialogOraclesWindow = document.getElementById('dialog-oracles');
    
    $socialOraclesWindow.innerHTML += generateButtonsByTemplate('social')
    $dialogOraclesWindow.innerHTML += generateButtonsByTemplate('dialogos')
    
    giveEvents();
};


function generateButtonsByTemplate(template){
    let HTMLCode = '';
    for (let i = 0; i < oraculos.length; i++) {
        if (oraculos[i].template == template) {
            HTMLCode += `
            <button class="btn">${oraculos[i].nome}</button>
            `;
        }
    }
    return HTMLCode
};

function giveEvents(){
    const $oraclesWindow = document.getElementById('oracles-window');
    const $bottomMenu = document.getElementById('bottom-menu');
    $oraclesWindow.addEventListener('click', processarOraculo)
    $bottomMenu.addEventListener('click',()=>{
        const $noteLog = document.getElementById('notelog');
        $noteLog.innerHTML = '';
    })
};

function processarOraculo(e){
    const $noteLog = document.getElementById('notelog');
    const classList = e.target.classList;
    for (let i = 0; i < classList.length; i++) {
        if (classList[i] == 'btn') {
           const oraculo = getOraculo(e.target.innerText);
           const oraculoResultado = rolarOraculo(oraculo);
           const HTMLData = criarHTML([oraculoResultado], oraculo, templateSimples);
           $noteLog.innerHTML += HTMLData;
           $noteLog.scrollTop = $noteLog.scrollHeight;
        }
    }
};

function getOraculo(oraculo){
    for (let i = 0; i < oraculos.length; i++) {
        if (oraculos[i].nome == oraculo) {
            return oraculos[i];
        }
    }
};

function rolarOraculo(oraculo){
    if (oraculo.tipo == 'complexo') {
        const rolagem = getResultadoComplexo(oraculo);
        return rolagem
    } else if (oraculo.tipo == 'simples') {
        const rolagem = getResultadoSimples(oraculo.resultado);
        return rolagem
    }
}

function getResultadoSimples(oraculoArr){
    const resultadoIndex = Math.floor(Math.random() * oraculoArr.length);
    return oraculoArr[resultadoIndex]
};

function getResultadoComplexo(oraculo){
    const $positive = document.getElementById('choice-positive');
    const $neutral = document.getElementById('choice-neutral');
    const $negative = document.getElementById('choice-negative');
    const $any = document.getElementById('choice-any');

    const roll = Math.floor(Math.random() * 100) + 1
    
    if ($positive.checked == true) {
        if (roll <= 10) {
            return  getResultadoSimples(oraculo['resultado negativo'])
        } else if (roll > 10 && roll <= 60) {
            return  getResultadoSimples(oraculo['resultado positivo'])
        } else {
            return  getResultadoSimples(oraculo['resultado neutro'])
        }
    } else if ($neutral.checked == true){
        if (roll <= 70) {
            return  getResultadoSimples(oraculo['resultado neutro'])
        } else if (roll <= 85) {
            return  getResultadoSimples(oraculo['resultado positivo'])
        } else {
            return  getResultadoSimples(oraculo['resultado negativo'])
        }
    } else if ($negative.checked == true){
        if (roll <= 40) {
            return  getResultadoSimples(oraculo['resultado negativo'])
        } else {
            return  getResultadoSimples(oraculo['resultado neutro'])
        }
    } else {
        if (roll > 33) {
          return  getResultadoSimples(oraculo['resultado positivo'])
        } else if (roll > 66){
            return  getResultadoSimples(oraculo['resultado negativo'])
        } else {
            return  getResultadoSimples(oraculo['resultado neutro'])
        }
    }
};
function rollOracletable(oraculoArr){
    const resultadoIndex = Math.floor(Math.random() * oraculoArr.length);
    return oraculoArr[resultadoIndex]
}
function criarHTML(dataArr, objeto, template){
    let HTMLData = ''
    for (let i = 0; i < dataArr.length; i++) {
        HTMLData += template(dataArr[i], objeto);
    }
    return HTMLData;
};

function templateSimples(texto, objeto){
    let result = 
    `
    <div class="text-result">
        <h4 class="text-title">${objeto.nome}:</h4>
        <p class="text-text"><b>Resultado:</b> "${texto}"</p>
    </div>
    `
    return result;
};