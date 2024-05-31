# krs4us
krs4us adalah website pertukaran paralel/kelas sebagai tugas akhir mata kuliah Analisis dan Desain Sistem Ilmu Komputer IPB University Semester 6. Kelompok kami terdiri dari Muhammad Zahran sebagai Back-End Developer, Raisya Shinta Siregar sebagai project manager dan system analyst, Muhammad Khalil Adha sebagai UI/UX Designer, dan Lailatul Shakdiyah sebagai Front-End Developer.

## Instalasi
Pastikan sudah install composer dan mysql. Buatlah user baru dan database baru pada mysql.
```bash
cp .env.example .env
```
Pada file `.env`, ubah nilai `APP_URL` dengan ip atau domain yang akan digunakan. Kemudian, ubah nilai `DB_DATABASE` dengan nama database yang baru dibuat, ubah nilai `DB_USERNAME` dengan nama user yang baru dibuat, dan ubah nilai `DB_PASSWORD` dengan password user tersebut.
```bash
composer install
composer update
php artisan storage:link
php artisan key:generate
php artisan migrate:fresh --seed
npm i
```

## Notes to self
### Kalo make Ubuntu
```bash
sudo apt install php-curl
sudo apt install php-mysql
sudo apt install php-xml
sudo apt install php-gd
sudo apt install php-zip
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash
sudo apt install nodejs
```
### Kalo make Apache2
Andaikan webroot ada di `/var/www/html`, maka isi `/var/www/html/.htaccess` adalah:
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^(.*)$ public/$1 [L]
</IfModule>
```
Kalo perlu, install ini abistu aktifin modul rewrite nya:
```bash
sudo apt install libapache2-mod-php
sudo a2enmod rewrite
```
Abistu di `/etc/apache2/apache2.conf` tambahin:
```apache
<Directory /var/www/html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
</Directory>
```
Jangan lupa ubah permission:
```bash
sudo chown -R user:www-data /var/www/html
```
