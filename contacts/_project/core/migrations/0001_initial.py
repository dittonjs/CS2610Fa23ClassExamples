# Generated by Django 4.2.5 on 2023-09-18 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.TextField()),
                ('email', models.TextField()),
                ('phone', models.TextField()),
            ],
        ),
    ]
