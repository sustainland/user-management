import { Component, Inject, OnInit } from '@angular/core';
import { I18NService } from '@core';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'layout-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.less'],
})
export class LayoutPassportComponent implements OnInit {
  links = [
    {
      title: '帮助',
      href: '',
    },
    {
      title: '隐私',
      href: '',
    },
    {
      title: '条款',
      href: '',
    },
  ];

  constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService, private i18n: I18NService) {}

  ngOnInit(): void {
    this.tokenService.clear();
    this.links = [
      {
        title: this.i18n.fanyi('account.footer.privacy-policy'),
        href: '',
      },
      {
        title: this.i18n.fanyi('account.footer.help'),
        href: '',
      },
    ];
  }
}
