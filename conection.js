// Função para carregar e exibir dados da planilha do Google Sheets
function loadGoogleSheetData() {
    // ID da planilha do Google Sheets
    const spreadsheetId = '1ZmIF4WJTxjQY46eJOmlp_5zJMh0CME1Er2O4xdFtEdE';
    // ID da planilha dentro do documento (geralmente 0 para a primeira planilha)
    const sheetId = 0;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'acoes' // Substitua pelo nome da aba que você deseja ler
    }).then(function(response) {
        const data = response.result.values;
    
        const texto_servico = document.getElementById('servicos_paragrafo');
    
        if (data.length > 0 && data[0].length > 0) {
            const nome = data[0][0];
    
            const conteudo_texto_servico = `${nome}`
    
            texto_servico.textContent = conteudo_texto_servico;
        }
    });
    
}

// Função para inicializar a API do Google Sheets
function initGoogleSheetsApi() {
    gapi.client.init({
        apiKey: 'AIzaSyB8L8dk8lK_OzyZDkBnA2aZaYzifekSmVk',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        loadGoogleSheetData();
    });
}

// Carrega a API do Google Sheets e inicia a aplicação
gapi.load('client', initGoogleSheetsApi);