export const formatedPrice = (price=0) => {
    if (!price) return 0;
	if (typeof price === 'string') {
		price = Number(price);
	}
	let formattedPrice = price.toLocaleString('en-US', {minimumFractionDigits: 2});

	return formattedPrice;
}
