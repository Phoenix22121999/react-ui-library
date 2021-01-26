export interface Path  {
    Name : string,
    Link? : string,
    Children?: Path[]
}
export const MenuItems: Path[] = [

        {
            Name: "Neumorphism",
            Children: [
                {
                    Name: "Light",
                    Children: [
                        {
                            Name:"Test 1",
                            Children:[
                                {
                                    Name:"Test 2",
                                    Link:"/",
                                },
                                {
                                    Name:"Test 3",
                                    Link:"/",
                                }
                            ]
                        }
                    ]
                },
                {
                    Name: "Dark",
                    Children: [
                        {
                            Name:"Test 4",
                            Children:[
                                {
                                    Name:"Test 5",
                                    Children:[
                                        {
                                            Name:"Test 7",
                                            Link:"/",
                                        },
                                        {
                                            Name:"Test 8",
                                            Link:"/",
                                        }
                                    ]
                                },
                                {
                                    Name:"Test 6",
                                    Link:"/",
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            Name: "Home",
            Children : [
                {
                    Name:"Test 9",
                    Children:[
                        {
                            Name:"Test 11",
                            Link:"/",
                        },
                        {
                            Name:"Test 12",
                            Link:"/",
                        }
                    ]
                },
                {
                    Name:"Test 10",
                    Link:"/",
                }
            ]
        },
    
]
