<?php echo Form::open(array('hi')); ?>
<?php echo Form::label('username', 'Username'); ?>
<?php echo Form::text('username'); ?>
<?php echo Form::submit('login'); ?>
<?php echo Form::close(); ?>