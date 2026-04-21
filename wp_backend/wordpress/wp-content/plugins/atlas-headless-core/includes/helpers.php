<?php

if (!defined('ABSPATH')) {
    exit;
}

function atlas_headless_allowed_origins() {
    $origins = apply_filters('atlas_headless_allowed_origins', [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
    ]);

    return array_values(array_unique(array_filter($origins)));
}

function atlas_headless_get_featured_image_data($post_id, $size = 'large') {
    if (!has_post_thumbnail($post_id)) {
        return null;
    }

    $thumb_id = get_post_thumbnail_id($post_id);
    $src = wp_get_attachment_image_src($thumb_id, $size);

    if (!$src) {
        return null;
    }

    return [
        'id' => $thumb_id,
        'url' => $src[0],
        'width' => (int) $src[1],
        'height' => (int) $src[2],
        'alt' => get_post_meta($thumb_id, '_wp_attachment_image_alt', true),
    ];
}

function atlas_headless_get_primary_category_data($post_id) {
    $terms = get_the_terms($post_id, 'category');

    if (empty($terms) || is_wp_error($terms)) {
        return null;
    }

    $term = array_values($terms)[0];

    return [
        'id' => (int) $term->term_id,
        'name' => $term->name,
        'slug' => $term->slug,
        'link' => get_term_link($term),
    ];
}

function atlas_headless_reading_time($content) {
    $plain = wp_strip_all_tags((string) $content);
    $words = str_word_count($plain);
    $minutes = max(1, (int) ceil($words / 200));

    return $minutes;
}

function atlas_headless_get_author_data($author_id) {
    if (!$author_id) {
        return null;
    }

    return [
        'id' => (int) $author_id,
        'name' => get_the_author_meta('display_name', $author_id),
        'slug' => get_the_author_meta('user_nicename', $author_id),
        'avatar' => get_avatar_url($author_id, ['size' => 160]),
        'bio' => get_the_author_meta('description', $author_id),
    ];
}

function atlas_headless_transform_post($post) {
    $post_obj = get_post($post);

    if (!$post_obj) {
        return null;
    }

    $post_id = $post_obj->ID;
    $video_url = get_post_meta($post_id, 'atlas_video_url', true);
    $home_section = get_post_meta($post_id, 'atlas_home_section', true);

    return [
        'id' => $post_id,
        'slug' => $post_obj->post_name,
        'title' => html_entity_decode(get_the_title($post_id), ENT_QUOTES, 'UTF-8'),
        'excerpt' => has_excerpt($post_id)
            ? get_the_excerpt($post_id)
            : wp_trim_words(wp_strip_all_tags($post_obj->post_content), 28),
        'content' => apply_filters('the_content', $post_obj->post_content),
        'date' => get_the_date('c', $post_id),
        'modified' => get_the_modified_date('c', $post_id),
        'link' => get_permalink($post_id),
        'featured_image' => atlas_headless_get_featured_image_data($post_id, 'large'),
        'category' => atlas_headless_get_primary_category_data($post_id),
        'author' => atlas_headless_get_author_data((int) $post_obj->post_author),
        'reading_time' => atlas_headless_reading_time($post_obj->post_content),
        'is_featured' => (bool) get_post_meta($post_id, 'atlas_featured_post', true),
        'video_url' => $video_url ?: null,
        'home_section' => $home_section ?: null,
    ];
}
