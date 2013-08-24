<?php

class AuthController extends BaseController
{
	public function login()
	{
		if(Auth::attempt(array('email' => Input::json('email'), 'password' => Input::json('password')))){
			return Response::json(Auth::user());
		}else
		{
			return Response::json(array('flash'=>'Invalid email or password please try again'),500);
		}
	}
	

}

