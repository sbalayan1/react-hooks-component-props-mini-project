//would love to get this test to pass

let Article = ({ post }) => {
    console.log(post)
    let createArticle = post.map(article => {
        return (
            <article key={article.id}> 
                <h3>{article.title}</h3>
                <small value="January 1,1970">{article.date}</small>
                <p>{article.preview}</p>
            </article>
        )
    })
    return (
        <>
            {createArticle}
        </>
    )
}

export default Article