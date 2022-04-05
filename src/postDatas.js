const postData = {
    user: "Victor Almeida",
    moment: "30 min ago",
    title: "Mais um projeto!",
    text: <p>Esse projeto é apenas um demo de uma seção de postagem, na qual um usuário poderá postar sobre seu dia e outros usuários poderão comentar. <strong>IMPORTANTE: Nenhum famoso conhecido citado nos comentários abaixo fizeram parte desse projeto. Seus nomes foram apenas citados para fins demostrativos.</strong> Os comentários são postados aleatoriamente. Caso atualize a página, há chances de serem outros comentários. <br/> Tenha um bom dia 😉</p>,
    likes: 57,
    comments: [
        [
            {
                id: 1,
                user: "Jennifer Lawence",
                moment: "just now",
                text: "Está incrivel!! 🤩🤩",
                likes: 13
            },
            {
                id: 2,
                user: "Thomas Shelby",
                moment: "5 min ago",
                text: "Interessante...",
                likes: 6
            },
            {
                id: 3,
                user: "Nicolas Tesla",
                moment: "15 min ago",
                text: "De fato é um projeto deveras interessante 🧐. Continue assim",
                likes: 22
            }
        ],
        [
            {
                id: 1,
                user: "Stephen Hawnking",
                moment: "2 min ago",
                text: "Magnífico!",
                likes: 10
            },
            {
                id: 2,
                user: "Micro-ondas",
                moment: "5 min ago",
                text: "HHHHHMMMMMMMMMMMMMMMMMMMMMMMMMMMM!!😳😳😳",
                likes: 200
            },
            {
                id: 3,
                user: "Hacker Mexicano",
                moment: "15 min ago",
                text: "😈 Yo soy un racker mehicano con una tequila 😈",
                likes: 500000
            }
        ],
        [
            {
                id: 1,
                user: "Agner",
                moment: "2 min atrás",
                text: "Eu sou o Agner...",
                likes: 13
            },
            {
                id: 2,
                user: "Bill Gates",
                moment: "5 min ago",
                text: "I want contratar you para my empresa 😎. Oque do you achar disso? ",
                likes: 6
            },
            {
                id: 3,
                user: "Tobey Maguire",
                moment: "15 min ago",
                text: "E quem disse que isso é problema meu??",
                likes: 22
            }
        ],
    ]
}

export default postData;