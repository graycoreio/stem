import {
  Component,
  Input,
} from '@angular/core';

import { DaffioGuideList } from '../../../shared/models/guide-list';

@Component({
  selector: 'daffio-guides-list',
  templateUrl: './guides-list.component.html',
  styleUrls: ['guides-list.component.scss'],
})
export class DaffioGuidesListComponent {
  /**
   * The guide list to render
   */
  @Input() guideList: DaffioGuideList;
}
