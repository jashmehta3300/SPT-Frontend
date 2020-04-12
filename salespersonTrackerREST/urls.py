from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
    path("SignIn", views.SignIn, name="SignIn"),
    # path('VerifyChangePassword/<slug:timestamp/<slug:username>/',views.VerifyChangePassword,name='VerifyChangePassowrd'),
    path("ChangePassword", views.ChangePassword, name="ChangePassword"),
    path("Logout", views.Logout, name="Logout"),
    path("AddSalesperson", views.AddSalesperson.as_view(), name="AddSalesPerson"),
    path("GetCoordinates", views.GetCoordinates.as_view(), name="GetCoordinates"),
    # path("accept", views.accept, name="accept"),
]
