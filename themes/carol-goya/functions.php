<?php


/*******************************************************/
/************************ ASSETS ***********************/
/*******************************************************/

function carol_goya_enqueue_scripts()
{
    

    wp_enqueue_style('pipe_main_css',  get_stylesheet_directory_uri() . '/assets/dist/style.min.css');

    wp_enqueue_script('pipe_main_js', get_stylesheet_directory_uri() . '/assets/dist/scripts.min.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'carol_goya_enqueue_scripts');


