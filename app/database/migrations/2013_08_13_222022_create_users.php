<?php

use Illuminate\Database\Migrations\Migration;

class CreateUsers extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function($table)
		{
			$table->increments('id');
			$table->string('accountID');
			$table->string('username')->unique();
			$table->string('password',64);
			$table->string('name');
			$table->timestamps();
		});	

	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Scheme::drop('users');
	}

}