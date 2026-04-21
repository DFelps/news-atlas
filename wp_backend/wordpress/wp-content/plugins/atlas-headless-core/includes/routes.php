<?php

if (!defined('ABSPATH')) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route('atlas/v1', '/home', [
        'methods' => WP_REST_Server::READABLE,
        'permission_callback' => '__return_true',
        'callback' => 'atlas_headless_home_endpoint',
    ]);
});

function atlas_headless_query_posts($args = []) {
    $defaults = [
        'post_type' => 'post',
        'post_status' => 'publish',
        'ignore_sticky_posts' => true,
    ];

    $query = new WP_Query(array_merge($defaults, $args));
    $items = [];

    if ($query->have_posts()) {
        foreach ($query->posts as $post) {
            $items[] = atlas_headless_transform_post($post);
        }
    }

    return $items;
}

function atlas_headless_home_endpoint() {
    $featured = atlas_headless_query_posts([
        'meta_key' => 'atlas_featured_post',
        'meta_value' => '1',
        'posts_per_page' => 1,
    ]);

    if (empty($featured)) {
        $featured = atlas_headless_query_posts([
            'posts_per_page' => 1,
        ]);
    }

    $latest = atlas_headless_query_posts([
        'posts_per_page' => 6,
    ]);

    $videos = atlas_headless_query_posts([
        'posts_per_page' => 4,
        'meta_query' => [
            [
                'key' => 'atlas_video_url',
                'value' => '',
                'compare' => '!=',
            ],
        ],
    ]);

    $health_term = get_term_by('slug', 'saude', 'category');
    $fun_term = $health_term ?: get_term_by('slug', 'saude-e-bem-estar', 'category');

    $fun_posts = [];
    if ($fun_term && !is_wp_error($fun_term)) {
        $fun_posts = atlas_headless_query_posts([
            'posts_per_page' => 4,
            'cat' => (int) $fun_term->term_id,
        ]);
    }

    $columnists = atlas_headless_query_posts([
        'posts_per_page' => 4,
        'meta_key' => 'atlas_columnist_highlight',
        'meta_value' => '1',
    ]);

    $brazil_term = get_term_by('slug', 'brasil', 'category');
    $brazil_posts = [];
    if ($brazil_term && !is_wp_error($brazil_term)) {
        $brazil_posts = atlas_headless_query_posts([
            'posts_per_page' => 4,
            'cat' => (int) $brazil_term->term_id,
        ]);
    }

    return rest_ensure_response([
        'site' => [
            'name' => get_bloginfo('name'),
            'description' => get_bloginfo('description'),
            'url' => get_bloginfo('url'),
        ],
        'sections' => [
            'featured' => $featured ? $featured[0] : null,
            'latest' => $latest,
            'videos' => $videos,
            'fun_category' => [
                'slug' => $fun_term ? $fun_term->slug : 'saude',
                'name' => $fun_term ? $fun_term->name : 'Saúde',
                'posts' => $fun_posts,
            ],
            'columnists' => $columnists,
            'brazil' => [
                'slug' => $brazil_term ? $brazil_term->slug : 'brasil',
                'name' => $brazil_term ? $brazil_term->name : 'Brasil',
                'posts' => $brazil_posts,
            ],
        ],
    ]);
}
