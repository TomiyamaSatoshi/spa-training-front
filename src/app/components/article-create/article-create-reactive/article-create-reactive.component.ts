import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { ArticleCreateService } from 'src/app/services/article-create.service';

@Component({
  selector: 'app-article-create-reactive',
  templateUrl: './article-create-reactive.component.html',
  styleUrls: ['./article-create-reactive.component.scss']
})
export class ArticleCreateReactiveComponent implements OnInit {

  // form = new FormGroup({
  //   articleTitle: new FormControl('', Validators.required),
  //   articleContent: new FormControl('', [Validators.required, Validators.minLength(5)])
  // });

  form = this.fb.group({
    articleTitle: ['', Validators.required],
    articleContent: ['', [Validators.required, Validators.minLength(5)]],
  });

  get articleTitle() { return this.form.get('articleTitle'); }
  get articleContent() { return this.form.get('articleContent'); }

  constructor(
    private articleCreateService: ArticleCreateService, 
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const form = this.form;
    console.log('article.value: ' + JSON.stringify(form.value));
    console.log('article.valid: ' + form.valid);

    this.articleCreateService.createArticle(form.value).subscribe(
      (data) => {
        console.log('SUCCESS: ' + JSON.stringify(data));
        alert('投稿しました!')
      },
      (error: AppError) => {
        if (error instanceof BadRequestError) {
          alert('Bad Request\n' + JSON.stringify(error));
        } else if (error instanceof NotFoundError) {
          alert('Not Found\n' + JSON.stringify(error));
        } else {
          alert('Unknow Error\n' + JSON.stringify(error));
          throw error;
        }
      }
    )
  }
}
