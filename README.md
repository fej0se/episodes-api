# episodes-api
This is a project of an api to serve episodes to a web react application called podcastr (https://github.com/fej0se/podcastr)

### This project is host on Heroku!
https://api-episodes.herokuapp.com

## How to use!

### GET route
URL: https://api-episodes.herokuapp.com/episodes

<br/>

### GET episode by id route
URL: https://api-episodes.herokuapp.com/episodes/:id

<br/>

### POST route
URL: https://api-episodes.herokuapp.com/episodes

<br/>

Sample Body:

```JSON
{
    "id": "investimentos-e-inteligencia-artificial",      
    "title": "Hipsters Ponto Tech #251 - Investimentos e inteligência artificial",
    "members": "Paulo Silveira, Bernardo Aflalo, Roberto Indec, Thiago Santos, Roberta Arcoverde",
    "published_at": "2021-05-04",
    "thumbnail": "https://hipsters.tech/wp-content/uploads/2021/05/Hipsters-Ponto-Tech-251-900x900-1.png",
    "description": "<p>Papo sobre dois assuntos da moda: a mistura de inteligência artificial e investimentos financeiros. Como essas duas coisas se misturam e podem mudar a maneira que pensamos sobre investimentos.</p>",
    "fileurl": "https://content.blubrry.com/hipsterstech/hipsters_251_investimentos.mp3",
    "fileduration": 2809 
}
````
###### fileduration need to be in seconds

<br/>

### PUT route
URL: https://api-episodes.herokuapp.com/update/episodes/:id

<br/>

Sample Body:

```JSON
{     
    "title": "Hipsters Ponto Tech #251 - Investimentos e inteligência artificial",
    "members": "Paulo Silveira, Bernardo Aflalo, Roberto Indec, Thiago Santos, Roberta Arcoverde",
    "published_at": "2021-05-04",
    "thumbnail": "https://hipsters.tech/wp-content/uploads/2021/05/Hipsters-Ponto-Tech-251-900x900-1.png",
    "description": "<p>Papo sobre dois assuntos da moda: a mistura de inteligência artificial e investimentos financeiros. Como essas duas coisas se misturam e podem mudar a maneira que pensamos sobre investimentos.</p>",
    "fileurl": "https://content.blubrry.com/hipsterstech/hipsters_251_investimentos.mp3",
    "fileduration": 2809 
}
````
###### fileduration need to be in seconds
###### all fields are optional

<br/>

### DELETE route

URL: https://api-episodes.herokuapp.com/delete/episodes/:id

return
```JSON
{
  "message": "episode deleted"
}
````
