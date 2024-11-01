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