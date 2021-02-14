import { Article } from './article';

export const ARTICLES: Article[] = [

    {
        articleId: 1,
        articleTitle: '記事タイトル1',
        articleContent: 'この文章はダミーです。文字の大きさ、量、行間等を確認するために入れています。' +
        'この文章はダミーです。文字の大きさ、量、行間等を確認するために入れています。' +
        'この文章はダミーです。文字の大きさ、量、行間等を確認するために入れています。' +
        'この文章はダミーです。文字の大きさ、量、行間等を確認するために入れています。' +
        'この文章はダミーです。文字の大きさ、量、行間等を確認するために入れています。' ,
        niceCount: 0,
        pictureUrl: 'https://placehold.jp/48×48.png',
        createdBy: 'spa.training',
        createdAt: new Date(2019, 1, 1),
        updatedAt: new Date(2019, 1, 1),
        replyList: []
    },
    {
        articleId: 2,
        articleTitle: '記事タイトル2',
        articleContent: 'この文章はダミーです。文字の大きさ、量、行間等を確認するために入れています。' +
        'この文章はダミーです。文字の大きさ、量、行間等を確認するために入れています。' +
        'この文章はダミーです。文字の大きさ、量、行間等を確認するために入れています。' +
        'この文章はダミーです。文字の大きさ、量、行間等を確認するために入れています。' +
        'この文章はダミーです。文字の大きさ、量、行間等を確認するために入れています。' ,
        niceCount: 2,
        pictureUrl: 'https://placehold.jp/48×48.png',
        createdBy: 'spa.training',
        createdAt: new Date(2019, 1, 1),
        updatedAt: new Date(2019, 1, 1),
        replyList: []
    },

];