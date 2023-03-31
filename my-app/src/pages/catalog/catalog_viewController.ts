export interface FilterItem {
    id: string;
    text: string;
    keyword: string;
    filterType: string;
}

export const filters: FilterItem[] = [
    {
        id: "1",
        text: "Уход за телом",
        keyword: "тело",
        filterType: 'keyword'
    },
    {
        id: "2",
        text: "Уход за руками",
        keyword: "руки",
        filterType: 'keyword'
    },
    {
        id: "3",
        text: "Уход за ногами",
        keyword: "ноги",
        filterType: 'keyword'
    },
    {
        id: "4",
        text: "Уход за лицом",
        keyword: "лицо",
        filterType: 'keyword'
    },
    {
        id: "5",
        text: "Уход за волосами",
        keyword: "волосы",
        filterType: 'keyword'
    },
    {
        id: "6",
        text: "Средства для загара",
        keyword: "загар",
        filterType: 'keyword'
    },
    {
        id: "7",
        text: "Средства для бритья",
        keyword: "бритье",
        filterType: 'keyword'
    },
    {
        id: "8",
        text: "Подарочные наборы",
        keyword: "подарок",
        filterType: 'keyword'
    },
    {
        id: "9",
        text: "Гигиеническая продукция",
        keyword: "гигиена",
        filterType: 'keyword'
    },
    {
        id: "10",
        text: "Гигиена полости рта",
        keyword: "рот",
        filterType: 'keyword'
    },
    {
        id: "11",
        text: "Бумажная продукция",
        keyword: "бумага",
        filterType: 'keyword'
    }
];
