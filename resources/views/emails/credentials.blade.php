<x-mail::message>
Berikut adalah kredensial akun yang dapat kamu gunakan pada website KRS 4 US:<br><br>

Nama: {{ $credentials['name'] }}<br>
NIM: {{ $credentials['nim'] }}<br>
Password: {{ $credentials['password'] }}<br>
 
<x-mail::button :url="config('app.url')">
Login here
</x-mail::button>
 
Thanks,<br>
{{ config('app.name') }}
</x-mail::message>