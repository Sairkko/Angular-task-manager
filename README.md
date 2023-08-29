## Versions :

Node : 18.16.1
Angular CLI : 16.1.8
NPM : 9.5.1
Angular : 16.2.2
Yarn : 1.22.19
Compodoc : 1.1.21

# Que se passe t'il dans le dossier "dist" :
Ce dossier contient les fichiers et ressources nécessaires pour exécuter l'application

Créer une directive/service/pipe/module/model :

```
ng generate 'directive/service/pipe/module/model' nom-du-composent`
```

Imaginons que les données délivrées par les services soient issues de requêtes
HTTP. Décrivez les opérations à effectuer pour mettre en place le module
HttpClient ainsi que la requête à effectuer sur une url "https://domain/data" avec
un paramètre de requête "?param=test".

Tout d'abord il faut ajouter le HttpClient au module de l'app component :

````
imports: [
    BrowserModule,
    HttpClientModule
  ],
````

Ensuite on va créer un service qui va prendre en compte notre URL pour ensuite mettre en place un parametrage :

````
export class TaskHttpService {

  private baseUrl = 'https://domain/data';

  constructor(private http: HttpClient) { }
  
  getTasksWithParameter(paramValue: string): Observable<Task[]> {
    const url = `${this.baseUrl}?param=${paramValue}`;
    return this.http.get<Task[]>(url);
  }
  ````

Enfin dans notre task-list on va passer en paramètre test mais on pourrait mettre ce qu'on le veux comme un champ de formulaire ou une donnée que l'on recupère de l'api :

````
ngOnInit(): void {
    const paramValue = 'test';
    this.taskHttpService.getTasksWithParameter(paramValue).subscribe(tasks => {
      this.tasks = tasks; // Met à jour la liste des tâches lorsque la requête est réussie
    });
  }
````

Ne pas oublier de configurer le CORS (de mon côté on utilise AWS au taff donc on doit autoriser tous les CORS sinon l'URL de ne marchera pas)
