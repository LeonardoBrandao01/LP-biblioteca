// Função para carregar e exibir dados da planilha do Google Sheets
function loadGoogleSheetData() {
    // ID da planilha do Google Sheets
    const spreadsheetId = '1ZmIF4WJTxjQY46eJOmlp_5zJMh0CME1Er2O4xdFtEdE';
    // ID da planilha dentro do documento (geralmente 0 para a primeira planilha)
    const sheetId = 0;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'conteudo' // Substitua pelo nome da aba que você deseja ler
    }).then(function(response) {
        const data = response.result.values;
    
        const menu_01 = document.getElementById('menu01');
        const menu_02 = document.getElementById('menu02');
        const menu_03 = document.getElementById('menu03');
    
        if (data.length > 0 && data[0].length > 0) {
            const menu01 = data[2][2];
            const menu02 = data[2][3];
            const menu03 = data[2][4];
    
            const conteudo_menu01 = `${menu01}`
            menu_01.textContent = conteudo_menu01;

            const conteudo_menu02 = `${menu02}`
            menu_02.textContent = conteudo_menu02;

            const conteudo_menu03 = `${menu03}`
            menu_03.textContent = conteudo_menu03;

        }
    });

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'conteudo' // Substitua pelo nome da aba que você deseja ler
    }).then(function(response) {
        const data = response.result.values;
    
        const texto_servico = document.getElementById('servicos_paragrafo');
    
        if (data.length > 0 && data[0].length > 0) {
            const nome = data[4][2];
    
            const conteudo_texto_servico = `${nome}`
    
            texto_servico.textContent = conteudo_texto_servico;
        }

       /* if (data.length > 0 && data[0].length > 0) {
            let texto_servico_extra = data[5][2];
            
            if (texto_servico_extra) { 
                const novoParagrafo = document.createElement('p');
                novoParagrafo.textContent = texto_servico_extra;

                texto_servico.appendChild(novoParagrafo);
            }
        }
        
        if (data.length > 0 && data[0].length > 0) {
            let texto_servico_extra = data[6][2];
            
            if (texto_servico_extra) { 
                const novoParagrafo = document.createElement('p');
                novoParagrafo.textContent = texto_servico_extra;

                texto_servico.appendChild(novoParagrafo);
            }
        }*/
    });

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'conteudo' // Substitua pelo nome da aba que você deseja ler
    }).then(function(response) {
        const data = response.result.values;
    
        const texto_doacao = document.getElementById('doacao_paragrafo');
    
        if (data.length > 0 && data[0].length > 0) {
            const doacao_texto = data[6][2];
    
            const conteudo_texto_doacao = `${doacao_texto}`
    
            texto_doacao.textContent = conteudo_texto_doacao;
        }
    });
    
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 28,
    autoplay: {
        delay: 3000, 
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
});
