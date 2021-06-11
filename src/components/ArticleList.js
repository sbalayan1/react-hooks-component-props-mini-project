import Article from './Article'

let ArticleList = ({ posts }) => {
    return (
        <main>
            <Article post = {posts}/>
        </main>
    )
}

export default ArticleList