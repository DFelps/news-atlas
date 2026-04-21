<?php get_header(); ?>
<div class="atlas-admin-note">
    <h1><?php bloginfo('name'); ?></h1>
    <p>Este WordPress está configurado para uso headless com Next.js.</p>
    <p>Use a REST API para consumir o conteúdo no frontend.</p>
    <p>Endpoint customizado da home: <code><?php echo esc_html(site_url('/wp-json/atlas/v1/home')); ?></code></p>
</div>
<?php get_footer(); ?>
