import React from "react";

let firstNames = [
    'Арсений',
    'Даниил',
    'Тимур',
    'Максим',
    'Константин',
    'Анна',
    'Софья',
    'Эмир',
    'Фёдор',
    'Сабина',
    'Алеся',
    'Дмитрий',
    'Вячеслав',
    'Глеб',
    'Екатерина',
    'Артём',
    'Александра',
    'Алиса',
    'Вера',
    'Евдокия',
    'Ульяна',
    'Полина',
    'Виктория',
    'Степан',
    'Макар',
    'Татьяна',
    'Николай',
    'Никита',
    'Маргарита',
    'Павел',
    'Юрий',
    'Лев',
    'Милана',
    'Алексей',
    'Адам',
    'Мартин',
    'Елизавета',
    'Ярослав',
    'Александр',
    'Мирослава',
    'Роман',
    'Егор',
    'Марк',
    'Ксения',
    'Диана',
    'Амира',
    'Марина',
    'Георгий',
    'София',
    'Евгений',
    'Герман',
    'Григорий',
    'Давид',
    'Сергей',
    'Евгения',
    'Василий',
    'Богдан',
    'Таисия',
    'Владимир',
    'Ольга',
    'Василиса',
    'Арина',
    'Мария',
    'Тимофей',
    'Кирилл',
    'Иван',
    'Алёна',
    'Эмилия',
    'Данила',
    'Артемий',
    'Андрей',
    'Мия',
    'Матвей',
    'Марьяна',
    'Варвара',
    'Анастасия',
    'Наталья',
    'Михаил',
    'Кира',
    'Мелания',
    'Амина',
    'Сафия',
    'Оливия',
    'Вероника',
    'Илья',
    'Марсель',
    'Ева',
    'Стефания',
    'Надежда',
    'Олег',
    'Аиша',
    'Родион',
    'Демид',
    'Борис',
    'Игорь',
    'Мирон',
    'Марта',
    'Ника',
    'Всеволод',
    'Захар',
]
let secondNames = [
    'Егоров',
    'Воронина',
    'Давыдова',
    'Иванов',
    'Попова',
    'Соколова',
    'Степанов',
    'Никитина',
    'Белов',
    'Сорокин',
    'Богданова',
    'Сахарова',
    'Емельянов',
    'Столяров',
    'Ильина',
    'Парфенова',
    'Скворцова',
    'Тихонов',
    'Наумова',
    'Болдырева',
    'Лыков',
    'Новикова',
    'Кондрашов',
    'Киселева',
    'Баранова',
    'Новикова',
    'Зверева',
    'Иванов',
    'Власов',
    'Царева',
    'Глебов',
    'Мельников',
    'Аксенова',
    'Савельев',
    'Куликов',
    'Беляков',
    'Соколова',
    'Алексеев',
    'Ткачев',
    'Белов',
    'Тихомиров',
    'Гущина',
    'Кузнецова',
    'Попова',
    'Горячев',
    'Медведева',
    'Пономарева',
    'Муратова',
    'Михайлова',
    'Майоров',
    'Евдокимова',
    'Старостин',
    'Родионова',
    'Андреев',
    'Козырева',
    'Кузнецова',
    'Прокофьева',
    'Мешкова',
    'Колесников',
    'Яковлев',
    'Захарова',
    'Федоров',
    'Зайцев',
    'Смирнов',
    'Владимиров',
    'Кочеткова',
    'Андреева',
    'Моисеева',
    'Клюева',
    'Ильина',
    'Исаева',
    'Токарева',
    'Воронина',
    'Беляев',
    'Матвеев',
    'Егорова',
    'Троицкая',
    'Колосова',
    'Голованова',
    'Александров',
    'Майоров',
    'Орлова',
    'Чернов',
    'Карпова',
    'Андреева',
    'Симонов',
    'Семенова',
    'Елисеев',
    'Гусева',
    'Петрова',
    'Морозов',
    'Богомолова',
    'Николаева',
    'Сухарева',
    'Воронцов',
    'Васильева',
    'Сидоров',
    'Пономарев',
    'Бочаров',
    'Крылова'
]
let companies = [
    "ОАО Технологии",
    "ООО Инжиниринг",
    "ОАО Прогресс",
    "ООО Инвест",
    "ОАО Прайм",
    "ООО Будущее",
    "ОАО Софт",
    "ООО Чип",
    "ОАО Бьюти Код",
    "ООО ТехИнвест"
]
let cities = [
    "Стройград",
    "Питерград",
    "Поребрик сити",
    "Нерезиновый",
    "Промград",
    "Метрополис",
    "Готем",
    "Стар сити",
    "Кодерград"
]
let usersAvatars = [
    "https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png",
    "https://www.islandgift.ru/user/standard/man.png",
    "https://image.ibb.co/gmbNQT/matthew.png",
    "https://w0.pngwave.com/png/349/288/teacher-education-student-course-school-avatar-png-clip-art.png",
    "https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png",
    "https://w7.pngwing.com/pngs/728/963/png-transparent-nauticoncept-custom-arts-store-mobile-phones-user-avatar-miscellaneous-english-heroes.png",
    "https://yt3.ggpht.com/a/AATXAJxkIXqRMKTYyjEklS7nI89FjMB6CrYcOQ_KWw=s900-c-k-c0xffffffff-no-rj-mo",
    "https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg",
    "https://cstor.nn2.ru/users/users/foto/1419281-2020-05-06-photo_-1-.jpg.jpg",
    "https://w7.pngwing.com/pngs/99/744/png-transparent-user-business-organization-commonfloor-business-people-necktie-cartoon.png",
    "https://okna5.ru/wp-content/uploads/2016/06/flat-faces-icons-circle-17.png",
    "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png",
    "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png",
    "https://w7.pngwing.com/pngs/255/44/png-transparent-avatar-icon-3d-character-icon-material-cartoon-character-photography-camera-icon.png",
    "https://okna5.ru/wp-content/uploads/2016/06/flat-faces-icons-circle-16.png",
    "https://www.pinclipart.com/picdir/big/410-4103152_testimonialavatarwoman-portable-network-graphics-clipart.png",
    "https://w7.pngwing.com/pngs/122/453/png-transparent-computer-icons-user-profile-avatar-female-profile-heroes-head-woman.png",
    "https://w7.pngwing.com/pngs/207/563/png-transparent-computer-icons-user-female-woman-avatar-face-heroes-hand.png"
]
let countries = [
    "Россия",
    "Беларусь",
    "Украина",
    "Армения",
    "Казахстан",
]
let eyeColors = [
    "Карие",
    "Голубые",
    "Серые",
    "Зеленые",
]
let genders = [
    "Мужской",
    "Женский",
    "Нейтральный"
]

let randomFromArray = (dataKeysay) => {
    return dataKeysay[Math.floor(Math.random() * dataKeysay.length)]
}
let randomString = (i) => {
    let rnd = '';
    while (rnd.length < i)
        rnd += Math.random().toString(36).substring(2);
    return rnd.substring(0, i);
}
let randomPhone = () => {
    return `${Math.floor(Math.random() * (999 - 100) + 100)}-${Math.floor(Math.random() * (999 - 100) + 100)}-${Math.floor(Math.random() * (999 - 100) + 100)}`
}
let randomDate = () => {
    return new Date(Math.floor(Math.random() * (2000 - 1970) + 1970), Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (31 - 1) + 1));
}
let randomStat = () => {
    return Math.floor(Math.random() * (100 - 1) + 1)
}
let randomAtr = () => {
    return Math.floor(Math.random() * (99999 - 10000) + 10000)
}

let storage = []
for (let i = 1; i <= 1000; i++) {
    storage.push(
        {
            id: i,
            firstName: firstNames[Math.floor(Math.random() * 100)],
            secondName: secondNames[Math.floor(Math.random() * 100)],
            salary: Math.floor(Math.random() * 50000),
            bonusInPercent: Math.floor(Math.random() * 99),
            bonusInMoney: 0,
            avatar: <img src={randomFromArray(usersAvatars)} alt={''}/>,
            workExp: Math.floor(Math.random() * 16),
            gender: randomFromArray(genders),
            eyeColor: randomFromArray(eyeColors),
            company: randomFromArray(companies),
            phone: randomPhone(),
            isActive: randomFromArray(["да", "нет"]),
            city: randomFromArray(cities),
            country: randomFromArray(countries),
            countryCode: Math.floor(Math.random() * 11),
            email: `${randomString(6)}@mailbox.com`,
            dateOfBirth: randomDate().toDateString(),
            mdataKeysied: randomFromArray(["да", "нет"]),
            children: Math.floor(Math.random() * 5),
            immigrant: randomFromArray(["да", "нет"]),
            loyalty: randomStat(),
            power: randomStat(),
            stamina: randomStat(),
            speed: randomStat(),
            jump: randomStat(),
            accuracy: randomStat(),
            attribute1: randomAtr(),
            attribute2: randomAtr(),
            attribute3: randomAtr(),
            attribute4: randomAtr(),
            attribute5: randomAtr(),
            attribute6: randomAtr(),
            attribute7: randomAtr(),
            attribute8: randomAtr(),
            attribute9: randomAtr(),
            attribute10: randomAtr(),
            attribute11: randomAtr(),
            attribute12: randomAtr(),
            attribute13: randomAtr(),
            attribute14: randomAtr(),
            attribute15: randomAtr(),
        }
    )
}
storage.forEach(item => {
    item['bonusInMoney'] = item['salary'] / 100 * item['bonusInPercent']
})
export const getTotalCount = (data, field) => {
    let totalValue = 0
    data.forEach((item) => {
            for (let key in item) {
                if (key === field.field)
                    switch (field.dataType) {
                        case 'number':
                        case 'money':
                        case 'percent': {
                            return totalValue += item[key]
                        }
                        case 'string': {
                            return totalValue++
                        }
                        default:
                            return undefined
                    }
            }
        }
    )
    if (field.dataType === 'number' || field.dataType === 'percent') {
        return (totalValue / data.length)
    } else {
        return totalValue
    }
}
export default storage