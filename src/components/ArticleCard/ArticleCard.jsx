import { Link } from 'react-router-dom'
import './style.scss'

function ArticleCard({ title, description, id }) {
    return (
        <div className="articleElement">
            <div className="articleElement__title">{title}</div>
            <div className="articleElement__description">
                <p>
                    {description}
                </p>
            </div>
            <Link to={`/article-page/${id}`} >
                <div className="articleElement__all">читать полностью</div>
            </Link>
        </div>
    )
}

export default ArticleCard