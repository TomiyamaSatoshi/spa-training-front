import { Reply } from "./reply";

export class Article {

    articleId: number;
    articleTitle: string;
    articleContent: string;
    niceCount: number;
    pictureUrl: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
    replyList: Reply[];

    constructor(article: any = {}) {
        this.articleId = article.articleId || 0;
        this.articleTitle = article.articleTitle || '';
        this.articleContent = article.articleContent || '';
        this.niceCount = article.niceCount || '';
        this.pictureUrl = article.pictureUrl || '';
        this.createdBy = article.createdBy || '';
        this.createdAt = article.createdAt || new Date(2000, 1, 1);
        this.updatedAt = article.updatedAt || new Date(2000, 1, 1);
        this.replyList = article.replyList || [];
    }
}
