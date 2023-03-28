export interface FilterItem {
    id: string;
    text: string;
    keyword: string;
}

export const filters: FilterItem[] = [
    {
        id: "1",
        text: "Уход за телом",
        keyword: "тело",
    },
    {
        id: "2",
        text: "Уход за руками",
        keyword: "руки",
    },
    {
        id: "3",
        text: "Уход за ногами",
        keyword: "ноги",
    },
    {
        id: "4",
        text: "Уход за лицом",
        keyword: "лицо",
    },
    {
        id: "5",
        text: "Уход за волосами",
        keyword: "волосы",
    },
    {
        id: "6",
        text: "Средства для загара",
        keyword: "загар",
    },
    {
        id: "7",
        text: "Средства для бритья",
        keyword: "бритье",
    },
    {
        id: "8",
        text: "Подарочные наборы",
        keyword: "подарок",
    },
    {
        id: "9",
        text: "Гигиеническая продукция",
        keyword: "гигиена",
    },
    {
        id: "10",
        text: "Гигиена полости рта",
        keyword: "рот",
    },
    {
        id: "11",
        text: "Бумажная продукция",
        keyword: "бумага",
    },
];
