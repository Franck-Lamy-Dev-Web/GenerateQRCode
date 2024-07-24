document.getElementById('buttonGenerer').addEventListener('click', generateQrCode);
document.getElementById('buttonTelecharger').addEventListener('click', downloadQrCode);

function generateQrCode() {
    var qrText = document.getElementById('urlInput').value;
    var qrCodeContenaire = document.getElementById('QRCode');
    qrCodeContenaire.innerHTML = '';  // Vider le conteneur avant de générer un nouveau QR code

    // Générer le QR Code avec le texte ou l'URL fourni
    var qrCode = new QRCode(qrCodeContenaire, {
        text: qrText,
        width: 128,
        height: 128,
    });

    // Afficher le bouton de téléchargement
    document.getElementById('buttonTelecharger').style.display = 'block';
}

function downloadQrCode() {
    var qrCodeImage = document.querySelector('#QRCode img');
    if (!qrCodeImage) return;

    var canvas = document.createElement('canvas');
    canvas.width = qrCodeImage.width;
    canvas.height = qrCodeImage.height;
    var context = canvas.getContext('2d');
    context.drawImage(qrCodeImage, 0, 0);

    var link = document.createElement('a');
    link.download = 'qrcode.png';  // Nom par défaut du fichier téléchargé
    link.href = canvas.toDataURL('image/png');
    link.click();
}
