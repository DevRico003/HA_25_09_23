// Lambda URL
const lambdaUrl = 'https://u0allnk.lambda-url.eu-central-1.on.aws/' // URL unkenntlich gemacht

async function fetchLambdaData() {
    try {
        const response = await fetch(lambdaUrl)

        // Überprüfen, ob der Abruf erfolgreich war
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json();

        data.sort() // Sortieren der Liste

        console.log(data)  // Hier wird die Liste in der Konsole angezeigt

    } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error)
    }
}

// Funktion aufrufen
fetchLambdaData()
