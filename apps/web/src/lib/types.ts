export type ProposalStatus = 'pending' | 'approved' | 'rejected' | 'active';
export type PropertyStatus = 'active' | 'funded' | 'under-review' | 'completed';
export type VoteType = 'yes' | 'no' | 'abstain';

export interface MetricData {
	label: string;
	value: string;
	unit?: string;
	subtitle?: string;
}

export interface GovernanceProposal {
	id: string;
	title: string;
	description: string;
	status: ProposalStatus;
	votesYes: number;
	votesNo: number;
	votesAbstain: number;
	totalVotes: number;
	threshold: number;
	daysRemaining: number;
}

export interface PropertyDeployment {
	id: string;
	name: string;
	location: string;
	capitalDeployed: number;
	rentalYield: number;
	status: PropertyStatus;
	imageUrl?: string;
}

export interface ChartDataPoint {
	date: Date;
	value: number;
}