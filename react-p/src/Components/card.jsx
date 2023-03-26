function Card(props) {
    return (
        <div className="card--container" >
            <div className="img-contain" >
                <img className="thumbnail-img" src={`../src/assets/${props.img}`} />
            </div>
            <div>
                <div className="ratings" ><img src="../src/assets/Star.png" />
                    <span className="stats" >{props.stats}</span><span>(<span>{props.reviewcount}</span>)</span> <span>{props.country}</span></div>
                <div>
                    <p className="title" >{props.title}</p>
                    <div><span className="price" >From ${props.price}</span> <span className="person" > / person</span> </div>
                </div>
            </div>
        </div>
    )
}

export default Card