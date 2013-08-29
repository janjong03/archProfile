<?php

use Illuminate\Database\Migrations\Migration;

class CreateImage extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		if(!Schema::hasTable('Images'))
		{
			Schema::create('Images', function($table){
				$table->increments('id');
				$table->string('imagepath');
				$table->string('imagedescription');
				$table->string('userid');
				$table->foreign('userid')->references('id')->on('users');
				$table->timestamps();
			});
		}
		else
		{
			Schema::table('Images', function($table){
			
				$table->string('userid');
				$table->foreign('userid')->references('id')->on('users');
			//	$table->timestamps();
			});
		}

	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
		Schema::drop('Images');	
	}

}