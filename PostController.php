<?php

namespace app\controllers;
use app\core\Controller;


class PostController extends Controller
{
    public function returnPosts()
    {
        $template = $this->twig->load('models/Post.php');
        return $this->posts;

    }
//todo make a method to return some posts, post objects should come from the post model class
//also need to make a twig template to show the post
//an example is in app/controllers/UsersController

}
