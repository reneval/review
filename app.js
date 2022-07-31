const questions = [{
    question: "Единицей объема является:",
    answers: ["Моль", "Джоуль", "Литр", "Ампер"],
    correct: 3
}, {
    question: "Настоящее имя Дарта Вейдера:",
    answers: ["Джордж Лукас", "Энакин Скайуокер", "Люк Скайуокер", "Томб Райдер"],
    correct: 2
}, {
    question: "Кругосветное путешествие не совершал:",
    answers: ["Фернан Магеллан", "Фрэнсис Дрейк", "Джеймс Кук", "Юрий Гагарин"],
    correct: 1,
}, {
    question: "'Камикадзе' в переводе с японского языка означает:",
    answers: ["Крутое пике", "Божественный ветер", "Планы на вечер", "Верный долгу"],
    correct: 2,
}, {
    question: "Гарантом брачного союза в Древнем Риме был(а):",
    answers: ["Юпитер", "Венера", "Зевс", "ЗАГС"],
    correct: 1,

}, {
    question: "'Галактика' в переводе с древне-греческого языка переводится как:",
    answers: ["Вечный Зов", "Млечный Путь", "Вечерний Звон", "Ложись Спать",],
    correct: 2,

}, {
    question: "Свежевыжатый неосветлённый сок:",
    answers: ["Осло", "Сусло", "Щячло", "Поньо"],
    correct: 2,
}, {
    question: "На голову надевают:",
    answers: ["Гитару", "Тиару", "Гагару", "Гетеру"],
    correct: 2,
}, {
    question: "'Їхав козак за Дунай, сказав дівчині ...'",
    answers: ["Давай", "Стріляй", "Прощай", "Тікай"],
    correct: 3,
}, {
    question: "Самая большая рыба на планете",
    answers: ["Касатка", "Китовая акула", "Синий кит", "Кашалот"],
    correct: 2,
}, {
    question: "Продолжите цитату Э.Хемингуэя - 'Чтобы окружающие меня люди становились интереснее, я ...'",
    answers: ["молчу", "пишу", "пою", "пью"],
    correct: 4,

}, {
    question: "Столица Мадагаскара",
    answers: ["Антананариву", "Аста ла Виста", "Каракас", "Мучачос"],
    correct: 1,
}, {
    q: "Стеклянный графин, предназначенный для сливания и подачи вина:",
    answers: ["Рейхсвер", "Декантер", "Фарватер", "Газгольдер"],
    correct: 2,
}, {
    question: "Что из перечисленного является наукой:",
    answers: ["Астрология", "Алхимия", "Гомеопатия", "Обработка древесины"],
    correct: 4,
}, {
    question: "Наклон оси вращения Земли обуславливает:",
    answers: ["Смену времен года", "Наличие високосного года", "Смену дня и ночи", "Наличие полярного сияния"],
    correct: 1,
},]

const roundPrices = [500, 1000, 2000, 3000, 5000, 8000, 10000, 13000, 15000, 25000, 50000, 100000, 250000, 500000, 100000]
const unburnedSums = [5000, 25000]
const acceptableAnswers = [1, 2, 3, 4];

function getUnburnedSumByRound(round) {
    let result = 0;
    const roundPrice = roundPrices[round]
    for (let i = 0; i < unburnedSums.length; i++) {
        if (unburnedSums[i] < roundPrice) {
            result = unburnedSums[i]
        } else {
            return result
        }
    }
    return result
}

for (let round = 0; round < questions.length; round++) {
    let userInput;

    const answersText = questions[round].answers
        .map((answer, index) => `${index + 1})${answer}`)
        .join('\n')

    do {
        userInput = +prompt(
            `${questions[round].question} \n${answersText}`,
            'Введите цифру, соответствующую ответу');
        if (!acceptableAnswers.includes(userInput)) {
            alert(`Повторите ввод(1, 2, 3 или 4)`);
        }
    } while (acceptableAnswers.includes(userInput) == false);

    if (userInput === questions[round].correct && round === questions.length - 1) {
        alert(`Поздравляю!Вы выиграли миллион!`);
        break;
    }
    if (userInput !== questions[round].correct) {
        alert(`Неправильный ответ.Ваш выигрыш ${getUnburnedSumByRound(round)} чего - то там.`);
        break;
    }

    let confirmed = confirm(`Правильный ответ! Хотите продолжить игру? \n Ваш выигрыш составляет ${roundPrices[round]}, \n несгораемый выигрыш: ${getUnburnedSumByRound(round + 1)}`);
    if (confirmed)
        continue;
    else {
        alert(`Ваш выигрыш составил ${roundPrices[round]} чего - то там.`);
        break;
    }
}
