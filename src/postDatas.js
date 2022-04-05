const postData = {
    user: "Victor Almeida",
    moment: "30 min ago",
    title: "Mais um projeto!",
    text: "Estou me desafiando a criar projetos mais complexos. Esse é um sistema de postagens na qual as pessoas poderam postar sobre seu dia e outras pessoas podem comentar-lo.",
    likes: 57,
    comments: [
        {
            id: 1,
            user: "Jennifer Lawence",
            moment: "just now",
            text: "Está incrivel!!",
            likes: 13
        },
        {
            id: 2,
            user: "Thomas Shelby",
            moment: "5 min ago",
            text: "Você é o cara...",
            likes: 6
        },
        {
            id: 3,
            user: "Nicolas Tesla",
            moment: "15 min ago",
            text: "De fato é um projeto deveras interessante. Continue assim",
            likes: 22
        }
    ]
}

export default postData;