<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('users');
	}

}

class users extends Seeder{

	public function run()
	{
		DB::table('users')->delete();
		User::create(array(
			'username' => 'max',
			'password' => Hash::make('my_pass')
			));
	}
}