<?php get_header(); ?>
<div class="atlas-admin-note">
    <h1><?php the_archive_title(); ?></h1>
    <?php if (have_posts()) : ?>
        <ul>
            <?php while (have_posts()) : the_post(); ?>
                <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
            <?php endwhile; ?>
        </ul>
    <?php else : ?>
        <p>Nenhum conteúdo encontrado.</p>
    <?php endif; ?>
</div>
<?php get_footer(); ?>
