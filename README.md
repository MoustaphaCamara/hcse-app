<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>
<p align="center"><a href="https://vuejs.org/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" width="400"></a></p>


# HCSE Test

Consignes : 

À l’aide du framework PHP Laravel 9, créer :
- Un backoffice permettant de créer/modifier/supprimer les fiches « star » (nom, prénom, image, description)
- Une page publique permettant d’afficher de manière responsive sur mobile et desktop le contenu des fiches.

Indications :
- L’utilisation de VueJS 3 et de TailwindCSS est un plus
- N’hésitez pas à commenter votre code et créer des commits sur git au fur et à mesure de votre progression

## Get started

### Install the project

To get started, clone the repository :

```
git clone https://github.com/MoustaphaCamara/hcse-app.git
```

Move to the created folder (`cd hcse-app`) then run the following commands to install necessary packages :

```
npm install
```
and
```
composer install

```

Now open with VS Code with the command `code .` and start by creating a ".env" file.

Copy the content of .env.example file inside this new file, and open a new terminal.
Run the command :
```
php artisan key:generate
```
### Create a database

For this project, I used WAMP. You can apply the next steps with any environment you're used to.

With WAMP :

Open phpMyAdmin, then create a new database.
(for this project, you can import this one if you want to : [stars app]().
Please note that the name  should be the same one as the variable in .env file named "DB_DATABASE". Same goes for your DB_USERNAME and DB_PASSWORD. Encode in utf8mb4.

Now run the command migrate to send the project's tables to the database :
```
php artisan migrate
```
Note : if you hadn't created "stars_app" database beforehand, you will get a Warn 'The database 'stars_app' does not exist on the "mysql" connection. Would you like to create it? (yes/no)' by default on 'no'. Select 'yes'.


## Run the project

You can now launch the server. Open two terminals in the VS Code project (or split the terminal in two), to run the two commands :

```
php artisan serve
```
```
npm run watch
```
I added a method to have hot reload while developing with Webpack mix. So the port will therefore be the one on the "npm run watch" terminal. It should open automatically after a few seconds.

If you've created a new database, it will naturally be empty therefore please click on the admin panel to add a new User.
The homepage will then display any data that the server has got to send.

Ajoutez, supprimez, éditez... enjoy !