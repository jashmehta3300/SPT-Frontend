# Generated by Django 2.2.10 on 2020-04-12 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('salespersonTrackerREST', '0009_auto_20200318_0033'),
    ]

    operations = [
        migrations.AddField(
            model_name='salesperson',
            name='isLoggedin',
            field=models.BooleanField(default=False),
        ),
    ]