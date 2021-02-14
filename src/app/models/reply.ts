export class Reply {

    replyContent: string;
    pictureUrl: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(reply: any = {}) {
        this.replyContent = reply.replyContent || '';
        this.pictureUrl = reply.pictureUrl || '';
        this.createdBy = reply.createdBy || '';
        this.createdAt = reply.createdAt || new Date(2000, 1, 1);
        this.updatedAt = reply.updatedAt || new Date(2000, 1, 1);
    }
}
