export const formatSOL = (amount: number): string => {
	return new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	}).format(amount);
};

export const formatCurrency = (amount: number): string => {
	return new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(amount);
};

export const formatPercentage = (value: number): string => {
	return `${value.toFixed(1)}%`;
};

export const formatDate = (date: Date): string => {
	return new Intl.DateTimeFormat('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	}).format(date);
};

export const formatCountdown = (days: number): string => {
	if (days < 1) return 'Less than 1 day';
	return `${days} day${days !== 1 ? 's' : ''}`;
};