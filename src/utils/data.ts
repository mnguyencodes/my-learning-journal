type Blog = {
    id: number
    href: string
    image: string
    date: string
    title: string
    description: string
}

let blogId = 1

export const blogsData: Blog[] = [
    {
        id: blogId++,
        href: "#",
        image: "/images/article-image-01.jpg",
        date: "January 1, 2000",
        title: "Blog 1",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla repellendus error quia delectus nesciunt distinctio magni eveniet hic eum tempora maxime perferendis facilis in possimus illo dicta, aperiam doloribus velit."
    },
    {
        id: blogId++,
        href: "#",
        image: "/images/article-image-02.jpg",
        date: "January 1, 2000",
        title: "Blog 2",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla repellendus error quia delectus nesciunt distinctio magni eveniet hic eum tempora maxime perferendis facilis in possimus illo dicta, aperiam doloribus velit."
    },
    {
        id: blogId++,
        href: "#",
        image: "/images/article-image-03.jpg",
        date: "January 1, 2000",
        title: "Blog 3",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla repellendus error quia delectus nesciunt distinctio magni eveniet hic eum tempora maxime perferendis facilis in possimus illo dicta, aperiam doloribus velit."
    }
]

