function GoodsItem(props) {
  const { offerId,
          displayName,
          displayDescription,
          price = {},
          displayAssets = [],
          addToBasket = Function.prototype } = props;

  return (
  <div className="card">
    <div className="card-image">
      <img src={displayAssets[0].full_background} alt={displayName} />
      
      </div>
    <div className="card-content">
    <span className="card-title">{displayName}</span>
      <p>
        {displayDescription}
      </p>
    </div>
    <div className="card-action">
          <button className="btn"  
          onClick={() =>
                addToBasket({
                    offerId,
                    displayName,
                    price,
                })
            }>Купить</button>
          <span className="price right">{price.finalPrice} грн</span>
        </div>
  </div>);
}

export { GoodsItem };
