function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('Custom Menu')
        .addItem('Execute', 'myFunction')
        .addToUi();
}

function myFunction(): void {
    const sheet = SpreadsheetApp.getActiveSheet();
}