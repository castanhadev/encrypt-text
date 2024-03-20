function encodeText() {
    var inputText = document.getElementById("inputText").value;
    var outputText = encode(inputText);
    document.getElementById("outputText").value = outputText;
}

function decodeText() {
    var inputText = document.getElementById("inputText").value;
    var outputText = decode(inputText);
    document.getElementById("outputText").value = outputText;
}

function encode(inputText) {
    var encodedText = inputText.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    return encodedText;
}

function decode(inputText) {
    var decodedText = inputText.replace(/enter/g, 'e')
                               .replace(/imes/g, 'i')
                               .replace(/ai/g, 'a')
                               .replace(/ober/g, 'o')
                               .replace(/ufat/g, 'u');
    return decodedText;
}

function copyText() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}