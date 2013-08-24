<?php

class RegisterController extends BaseController {

	public function store()
	{
		$result = DB::select('select * from users');
		$accountnumber = sizeof($result) + 3;
		$password = Input::get('pw1');
		$hashedpassword = Hash::make($password);
		$credentials = array(
			'firstname'=> Input::get('firstname'),
			'lastname'=> Input::get('lastname'),
			'accountid'=>	$accountnumber,
			'email' => Input::get('email'),
			'password' => $hashedpassword);

		if( DB::table('users')->insert($credentials))
		{
			return Response::json(array('flash'=>'Success'),200);
		}
		else
		{
			return Response::json(array('flash'=>'error'),500);
		}
	}
}
