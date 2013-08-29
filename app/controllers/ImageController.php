<?php

class ImageController extends BaseController
{
	public function upload()
	{
		if (Input::hasFile('file'))
		{
			
			$file = Input::file('file');
			$size = $file->getSize();
			$destinationPath ='public/certimg/';
			$fileExt = $file->getClientOriginalExtension();
			$filename = time().'_.'.$fileExt;
			$result =$file->move($destinationPath, $filename);
			$path = $file->getPathname();
			$name = Input::file('file')->getClientOriginalName();
			$fileinfo = array(
				'imagepath' => 'certimg/'. $filename,
				'imagedescription' => '0',
				'userid'=>'1'
				);
			if(DB::table('Images')->insert($fileinfo))
			{
				return Response::json(['message'=>'success','size'=>$size, 'name'=>$name, 'path'=>$path],200);
			}
			else
			{
				//fail
				return Response::json(['message'=>'success','size'=>$size, 'name'=>$name, 'path'=>$path],200);
			}
		}
		else
		{
			return Response::json(['message'=>'No file was Attached'],200);	
		}
		
	}
	public function getImages()
	{	//change where clause
		$image = DB::table('Images')->select('imagepath')->where('userid', '1')->get();
		return Response::json($image);
	}
}

?>