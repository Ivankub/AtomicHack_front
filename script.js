fileInput = document.getElementById('file-input')
dropField = document.getElementById("drag-n-drop")
dropDescript = document.getElementById('drag_descryption')

dropField.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropField.style.padding = '10px'
    dropDescript.style.height = '34px'
    dropDescript.style.lineHeight = '34px'
});

dropField.addEventListener('dragleave', () => {
    dropField.style.padding = '2px'
    dropDescript.style.height = '50px'
    dropDescript.style.lineHeight = '50px'
});

dropField.addEventListener('drop', (e) => {
    e.preventDefault();

    dropField.style.padding = '2px'
    dropDescript.style.height = '50px'
    dropDescript.style.lineHeight = '50px'

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
        const allowedFormats = ['.txt', '.doc', '.docx'];
        const isValidFormat = Array.from(droppedFiles).every(file => {
            const fileExtension = file.name.split('.').pop();
            return allowedFormats.includes('.' + fileExtension);
        });
    
        if (isValidFormat) {
            fileInput.files = droppedFiles;
            updateFileName();
        } else {
            alert('Пожалуйста, выберите файлы в форматах .txt, .doc или .docx.');
        }
    }
});
  
function updateFileName() {
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'Файл не выбран';
    fileDisplay.textContent = fileName;
}

function showTypeErrorDropping() {
    
}