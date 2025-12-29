import type { MetricData, GovernanceProposal, PropertyDeployment, ChartDataPoint } from '$lib/types';
import { formatSOL, formatCountdown, formatDate } from '$lib/utils/formatters';

export function getDashboardMetrics(): MetricData[] {
	return [
		{
			label: 'Total Treasury',
			value: formatSOL(45000),
			unit: 'SOL',
			subtitle: '+2.3% this month'
		},
		{
			label: 'Active Deployments',
			value: '3',
			unit: 'Properties',
			subtitle: '£2.1M deployed'
		},
		{
			label: 'Next Surplus Distribution',
			value: formatCountdown(14),
			subtitle: formatDate(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000))
		}
	];
}

export function getGovernanceProposals(): GovernanceProposal[] {
	return [
		{
			id: 'prop-001',
			title: 'Edinburgh Portfolio Alpha Capital Injection',
			description: 'Approve £450,000 capital injection for property acquisition in Old Town district',
			status: 'active',
			votesYes: 12500,
			votesNo: 3200,
			votesAbstain: 800,
			totalVotes: 16500,
			threshold: 60,
			daysRemaining: 5
		},
		{
			id: 'prop-002',
			title: 'Glasgow Central Quarter Refinancing',
			description: 'Approve refinancing structure to optimize capital efficiency',
			status: 'active',
			votesYes: 8900,
			votesNo: 1200,
			votesAbstain: 400,
			totalVotes: 10500,
			threshold: 60,
			daysRemaining: 12
		}
	];
}

export function getPropertyDeployments(): PropertyDeployment[] {
	return [
		{
			id: 'prop-edin-001',
			name: 'Edinburgh Portfolio Alpha',
			location: 'Old Town, Edinburgh',
			capitalDeployed: 450000,
			rentalYield: 6.2,
			status: 'active',
			imageUrl: 'https://pixabay.com/get/g5788dad3670fa8882a75c2dde7b88ae357025ce28103f031347334ef7f82294c699833de3387c12372498f05c67b79e4.svg'
		},
		{
			id: 'prop-glas-001',
			name: 'Glasgow Central Quarter',
			location: 'Merchant City, Glasgow',
			capitalDeployed: 380000,
			rentalYield: 5.8,
			status: 'active',
			imageUrl: 'https://pixabay.com/get/g40ca73661d96c5c97eb38e008e9dcf1e3088d70190d95e2ca1a68cb3f22698bfacc8e24bca19dbf8c3c72bf981c2bd75.svg'
		},
		{
			id: 'prop-aber-001',
			name: 'Aberdeen Maritime District',
			location: 'Harbour Area, Aberdeen',
			capitalDeployed: 320000,
			rentalYield: 7.1,
			status: 'funded',
			imageUrl: 'https://pixabay.com/get/g15c1bb4966d7b25b2adb43bea9184f40cd74cab53e504ed6e6c07fa74b6cc327100aafc8f8b52fa2ff8ed970b19789b6.svg'
		}
	];
}

export function getSurplusYieldData(): ChartDataPoint[] {
	const data: ChartDataPoint[] = [];
	const today = new Date();
	for (let i = 6; i >= 0; i--) {
		const date = new Date(today);
		date.setMonth(date.getMonth() - i);
		data.push({
			date,
			value: 2000 + Math.random() * 1000
		});
	}
	return data;
}