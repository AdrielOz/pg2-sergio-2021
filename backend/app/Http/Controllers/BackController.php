<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\page;
use Illuminate\Http\Response;

class BackController extends Controller
{
    public function showPages(){
        $pages = 
            page::select('name','icon','to')
                ->where('status_id',  1)
                ->get();
        
        return response()->json(['data' => $pages], Response::HTTP_OK);
    }
}
