# Generated by Django 5.0.2 on 2024-03-05 21:43

import core.book.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_book', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='cover',
            field=models.ImageField(blank=True, null=True, upload_to=core.book.models.cover_directory_path),
        ),
    ]
