export const obj1 = '{"headers": [{"id": "project_name", "type": "string", "caption": "Project name", "align": "center"},{"id": "total_by_project", "type": "float", "caption": "Total by project"},{"id": "project_type", "type": "string", "caption": "Project type"},{"id": "jan", "type": "float", "caption": "Jan", "align": "center"},{"id": "feb", "type": "float", "caption": "Feb"}],"data": [["Mimesis", 1024.3, "commercial", 2048.2, 4096.0],["Mako", 2345.1, "internal", 3465.3, {"d": 12.5, "color": "selected"}],["Edelweiss", 54.4, "commercial", 564.8, 4652.3],["Etherium", 564.0, "internal", 436.9, 1000.4],["Seraphine", 356.3, "internal", 962.0, {"d": 85.4, "color": "selected"}],["Sylveria", 1564.9, "commercial", 593.4, {"d": 645.9, "color": "selected"}],["Equinoxia", 876.2, "internal", 754.3, 1056.8]]}'

export const obj2 = '{"headers": [{"id": "order_number", "type": "int", "caption": "Order number", "align": "center"},{"id": "price", "type": "float", "caption": "Price"},{"id": "departure_date", "type": "string", "caption": "Departure Date", "align": "center"},{"id": "completed", "type": "boolean", "caption": "Completed"},{"id": "amount_products", "type": "int", "caption": "Amount products"},{"id": "delivery_country", "type": "string", "caption": "Delivery country"}],"data": [[45698732652, 564.0, "17.09.2023", true, 4, "Russia"],[23987465023, 312.5, "08.05.2023", false, 2, "USA"],[12345678901, 678.9, "21.11.2023", true, 6, "Canada"],[98765432109, 432.1, "15.08.2023", true, 3, {"d": "Germany", "sity": "Berlin"}],[45678912304, 876.3, "03.02.2023", false, 5, {"d": "France", "sity": "Paris"}],[65432198706, 123.4, "29.06.2023", true, 1, "Australia"],[78901234508, 567.8, "12.10.2023", true, 4, "Japan"],[34567890102, 234.5, "07.04.2023", false, 2, "Brazil"],[56789012305, 789.0, "19.12.2023", true, 1, "Mexico"],[78945621308, 234.5, "21.11.2023", true, 2, {"d": "Spain", "sity": "Madrid"}],[23456789010, 901.2, "30.07.2023", false, 8, "Italy"]]}'

export const obj3 = '{"headers": [{"id": "game_title", "type": "string", "caption": "Game Title", "align": "center"},{"id": "genre", "type": "string", "caption": "Genre"},{"id": "platform", "type": "string", "caption": "Platform", "align": "center"},{"id": "release_year", "type": "int", "caption": "Release Year"},{"id": "developer", "type": "string", "caption": "Developer", "align": "center"},{"id": "player_rating", "type": "float", "caption": "Player Rating"}],"data": [["The Witcher 3: Wild Hunt", "RPG", {"d": "PlayStation 4", "e": "Xbox One"}, 2015, "CD Projekt Red", 9.4],["Grand Theft Auto V", {"d": "Action", "e": "Adventure"}, {"d": "Xbox One", "e": "PlayStation 4"}, 2013, "Rockstar North", 9.0],["Red Dead Redemption 2", {"d": "Action", "e": "Adventure"}, {"d": "PC", "e": "PlayStation 4"}, 2018, "Rockstar Studios", 9.1],["Dark Souls III", {"d": "RPG", "e": "Action"}, {"d": "PC", "e": "PlayStation 4"}, 2016, "FromSoftware", 9.3],["Super Mario Odyssey", {"d": "Platformer", "e": "Adventure"}, "Nintendo Switch", 2017, "Nintendo", 9.5],["Horizon Zero Dawn", {"d": "Action", "e": "RPG"}, {"d": "PlayStation 4", "e": "Xbox One"}, 2017, "Guerrilla Games", 9.2],["Minecraft", {"d": "Sandbox", "e": "Survival"}, "Multiple platforms", 2011, "Mojang Studios", 9.0]]}'


// export const obj1 = {
//     "header": [
//         {"id": "project_name", "type": "string", "caption": "Project name"},
//         {"id": "total_by_project", "type": "float", "caption": "Total by project"},
//         {"id": "project_type", "type": "string", "caption": "Project type", "align": "center"},
//         {"id": "jan", "type": "float", "caption": "Jan"},
//         {"id": "feb", "type": "float", "caption": "Feb"},
//     ],
//     "data": [
//         ["Mimesis", 1024.3, "commercial", 2048.2, 4096.0],
//         ["Mako", 2345.1, "internal", 3465.3, {"d": 12.5, "color": "selected"}],
//         ["Edelweiss", 54.4, "commercial", 564.8, 4652.3],
//         ["Etherium", 564.0, "internal", 436.9, 1000.4],
//         ["Seraphine", 356.3, "internal", 962.0, {"d": 85.4, "color": "selected"}],
//         ["Sylveria", 1564.9, "commercial", 593.4, {"d": 645.9, "color": "selected"}],
//         ["Equinoxia", 876.2, "internal", 754.3, 1056.8],
//     ]
// }

// export const obj2 = {
//     "header": [
//         {"id": "order_number", "type": "int", "caption": "Order number"},
//         {"id": "price", "type": "float", "caption": "Price"},
//         {"id": "departure_date", "type": "string", "caption": "Departure Date", "align": "center"},
//         {"id": "completed", "type": "boolean", "caption": "Completed"},
//         {"id": "amount_products", "type": "int", "caption": "Amount products", "align": "center"},
//         {"id": "delivery_country", "type": "string", "caption": "Delivery country", "align": "center"},
//     ],
//     "data": [
//         [45698732652, 564.0, "17.09.2023", true, 4, "Russia"],
//         [23987465023, 312.5, "08.05.2023", false, 2, "USA"],
//         [12345678901, 678.9, "21.11.2023", true, 6, "Canada"],
//         [98765432109, 432.1, "15.08.2023", true, 3, {"d": "Germany", "sity": "Berlin"}],
//         [45678912304, 876.3, "03.02.2023", false, 5, {"d": "France", "sity": "Paris"}]
//         [65432198706, 123.4, "29.06.2023", true, 1, "Australia"],
//         [78901234508, 567.8, "12.10.2023", true, 4, "Japan"],
//         [34567890102, 234.5, "07.04.2023", false, 2, "Brazil"],
//         [56789012305, 789.0, "19.12.2023", true, 1, "Mexico"],
//         [78945621308, 234.5, "21.11.2023", true, 2, {"d": "Spain", "sity": "Madrid"}]
//         [23456789010, 901.2, "30.07.2023", false, 8, "Italy"],
//     ]
// }

// export const obj3 = {
//     "header": [
//         {"id": "game_title", "type": "string", "caption": "Game Title"},
//         {"id": "genre", "type": "string", "caption": "Genre"},
//         {"id": "platform", "type": "string", "caption": "Platform", "align": "center"},
//         {"id": "release_year", "type": "int", "caption": "Release Year"},
//         {"id": "developer", "type": "string", "caption": "Developer", "align": "center"},
//         {"id": "player_rating", "type": "float", "caption": "Player Rating"}
//     ],
//     "data": [
//         ["The Witcher 3: Wild Hunt", "RPG", {"d": "PlayStation 4", "e": "Xbox One"}, 2015, "CD Projekt Red", 9.4],
//         ["Grand Theft Auto V", {"d": "Action", "e": "Adventure"}, {"d": "Xbox One", "e": "PlayStation 4"}, 2013, "Rockstar North", 9.0],
//         ["Red Dead Redemption 2", {"d": "Action", "e": "Adventure"}, {"d": "PC", "e": "PlayStation 4"}, 2018, "Rockstar Studios", 9.1],
//         ["Dark Souls III", {"d": "RPG", "e": "Action"}, {"d": "PC", "e": "PlayStation 4"}, 2016, "FromSoftware", 9.3],
//         ["Super Mario Odyssey", {"d": "Platformer", "e": "Adventure"}, "Nintendo Switch", 2017, "Nintendo", 9.5],
//         ["Horizon Zero Dawn", {"d": "Action", "e": "RPG"}, {"d": "PlayStation 4", "e": "Xbox One"}, 2017, "Guerrilla Games", 9.2],
//         ["Minecraft", {"d": "Sandbox", "e": "Survival"}, "Multiple platforms", 2011, "Mojang Studios", 9.0]
//     ]
// }

// let str = '{"title":[{"id": "game_title", "type": "string", "caption": "Game Title"}, "Conference"],"date":"2017-11-30T12:00:00.000Z"}';


// Название игры - Game Title
// Жанр - Genre
// Платформа - Platform
// Год выпуска - Release Year
// Разработчик - Developer
// Издатель - Publisher
// Оценка игроков - Player Rating