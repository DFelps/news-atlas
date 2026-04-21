<?php
/**
 * Plugin Name: Atlas Loader
 * Description: Carrega integrações obrigatórias do Atlas Journal.
 */

if (!defined('ABSPATH')) {
    exit;
}

$plugin = WP_PLUGIN_DIR . '/atlas-headless-core/atlas-headless-core.php';

if (file_exists($plugin)) {
    require_once $plugin;
}
