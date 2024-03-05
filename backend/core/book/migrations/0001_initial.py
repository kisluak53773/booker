# Generated by Django 5.0.2 on 2024-03-05 15:45

import django.db.models.deletion
import pathlib
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core_publisher', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=100)),
                ('cover', models.ImageField(blank=True, null=True, upload_to=pathlib.PureWindowsPath('C:/Users/Denis/Desktop/book_app/backend/media'))),
                ('description', models.TextField(max_length=1000)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Books', to=settings.AUTH_USER_MODEL)),
                ('publisher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Books', to='core_publisher.publisher')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
