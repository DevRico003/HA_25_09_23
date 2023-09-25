export const handler = async (event) => {
    // Bestellliste
    const bestellListe = ["Kapern", "Senf", "Butter", "Eier", "Hackfleisch", "Kartoffeln", "Zwiebeln"]
    
    // die Liste direkt zurückgeben
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(bestellListe),
    }
}
