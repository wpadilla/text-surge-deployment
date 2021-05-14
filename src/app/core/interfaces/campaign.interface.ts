export interface Campaign {
    id?: number,
    name?: string,
    clientID?: number,
    description: string,
    timezone?: string,
    sendRate?: number,
    replyRate?: number,
    startDate?: Date,
    endDate?: Date,
    startTime?: Date,
    endTime?: Date,
    lists?: object[],
    conversations?: object[],
    messages?: object[],
    scripts?: object[],
    sent?: number,
    target?: number,
    tags: string[]
}

