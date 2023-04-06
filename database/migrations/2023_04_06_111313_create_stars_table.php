<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stars', function (Blueprint $table) {
            $table->increments('id');
            $table->string('firstname');
            $table->string('lastname');
            $table->text('description');
            $table->string('src')->nullable();
            $table->string('alt')->nullable();
            $table->timestamps();
        });
        /* 
        first migrate :
        Erreur rencontrée : SQLSTATE[42000]: Syntax error or access violation: 1071 La clé est trop longue. Longueur maximale: 1000 (SQL: alter table `users` add unique `users_email_unique`(`email`))
        Solve :
        https://www.patrickjunod.dev/blog/corriger-lerreur-syntax-error-or-access-violation-1071-la-cle-est-trop-longue-longueur-maximale-1000
        --> app\Providers\AppServiceProvider.php
        then, before migrating again :
        since first fail, table "user" already exists.
        either remove or add  if (!Schema::hasTable('users')) --> 2nd option better
        php artisan migrate:reset
        */
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stars');
    }
};
