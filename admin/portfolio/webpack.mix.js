const mix = require('laravel-mix');


mix.react('resources/js/Main.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .copy('resources/css/style.css', 'public/css')
    .copy('resources/css/sideBar.css', 'public/css')
    .copy('resources/css/responsive.css', 'public/css')
    .copyDirectory('resources/images', 'public/');
