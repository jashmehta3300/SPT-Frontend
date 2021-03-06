# Generated by Django 2.2.10 on 2020-03-17 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("salespersonTrackerREST", "0006_auto_20200317_2305"),
    ]

    operations = [
        migrations.AlterField(
            model_name="manager",
            name="Photo",
            field=models.ImageField(default="Icon.jpeg", upload_to="managers"),
        ),
        migrations.AlterField(
            model_name="salesperson",
            name="Photo",
            field=models.ImageField(default="Icon.jpeg", upload_to="media/salesperson"),
        ),
    ]
