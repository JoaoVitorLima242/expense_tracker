export const formatedPrice = (price=0) => {
    if (!price) return 0;
	if (typeof price === 'string') {
		price = Number(price);
	}
	let formattedPrice = price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return formattedPrice;
}
