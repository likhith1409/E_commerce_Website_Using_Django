# myapp/urls.py
from django.urls import path
from .views import home, about, contact, admin_click, signup, signin, signout
from django.contrib import admin
from myapp import views
from django.contrib.auth.views import LoginView,LogoutView

urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('contact/', contact, name='contact'),
    path('adminclick/', admin_click, name='adminclick'),
    path('signup/', signup, name='signup'),
    path('signin/', signin, name='signin'),
    path('signout/', signout, name='signout'),

    path('admin/', admin.site.urls),

    
]
