const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

axios.get('https://www.praktycznyegzamin.pl/ee08/teoria/wszystko/')
.then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const data = [];
    
    $('.question').each((index, element) => {
        const questionIndex = index + 1;
        const questionTitle = $(element).find('div.title').text().trim();
        const questionAnswers = {};
        const answers = $(element).find('.answer')
        
        answers.each((answerIndex, answerElement) => {
            questionAnswers[`odp${String.fromCharCode(65 + answerIndex)}`] = $(answerElement).text().trim();
        })

        const questionAnswerCorrect = $(element).find('div.answer.correct').text().trim();
        const questionImage = $(element).find('img').attr('src');

        data.push({ questionIndex, questionTitle, questionAnswers, questionAnswerCorrect, questionImage});
    });

    const jsonData = JSON.stringify(data,null,2)
    const filePath = 'data.json';
    fs.writeFileSync(filePath, jsonData, (err) => {
        if(err){
            console.error("Błąd podczas zapisywania", err);
            return;
        }
        console.log('Dane zapisane', filePath);
    })
})
.catch(error => {
    console.error("Bład podczas pobierania strony: ",error);
});

