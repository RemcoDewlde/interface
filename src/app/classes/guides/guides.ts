export class Guides {
  id: string;
  createdAt: string;
  updatedAt: string;
  guideName: string;
  guideDesc: string;
  guideText: string;
  tags: [{
    tag: string
  }];
  comments: [{
    userID: string;
    comment: string;
    resolved: boolean;
  }];
}
