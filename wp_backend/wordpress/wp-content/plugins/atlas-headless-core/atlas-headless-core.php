<?php
/**
 * Plugin Name: Atlas Headless Core
 * Description: Recursos headless para o Atlas Journal: REST API, campos meta e endpoint de home.
 * Version: 0.1.0
 * Author: Atlas Journal
 */

if (!defined('ABSPATH')) {
    exit;
}

define('ATLAS_HEADLESS_CORE_VERSION', '0.1.0');
define('ATLAS_HEADLESS_CORE_PATH', plugin_dir_path(__FILE__));

require_once ATLAS_HEADLESS_CORE_PATH . 'includes/helpers.php';
require_once ATLAS_HEADLESS_CORE_PATH . 'includes/meta.php';
require_once ATLAS_HEADLESS_CORE_PATH . 'includes/rest-fields.php';
require_once ATLAS_HEADLESS_CORE_PATH . 'includes/cors.php';
require_once ATLAS_HEADLESS_CORE_PATH . 'includes/routes.php';

register_activation_hook(__FILE__, function () {
    atlas_headless_register_meta_fields();
    flush_rewrite_rules();
});

register_deactivation_hook(__FILE__, function () {
    flush_rewrite_rules();
});
