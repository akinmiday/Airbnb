function Card(props) {
    console.log
    let badgeText
    if (props.item.openspot === 0) {
        badgeText = "SOLD OUT"
    } else {
        badgeText = props.item.available
    }
    return (
        <div className="card--container" >
            <div className="img-contain" >
                <button className="online-btn">
                    {badgeText}
                </button>
                <img className="thumbnail-img" src={`../src/assets/${props.item.img}`} />
            </div>
            <div>
                <div className="ratings" >
                    <img src="../src/assets/Star.png" />
                    <span className="stats" >{props.item.stats.rating}</span>
                    <span>(<span>{props.item.stats.reviewcount}</span>)</span>
                    <span>{props.item.country}</span></div>
                <div>
                    <p className="title" >{props.item.title}</p>
                    <div><span className="price" >From ${props.item.price}</span>
                        <span className="person" > / person</span> </div>
                </div>
            </div>
        </div >
    )
}

export default Card