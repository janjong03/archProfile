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
	public function getuser()
	{
		if (Auth::check())
		{
			return Response::json(array('Email'=>'johnmigia@gmail.com'));
		}
		else
		{
			return Response::json(array('flash'=>'error'));
		}

	}
	public function logout()
	{
		Auth::logout();
		return Response::json(array('flash'=>'Logged out!'));
	}
}

