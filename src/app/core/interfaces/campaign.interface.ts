import IMessage from './message.interface';
import IConversation from './conversation.interface';
import IScript from './script.interface';

export type CampaignTagTypes = 'completed' | 'not started' | 'in progress' | 'unassigned contacts' | 'draft';

export interface ICampaign {
    id?: number;
    name: string;
    clientID?: number;
    description: string;
    timezone?: string;
    clientRate?: number;
    initialRate?: number;
    replyRate?: number;
    startDate?: Date;
    endDate?: Date;
    startTime?: Date;
    endTime?: Date;
    lists?: object[];
    conversations?: IConversation[];
    messages?: IMessage[];
    scripts?: IScript[];
    sent?: number;
    target?: number;
    tags: CampaignTagTypes[];
    totalClientBudget: number;
}
