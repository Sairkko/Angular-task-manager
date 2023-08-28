export class Task {
  constructor(
    public title: string,
    public description: string,
    public state: TaskState,
    public date: Date,
  ) {}
}

export enum TaskState {
  EN_COURS = "En cours",
  A_FAIRE = "A faire",
  TERMINEE = "Terminee"
}
