<?php

if (!defined('ABSPATH')) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_field('post', 'atlas_headless', [
        'get_callback' => function ($post_arr) {
            $post_id = (int) $post_arr['id'];

            return [
                'featured_image' => atlas_headless_get_featured_image_data($post_id, 'large'),
                'category' => atlas_headless_get_primary_category_data($post_id),
                'author' => atlas_headless_get_author_data((int) get_post_field('post_author', $post_id)),
                'reading_time' => atlas_headless_reading_time(get_post_field('post_content', $post_id)),
                'video_url' => get_post_meta($post_id, 'atlas_video_url', true) ?: null,
                'is_featured' => (bool) get_post_meta($post_id, 'atlas_featured_post', true),
                'home_section' => get_post_meta($post_id, 'atlas_home_section', true) ?: null,
            ];
        },
        'schema' => null,
    ]);

    register_rest_field('page', 'atlas_headless', [
        'get_callback' => function ($page_arr) {
            $page_id = (int) $page_arr['id'];

            return [
                'intro' => get_post_meta($page_id, 'atlas_page_intro', true) ?: null,
                'featured_image' => atlas_headless_get_featured_image_data($page_id, 'large'),
            ];
        },
        'schema' => null,
    ]);

    register_rest_field('category', 'atlas_headless', [
        'get_callback' => function ($term_arr) {
            $term_id = (int) $term_arr['id'];
            return [
                'link' => get_term_link($term_id, 'category'),
            ];
        },
        'schema' => null,
    ]);
});
