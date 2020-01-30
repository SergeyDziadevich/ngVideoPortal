export interface IAuthor {
  id: number;
  name: string;
  lastName: string;
}

export class Author implements IAuthor {
  constructor(
    public id: number,
    public name: string,
    public lastName: string
  ) {}
}


