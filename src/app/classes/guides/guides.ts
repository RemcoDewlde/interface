import {User} from '../user/user';

export class Guides {
  // tslint:disable-next-line:variable-name
  _id: string;
  createdAt: string;
  updatedAt: string;
  guideName: string;
  guideDesc: string;
  guideText: string;
  tags: [{
    tag: string
  }];
  comments: [{
    _id: string;
    userID: User['_id'];
    comment: string;
    resolved: boolean;
  }];
}
