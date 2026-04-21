<?php

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', 'atlas_headless_register_meta_fields');

function atlas_headless_register_meta_fields() {
    $post_meta_fields = [
        'atlas_featured_post' => [
            'type' => 'boolean',
            'single' => true,
            'default' => false,
        ],
        'atlas_video_url' => [
            'type' => 'string',
            'single' => true,
            'default' => '',
        ],
        'atlas_home_section' => [
            'type' => 'string',
            'single' => true,
            'default' => '',
        ],
        'atlas_columnist_highlight' => [
            'type' => 'boolean',
            'single' => true,
            'default' => false,
        ],
    ];

    foreach ($post_meta_fields as $key => $args) {
        register_post_meta('post', $key, [
            'type' => $args['type'],
            'single' => $args['single'],
            'default' => $args['default'],
            'show_in_rest' => true,
            'sanitize_callback' => $args['type'] === 'boolean' ? 'rest_sanitize_boolean' : 'sanitize_text_field',
            'auth_callback' => function () {
                return current_user_can('edit_posts');
            },
        ]);
    }

    register_post_meta('page', 'atlas_page_intro', [
        'type' => 'string',
        'single' => true,
        'default' => '',
        'show_in_rest' => true,
        'sanitize_callback' => 'sanitize_text_field',
        'auth_callback' => function () {
            return current_user_can('edit_pages');
        },
    ]);
}
