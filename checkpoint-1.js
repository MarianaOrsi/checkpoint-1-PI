function microondas(prato, tempoDoPrato) {
    let tempo = 0;

    switch (prato.toLowerCase()) {
        case "pipoca": tempo = 10; break;

        case "macarrão": tempo = 8; break;

        case "carne": tempo = 15; break

        case "feijão": tempo = 12; break

        case "brigadeiro": tempo = 8; break
        default:
            return "Prato Inexistente"
    }

    if (tempoDoPrato >= tempo * 3) {
        return "kabumm\nprato pronto, bom apetite"
    } else if (tempoDoPrato > tempo * 2) {
        return "seu prato queimou\nprato pronto, bom apetite"
    } else if (tempoDoPrato < tempo) {
        return "Tempo insuficiente\nprato pronto, bom apetite"
    } else {
        return "Prato pronto, bom apetite"
    }
}
console.log(microondas("feijão", 24))