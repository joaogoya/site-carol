<?php
function carol_goya_enqueue_scripts() {
    // 1. Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap', array(), null);

    // 2. Font Awesome
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

    // 3. Bootstrap CSS
    wp_enqueue_style('bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');

    // 4. O seu Style.css principal (raiz do tema)
    wp_enqueue_style('main-style', get_stylesheet_uri(), array('bootstrap-css'), '1.0');

    // 5. Lucide Icons (JS)
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, true);

    // 6. Bootstrap Bundle JS
    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', array(), null, true);

    // 7. Seu Script customizado (Preloader, etc)
    // Se você tiver um assets/js/main.js, use:
    // wp_enqueue_script('custom-js', get_template_directory_uri() . '/assets/js/main.js', array('lucide-icons'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'carol_goya_enqueue_scripts');